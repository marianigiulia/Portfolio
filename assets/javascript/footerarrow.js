document.querySelector('.arrow-icon').addEventListener('mouseenter', function() {
    document.getElementById('arrowImage').src = 'assets/images/right-arrow.webp'; 
});

document.querySelector('.arrow-icon').addEventListener('mouseleave', function() {
    document.getElementById('arrowImage').src = 'assets/images/right-arrow2.webp'; 
});