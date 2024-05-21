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

    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    var debouncedUpdateScale = debounce(updateScale, 100);

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                debouncedUpdateScale();
                ticking = false;
            });
            ticking = true;
        }
    });
});

