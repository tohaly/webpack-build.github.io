/* eslint-disable no-undef */
export default class ScrolToSection {
  constructor(data) {
    this.section = data.section;
    this.buttonClass = data.buttonClass;
  }

  // eslint-disable-next-line class-methods-use-this
  scrolTo(section) {
    const timeOut = setInterval(() => {
      window.scrollBy(0, 10);
    }, 3);
    document.addEventListener('scroll', () => {
      if (
        pageYOffset >= section.offsetTop ||
        Math.round(pageYOffset) ===
          document.body.offsetHeight - document.documentElement.clientHeight
      ) {
        clearInterval(timeOut);
      }
    });
  }

  render(event, btnClass) {
    if (event.target.classList.contains(btnClass)) {
      event.preventDefault();
      this.scrolTo(this.section);
    }
  }

  listeners() {
    document.addEventListener('click', event => {
      this.render(event, this.buttonClass);
    });
  }
}
