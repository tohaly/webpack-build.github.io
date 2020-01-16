// styles
import "../page/index.css";
import "../page/project.css";
import { ScrolToSection } from "./scroll-to-section";
import "./btnAndSectn";

const goTostocks = new ScrolToSection(window.btnAndSectn.lead);
const goToPoster = new ScrolToSection(window.btnAndSectn.poster);
const goToprojects = new ScrolToSection(window.btnAndSectn.projects);
const goToOrganizers = new ScrolToSection(window.btnAndSectn.organizers);
const goToPartners = new ScrolToSection(window.btnAndSectn.partners);

goTostocks.listeners();
goToPoster.listeners();
goToprojects.listeners();
goToOrganizers.listeners();
goToPartners.listeners();

document.querySelector('.header__humburger').addEventListener('click', () => {
  document.querySelector('.menu_drop-down').classList.toggle('menu_drop-down_is-opened');
});