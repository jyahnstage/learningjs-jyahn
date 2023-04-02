const API_KEY ="64a992cc6eab3a00c937d65575e69438"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherBox = document.querySelector("#weather span:first-child");
        const cityBox = document.querySelector("#weather span:last-child");
        weatherBox.innerText = `지역: ${data.name}`;
        cityBox.innerText = `날씨: ${data.weather[0].main} 기온: ${data.main.temp}ºC`;
    
    });
}

function onGeoNot () {

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNot);