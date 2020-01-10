import NasaApodService from "../Services/NasaApodService.js";
import store from "../store.js"

//Private
function _draw() {
  let photo = store.State.nasaApod.url;
  document.body.style.backgroundImage = `url(${photo})`
}

//Public
export default class NasaPhotosController {
  constructor() {
    store.subscribe("nasaApod", _draw);
    NasaApodService.getPhoto()
  }
}