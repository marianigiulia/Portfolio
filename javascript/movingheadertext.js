document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const leftElements = document.querySelector('.move-left');
    const rightElements = document.querySelector('.move-right');

    const leftTranslate = -scrollPosition / 50;
    let rightTranslate = scrollPosition / 50;

    const maxWidth = window.innerWidth;
    let maxRightScrollWidth;

    // Imposta un valore diverso per maxRightScrollWidth in base alla larghezza dello schermo
    if (maxWidth <= 768) { // Esempio: consideriamo dispositivi con larghezza massima di 768px come dispositivi mobili
        maxRightScrollWidth = maxWidth / 2; // Ad esempio, riduci la larghezza massima relativa per dispositivi mobili
    } else {
        maxRightScrollWidth = maxWidth / 2.5; // Imposta la larghezza massima relativa per desktop
    }

    if (scrollPosition > maxRightScrollWidth) {
        rightTranslate = 0; 
    }

    leftElements.style.transform = `translateX(${leftTranslate}%)`;
    rightElements.style.transform = `translateX(${rightTranslate}%)`;
});


   