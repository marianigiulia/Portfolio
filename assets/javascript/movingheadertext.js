document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const leftElements = document.querySelector('.move-left');
    const rightElements = document.querySelector('.move-right');

    const leftTranslate = -scrollPosition / 50;
    let rightTranslate = scrollPosition / 50;

    const maxWidth = window.innerWidth;
    let maxRightScrollWidth;

    if (maxWidth <= 768) { 
        maxRightScrollWidth = maxWidth / 2; 
    } else {
        maxRightScrollWidth = maxWidth / 1.5; 
    }

    if (scrollPosition > maxRightScrollWidth) {
        rightTranslate = 0; 
    }

    leftElements.style.transform = `translateX(${leftTranslate}%)`;
    rightElements.style.transform = `translateX(${rightTranslate}%)`;
});


   