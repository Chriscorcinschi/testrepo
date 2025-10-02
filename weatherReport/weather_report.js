const API_KEY = "122d6cc9ed6ed1a6976c087edb963226"; // Inserisci la tua API key
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = async (city) => {
	const apiUrl = `${API_BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
	const response = await fetch(apiUrl);

	if (!response.ok) {
		throw new Error("Failed to fetch weather data");
	}
	return response.json();
};

const displayWeather = (data) => {
	const weatherInfo = document.getElementById("weatherInfo");
	weatherInfo.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp} &#8451;</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Latitude: ${data.coord.lat}</p>
    <p>Longitude: ${data.coord.lon}</p>
  `;
};

const displayError = (message) => {
	const weatherInfo = document.getElementById("weatherInfo");
	weatherInfo.innerHTML = `<p>${message}</p>`;
};

const showWeatherDetails = async (event) => {
	event.preventDefault();

	const city = document.getElementById("city").value.trim();

	if (!city) {
		displayError("Please enter a city name.");
		return;
	}

	try {
		const data = await getWeatherData(city);
		displayWeather(data);
	} catch (error) {
		console.error("Error fetching weather:", error);
		displayError("Failed to fetch weather. Please try again.");
	}
};

document.getElementById("weatherForm").addEventListener("submit", showWeatherDetails);
