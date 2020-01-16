(function() {
  const btnAndSectn = {
    lead: {
      section: document.querySelector('.lead'),
      buttonClass: 'menu-item__link_stocks'
    },
    poster: {
      section: document.querySelector('.description'),
      buttonClass: 'menu-item__link_poster'
    },
    projects: {
      section: document.querySelector('.projects'),
      buttonClass: 'menu-item__link_projects'
    },
    organizers: {
      section: document.querySelector('.sponsors__title_org'),
      buttonClass: 'menu-item__link_organizers'
    },
    partners: {
      section: document.querySelector('.sponsors__title_partners'),
      buttonClass: 'menu-item__link_partners'
    }
  }

  window.btnAndSectn = btnAndSectn;
})();

