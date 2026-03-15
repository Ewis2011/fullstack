const form = document.getElementById("weatherForm");
const locationInput = document.getElementById("locationInput");
const unitSelect = document.getElementById("unitSelect");

const loading = document.getElementById("loading");

const weatherCard = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");

const API_KEY = "4QVZX2BG45CSQ5AAT9ZJSA7RQ";


// Fetch weather
async function getWeather(location, unit) {

try {

loading.classList.remove("hidden");
weatherCard.classList.add("hidden");

const response = await fetch(
`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${API_KEY}&contentType=json`
);

const data = await response.json();

const weather = processWeather(data);

displayWeather(weather);

loading.classList.add("hidden");

} catch (error) {
console.error("Error fetching weather:", error);
}

}


// Process JSON
function processWeather(data) {

return {
city: data.resolvedAddress,
temp: data.currentConditions.temp,
humidity: data.currentConditions.humidity,
condition: data.currentConditions.conditions
};

}


// Display weather
function displayWeather(weather) {

cityName.textContent = weather.city;
description.textContent = weather.condition;
temperature.textContent = `Temperature: ${weather.temp}`;
humidity.textContent = `Humidity: ${weather.humidity}%`;

weatherCard.classList.remove("hidden");

changeBackground(weather.condition);

}


// Change background depending on weather
function changeBackground(condition) {

const body = document.body;

body.className = "";

const weather = condition.toLowerCase();

if (weather.includes("rain")) {
body.classList.add("rain");
}
else if (weather.includes("cloud")) {
body.classList.add("cloudy");
}
else if (weather.includes("snow")) {
body.classList.add("snow");
}
else {
body.classList.add("sunny");
}

}


// Form submit
form.addEventListener("submit", (e) => {

e.preventDefault();

const location = locationInput.value;
const unit = unitSelect.value;

getWeather(location, unit);

});