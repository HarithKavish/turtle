document.addEventListener('DOMContentLoaded', function() {
    // Section navigation buttons
    const exploreBtn = document.querySelector('.explore-btn');
    const factsBtn = document.querySelector('.facts-btn');

    const sections = {
        introduction: document.getElementById('introduction'),
        facts: document.getElementById('facts'),
        habitats: document.getElementById('habitats'),
        conservation: document.getElementById('conservation')
    };

    const sectionNames = Object.keys(sections);

    function showSection(sectionId) {
        sectionNames.forEach(id => {
            const sectionElement = sections[id];
            const button = document.querySelector(`.${id}-btn`);

            sectionElement.classList.toggle('active', id === sectionId);
            button.classList.toggle('active', id === sectionId);
        });
    }

    exploreBtn.addEventListener('click', () => showSection('introduction'));
    factsBtn.addEventListener('click', () => showSection('facts'));

    // Tab functionality for habitats
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section, .fact-card');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Initialize animations
    document.querySelectorAll('.section, .fact-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});