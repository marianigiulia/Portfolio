document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUL = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUL.classList.toggle('open');
    });
});