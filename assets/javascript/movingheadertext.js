document.addEventListener('scroll', function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const scrollPosition = window.scrollY;
        const leftElements = document.querySelectorAll('.move-left');

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

        leftElements.forEach(element => {
            element.style.transform = `translateX(${leftTranslate}%)`;
        });
    }
});


   