const apiKey = "4669e3d4c086658662e0e17507b60de1";

// --- UI HELPERS ---

const themeRoot = document.getElementById("root-theme");
const weatherView = document.getElementById("weather-view");

// Defines which weather codes map to which CSS themes
const conditionMap = {
  Clear: "clear",
  Clouds: "clouds",
  Rain: "rain",
  Drizzle: "rain",
  Thunderstorm: "rain",
  Snow: "clouds",
  Mist: "clouds",
  Haze: "clouds",
  Fog: "clouds",
};

function generateFluidContext(temp, condition) {
  if (temp <= 0)
    return "It's below freezing. Dress in layers and keep warm indoors! 🧣";
  if (condition.includes("Rain"))
    return "Expect wet conditions. A perfect day for reading! 📚☔";
  if (temp > 25 && condition.includes("Clear"))
    return "Beautifully warm and sunny. Enjoy the outdoors! ☀️😎";
  if (condition.includes("Cloud"))
    return "A bit overcast today. Good lighting for photography. ☁️📷";
  return "Weather updated. Stay comfortable! 🌍";
}

// --- CORE FETCH LOGIC (With Fade Animation) ---

async function getWeather(city) {
  // Step 1: Smoothly Fade out old data
  weatherView.classList.add("view-hidden");

  // Wait for the fade-out animation to finish (500ms match CSS transition)
  await new Promise((r) => setTimeout(r, 500));

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      weatherView.classList.remove("view-hidden"); // Show context box again
      document.getElementById("fluid-context").innerText =
        "Hmm, that city seems hidden. Try another? 🤔";
      return;
    }

    const data = await response.json();

    // Destructure necessary data
    const { name } = data;
    const { icon, main: condMain } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed: wind } = data.wind;

    // Step 2: Inject New Data into DOM
    document.getElementById("display-city").innerText = name;
    document.getElementById("display-temp").innerText = `${Math.round(temp)}°C`;
    document.getElementById("display-cond").innerText = condMain;
    document.getElementById("display-wind").innerText = wind;

    // Context Message
    document.getElementById("fluid-context").innerText = generateFluidContext(
      temp,
      condMain,
    );

    // SVG Icon Loader (Uses OpenWeather assets)
    const iconWrap = document.getElementById("icon-wrap");
    iconWrap.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;

    // Step 3: Trigger the Fluid Theme Shift
    // Map OpenWeather code to our CSS theme variables
    const themeToApply = conditionMap[condMain] || "clouds";
    themeRoot.setAttribute("data-weather", themeToApply);

    // Step 4: Fade in the new data smoothly
    weatherView.classList.remove("view-hidden");
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

// --- EVENT LISTENERS (Standard) ---

document.getElementById("search-trigger").addEventListener("click", () => {
  const city = document.getElementById("city-search").value;
  if (city) getWeather(city);
});

document.getElementById("city-search").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const city = event.target.value;
    if (city) getWeather(city);
  }
});
