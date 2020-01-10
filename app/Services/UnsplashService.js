import store from "../store.js";
import Unsplash from "../Models/Unsplash.js"

let apiKey = "c781a4cf935052e3b8ed4c040c4eef2e829f0c2da01fefc8c458bb590bca95a9"

// @ts-ignore
let _unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/search/",
  timeout: 8000
})

class UnsplashService {
  async getPhoto() {
    let res = await _unsplashApi.get(`photos?per_page=30&query=science&client_id=${apiKey}`)
    let picture = new Unsplash(res.data.results[Math.floor(Math.random() * 30)]);
    store.commit("unsplash", picture);
  }
}

const service = new UnsplashService();
export default service;