document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.img-zoom-container').forEach(function(container) {
        var image = container.querySelector('.immagineZoom2');
        var containerTop = container.getBoundingClientRect().top;
        var containerHeight = container.offsetHeight;
        var windowHeight = window.innerHeight;
        var maxScaleFactor = 1.3;
        var triggerPoint = containerTop - window.innerHeight * 0.9;

        document.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var scrollOffset = Math.min(scrollPosition - triggerPoint, containerHeight);
            var scaleFactor = scrollOffset / containerHeight * (maxScaleFactor - 1) + 1;
            image.style.transform = 'scale(' + scaleFactor + ')';
        });
    });
});



