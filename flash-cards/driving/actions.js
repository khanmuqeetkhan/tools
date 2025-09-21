// App state
    let currentMode = 'learning';
    let currentQuestionIndex = 0;
    let currentCardSet = 'advanced';
    let flashCards = flashCardSets[currentCardSet];
    let score = 0;
    let isAutoPlaying = false;
    let autoPlayInterval = null;
    let autoPlaySpeed = 5000;

    // DOM elements
    const learningModeBtn = document.getElementById('learning-mode-btn');
    const flashcardModeBtn = document.getElementById('flashcard-mode-btn');
    const learningContent = document.getElementById('learning-content');
    const flashcardContent = document.getElementById('flashcard-content');
    const cardInner = document.getElementById('card-inner');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDrawer = document.getElementById('settings-drawer');
    const closeSettingsBtn = document.getElementById('close-settings');
    const autoSpeedSlider = document.getElementById('auto-speed');
    const speedValue = document.getElementById('speed-value');
    const cardSetSelector = document.getElementById('card-set-selector');
    const themeSelector = document.getElementById('theme-selector');
    const categoryBadge = document.getElementById('category-badge');

    // Initialize app
    function init() {
        updateDisplay();
        updateNavigation();
        updateStats();

        // Event listeners
        learningModeBtn.addEventListener('click', () => switchMode('learning'));
        flashcardModeBtn.addEventListener('click', () => switchMode('flashcard'));

        flashcardContent.addEventListener('click', flipCard);
        prevBtn.addEventListener('click', previousQuestion);
        nextBtn.addEventListener('click', nextQuestion);
        playPauseBtn.addEventListener('click', toggleAutoPlay);
        resetBtn.addEventListener('click', resetProgress);

        settingsBtn.addEventListener('click', openSettings);
        closeSettingsBtn.addEventListener('click', closeSettings);

        autoSpeedSlider.addEventListener('input', updateAutoSpeed);
        cardSetSelector.addEventListener('change', changeCardSet);
        themeSelector.addEventListener('change', changeTheme);

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyPress);
    }

    function switchMode(mode) {
        currentMode = mode;

        if (mode === 'learning') {
            learningModeBtn.classList.add('active');
            flashcardModeBtn.classList.remove('active');
            learningContent.style.display = 'block';
            flashcardContent.style.display = 'none';
        } else {
            flashcardModeBtn.classList.add('active');
            learningModeBtn.classList.remove('active');
            learningContent.style.display = 'none';
            flashcardContent.style.display = 'block';
            cardInner.classList.remove('flipped');
        }

        updateDisplay();
    }

    function updateDisplay() {
        const currentCard = flashCards[currentQuestionIndex];
        const categoryNames = {
            'traffic-rules': 'Traffic Rules',
            'vehicle-technical': 'Vehicle Tech',
            'road-conditions': 'Road Conditions',
            'legal-admin': 'Legal & Admin',
            'advanced': 'Advanced'
        };

        if (currentMode === 'learning') {
            document.getElementById('learning-question').textContent = currentCard.term;
            document.getElementById('learning-answer').textContent = currentCard.definition;
        } else {
            document.getElementById('flashcard-question').textContent = currentCard.term;
            document.getElementById('flashcard-answer').textContent = currentCard.definition;
            categoryBadge.textContent = categoryNames[currentCardSet];
        }

        document.getElementById('progress').textContent = `${currentQuestionIndex + 1} / ${flashCards.length}`;
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = flashCards.length;
    }

    function updateNavigation() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === flashCards.length - 1;
    }

    function updateStats() {
        document.getElementById('score').textContent = score;
    }

    function flipCard() {
        if (currentMode === 'flashcard') {
            cardInner.classList.toggle('flipped');

            // Add score when flipping to answer
            if (cardInner.classList.contains('flipped')) {
                score++;
                updateStats();

                // Add bounce effect
                document.querySelector('.score-display').classList.add('bounce');
                setTimeout(() => {
                    document.querySelector('.score-display').classList.remove('bounce');
                }, 1000);
            }
        }
    }

    function previousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            updateDisplay();
            updateNavigation();
            cardInner.classList.remove('flipped');
        }
    }

    function nextQuestion() {
        if (currentQuestionIndex < flashCards.length - 1) {
            currentQuestionIndex++;
            updateDisplay();
            updateNavigation();
            cardInner.classList.remove('flipped');
        }
    }

    function toggleAutoPlay() {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    }

    function startAutoPlay() {
        isAutoPlaying = true;
        playPauseBtn.textContent = '⏸ Pause';
        playPauseBtn.classList.remove('paused');

        autoPlayInterval = setInterval(() => {
            if (currentQuestionIndex < flashCards.length - 1) {
                nextQuestion();
            } else {
                currentQuestionIndex = 0;
                updateDisplay();
                updateNavigation();
                cardInner.classList.remove('flipped');
            }
        }, autoPlaySpeed);
    }

    function stopAutoPlay() {
        isAutoPlaying = false;
        playPauseBtn.textContent = '▶ Auto Play';
        playPauseBtn.classList.add('paused');

        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function resetProgress() {
        currentQuestionIndex = 0;
        score = 0;
        updateDisplay();
        updateNavigation();
        updateStats();
        cardInner.classList.remove('flipped');
        stopAutoPlay();
    }

    function openSettings() {
        settingsDrawer.classList.add('open');
    }

    function closeSettings() {
        settingsDrawer.classList.remove('open');
    }

    function updateAutoSpeed() {
        autoPlaySpeed = autoSpeedSlider.value * 1000;
        speedValue.textContent = autoSpeedSlider.value;

        if (isAutoPlaying) {
            stopAutoPlay();
            startAutoPlay();
        }
    }

    function changeCardSet() {
        currentCardSet = cardSetSelector.value;
        flashCards = flashCardSets[currentCardSet];
        currentQuestionIndex = 0;
        score = 0;
        updateDisplay();
        updateNavigation();
        updateStats();
        cardInner.classList.remove('flipped');
        stopAutoPlay();
    }

    function changeTheme() {
        const theme = themeSelector.value;
        const body = document.body;

        // Update background gradient based on theme
        switch(theme) {
            case 'blue':
                body.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
                break;
            case 'green':
                body.style.background = 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)';
                break;
            case 'red':
                body.style.background = 'linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)';
                break;
            case 'purple':
                body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                break;
        }
    }

    function handleKeyPress(event) {
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                previousQuestion();
                break;
            case 'ArrowRight':
                event.preventDefault();
                nextQuestion();
                break;
            case ' ':
                event.preventDefault();
                if (currentMode === 'flashcard') {
                    flipCard();
                }
                break;
            case 'Enter':
                event.preventDefault();
                if (currentMode === 'flashcard') {
                    flipCard();
                }
                break;
            case '1':
                switchMode('learning');
                break;
            case '2':
                switchMode('flashcard');
                break;
            case 'r':
                resetProgress();
                break;
            case 'p':
                toggleAutoPlay();
                break;
        }
    }

    // Click outside settings drawer to close
    document.addEventListener('click', (event) => {
        if (!settingsDrawer.contains(event.target) &&
            !settingsBtn.contains(event.target) &&
            settingsDrawer.classList.contains('open')) {
            closeSettings();
        }
    });

    // Initialize the app when page loads
    document.addEventListener('DOMContentLoaded', init);