document.addEventListener('DOMContentLoaded', function() {
    const leftElements = document.querySelector('.move-left');

    document.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        const leftTranslate = -scrollPosition / 50;

        leftElements.style.transform = `translateX(${leftTranslate}%)`;
    });
});