document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
        service.style.opacity = 0;
        service.style.transition = `opacity 1s ease ${index * 0.5}s`;
        setTimeout(() => {
            service.style.opacity = 1;
        }, 100);
    });

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Display local time
    function displayTime() {
        const timeElement = document.getElementById('time');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }

    displayTime();
    setInterval(displayTime, 60000);

    // Fetch and display local temperature
    function displayTemperature() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const apiKey = 'YOUR_API_KEY'; // Replace with your weather API key
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const temperatureElement = document.getElementById('temperature');
                        const temperature = Math.round(data.main.temp);
                        temperatureElement.textContent = `${temperature}°C`;
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    displayTemperature();
});
