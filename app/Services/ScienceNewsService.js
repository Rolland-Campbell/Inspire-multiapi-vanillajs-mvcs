import store from "../store.js"
import ScienceNews from "../Models/ScienceNews.js"

let apiKey = "c9bb807b818644d482588aa1e4a682ca"

// @ts-ignore
let _newsApi = axios.create({
  baseURL: "https://newsapi.org/v2/everything?q=science&apiKey=" + apiKey,
  timeout: 8000
})

class ScienceNewsService {
  async getNews() {
    let res = await _newsApi.get()
    let news = res.data.articles.map(n => new ScienceNews(n))
    store.commit("scienceNews", news);
  }
}


const service = new ScienceNewsService();
export default service;