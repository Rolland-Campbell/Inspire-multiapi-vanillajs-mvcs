import NasaApodController from "./Controllers/NasaApodController.js";
import ScienceNewsController from "./Controllers/ScienceNewsController.js";
import WeatherController from "./Controllers/WeatherController.js"
import UnsplashController from "./Controllers/UnsplashController.js"

class App {
  nasaApodController = new NasaApodController();
  scienceNewsController = new ScienceNewsController();
  weatherController = new WeatherController();
  unsplashController = new UnsplashController()
}

window["app"] = new App();
