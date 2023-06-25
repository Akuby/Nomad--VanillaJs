const API_KEY = globalVariable.API_KEY;
const weatherContainer = document.getElementById('weather-section');
const weatherCity = weatherContainer.querySelector('.city');
const weatherDegree = weatherContainer.querySelector('.degree');
const weatherValue = weatherContainer.querySelector('.weather');
function onGeoSuccess(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const targetUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(targetUrl).then(res => res.json()).then(data => {
        const city = data.name; 
        const weather = data.weather[0].main;
        const degree = data.main.temp;
        weatherCity.innerText = city;
        weatherDegree.innerText = `${degree}℃`;
        weatherValue.innerText = weather;
    });
}
function onGeoFail() {
    alert('Can"t find you. No weather for you. Sorry!')
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)