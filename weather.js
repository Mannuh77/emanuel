// weather.js

// Display current date
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.textContent = `Today: ${today.toDateString()}`;

// Weather API settings
const apiKey = '886006af276ce973d2c5410f0f9c19d3'; // Replace with your OpenWeatherMap API key
const city = 'Nairobi'; // Replace with your city
const weatherElement = document.getElementById('weather');

// Function to fetch and display weather
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon; // e.g., "01d"

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

// Initial fetch
fetchWeather();

// Optional: refresh weather every 30 minutes
setInterval(fetchWeather, 1800000);
