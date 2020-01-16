export class ScrolToSection {
  constructor(data) {
    this.section = data.section;
    this.buttonClass = data.buttonClass;
  }

  scrolTo(section) {
    const timeOut = setInterval(() => {
      window.scrollBy(0, 5);  
      }, 3);
    document.addEventListener('scroll', () => {
      if (pageYOffset >= section.offsetTop || pageYOffset === document.body.offsetHeight - document.documentElement.clientHeight) {
        clearInterval(timeOut);
      }
    });
  }

  render(event, btnClass) {
    if(event.target.classList.contains(btnClass)){
      event.preventDefault();
      this.scrolTo(this.section);
    }  
  }

  listeners() {
    document.addEventListener('click', event => {
      
      this.render(event, this.buttonClass);
    })
  }
}