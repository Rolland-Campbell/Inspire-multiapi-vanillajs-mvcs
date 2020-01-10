import ScienceNewsService from "../Services/ScienceNewsService.js";
import store from "../store.js"


function _draw() {
  let template = ""
  let news = store.State.scienceNews;
  news.forEach(n => template += n.Template)
  document.querySelector("#newsFeed").innerHTML = template
}

export default class ScienceNewsController {
  constructor() {
    store.subscribe("scienceNews", _draw);
    ScienceNewsService.getNews()
  }
}