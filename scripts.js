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

    // Project card tilt and glare effect
    const projectBoxes = document.querySelectorAll('.project-box');

    projectBoxes.forEach((box) => {
        let timeout;
        const glare = box.querySelector('.glare');
        let hasHovered = false; // Track if the box has been hovered

        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            const percentX = deltaX / centerX;
            const percentY = deltaY / centerY;

            const rotateX = percentY * 20; // Adjusted value for more tilt
            const rotateY = percentX * -20; // Adjusted value for more tilt

            clearTimeout(timeout);
            box.style.transition = 'transform 0.1s ease-out'; // Smooth transition
            box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            
        });

        box.addEventListener('mouseleave', () => {
            box.style.transition = 'transform 0.5s ease'; // Smooth transition back to initial state
            timeout = setTimeout(() => {
                box.style.transform = 'rotateX(0) rotateY(0)';
            }, 50);
            glare.style.transform = 'rotate(45deg) translate(-50%, -50%)'; // Reset the glare position
        });
    });

    // Floating navigation button
    const circleButton = document.querySelector('.circle-button');
    const navLinksMobile = document.querySelector('#floating-nav .nav-links');
    const navItems = document.querySelectorAll('#floating-nav .nav-links li');

    circleButton.addEventListener('click', () => {
        navLinksMobile.classList.toggle('active');
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.toggle('active');
            }, index * 100);
        });
    });
});
