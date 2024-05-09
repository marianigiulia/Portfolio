
document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
    } else {
        entry.target.classList.remove('slide-in');
    }
    });
}, {
    threshold: 0.5 
});

document.querySelectorAll('.contact-text h1').forEach((el) => {
    observer.observe(el);
});
});
                  