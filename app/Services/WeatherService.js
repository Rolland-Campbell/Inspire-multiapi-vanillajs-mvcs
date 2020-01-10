import store from "../store.js";
import Weather from "../Models/Weather.js"

// @ts-ignore
let _weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
  timeout: 8000
})

class WeatherService {
  async getWeather() {
    let res = await _weatherApi.get()
    let weather = new Weather(res.data)
    store.commit("weather", weather);
  }
}

const service = new WeatherService();
export default service;