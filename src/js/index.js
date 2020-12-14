/* eslint-disable no-undef */
import '../page/index.css';
import '../page/project.css';
import { linkSelectors } from './linksSelectors';
import DateCounter from './leftdays';
import slider from './sliderConfig';
import ScrollTo from './scrollTo';
import News from './news';
import { loadNews } from './firebase';

const leftDays = new DateCounter();
const scroll = new ScrollTo();
const template = document.querySelector('#news');
const container = document.querySelector('.projects__container');

const news = new News(template, container);

document.querySelector('.header__humburger').addEventListener('click', () => {
  document.querySelector('.menu_drop-down').classList.toggle('menu_drop-down_is-opened');
});

document.querySelector('.slider').addEventListener('wheel', event => {
  event.preventDefault();
  event.stopPropagation();

  const result = event.deltaY > 0 ? 'next' : 'prev';

  // eslint-disable-next-line default-case
  switch (result) {
    case 'next': {
      slider.goTo('next');
      break;
    }
    case 'prev': {
      slider.goTo('prev');
      break;
    }
  }
});

leftDays.render();

Object.values(linkSelectors).forEach(element => {
  scroll.render(element.button, element.section);
});

loadNews().then(news.render);
