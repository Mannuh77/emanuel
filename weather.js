// Display current date
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.textContent = `Today: ${today.toDateString()}`;

// Weather API settings
const apiKey = '886006af276ce973d2c5410f0f9c19d3';
const weatherElement = document.getElementById('weather');

// Function to fetch and display weather using coordinates
async function fetchWeather(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const city = data.name; // auto-detected city

        // Display weather with icon
        weatherElement.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon" style="vertical-align: middle; width: 40px;">
            <span>Weather in ${city}: ${temp}°C, ${description}</span>
        `;
    } catch (error) {
        weatherElement.textContent = 'Unable to fetch weather data.';
        console.error(error);
    }
}

// Get user location
function getLocationAndFetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                fetchWeather(lat, lon);
            },
            (error) => {
                console.warn("Location access denied. Defaulting to Nairobi.");

                // fallback: Nairobi coordinates
                fetchWeather(-1.2921, 36.8219);
            }
        );
    } else {
        weatherElement.textContent = "Geolocation not supported by this browser.";
    }
}

// Initial fetch
getLocationAndFetchWeather();

// Optional: refresh every 30 minutes
setInterval(getLocationAndFetchWeather, 1800000);