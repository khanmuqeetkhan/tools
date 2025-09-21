
// Country and Capital data

// Game state
let currentMode = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isAnswered = false;

// Settings
let pauseDuration = 1000; // milliseconds
let soundEnabled = true;
let continent = 'all';

// Initialize settings
function initSettings() {
    document.getElementById('pauseDuration').addEventListener('input', function() {
        pauseDuration = this.value * 1000;
        document.getElementById('pauseValue').textContent = this.value + 's';
    });

    document.getElementById('soundEnabled').addEventListener('change', function() {
        soundEnabled = this.checked;
    });

    document.getElementById('continent').addEventListener('change', function() {
        continent = this.value;
    });
}

// Toggle settings drawer
function toggleSettings() {
    const drawer = document.querySelector('.settings-drawer');
    const overlay = document.querySelector('.settings-overlay');

    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Get data based on continent selection
function getData() {

    let data = [];
    if (continent === 'africa') {
        data = [...countryCapitalData.africa];
    } if (continent === 'asia') {
        data = [...countryCapitalData.asia];
    } if (continent === 'europe') {
        data = [...countryCapitalData.europe];
    } if (continent === 'north_america') {
        data = [...countryCapitalData.north_america];
    } else if (continent === 'south_america') {
        data = [...countryCapitalData.south_america];
    } else {
       data = [
       ...countryCapitalData.africa,
       ...countryCapitalData.asia,
       ...countryCapitalData.europe,
       ...countryCapitalData.north_america,
       ...countryCapitalData.south_america
       ]
    }
    return data;
}

// Start quiz mode
function startQuiz(mode) {
    currentMode = mode;
    score = 0;
    currentQuestionIndex = 0;
    isAnswered = false;

    const data = getData();
    currentQuestions = generateQuestions(data, 15);

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('quizSection').classList.add('active');
    document.getElementById('score').textContent = score;
    document.getElementById('chosenContinent').textContent = continent;

    showQuestion();
}

// Generate quiz questions
function generateQuestions(data, count) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');

    isAnswered = false;
    document.getElementById('nextBtn').style.display = 'none';

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    if (currentMode === 'country') {
        questionEl.textContent = `What is the capital of ${question.country}?`;
        const options = generateOptions(question.capital, 'capital');
        displayOptions(options, question.capital);
    } else {
        questionEl.textContent = `Which country has ${question.capital} as its capital?`;
        const options = generateOptions(question.country, 'country');
        displayOptions(options, question.country);
    }
}

// Generate multiple choice options
function generateOptions(correctAnswer, type) {
    const data = getData();
    const options = [correctAnswer];

    while (options.length < 4) {
        const randomItem = data[Math.floor(Math.random() * data.length)];
        const option = type === 'capital' ? randomItem.capital : randomItem.country;

        if (!options.includes(option)) {
            options.push(option);
        }
    }

    return options.sort(() => 0.5 - Math.random());
}

// Display options
function displayOptions(options, correctAnswer) {
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';

    options.forEach(option => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option;
        optionEl.addEventListener('click', () => selectOption(optionEl, option, correctAnswer));
        optionsEl.appendChild(optionEl);
    });
}

// Handle option selection
function selectOption(optionEl, selectedAnswer, correctAnswer) {
    if (isAnswered) return;

    isAnswered = true;
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option === optionEl && selectedAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        playSound('correct');
    } else {
        playSound('incorrect');
    }

    setTimeout(() => {
        document.getElementById('nextBtn').style.display = 'block';
    }, pauseDuration);
}

// Play sound effects
function playSound(type) {
    if (!soundEnabled) return;

    const frequency = type === 'correct' ? 800 : 400;
    const duration = 200;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Show results
function showResults() {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let message = '';

    if (percentage >= 90) message = '🎉 Excellent! You\'re a geography expert!';
    else if (percentage >= 70) message = '👏 Great job! You know your geography well!';
    else if (percentage >= 50) message = '👍 Good effort! Keep studying!';
    else message = '📚 Keep practicing! You\'ll get better!';

    document.getElementById('question').innerHTML = `
        <h2>Quiz Complete!</h2>
        <p style="font-size: 1.2em; margin: 20px 0;">You scored ${score} out of ${currentQuestions.length} (${percentage}%)</p>
        <p style="font-size: 1.1em; color: #4a5568;">${message}</p>
    `;
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
}

// Start learn mode
function startLearn(mode) {
    currentMode = mode;
    const data = getData();
    const learnData = data.slice(0, 15);

    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('learnSection').classList.add('active');

    const title = mode === 'country' ? 'Countries & Capitals' : 'Capitals & Countries';
    document.getElementById('learnTitle').textContent = title;

    const learnListEl = document.getElementById('learnList');
    learnListEl.innerHTML = '';

    learnData.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'learn-item';

        if (mode === 'country') {
            listItem.innerHTML = `
                <span class="country">${item.country}</span>
                <span class="capital">${item.capital}</span>
            `;
        } else {
            listItem.innerHTML = `
                <span class="country">${item.capital}</span>
                <span class="capital">${item.country}</span>
            `;
        }

        learnListEl.appendChild(listItem);
    });
}

// Go back to main menu
function goHome() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('learnSection').classList.remove('active');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initSettings();
});