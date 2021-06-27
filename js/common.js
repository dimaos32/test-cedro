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

(() => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    breakpoints: {
      576: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 24,
      },
      1200: {
        spaceBetween: 32,
      },
    }
  });
})();

(() => {
  const form = document.querySelector('.profile-form form');

  const onChangeViewBtnClick = (({target}) => {
    const btn = target.closest('.profile-form__change-view-btn');

    if (btn) {
      const wrapper = btn.closest('.profile-form__input-wrapper');
      const input = wrapper.querySelector('input');
      const altText = wrapper.querySelector('span');

      if (input.type === 'password') {
        input.type = 'text';
        altText.textContent = 'Скрыть пароль';
      } else if (input.type === 'text') {
        input.type = 'password';
        altText.textContent = 'Показать пароль';
      }
    }
  });

  form.addEventListener('click', onChangeViewBtnClick);
})();

(() => {
  const cards = document.querySelector('.trends-slider__slides');

  const onLikeClick = ((evt) => {
    const btn = evt.target.closest('.product-card__like-btn');
    const altText = btn.querySelector('span');

    if (btn) {
      evt.preventDefault();
      if (btn.classList.contains('product-card__like-btn--liked')) {
        btn.classList.remove('product-card__like-btn--liked');
        altText.textContent = 'Добавить в избранное';
      } else {
        btn.classList.add('product-card__like-btn--liked');
        altText.textContent = 'Удалить из избранного';
      }
    }
  });

  cards.addEventListener('click', onLikeClick);
})();
