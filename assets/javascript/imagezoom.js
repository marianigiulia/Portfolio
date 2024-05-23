document.addEventListener("DOMContentLoaded", function() {
    var imgs = document.querySelectorAll('.immagineZoom');
    var lastScrollY = window.scrollY;
    var ticking = false;

    function updateScale() {
        imgs.forEach(function(img) {
            var scale = 1 + lastScrollY / 5000;
            if (scale > 2) scale = 2;
            img.style.transform = 'scale(' + scale + ')';
        });
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(updateScale);
                ticking = true;
            };
    });
});
