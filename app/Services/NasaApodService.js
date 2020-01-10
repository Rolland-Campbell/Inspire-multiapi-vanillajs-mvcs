import store from "../store.js";

let apiKey = "7zktgnuTzGZW6i9S37OLYXNA9fgBjpudUrwRCSFK"

// @ts-ignore
let _nasaApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=" + apiKey,
  timeout: 8000
})

class NasaApodService {

  async getPhoto() {
    let res = await _nasaApi.get()
    store.commit("nasaApod", res.data);
  }
}

const service = new NasaApodService();
export default service;