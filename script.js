let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.carousel-prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}