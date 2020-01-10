import UnsplashService from "../Services/UnsplashService.js";
import store from "../store.js"

function _draw() {
  let photo = store.State.unsplash;
  document.querySelector("#unsplash").innerHTML = photo.Template
}

export default class UnsplashController {
  constructor() {
    store.subscribe("unsplash", _draw);
    UnsplashService.getPhoto()
  }
}