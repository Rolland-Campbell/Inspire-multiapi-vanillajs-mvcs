export default class Weather {
  constructor(data) {
    this.name = data.name
    this.temp = Math.floor(((data.main.temp) - 273.15) * 9 / 5 + 32)
    this.feels = Math.floor(((data.main.feels_like) - 273.15) * 9 / 5 + 32)
    this.icon = data.weather[0].icon
    this.wind = Math.floor(data.wind.speed * 1.151)
  }


  get Template() {
    return `
    <div class="col-4 weatherBackground">
      <h5 class="textWeather">${this.name}</h5>
      <pre class="textWeather">Current Temperature: ${this.temp}°F          Feels like: ${this.feels}°F           Wind ${this.wind} MPH</pre>
    </div>
      `
  }
}