const apiKey = "4669e3d4c086658662e0e17507b60de1";

const themeRoot = document.getElementById("root-theme");
const weatherView = document.getElementById("weather-view");

async function getWeather(city) {
  // Fade out old data
  weatherView.classList.add("view-hidden");
  await new Promise((r) => setTimeout(r, 400));

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      alert("City not found!");
      return;
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description, main: conditionMain } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed: windSpeed } = data.wind;

  // Inject Data
  document.getElementById("display-city").innerText = name;
  document.getElementById("display-temp").innerText = `${Math.round(temp)}°`;
  document.getElementById("display-cond").innerText = description;
  document.getElementById("display-humidity").innerText = `${humidity}%`;
  document.getElementById("display-wind").innerText = windSpeed;

  // Icon setup
  const iconEl = document.getElementById("weather-icon");
  iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  iconEl.classList.remove("hidden");

  // Dynamic Context Engine
  let contextMsg = "";
  if (temp <= 10) {
    contextMsg = "It's freezing out there. ⛄ Dress warm!";
    themeRoot.setAttribute("data-weather", "cold");
  } else if (temp > 10 && temp <= 25) {
    contextMsg = "Absolutely perfect temperature. ☀️ Go outside!";
    themeRoot.setAttribute("data-weather", "perfect");
  } else {
    contextMsg = "It's getting hot. 🥵 Stay hydrated!";
    themeRoot.setAttribute("data-weather", "hot");
  }

  if (conditionMain.includes("Rain"))
    contextMsg = "Don't forget an umbrella! ☔";

  document.getElementById("fluid-context").innerText = contextMsg;

  // Fade in new data
  weatherView.classList.remove("view-hidden");
}

// Event Listeners
document
  .getElementById("search-trigger")
  .addEventListener("click", function () {
    const city = document.getElementById("city-search").value;
    if (city) getWeather(city);
  });

document
  .getElementById("city-search")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const city = event.target.value;
      if (city) getWeather(city);
    }
  });
