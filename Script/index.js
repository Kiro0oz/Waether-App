// ! API Data
const apikey = "d5e4519d6bac5759f953407e014e1b0c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox  = document.querySelector(".search input");
const searchBtn  = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";

    }
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds") {
        weather_icon.src = "/img/clouds.png"
    } else if(data.weather[0].main == "Rain") {
        weather_icon.src = "/img/rain.png"
    } else if(data.weather[0].main == "Drizzle") {
        weather_icon.src = "/img/drizzle.png"
    } else if(data.weather[0].main == "Mist") {
        weather_icon.src = "/img/mist.png"
    }
    document.querySelector(".weather").style.display = "block";

}
searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
})

