let input = document.getElementById("inpText");
let search = document.getElementById("btn");

let loadingMsg = document.querySelector("#loadingMsg");
let weatherCity = document.querySelector("#weather-city");
let temp = document.querySelector("#temp");
let humidity = document.querySelector("#humidity");
let condition = document.querySelector("#condition");
let windSpeed = document.querySelector("#wind-speed");

search.addEventListener("click", function () {
  let city = input.value.toLowerCase();
  let key = "aee1045382f4e2a05a39735d89481e80";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  let loading = true;
  if (loading) {
    loadingMsg.textContent = "Loading";
    weatherCity.textContent = "";
    temp.textContent = "";
    humidity.textContent = "";
    windSpeed.textContent = "";
    condition.textContent = "";
  }

  getWeatherData(url)
    .then((data) => {
      loading = false;
      if (!loading) loadingMsg.textContent = "";
      if (data.cod == 404) {
        alert("Please enter a valid city name ");
      } else {
        console.log(data);
        weatherCity.textContent = `Weather in ${city}`;
        temp.textContent = `Temperature: ${data.main.temp}`;
        humidity.textContent = `Humidity: ${data.main.humidity}`;
        windSpeed.textContent = `Condition: ${data.wind.speed}`;
        let cloud = data.clouds.all;
        if (cloud === 0) {
          condition.textContent = "clear sky";
        }
      }

    })
    .catch((error) => {
      console.log(error);
    });
});

function getWeatherData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}
