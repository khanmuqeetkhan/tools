// Application state
let currentIndex = 0;
let isPlaying = true;
let interval = 5000;
let autoPlayTimer = null;
let isRandomMode = false;
let animationDuration = 0.8;

// DOM elements
const elements = {
    quoteText: document.getElementById('quoteText'),
    quoteAuthor: document.getElementById('quoteAuthor'),
    quoteDetails: document.getElementById('quoteDetails'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    settingsToggle: document.getElementById('settingsToggle'),
    settingsDrawer: document.getElementById('settingsDrawer'),
    intervalRange: document.getElementById('intervalRange'),
    intervalDisplay: document.getElementById('intervalDisplay'),
    animationSpeed: document.getElementById('animationSpeed'),
    randomOrder: document.getElementById('randomOrder'),
    themeSelect: document.getElementById('themeSelect'),
    currentQuote: document.getElementById('currentQuote'),
    totalQuotes: document.getElementById('totalQuotes'),
    progressBar: document.getElementById('progressBar')
};

// Theme configurations
const themes = {
    default: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        accent: '#667eea'
    },
    sunset: {
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        accent: '#ff6b6b'
    },
    forest: {
        background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
        accent: '#27ae60'
    },
    royal: {
        background: 'linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)',
        accent: '#8360c3'
    }
};

// Initialize the application
function init() {
    elements.totalQuotes.textContent = quotesData.length;
    displayQuote();
    setupEventListeners();
    startAutoPlay();
    loadSettings();
}

// Display current quote with animation
function displayQuote() {
    const quote = quotesData[currentIndex];

    // Hide elements first
    hideElements();

    setTimeout(() => {
        // Update content
        elements.quoteText.textContent = quote.text;
        elements.quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '';

        // Build details
        const details = [];
        if (quote.date) details.push(quote.date);
        if (quote.category) details.push(quote.category);
        if (quote.profession) details.push(quote.profession);
        if (quote.source) details.push(quote.source);
        if (quote.album) details.push(quote.album);
        if (quote.era) details.push(quote.era);
        if (quote.context) details.push(quote.context);
        if (quote.nationality) details.push(quote.nationality);

        elements.quoteDetails.innerHTML = details.map(detail =>
            `<span class="detail-item">${detail}</span>`
        ).join('');

        // Show elements with animation
        showElements();

        // Update counter
        elements.currentQuote.textContent = currentIndex + 1;

    }, 200);
}

function hideElements() {
    elements.quoteText.classList.remove('show');
    elements.quoteAuthor.classList.remove('show');
    elements.quoteDetails.classList.remove('show');
}

function showElements() {
    setTimeout(() => elements.quoteText.classList.add('show'), 100);
    setTimeout(() => elements.quoteAuthor.classList.add('show'), 300);
    setTimeout(() => elements.quoteDetails.classList.add('show'), 500);
}

// Navigation functions
function nextQuote() {
    if (isRandomMode) {
        currentIndex = Math.floor(Math.random() * quotesData.length);
    } else {
        currentIndex = (currentIndex + 1) % quotesData.length;
    }
    displayQuote();
    resetProgressBar();
}

function prevQuote() {
    if (!isRandomMode) {
        currentIndex = (currentIndex - 1 + quotesData.length) % quotesData.length;
        displayQuote();
        resetProgressBar();
    }
}

// Auto-play functionality
function startAutoPlay() {
    if (isPlaying) {
        resetProgressBar();
        autoPlayTimer = setTimeout(() => {
            nextQuote();
            startAutoPlay();
        }, interval);
        animateProgressBar();
    }
}

function stopAutoPlay() {
    if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
        autoPlayTimer = null;
    }
    resetProgressBar();
}

function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        elements.playPauseBtn.innerHTML = '⏸ Pause';
        elements.playPauseBtn.classList.remove('playing');
        startAutoPlay();
    } else {
        elements.playPauseBtn.innerHTML = '▶ Play';
        elements.playPauseBtn.classList.add('playing');
        stopAutoPlay();
    }
}

// Progress bar animation
function animateProgressBar() {
    if (!isPlaying) return;

    elements.progressBar.style.width = '0%';
    elements.progressBar.style.transition = `width ${interval}ms linear`;

    setTimeout(() => {
        if (isPlaying) {
            elements.progressBar.style.width = '100%';
        }
    }, 50);
}

function resetProgressBar() {
    elements.progressBar.style.transition = 'none';
    elements.progressBar.style.width = '0%';
}

// Settings functionality
function toggleSettings() {
    elements.settingsDrawer.classList.toggle('open');
}

function updateInterval() {
    interval = parseInt(elements.intervalRange.value) * 1000;
    elements.intervalDisplay.textContent = `${elements.intervalRange.value} seconds`;

    if (isPlaying) {
        stopAutoPlay();
        startAutoPlay();
    }

    saveSettings();
}

function updateAnimationSpeed() {
    animationDuration = parseFloat(elements.animationSpeed.value);
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
    saveSettings();
}

function updateRandomOrder() {
    isRandomMode = elements.randomOrder.value === 'true';
    elements.prevBtn.style.opacity = isRandomMode ? '0.5' : '1';
    elements.prevBtn.style.cursor = isRandomMode ? 'not-allowed' : 'pointer';
    saveSettings();
}

function updateTheme() {
    const selectedTheme = themes[elements.themeSelect.value];
    document.body.style.background = selectedTheme.background;

    // Update CSS custom properties
    const root = document.documentElement;
    root.style.setProperty('--accent-color', selectedTheme.accent);

    saveSettings();
}

// Settings persistence
function saveSettings() {
    const settings = {
        interval: elements.intervalRange.value,
        animationSpeed: elements.animationSpeed.value,
        randomOrder: elements.randomOrder.value,
        theme: elements.themeSelect.value
    };
    // Note: In a real environment, you'd use localStorage here
    // For now, settings are only saved for the current session
}

function loadSettings() {
    // In a real environment, you'd load from localStorage here
    // For now, we'll use default values
}

// Event listeners setup
function setupEventListeners() {
    elements.playPauseBtn.addEventListener('click', togglePlayPause);
    elements.nextBtn.addEventListener('click', nextQuote);
    elements.prevBtn.addEventListener('click', prevQuote);
    elements.settingsToggle.addEventListener('click', toggleSettings);

    elements.intervalRange.addEventListener('input', updateInterval);
    elements.animationSpeed.addEventListener('change', updateAnimationSpeed);
    elements.randomOrder.addEventListener('change', updateRandomOrder);
    elements.themeSelect.addEventListener('change', updateTheme);

    // Close settings drawer when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.settingsDrawer.contains(e.target) &&
            !elements.settingsToggle.contains(e.target) &&
            elements.settingsDrawer.classList.contains('open')) {
            elements.settingsDrawer.classList.remove('open');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                prevQuote();
                break;
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                nextQuote();
                break;
            case 'Enter':
                togglePlayPause();
                break;
        }
    });
}

// Start the application
init();