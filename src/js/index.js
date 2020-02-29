/* eslint-disable no-undef */
import '../page/index.css';
import '../page/project.css';
import { linkSelectors } from './linksSelectors';
import DateCounter from './leftdays';
import slider from './sliderConfig';
import ScrollTo from './scrollTo';

const leftDays = new DateCounter();
const scroll = new ScrollTo();

document.querySelector('.header__humburger').addEventListener('click', () => {
  document.querySelector('.menu_drop-down').classList.toggle('menu_drop-down_is-opened');
});

document.querySelector('.slider').addEventListener('wheel', event => {
  event.preventDefault();
  event.stopPropagation();
  // eslint-disable-next-line default-case
  switch (event.deltaY) {
    case 100: {
      slider.goTo('next');
      break;
    }
    case -100: {
      slider.goTo('prev');
      break;
    }
  }
});

leftDays.render();

Object.values(linkSelectors).forEach(element => {
  scroll.render(element.button, element.section);
});
