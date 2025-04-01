// DOM Elements
const textDisplayElement = document.getElementById('text-display');
const inputFieldElement = document.getElementById('input-field');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const restartButton = document.getElementById('restart-btn');
const difficultySelect = document.getElementById('difficulty');
const resultModal = document.getElementById('result-modal');
const resultWpmElement = document.getElementById('result-wpm');
const resultAccuracyElement = document.getElementById('result-accuracy');
const resultTimeElement = document.getElementById('result-time');
const closeModalButton = document.getElementById('close-modal-btn');
const aboutLink = document.getElementById('about-link');
const showKeyboardCheckbox = document.getElementById('show-keyboard');
const keyboardWrapper = document.getElementById('keyboard-wrapper');
const themeSwitch = document.getElementById('theme-switch');
const htmlElement = document.documentElement;
const flowModeCheckbox = document.getElementById('flow-mode');

// Sample texts for typing practice
const texts = {
    training: [
        // Home Row Training (Level 1)
        "asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl;",
        "fjf jfj fjf jfj fjf jfj fjf jfj fjf jfj fjf jfj fjf jfj fjf jfj fjf jfj",
        "dkd kdk dkd kdk dkd kdk dkd kdk dkd kdk dkd kdk dkd kdk dkd kdk dkd kdk",
        "sls lsl sls lsl sls lsl sls lsl sls lsl sls lsl sls lsl sls lsl sls lsl",
        "aaa ;;; aaa ;;; aaa ;;; aaa ;;; aaa ;;; aaa ;;; aaa ;;; aaa ;;; aaa ;;;",
        
        // Home Row Words (Level 2)
        "as dad fall flask half jak ladd salad ask fad jak lad sad all",
        "as ask dad fall half jak ladd sak lad salad fad jak lad sad all",
        "a fall sak ask jak lad fad salad ladd dad jak half sad all",
        "a fall ask dad jak fad half lad salad ladd sak sad all",
        "ask fad fall half jak lad salad dad sak ladd sad all",
        
        // Home Row + E and I (Level 3)
        "ed id fie die elf isle slide flied kill file side field life",
        "slide flied life kill file side field lie die elf isle fie id ed",
        "fie life file side field die elf isle slide flied kill id ed",
        "elf isle ed id fie die slide flied kill file side field life",
        "fie die life kill file side field elf isle slide flied id ed",
        
        // Home + E, I, R and U (Level 4)
        "fur rife rule sure surf idle user fire risk kris rise kirk",
        "rise kirk fur rife rule sure surf idle user fire risk kris",
        "rule sure surf idle user fire risk kris rise kirk fur rife",
        "surf idle user fire risk kris rise kirk fur rife rule sure",
        "fire risk kris rise kirk fur rife rule sure surf idle user",
        
        // Home + T and N (Level 5)
        "tan tin nest sent tend stint tennis tenant tin tan sent nest",
        "nest sent tend stint tennis tenant tin tan sent nest tan tin",
        "tend stint tennis tenant tin tan sent nest tan tin nest sent",
        "stint tennis tenant tin tan sent nest tan tin nest sent tend",
        "tennis tenant tin tan sent nest tan tin nest sent tend stint",
        
        // Upper Row Practice (Level 6)
        "qwerty uiop qwerty uiop qwerty uiop qwerty uiop qwerty uiop",
        "quit work port type quit work port type quit work port type",
        "yui qwe rty pop yui qwe rty pop yui qwe rty pop yui qwe rty pop",
        "quote quip power trip worry quote quip power trip worry",
        "you trip query pouty weary you trip query pouty weary",
        
        // Lower Row Practice (Level 7)
        "zxcv bnm zxcv bnm zxcv bnm zxcv bnm zxcv bnm zxcv bnm",
        "lazy mix zoom vex box navy lazy mix zoom vex box navy",
        "crazy excel numb zipper vizor buzz crazy excel numb zipper vizor buzz",
        "max van cab zinc mix bean max van cab zinc mix bean",
        "buzz max clean vinyl exact numb buzz max clean vinyl exact numb",
        
        // Numbers Row Practice (Level 8)
        "1234 5678 90 1234 5678 90 1234 5678 90 1234 5678 90",
        "12 34 56 78 90 12 34 56 78 90 12 34 56 78 90 12 34 56 78 90",
        "123 456 789 0 123 456 789 0 123 456 789 0 123 456 789 0",
        "315 497 628 810 315 497 628 810 315 497 628 810",
        "2022 1986 3579 4680 2022 1986 3579 4680 2022 1986 3579 4680",
        
        // Full Keyboard Integration (Level 9)
        "The quick brown fox jumps over the lazy dog.",
        "Pack my box with five dozen liquor jugs.",
        "How vexingly quick daft zebras jump!",
        "Amazingly few discotheques provide jukeboxes.",
        "Crazy Fredrick bought many very exquisite opal jewels."
    ],
    easy: [
        "The quick brown fox jumps over the lazy dog. Simple keyboarding is fun and easy to learn with practice.",
        "Learning to type is an essential skill in today's digital world. Practice makes perfect.",
        "Typing quickly and accurately can save you a lot of time and increase your productivity.",
        "Focus on accuracy first, then speed will come naturally as you practice more and more.",
        "Good posture is important when typing. Keep your back straight and your wrists elevated.",
        "Take regular breaks while typing to prevent strain on your hands and eyes.",
        "Start slowly and build up your speed gradually. Rome wasn't built in a day.",
        "Typing is like playing a musical instrument. It requires patience and consistent practice.",
        "Remember to position your fingers correctly on the home row keys: ASDF and JKL;",
        "Looking at the keyboard while typing slows you down. Try to develop touch typing skills.",
        "Regular practice sessions are better than long irregular ones. Consistency is key to improvement.",
        "Keep your fingers curved and relaxed while typing. Tension can lead to mistakes.",
        "Each finger has its own designated keys to press. Learn the proper finger placement.",
        "Typing is a valuable skill that will serve you well throughout your career and daily life.",
        "Set small, achievable goals for yourself. Celebrate your progress as you improve.",
        "The best way to learn typing is through regular practice and patience.",
        "Maintain a comfortable distance between yourself and the keyboard while typing.",
        "Focus on the text on the screen rather than looking down at your hands.",
        "Good typing skills can open up many opportunities in the modern workplace.",
        "Take your time and concentrate on accuracy. Speed will develop naturally with practice."
    ],
    medium: [
        "The five boxing wizards jump quickly. A quick movement of the enemy will jeopardize five gunboats.",
        "How razorback-jumping frogs can level six piqued gymnasts! Crazy Fredrick bought many very exquisite opal jewels.",
        "Amazingly few discotheques provide jukeboxes. Heavy boxes perform quick waltzes and jigs.",
        "We promptly judged antique ivory buckles for the next prize. Crazy Fredrick bought many very exquisite opal jewels.",
        "Sixty zippers were quickly picked from the woven jute bag. Big July earthquakes confound zany experimental vow.",
        "The quick onyx goblin jumps over the lazy dwarf. Fickle jinx bog dwarves spy math quiz.",
        "Public junk dwarves hug my quartz fox. The job requires extra pluck and zeal from every young wage earner.",
        "Two driven jocks help fax my big quiz. Five quacking zephyrs jolt my wax bed.",
        "The jay, pig, fox, zebra and my wolves quack! Blowzy red vixens fight for a quick jump.",
        "Waltz, nymph, for quick jigs vex Bud. Sphinx of black quartz, judge my vow!",
        "The explorer was quite surprised to find three quick brown foxes jumping over the lazy dog.",
        "Pack my box with five dozen liquor jugs. How quickly daft jumping zebras vex!",
        "When zombies arrive, quickly fax judge Pat. The quick brown fox jumps over the lazy dog.",
        "Exploring the zoo, we saw every kangaroo jump quite high in perfect form.",
        "My grandfather picks up quartz and valuable onyx jewels. Heavy boxes perform quick waltzes and jigs.",
        "Sixty quick brown foxes jump over the lazy dog while the judge ponders a verdict.",
        "Puzzled women bequeath jerks very exotic gifts. The quick brown fox jumps over a lazy dog.",
        "The job of waxing linoleum frequently peeves chintzy kids. Quick zephyrs blow, vexing daft Jim.",
        "Two driven jocks help fax my big quiz. Quick brown dogs jump over the lazy fox.",
        "Five or six big jet planes zoomed quickly by the tower. Exploring the zoo, we saw kangaroos jumping."
    ],
    hard: [
        "Sphinx of black quartz, judge my vow! Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!",
        "The job requires extra pluck and zeal from every young wage earner. Six big juicy steaks sizzled in a pan as five workmen left the quarry.",
        "Jaded zombies acted quaintly but kept driving their oxen forward. Watch 'Jeopardy!', Alex Trebek's fun TV quiz game.",
        "Jackdaws love my big sphinx of quartz. The five boxing wizards jump quickly. How vexingly quick daft zebras jump!",
        "Mr. Jock, TV quiz PhD, bags few lynx. Pack my red box with five dozen quality jugs. The quick brown fox jumps over the lazy sleeping dogs.",
        "Quiz the whimsical stocking fairy about jinxed poodles. Cozy sphinx waves quart jug of bad milk. Few quips galvanized the mock jury box.",
        "The explorer was frozen in his big kayak just after making queer discoveries. Six big devils from Japan quickly forgot how to waltz.",
        "Puzzled women bequeath jerks very exotic gifts. Quincy Pondexter blocked five jammed drives. Waxy and quivering, jocks fumble the pizza.",
        "Breaking waves quenched downtown jewelry shops for maximal profit. Jack quietly moved up front and seized the big ball of wax.",
        "Foxy diva Jennifer Lopez was quickly heisted by crazy thugs. Sixty zippers were quickly picked from the woven jute bag.",
        "Waltz, nymph, for quick jigs vex Bud! Pack my box with five dozen liquor jugs. How quickly daft jumping zebras vex!",
        "The five boxing wizards jump quickly to confound their exotic opponents. Jaded zombies acted quaintly but kept driving their oxen forward.",
        "Sympathizing would fix Quaker objectives. Amazingly few discotheques provide jukeboxes! Pack my box with five dozen liquor jugs.",
        "Few black taxis drive up major roads on quiet hazy nights. Crazy Fredericka bought many very exquisite opal jewels.",
        "We promptly judged antique ivory buckles for the next prize. Woven silk pyjamas exchanged for blue quartz. Brawny gods just flocked up to quiz and vex him.",
        "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!",
        "Jinxed wizards pluck ivy from the big quilt. Watch 'Jeopardy!', Alex Trebek's fun TV quiz game. The quick brown fox jumps over the lazy dog.",
        "Sphinx of black quartz, judge my vow! The jay, pig, fox, zebra and my wolves quack! How vexingly quick daft zebras jump!",
        "Quick zephyrs blow, vexing daft Jim. Two driven jocks help fax my big quiz. Five quacking zephyrs jolt my wax bed.",
        "The quick onyx goblin jumps over the lazy dwarf. Adjusting quiver and bow, Zompyc killed the fox. How quickly daft jumping zebras vex!"
    ]
};

// Game variables
let currentText = '';
let typedCharacters = 0;
let correctCharacters = 0;
let timer = 60;
let timerInterval = null;
let gameStarted = false;
let gameEnded = false;
let flowMode = false;
let currentTextIndex = 0;
let totalCorrectCharacters = 0;
let totalTypedCharacters = 0;
let startTime = null;
let trainingLevelNames = [
    "Home Row Basics",
    "Home Row Words",
    "Home Row + E and I",
    "Home Row + E, I, R and U",
    "Home Row + T and N",
    "Upper Row Practice",
    "Lower Row Practice",
    "Numbers Row Practice",
    "Full Keyboard Integration"
];

// Initialize the game
function init() {
    flowMode = flowModeCheckbox.checked;
    
    // In flow mode, start with first text instead of random
    if (flowMode) {
        initFlowMode();
    } else {
        selectRandomText();
    }
    
    displayText();
    resetStats();
    inputFieldElement.value = '';
    inputFieldElement.disabled = false;
    inputFieldElement.focus();
    gameStarted = false;
    gameEnded = false;
    
    // Update UI for flow mode
    if (flowMode) {
        document.querySelector('.stat:nth-child(3) .stat-label').textContent = "Paragraphs";
        timerElement.textContent = "0";
    } else {
        document.querySelector('.stat:nth-child(3) .stat-label').textContent = "Seconds";
        timerElement.textContent = "60";
    }
    
    // Show training level info if in training mode
    if (difficultySelect.value === 'training') {
        displayTrainingInfo();
    } else {
        // Remove any existing training info
        const existingInfo = document.querySelector('.training-level-info');
        if (existingInfo) {
            existingInfo.remove();
        }
        // Reset text display border radius
        textDisplayElement.style.borderRadius = '10px';
    }
}

// Display training level information
function displayTrainingInfo() {
    const levelIndex = Math.floor(currentTextIndex / 5);
    const levelName = trainingLevelNames[levelIndex] || "Advanced Practice";
    const levelNumber = levelIndex + 1;
    
    // Calculate progress within the current level
    const exerciseInLevel = currentTextIndex % 5 + 1;
    const progressText = `Exercise ${exerciseInLevel} of 5`;
    
    // Update the typing area to display level information
    const levelInfoElement = document.createElement('div');
    levelInfoElement.className = 'training-level-info';
    levelInfoElement.innerHTML = `<strong>Training Level ${levelNumber}:</strong> ${levelName} <span class="progress">(${progressText})</span>`;
    
    // Insert before the text display
    const typingArea = document.querySelector('.typing-area');
    
    // Remove any existing training info
    const existingInfo = document.querySelector('.training-level-info');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    typingArea.insertBefore(levelInfoElement, textDisplayElement);
    
    // Adjust the border radius of the text display
    textDisplayElement.style.borderRadius = '0 0 10px 10px';
}

// Initialize flow mode
function initFlowMode() {
    const difficulty = difficultySelect.value;
    
    if (difficulty === 'training' && currentTextIndex > 0) {
        // For training mode, preserve the current level if already in progress
        currentText = texts[difficulty][currentTextIndex];
    } else {
        // Otherwise start from the beginning
        currentTextIndex = 0;
        currentText = texts[difficulty][currentTextIndex];
    }
    
    totalCorrectCharacters = 0;
    totalTypedCharacters = 0;
    startTime = null;
}

// Move to next paragraph in flow mode
function nextParagraph() {
    // Save stats from current paragraph
    totalCorrectCharacters += correctCharacters;
    totalTypedCharacters += typedCharacters;
    
    // Move to next text
    const difficulty = difficultySelect.value;
    const previousTextIndex = currentTextIndex;
    currentTextIndex = (currentTextIndex + 1) % texts[difficulty].length;
    currentText = texts[difficulty][currentTextIndex];
    
    // Handle training mode transitions
    if (difficulty === 'training') {
        // Check if we've completed all training levels and cycled back to beginning
        if (previousTextIndex === texts[difficulty].length - 1 && currentTextIndex === 0) {
            setTimeout(() => {
                alert(`🎉 Congratulations! You've completed all training levels!\n\nYou've mastered the fundamentals of typing. Feel free to continue practicing or try Easy, Medium, or Hard difficulty.`);
            }, 100);
        }
        // Check if we've completed a level in training mode
        else if (Math.floor(previousTextIndex / 5) !== Math.floor(currentTextIndex / 5)) {
            // We've completed a level, show congratulation message
            const completedLevel = Math.floor(previousTextIndex / 5) + 1;
            const nextLevel = Math.floor(currentTextIndex / 5) + 1;
            
            setTimeout(() => {
                alert(`🎉 Congratulations! You've completed Training Level ${completedLevel}.\n\nMoving on to Level ${nextLevel}: ${trainingLevelNames[nextLevel-1]}`);
            }, 100);
        }
    }
    
    // Reset for new paragraph
    typedCharacters = 0;
    correctCharacters = 0;
    inputFieldElement.value = '';
    displayText();
    
    // Update statistics
    timerElement.textContent = currentTextIndex;
    
    // Calculate overall WPM if we have a start time
    if (startTime) {
        const minutesElapsed = (Date.now() - startTime) / 60000;
        if (minutesElapsed > 0) {
            const wpm = Math.round((totalCorrectCharacters / 5) / minutesElapsed);
            wpmElement.textContent = wpm;
        }
    }
    
    // Calculate overall accuracy
    if (totalTypedCharacters > 0) {
        const accuracy = Math.round((totalCorrectCharacters / totalTypedCharacters) * 100);
        accuracyElement.textContent = `${accuracy}%`;
    }
    
    // Update training level info if in training mode
    if (difficultySelect.value === 'training') {
        displayTrainingInfo();
    }
}

// Select a random text based on difficulty
function selectRandomText() {
    const difficulty = difficultySelect.value;
    const textArray = texts[difficulty];
    
    if (difficulty === 'training') {
        // For training mode, we have 2 scenarios:
        // 1. Starting fresh (currentTextIndex = 0)
        // 2. Continuing from a position
        
        if (currentTextIndex === 0) {
            // Start from the very beginning
            currentText = textArray[0];
        } else {
            // Keep the current position in training sequence
            // But ensure it's valid
            if (currentTextIndex >= textArray.length) {
                currentTextIndex = 0;
            }
            currentText = textArray[currentTextIndex];
        }
    } else {
        // For other difficulties, select random text
        const randomIndex = Math.floor(Math.random() * textArray.length);
        currentText = textArray[randomIndex];
    }
}

// Display the text to type
function displayText() {
    textDisplayElement.innerHTML = '';
    currentText.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        textDisplayElement.appendChild(charSpan);
    });
}

// Reset statistics
function resetStats() {
    timer = 60;
    typedCharacters = 0;
    correctCharacters = 0;
    
    if (flowMode) {
        timerElement.textContent = "0";
    } else {
        timerElement.textContent = timer;
    }
    
    wpmElement.textContent = '0';
    accuracyElement.textContent = '100%';
}

// Start the timer
function startTimer() {
    if (flowMode) {
        // In flow mode, we don't use the traditional timer
        // Instead, we just track start time for WPM calculation
        if (!startTime) {
            startTime = Date.now();
        }
        return;
    }
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        
        // Calculate WPM (assuming 5 characters per word)
        const timeElapsed = (60 - timer) / 60; // In minutes
        if (timeElapsed > 0) {
            const wpm = Math.round((correctCharacters / 5) / timeElapsed);
            wpmElement.textContent = wpm;
        }
        
        if (timer <= 0) {
            endGame();
        }
    }, 1000);
}

// End the game
function endGame() {
    clearInterval(timerInterval);
    inputFieldElement.disabled = true;
    gameEnded = true;
    
    // Display results
    const finalWpm = wpmElement.textContent;
    const finalAccuracy = accuracyElement.textContent;
    
    resultWpmElement.textContent = finalWpm;
    resultAccuracyElement.textContent = finalAccuracy;
    
    if (flowMode) {
        // In flow mode, show how many paragraphs were completed
        resultTimeElement.textContent = currentTextIndex;
        document.querySelector('.result-stats .result-stat:nth-child(3) .result-label').textContent = 'Paragraphs';
    } else {
        resultTimeElement.textContent = '60';
        document.querySelector('.result-stats .result-stat:nth-child(3) .result-label').textContent = 'Seconds';
    }
    
    resultModal.classList.add('active');
}

// Update character styling based on typing
function updateText() {
    const inputText = inputFieldElement.value;
    const textSpans = textDisplayElement.querySelectorAll('span');
    
    let correctCount = 0;
    let wrongCount = 0;
    
    // Reset all spans
    textSpans.forEach(span => {
        span.classList.remove('correct', 'incorrect', 'current');
    });
    
    // Apply appropriate classes based on typed text
    for (let i = 0; i < inputText.length; i++) {
        if (i >= textSpans.length) break;
        
        if (inputText[i] === textSpans[i].innerText) {
            textSpans[i].classList.add('correct');
            correctCount++;
        } else {
            textSpans[i].classList.add('incorrect');
            wrongCount++;
        }
    }
    
    // Highlight current character
    if (inputText.length < textSpans.length) {
        textSpans[inputText.length].classList.add('current');
    }
    
    // Update statistics
    typedCharacters = inputText.length;
    correctCharacters = correctCount;
    
    // Calculate accuracy
    if (typedCharacters > 0) {
        const accuracy = Math.round((correctCount / typedCharacters) * 100);
        accuracyElement.textContent = `${accuracy}%`;
    }
    
    // Check if text is complete
    if (inputText.length === currentText.length) {
        if (flowMode) {
            nextParagraph();
        } else {
            endGame();
        }
    }
}

// Event Listeners
inputFieldElement.addEventListener('input', () => {
    if (!gameStarted && !gameEnded) {
        gameStarted = true;
        startTimer();
    }
    
    updateText();
});

restartButton.addEventListener('click', init);

difficultySelect.addEventListener('change', init);

flowModeCheckbox.addEventListener('change', init);

closeModalButton.addEventListener('click', () => {
    resultModal.classList.remove('active');
    init();
});

// Toggle keyboard visibility
showKeyboardCheckbox.addEventListener('change', () => {
    if (showKeyboardCheckbox.checked) {
        keyboardWrapper.classList.remove('hidden');
    } else {
        keyboardWrapper.classList.add('hidden');
    }
    
    // Save preference to localStorage
    localStorage.setItem('showKeyboard', showKeyboardCheckbox.checked);
});

// Load keyboard visibility preference from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const showKeyboard = localStorage.getItem('showKeyboard');
    if (showKeyboard !== null) {
        const shouldShow = showKeyboard === 'true';
        showKeyboardCheckbox.checked = shouldShow;
        if (!shouldShow) {
            keyboardWrapper.classList.add('hidden');
        }
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeSwitch.checked = false;
    }

    // Initialize the game
    init();
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('TypeFluent is a web application designed to help you improve your typing speed and accuracy. Practice regularly to see improvements!');
});

// Prevent spacebar from scrolling the page
document.addEventListener('keydown', (e) => {
    // Only prevent default behavior if space is pressed outside the input field
    if (e.code === 'Space' && 
        e.target !== inputFieldElement && 
        e.target.tagName !== 'INPUT' && 
        e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    init();
    
    // Check if there's a practice parameter in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const practiceParam = urlParams.get('practice');
    const levelParam = urlParams.get('level');
    
    if (practiceParam) {
        handlePracticeSession(practiceParam, levelParam);
    }
});

// Handle practice sessions from the learning page
function handlePracticeSession(practiceType, levelParam = null) {
    // Set the appropriate difficulty level
    difficultySelect.value = 'training';
    
    // Enable flow mode
    flowModeCheckbox.checked = true;
    flowMode = true;
    
    // Navigate to the appropriate section based on practice type
    let startIndex = 0;
    
    // If a specific level was provided, calculate the index
    if (levelParam) {
        const level = parseInt(levelParam);
        if (!isNaN(level) && level >= 1 && level <= 9) {
            // Each level has 5 exercises, so start at the beginning of specified level
            startIndex = (level - 1) * 5;
        }
    } else {
        // Use defaults based on practice type if no level specified
        switch (practiceType) {
            case 'home-row':
                startIndex = 0; // First 5 exercises are home row basics
                break;
            case 'top-row':
                startIndex = 25; // Start with top row exercises (level 6)
                break;
            case 'bottom-row':
                startIndex = 30; // Start with bottom row exercises (level 7)
                break;
            case 'numbers-symbols':
                startIndex = 35; // Start with number row exercises (level 8)
                break;
        }
    }
    
    // Update the current text index and initialize the game with this index
    currentTextIndex = startIndex;
    
    // We need to initialize with the specific index rather than using selectRandomText
    const difficulty = 'training';
    currentText = texts[difficulty][currentTextIndex];
    
    // Initialize the rest of the game state
    displayText();
    resetStats();
    inputFieldElement.value = '';
    inputFieldElement.disabled = false;
    inputFieldElement.focus();
    gameStarted = false;
    gameEnded = false;
    
    // Update UI for flow mode
    document.querySelector('.stat:nth-child(3) .stat-label').textContent = "Paragraphs";
    timerElement.textContent = "0";
    
    // Display training level info
    displayTrainingInfo();
    
    // Auto-focus the input field
    inputFieldElement.focus();
}

// Theme toggle functionality
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}); 