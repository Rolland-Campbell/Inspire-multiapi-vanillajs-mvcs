export default class Unsplash {
  constructor(data) {
    this.img = data.urls.regular
  }

  get Template() {
    return `
        <img src="${this.img}" class="photo" alt="">
        <p class="text-center text-white pl-4">Random science picture</p>
        `
  }
}