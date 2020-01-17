export default class Unsplash {
  constructor(data) {
    this.img = data.urls.regular
  }

  get Template() {
    return `
        <img src="${this.img}" class="photo" alt="">
        <p class="text-center text-white">Random science picture (stretch goal)</p>
        `
  }
}