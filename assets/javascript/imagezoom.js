var imgs = document.querySelectorAll('.immagineZoom');
                    
    window.onscroll = function() {
    imgs.forEach(function(img) {
        var scale = 1 + window.pageYOffset / 5000;
        if (scale > 2) scale = 2; 
        img.style.transform = 'scale(' + scale + ')';
    });
};




