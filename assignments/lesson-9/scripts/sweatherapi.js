//connection to my API Springfield


let weatherRequest = new XMLHttpRequest();
let apiURL='https://api.openweathermap.org/data/2.5/weather?&id=4561407&units=imperial&APPID=4c5ecbb4699bafc4a2d884937c4fa06d';
weatherRequest.open('Get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function(){
let weatherData= JSON.parse(weatherRequest.responseText);
document.getElementById('current-temp').innerHTML = weatherData.main.temp;
let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
document.getElementById('weatherimage').src = imagesrc;
}