'use strict';

(() => {
  const HTML = document.querySelector('html');
  const nav = document.querySelector('.main-nav');
  const toggle = nav.querySelector('.main-nav__toggle');
  const menu = nav.querySelector('.main-nav__full-menu');

  const openMenu = () => {
    if (document.body.offsetHeight > window.innerHeight) {
      document.body.dataset.scrollY = self.pageYOffset;
      document.body.style.top = document.body.dataset.scrollY * -1 + 'px';

      document.body.classList.add('block-scroll');
    }

    nav.classList.add('open');

    document.addEventListener('keydown', onEscPress);
  };

  const closeMenu = () => {
    if (document.body.offsetHeight > window.innerHeight) {
      document.body.classList.remove('block-scroll');

      document.body.style.top = 0;
      HTML.style.scrollBehavior = 'auto';
      window.scrollTo(0, document.body.dataset.scrollY);
      HTML.style.scrollBehavior = 'smooth';
    }

    nav.classList.remove('open');

    document.removeEventListener('keydown', onEscPress);
  };

  const onEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  };

  const onToggleClick = () => {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggle.addEventListener('click', onToggleClick);
})();
