/* eslint-disable no-undef */
import '../page/index.css';
import '../page/project.css';
import ScrolToSection from './scroll-to-section';
import { btnAndSectn } from './btnandsectn';
import DateCounter from './leftdays';

const goTostocks = new ScrolToSection(btnAndSectn.lead);
const goToPoster = new ScrolToSection(btnAndSectn.poster);
const goToprojects = new ScrolToSection(btnAndSectn.projects);
const goToOrganizers = new ScrolToSection(btnAndSectn.organizers);
const goToPartners = new ScrolToSection(btnAndSectn.partners);
const leftDays = new DateCounter();

goTostocks.listeners();
goToPoster.listeners();
goToprojects.listeners();
goToOrganizers.listeners();
goToPartners.listeners();

document.querySelector('.header__humburger').addEventListener('click', () => {
  document.querySelector('.menu_drop-down').classList.toggle('menu_drop-down_is-opened');
});

leftDays.render();
