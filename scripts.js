document.addEventListener("DOMContentLoaded", function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    });

    // Animation for services
    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
        service.style.opacity = 0;
        service.style.transition = `opacity 1s ease ${index * 0.5}s`;
        setTimeout(() => {
            service.style.opacity = 1;
        }, 100);
    });

    // Changing text animation
    const changingText = document.querySelector('.changing-text');
    const texts = ['web platforms', 'apps', 'websites'];
    let index = 0;

    function showNext() {
        changingText.style.opacity = 0; // Start fade-out
        setTimeout(() => {
            changingText.textContent = texts[index];
            changingText.style.opacity = 1; // Fade-in
            index = (index + 1) % texts.length;
        }, 1000); // Wait for fade-out to complete
    }

    showNext();
    setInterval(showNext, 4000); // Change text every 4 seconds (2 seconds fade-out, 2 seconds fade-in)

    // Hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
