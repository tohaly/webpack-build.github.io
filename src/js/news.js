import notFoundImg from '../images/notFound.jpg';

const selectors = {
  CARD_IMG: '.projects-card__img',
  CARD_TITLE: '.projects-card__title',
  CARD_BUTTON: '.button__text'
};

export default class News {
  constructor(template, container) {
    this._template = template;
    this._container = container;
  }

  template() {
    return `
      <div class="projects-card">
        <img class="projects-card__img" src="" alt="" />
        <div class="projects-card__caption-block">
          <h3 class="projects-card__title"></h3>
          <div class="projects-card__button">
            <div class="button__line"></div>
            <a class="button__text" href="" target="_blanck">
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    `;
  }

  setCard({ img = notFoundImg, title = '', link = '' }) {
    const { CARD_IMG, CARD_TITLE, CARD_BUTTON } = selectors;
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', this.template().trim());
    console.log(element);
    element.querySelector(CARD_IMG).setAttribute('src', img);
    element.querySelector(CARD_TITLE).textContent = title;
    element.querySelector(CARD_BUTTON).setAttribute('href', link);

    this._container.appendChild(element.firstChild);
  }

  render(list) {
    list.forEach(item => {
      console.log(item);
      this.setCard(item);
    });
  }
}
