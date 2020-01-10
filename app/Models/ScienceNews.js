export default class ScienceNews {
  constructor(data) {
    this.title = data.title
    this.author = data.author
    this.url = data.url
  }


  get Template() {
    return `
        <div class="card text-left cardStyle mb-2">
          <div class="card-body">
              <p><a class="textTitle" href="${this.url}">${this.title}</a></p>
              <p class="card-text textAuthor">${this.author}</p>
          </div>
        </div>
        `
  }
}