// This file contains the main application logic.
// It assumes `data.js` is loaded before this file.

// --- GLOBAL STATE & DOM ELEMENTS ---
const currentQuiz = {
    tutorial: 'tutorial-1',
    incorrectAnswers: []
};
const incorrectAnswers = new Map(); // Using a Map to easily manage unique incorrect answers.
const userProgress = new Map(); // NEW: Map to track user progress for each tutorial

const sidebar = document.getElementById('sidebar');
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebarBackdrop = document.getElementById('sidebar-backdrop');
const navItemsContainer = document.querySelector('.sidebar-nav-container'); // Container for nav items
const sectionsContainer = document.querySelector('.main-container'); // Main container for sections
const headerTitle = document.getElementById('header-title'); // Reference to the header title
const currentTutorialTitle = document.getElementById('current-tutorial-title'); // NEW: Reference for the current tutorial title

// Get the fixed header and its height
const header = document.querySelector('header');
let headerHeight = 0; // Initialize height to 0


// --- LOCAL STORAGE FUNCTIONS ---

// Saves the current state (incorrect answers, current tutorial, user progress) to localStorage.
function saveQuizState() {
    localStorage.setItem('incorrectAnswers', JSON.stringify(Array.from(incorrectAnswers.entries())));
    localStorage.setItem('currentQuiz', JSON.stringify(currentQuiz));
    // NEW: Save user progress to localStorage
    localStorage.setItem('userProgress', JSON.stringify(Array.from(userProgress.entries())));
}

// Loads the state from localStorage when the page loads.
function loadQuizState() {
    const storedIncorrectAnswers = localStorage.getItem('incorrectAnswers');
    const storedCurrentQuiz = localStorage.getItem('currentQuiz');
    const storedUserProgress = localStorage.getItem('userProgress');

    if (storedIncorrectAnswers) {
        const parsedIncorrect = new Map(JSON.parse(storedIncorrectAnswers));
        for (const [key, value] of parsedIncorrect) {
            incorrectAnswers.set(key, value);
        }
    }

    if (storedCurrentQuiz) {
        const parsedCurrent = JSON.parse(storedCurrentQuiz);
        currentQuiz.tutorial = parsedCurrent.tutorial || 'tutorial-1'; // Fallback
        currentQuiz.incorrectAnswers = parsedCurrent.incorrectAnswers || [];
    }

    // NEW: Load user progress from localStorage
    if (storedUserProgress) {
        const parsedProgress = new Map(JSON.parse(storedUserProgress));
        for (const [key, value] of parsedProgress) {
            userProgress.set(key, value);
        }
    }
}

// --- UI & NAVIGATION ---

// Dynamically creates the Home page.
function renderHomePage() {
    currentTutorialTitle.textContent = '';
    headerTitle.textContent = quizData.courseTitle;
    sectionsContainer.innerHTML = `
        <div class="space-y-4">
            <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">دروس الدورة</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${Object.keys(quizData).filter(key => key !== 'courseTitle').map(tutorialId => {
        const tutorial = quizData[tutorialId];
        const progress = userProgress.get(tutorialId) || { correct: 0, total: tutorial.data.length, completed: false };
        const progressPercentage = (progress.correct / progress.total) * 100;
        const progressColor = progress.completed ? 'bg-green-500' : 'bg-blue-500';
        const progressText = progress.completed ? 'مكتملة' : `التقدم: ${progress.correct}/${progress.total}`;
        const progressTitle = progress.completed ? 'تهانينا!' : `التقدم: ${progress.correct} إجابة صحيحة من ${progress.total}`;

        return `
                        <div class="tutorial-card bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105" data-tutorial-id="${tutorialId}">
                            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">${tutorial.title}</h3>
                            <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
                                <div class="h-2.5 rounded-full ${progressColor}" style="width: ${progressPercentage}%"></div>
                            </div>
                            <span class="text-sm text-gray-600 dark:text-gray-300">${progressText}</span>
                            <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">ابدأ</button>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;

    // Add event listeners for tutorial cards
    document.querySelectorAll('.tutorial-card').forEach(card => {
        card.addEventListener('click', () => {
            const tutorialId = card.dataset.tutorialId;
            history.pushState({ page: 'tutorial', tutorialId: tutorialId }, '', `#${tutorialId}`);
            renderPage('tutorial', tutorialId);
        });
    });
}

// Handles page rendering based on the URL or internal state.
function renderPage(page, tutorialId = null) {
    // Hide all sections first
    document.querySelectorAll('.question-section').forEach(section => section.classList.add('hidden'));

    if (page === 'home') {
        renderHomePage();
    } else if (page === 'tutorial' && tutorialId) {
        // Set the current tutorial and render it
        currentQuiz.tutorial = tutorialId;
        const tutorialTitle = quizData[tutorialId]?.title || tutorialId.replace(/-/g, ' ').toUpperCase();
        currentTutorialTitle.textContent = tutorialTitle;
        // Check if progress for this tutorial exists, if not, create it
        if (!userProgress.has(tutorialId)) {
            userProgress.set(tutorialId, { correct: 0, total: quizData[tutorialId].data.length, completed: false });
            saveQuizState();
        }
        renderQuiz(tutorialId, false); // Render the quiz in standard mode
    }
}

// Dynamically creates navigation items and sections based on quizData.
function buildDynamicUI() {
    navItemsContainer.innerHTML = '';
    sectionsContainer.innerHTML = '';

    // Set the course title in the header
    headerTitle.textContent = quizData.courseTitle || 'منصة تعليمية';

    // Add Home button to sidebar
    const homeItem = document.createElement('div');
    homeItem.className = 'sidebar-item-container';
    homeItem.innerHTML = `<button class="sidebar-item home-button w-full text-right p-4">الرئيسية</button>`;
    homeItem.addEventListener('click', () => {
        history.pushState({ page: 'home' }, '', '#');
        renderPage('home');
        toggleSidebar();
    });
    navItemsContainer.appendChild(homeItem);

    const tutorialKeys = Object.keys(quizData).filter(key => key !== 'courseTitle');

    tutorialKeys.forEach(key => {
        // Create navigation item
        const navItem = document.createElement('div');
        navItem.className = 'sidebar-nav-item';
        navItem.dataset.section = key;
        navItem.textContent = quizData[key].title || key.replace(/-/g, ' ').toUpperCase(); // Use title from data or default
        navItemsContainer.appendChild(navItem);

        // Create section
        const section = document.createElement('section');
        section.id = `${key}-section`;
        section.className = 'question-section hidden';

        const quizContainer = document.createElement('div');
        quizContainer.id = `${key}-container`;
        section.appendChild(quizContainer);

        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'text-center';
        actionsContainer.innerHTML = `
            <button id="show-all-${key}" class="action-button mx-auto">تقييم الإجابات</button>
            <div id="${key}-score-display" class="score-display mt-4"></div>
            <div id="${key}-final-score-message" class="final-score-message hidden"></div>
            <button id="review-incorrect-button-${key}" class="action-button mt-4 hidden mx-auto">مراجعة الإجابات الخاطئة</button>
            <button id="retake-button-${key}" class="action-button mt-4 hidden mx-auto">إعادة الاختبار</button>
        `;
        section.appendChild(actionsContainer);
        sectionsContainer.appendChild(section);
    });

    // Re-attach event listeners to new elements
    attachEventListeners();
}

// Attach all necessary event listeners.
function attachEventListeners() {
    // Sidebar navigation
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const sectionKey = item.dataset.section;
            renderPage('tutorial', sectionKey);
            setActiveNavItem(sectionKey);
            toggleSidebar();
        });
    });
    
    // 'Show All' buttons
    document.querySelectorAll('[id^="show-all-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('show-all-', '');
            showAllAnswers(tutorialKey);
        });
    });

    // 'Review Incorrect' buttons
    document.querySelectorAll('[id^="review-incorrect-button-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('review-incorrect-button-', '');
            const incorrectQuestions = Array.from(incorrectAnswers.values()).filter(item => item.tutorialKey === tutorialKey);
            if (incorrectQuestions.length > 0) {
                renderQuiz(tutorialKey, true);
            }
        });
    });

    // 'Retake Quiz' button
    document.querySelectorAll('[id^="retake-button-"]').forEach(button => {
        button.addEventListener('click', () => {
            const tutorialKey = button.id.replace('retake-button-', '');
            // Clear all incorrect answers for this tutorial from local storage and the map
            const keysToRemove = Array.from(incorrectAnswers.keys()).filter(key => key.startsWith(tutorialKey));
            keysToRemove.forEach(key => incorrectAnswers.delete(key));
            saveQuizState();
            // Re-render the quiz from the beginning (not in review mode)
            renderQuiz(tutorialKey, false);
        });
    });

    // Add event listener for the new "Back to Home" button
    const backToHomeButton = document.getElementById('back-to-home-button');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            history.pushState({ page: 'home' }, '', '#');
            renderPage('home');
        });
    }
}


// --- QUIZ RENDERING & LOGIC ---

// Gets the correct container ID for a given tutorial key.
function getContainerId(tutorialKey) {
    return `${tutorialKey}-container`;
}

// Dynamically creates an HTML card for a single question.
function createQuestionCard(questionObj, questionIndex, tutorialKey, isReviewMode = false) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.questionIndex = questionIndex;
    card.dataset.tutorialKey = tutorialKey;

    const questionText = document.createElement('p');
    questionText.className = 'question-text';
    questionText.textContent = `${questionIndex + 1}. ${questionObj.q}`;
    card.appendChild(questionText);

    if (questionObj.type === 'mcq') {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        questionObj.options.forEach((optionText, optionIndex) => {
            const option = document.createElement('div');
            option.className = 'mcq-option';
            option.setAttribute('role', 'radio');
            option.setAttribute('aria-checked', 'false');
            option.setAttribute('tabindex', '0');
            option.dataset.optionIndex = optionIndex;
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `mcq-${tutorialKey}-${questionIndex}`;
            input.value = optionIndex;
            input.id = `mcq-${tutorialKey}-${questionIndex}-${optionIndex}`;
            
            const label = document.createElement('label');
            label.htmlFor = `mcq-${tutorialKey}-${questionIndex}-${optionIndex}`;
            label.textContent = optionText;

            option.appendChild(input);
            option.appendChild(label);
            optionsContainer.appendChild(option);

            if (isReviewMode) {
                const incorrectQuestion = Array.from(incorrectAnswers.values()).find(item =>
                    item.tutorialKey === tutorialKey && item.questionIndex === questionIndex
                );

                if (incorrectQuestion) {
                    if (incorrectQuestion.userAnswer !== null && parseInt(incorrectQuestion.userAnswer) === optionIndex) {
                        option.classList.add('selected-for-review', 'option-incorrect-highlight');
                    }
                    if (questionObj.correct === optionIndex) {
                        option.classList.add('option-correct-highlight');
                    }
                }
            }
        });
        card.appendChild(optionsContainer);
    }

    if (!isReviewMode) {
        const checkButton = document.createElement('button');
        checkButton.className = 'action-button check-button';
        checkButton.textContent = 'عرض الإجابة';
        card.appendChild(checkButton);
    }

    const feedback = document.createElement('div');
    feedback.className = 'answer-text';
    card.appendChild(feedback);

    return card;
}

// Clears the quiz container before rendering new questions.
function clearQuizContainer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // Guard against non-existent containers
    container.innerHTML = '';
    const tutorialKey = containerId.replace('-container', '');

    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    const scoreDisplay = document.getElementById(`${tutorialKey}-score-display`);
    const finalScoreMessage = document.getElementById(`${tutorialKey}-final-score-message`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);

    if (showAllButton) showAllButton.classList.remove('hidden');
    if (scoreDisplay) scoreDisplay.textContent = '';
    if (finalScoreMessage) {
        finalScoreMessage.textContent = '';
        finalScoreMessage.classList.add('hidden');
    }
    if (reviewButton) reviewButton.classList.add('hidden');
    if (retakeButton) retakeButton.classList.add('hidden');
}

// Main function to render a quiz based on the selected tutorial.
function renderQuiz(tutorialKey, isReviewMode = false) {
    const containerId = getContainerId(tutorialKey);
    showSection(`${tutorialKey}-section`);
    clearQuizContainer(containerId);

    const container = document.getElementById(containerId);
    if (!container) return; // Guard against non-existent containers

    const questions = isReviewMode ? Array.from(incorrectAnswers.values()).filter(item => item.tutorialKey === tutorialKey) : quizData[tutorialKey]?.data || [];

    if (questions.length === 0 && isReviewMode) {
        container.innerHTML = `<p class="text-center text-lg">لا توجد إجابات خاطئة لمراجعتها. عمل رائع!</p>`;
    } else {
        questions.forEach((questionData, index) => {
            const qIndex = isReviewMode ? questionData.questionIndex : index;
            const qObj = isReviewMode ? questionData.question : questionData;
            const tKey = isReviewMode ? questionData.tutorialKey : tutorialKey;

            const card = createQuestionCard(qObj, qIndex, tKey, isReviewMode);
            container.appendChild(card);

            if (isReviewMode) {
                showAnswer(card, qObj, true);
            }
        });
    }

    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);

    if (showAllButton) {
        showAllButton.classList.toggle('hidden', isReviewMode);
    }
    if (reviewButton) {
        reviewButton.classList.toggle('hidden', isReviewMode);
    }
    if (retakeButton) {
        retakeButton.classList.toggle('hidden', !isReviewMode);
    }

    container.querySelectorAll('.check-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            const tutorial = card.dataset.tutorialKey;
            const index = parseInt(card.dataset.questionIndex);
            const questionObj = quizData[tutorial].data[index];
            showAnswer(card, questionObj);
        });
    });

    container.querySelectorAll('.mcq-option').forEach(option => {
        option.addEventListener('click', () => {
            const radio = option.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                option.setAttribute('aria-checked', 'true');
                const otherOptions = option.closest('.options-container').querySelectorAll('.mcq-option');
                otherOptions.forEach(other => {
                    if (other !== option) {
                        other.setAttribute('aria-checked', 'false');
                    }
                });
            }
        });
    });
}

// Checks a single answer and provides immediate feedback.
function showAnswer(card, questionObj, isReviewMode = false) {
    const selectedOption = card.querySelector('input[type="radio"]:checked');
    const feedbackElement = card.querySelector('.answer-text');
    const options = card.querySelectorAll('.mcq-option');

    options.forEach(option => {
        option.classList.remove('option-correct-highlight', 'option-incorrect-highlight');
    });

    const correctOption = options[questionObj.correct];
    if (correctOption) {
        correctOption.classList.add('option-correct-highlight');
    }

    if (selectedOption) {
        const selectedAnswerIndex = parseInt(selectedOption.value);
        const isCorrect = selectedAnswerIndex === questionObj.correct;

        if (!isCorrect) {
            const selectedOptionElement = options[selectedAnswerIndex];
            if (selectedOptionElement) {
                selectedOptionElement.classList.add('option-incorrect-highlight');
            }
        }

        feedbackElement.style.display = 'block';
        if (isCorrect) {
            feedbackElement.innerHTML = `<span class="correct-answer-highlight">إجابة صحيحة!</span>`;
        } else {
            feedbackElement.innerHTML = `<span class="incorrect-answer-highlight">إجابة خاطئة. الإجابة الصحيحة هي: ${questionObj.options[questionObj.correct]}</span>`;
        }

    } else {
        feedbackElement.style.display = 'block';
        feedbackElement.innerHTML = `<span class="incorrect-answer-highlight">الإجابة الصحيحة هي: ${questionObj.options[questionObj.correct]}</span>`;
    }

    if (isReviewMode) {
        const incorrectQuestion = Array.from(incorrectAnswers.values()).find(item =>
            item.tutorialKey === card.dataset.tutorialKey && item.questionIndex === parseInt(card.dataset.questionIndex)
        );
        if (incorrectQuestion && incorrectQuestion.userAnswer !== null) {
            const selectedOptionElement = card.querySelector(`.mcq-option input[value="${incorrectQuestion.userAnswer}"]`)?.closest('.mcq-option');
            if (selectedOptionElement) {
                selectedOptionElement.classList.add('option-incorrect-highlight');
            }
        }
    }
}

// Checks all answers and calculates the score.
function checkAnswers(tutorialKey) {
    const container = document.getElementById(getContainerId(tutorialKey));
    const questions = quizData[tutorialKey].data;
    let score = 0;
    
    const keysToRemove = Array.from(incorrectAnswers.keys()).filter(key => key.startsWith(tutorialKey));
    keysToRemove.forEach(key => incorrectAnswers.delete(key));

    questions.forEach((questionObj, index) => {
        const card = container.querySelector(`.card[data-question-index="${index}"]`);
        const selectedOption = card.querySelector('input[type="radio"]:checked');

        const isCorrect = selectedOption && parseInt(selectedOption.value) === questionObj.correct;
        const incorrectKey = `${tutorialKey}-${index}`;

        if (isCorrect) {
            score++;
        } else {
            incorrectAnswers.set(incorrectKey, {
                tutorialKey: tutorialKey,
                questionIndex: index,
                question: questionObj,
                userAnswer: selectedOption ? selectedOption.value : null
            });
        }
    });

    // NEW: Update user progress
    const progress = userProgress.get(tutorialKey);
    progress.correct = score;
    progress.completed = score === questions.length;
    userProgress.set(tutorialKey, progress);
    saveQuizState();

    const scoreDisplay = document.getElementById(`${tutorialKey}-score-display`);
    scoreDisplay.textContent = `أنت حصلت على ${score} من ${questions.length}.`;
    
    const finalScoreMessage = document.getElementById(`${tutorialKey}-final-score-message`);
    const reviewButton = document.getElementById(`review-incorrect-button-${tutorialKey}`);
    const retakeButton = document.getElementById(`retake-button-${tutorialKey}`);
    
    if (score === questions.length) {
        finalScoreMessage.textContent = 'عمل رائع! جميع الإجابات صحيحة!';
        finalScoreMessage.classList.remove('hidden');
        reviewButton.classList.add('hidden');
        alert('تهانينا، لقد أكملت هذا الدرس!'); // NEW: Completion alert
    } else {
        finalScoreMessage.textContent = `لديك ${questions.length - score} إجابات خاطئة.`;
        finalScoreMessage.classList.remove('hidden');
        reviewButton.classList.remove('hidden');
    }
    
    if (retakeButton) {
        retakeButton.classList.add('hidden');
    }
}

// Displays correct answers for all questions on the page.
function showAllAnswers(tutorialKey) {
    checkAnswers(tutorialKey);
    const container = document.getElementById(getContainerId(tutorialKey));
    const questionCards = container.querySelectorAll('.card');
    
    questionCards.forEach(card => {
        const index = parseInt(card.dataset.questionIndex);
        const questionObj = quizData[tutorialKey].data[index];
        showAnswer(card, questionObj);
    });

    const showAllButton = document.getElementById(`show-all-${tutorialKey}`);
    if (showAllButton) {
        showAllButton.style.display = 'none';
    }
}


// Highlights the active navigation item in the sidebar.
function setActiveNavItem(sectionKey) {
    document.querySelectorAll('.sidebar-nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionKey);
    });
}

// Shows the relevant section and hides others.
function showSection(sectionId) {
    document.querySelectorAll('.question-section').forEach(section => section.classList.add('hidden'));
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggles the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebarBackdrop.classList.toggle('active');
}


// --- INITIALIZATION ---

window.addEventListener('load', () => {
    loadQuizState();
    buildDynamicUI(); // Build UI first based on data.js

    // Handle initial page load and back/forward navigation
    const initialHash = window.location.hash.slice(1);
    const firstTutorialKey = Object.keys(quizData).filter(key => key !== 'courseTitle')[0];

    if (initialHash && quizData[initialHash]) {
        renderPage('tutorial', initialHash);
        setActiveNavItem(initialHash);
    } else {
        renderPage('home');
    }

    window.onpopstate = function(event) {
        const state = event.state;
        if (state && state.page === 'tutorial') {
            renderPage('tutorial', state.tutorialId);
        } else {
            renderPage('home');
        }
    };
    
    hamburgerMenu.addEventListener('click', toggleSidebar);
    sidebarBackdrop.addEventListener('click', toggleSidebar);

    // Re-enabling the scroll-to-top button functionality
    const scrollToTopButton = document.getElementById('scroll-to-top-button');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'flex';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Re-enabling the dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', darkModeToggle.checked);
            localStorage.setItem('darkMode', darkModeToggle.checked);
        });
    
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        darkModeToggle.checked = isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }

    const fontSizeIncreaseBtn = document.getElementById('font-size-increase');
    const fontSizeDecreaseBtn = document.getElementById('font-size-decrease');
    const htmlElement = document.documentElement;
    fontSizeIncreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        htmlElement.style.fontSize = (currentSize + 1) + 'px';
    });
    fontSizeDecreaseBtn.addEventListener('click', () => {
        let currentSize = parseFloat(getComputedStyle(htmlElement).fontSize);
        if (currentSize > 8) {
            htmlElement.style.fontSize = (currentSize - 1) + 'px';
        }
    });
});
