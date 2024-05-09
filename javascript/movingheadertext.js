document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const leftElements = document.querySelector('.move-left');
    const rightElements = document.querySelector('.move-right');

    const leftTranslate = -scrollPosition / 50;
    const rightTranslate = scrollPosition / 50;

    leftElements.style.transform = `translateX(${leftTranslate}%)`;
    rightElements.style.transform = `translateX(${rightTranslate}%)`;
    });