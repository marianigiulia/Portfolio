document.addEventListener('DOMContentLoaded', function() {
    var textElement = document.getElementById('scrolling-text');
    var windowWidth = window.innerWidth;

    textElement.style.transform = 'translateX(' + (windowWidth / 2 - textElement.scrollWidth / 2) + 'px)';

    document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        var newPosition = windowWidth / 2 - scrollPosition - textElement.scrollWidth / 2;
        textElement.style.transform = 'translateX(' + newPosition + 'px)';
    });
    });