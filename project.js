// Slider Functionality
const slider = document.querySelector('.reviews-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let scrollAmount = 0;
const scrollStep = 300; // Adjust based on card width

prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});