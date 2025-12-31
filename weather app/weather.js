
// API KEY
let apikey = "ee1143b023b769119ff30b015c0ede31";
let btn = document.querySelector("#btn");
let cityInput = document.querySelector("#city");

let cityName = document.querySelector("#cityName");
let temperature = document.querySelector("#temperature");
let timezone = document.querySelector("#timezone");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let icon = document.querySelector("#weatherIcon");

btn.addEventListener("click", () => {
  let city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter city name");
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    let data = await response.json();

    if (data.cod !== 200) {
      alert("City not found ❌");
      return;
    }

    displayWeather(data);
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
}


function displayWeather(data) {
  cityName.innerHTML = data.name + ", " + data.sys.country;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  timezone.innerHTML = "Timezone: " + data.timezone;

  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  wind.innerHTML = "Wind: " + data.wind.speed + " m/s";

  icon.src =
    "https://openweathermap.org/img/wn/" +
    data.weather[0].icon +
    "@2x.png";
}

document.querySelector("#modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
