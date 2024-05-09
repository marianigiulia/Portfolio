document.querySelector('.arrow-icon').addEventListener('mouseenter', function() {
    document.getElementById('arrowImage').src = 'images/right-arrow.png'; 
});

document.querySelector('.arrow-icon').addEventListener('mouseleave', function() {
    document.getElementById('arrowImage').src = 'images/right-arrow2.png'; 
});