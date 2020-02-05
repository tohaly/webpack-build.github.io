/* eslint-disable no-undef */
import '../page/index.css';
import '../page/project.css';
import { ScrolToSection } from './scroll-to-section';
import { btnAndSectn } from './btnandsectn';

const goTostocks = new ScrolToSection(btnAndSectn.lead);
const goToPoster = new ScrolToSection(btnAndSectn.poster);
const goToprojects = new ScrolToSection(btnAndSectn.projects);
const goToOrganizers = new ScrolToSection(btnAndSectn.organizers);
const goToPartners = new ScrolToSection(btnAndSectn.partners);

goTostocks.listeners();
goToPoster.listeners();
goToprojects.listeners();
goToOrganizers.listeners();
goToPartners.listeners();

document.querySelector('.header__humburger').addEventListener('click', () => {
  document.querySelector('.menu_drop-down').classList.toggle('menu_drop-down_is-opened');
});

class DateCounter {
  constructor() {
    this.startDate = '04/18/2020';
    this.counter = this.counter.bind(this);
    this.daysLeftElem = document.querySelector('.lead__days-left');
  }

  counter() {
    const leftDays = -Math.floor((new Date() - new Date(this.startDate)) / (24 * 60 * 60 * 1000));
    return leftDays;
  }

  render() {}

  dateCheck() {
    if (!this.counter()) {
      this.daysLeftElem.textContent = 'Акция стартовала!';
    }
    this.daysLeftElem.textContent = `${this.counter()} дней`;
  }
}

const leftDays = new DateCounter();

leftDays.dateCheck();
