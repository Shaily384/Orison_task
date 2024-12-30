document.getElementById('email-link').addEventListener('click', function() {
    window.location.href = 'mailto:shailyrinait03@gmail.com';
});

document.getElementById('contact-link').addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('contact').offsetTop,
        behavior: 'smooth'
    });
});