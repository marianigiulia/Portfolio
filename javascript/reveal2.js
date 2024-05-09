document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {}
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    const targets = document.querySelectorAll('.reveal2');
    targets.forEach(function(target) {
        observer.observe(target);
    });
    });