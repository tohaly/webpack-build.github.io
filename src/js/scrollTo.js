const scrollToElement = require('scroll-to-element');

export default class ScrollTo {
  // eslint-disable-next-line class-methods-use-this
  scroll(element) {
    return scrollToElement(element, {
      ease: 'outBack'
    });
  }

  render(button, element) {
    document.querySelector(`.menu__desktop ${button}`).addEventListener('click', () => {
      this.scroll(element);
    });
    document.querySelector(`.menu_drop-down ${button}`).addEventListener('click', () => {
      this.scroll(element);
    });
  }
}
