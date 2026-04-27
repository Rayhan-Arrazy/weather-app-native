const apiKey = "4669e3d4c086658662e0e17507b60de1";

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      alert("City not found!");
      return;
    }

    const data = await response.json();

    console.log(data);

    displayWeather(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;

  document.getElementById("city").innerText = "Weather in " + name;
  document.getElementById("temp").innerText = temp + "°C";
  document.getElementById("desc").innerText = description;
  document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";

  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
}

document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("search-bar").value;
  getWeather(city);
});
