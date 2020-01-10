import WeatherService from "../Services/WeatherService.js";
import store from "../store.js"

function _draw() {
  let weather = store.State.weather;
  document.querySelector("#weather").innerHTML = weather.Template
}


export default class WeatherController {
  constructor() {
    store.subscribe("weather", _draw);
    WeatherService.getWeather()
  }
}