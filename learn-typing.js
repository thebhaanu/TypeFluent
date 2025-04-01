// DOM Elements
const lessonListItems = document.querySelectorAll('.lesson-list li');
const lessonContents = document.querySelectorAll('.lesson-content .lesson');
const nextButtons = document.querySelectorAll('.lesson-nav-btn.next');
const prevButtons = document.querySelectorAll('.lesson-nav-btn.prev');
const progressBar = document.getElementById('lesson-progress');
const progressPercent = document.getElementById('progress-percent');
const aboutLink = document.getElementById('about-link');

// Track completed lessons
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
const totalLessons = lessonListItems.length;

// Initialize the page
function init() {
    // Set up lesson navigation
    lessonListItems.forEach(item => {
        item.addEventListener('click', () => {
            navigateToLesson(item.getAttribute('data-lesson'));
        });
    });

    // Set up next/prev buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigateToLesson(button.getAttribute('data-next'));
            markLessonAsCompleted(button.closest('.lesson').id);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigateToLesson(button.getAttribute('data-prev'));
        });
    });

    // Mark completed lessons
    updateCompletedLessons();
    
    // Update progress bar
    updateProgress();
    
    // Check URL parameters for direct navigation
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    if (lessonParam) {
        navigateToLesson(lessonParam);
    }
}

// Navigate to a specific lesson
function navigateToLesson(lessonId) {
    // Hide all lessons
    lessonContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show the selected lesson
    const targetLesson = document.getElementById(lessonId);
    if (targetLesson) {
        targetLesson.classList.add('active');
    }
    
    // Update active state in sidebar
    lessonListItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-lesson') === lessonId) {
            item.classList.add('active');
        }
    });
    
    // Scroll to top of lesson content
    document.querySelector('.lesson-content').scrollTop = 0;
}

// Mark a lesson as completed
function markLessonAsCompleted(lessonId) {
    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        updateCompletedLessons();
        updateProgress();
    }
}

// Update completed lessons in the UI
function updateCompletedLessons() {
    lessonListItems.forEach(item => {
        const lessonId = item.getAttribute('data-lesson');
        if (completedLessons.includes(lessonId)) {
            item.classList.add('completed');
        }
    });
}

// Update progress bar
function updateProgress() {
    const progressPercentage = Math.min(100, Math.round((completedLessons.length / totalLessons) * 100));
    progressBar.style.width = `${progressPercentage}%`;
    progressPercent.textContent = `${progressPercentage}%`;
}

// Create images directory if the user clicks on an image that doesn't exist yet
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lesson-image')) {
        if (e.target.naturalWidth === 0) {
            alert('Note: Image files need to be created in the "images" folder. The tutorial structure is ready but placeholder images are used.');
        }
    }
});

// About link functionality
aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('TypeFluent is a web application designed to help you improve your typing speed and accuracy. This learning guide provides step-by-step instructions for beginners.');
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 