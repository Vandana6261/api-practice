let input = document.getElementById("inpText")
let search = document.getElementById("btn")

let weatherCity = document.querySelector("#weather-city")
let temp = document.querySelector("#temp")
let humidity = document.querySelector("#humidity")
let condition = document.querySelector("#condition")
let windSpeed = document.querySelector("#wind-speed")
// console.log(temp)


search.addEventListener("click", function() {
    let city = input.value.toLowerCase();
    console.log(city)
    let key = "aee1045382f4e2a05a39735d89481e80"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    getWeatherData(url).then((data) => {
        console.log(data)
        weatherCity.textContent = `Weather in ${city}`;
        temp.textContent = `Temperature: ${data.main.temp}`
        humidity.textContent = `Humidity: ${data.main.humidity  }`;
        windSpeed.textContent = `Condition: ${data.wind.speed}`;
        let cloud = data.clouds.all
        if(cloud === 0) {
            condition.textContent = "clear sky"
        }

        console.log(data.main)
    })

})

function getWeatherData(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error))
}






