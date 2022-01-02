'use strict';

/* SCROLL */

const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  };


/* MENU */

const headerBody = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

headerBody.classList.add('header--js');
navigation.classList.add('header__navigation--closed');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('header__navigation--closed');
    headerBody.classList.toggle('header--opened');
  });
}


/* TABS */

const tabNavs = document.querySelectorAll('.alphabet-filter__link');

if (tabNavs) {
  tabNavs.forEach((tabNav) => {

    tabNav.addEventListener('click', (e) => {
      e.preventDefault();
      const activeTabAttr = e.target.dataset.tab;

      document.querySelector('.alphabet-filter__link.active').classList.remove('active');
      document.querySelector('.countries-filter__item.active').classList.remove('active');

      tabNav.classList.add('active');

      const activeScreen = `.countries-filter__item--${activeTabAttr}`;

      document.querySelector(activeScreen).classList.add('active');
    });
  });
}


  /* MODAL */

const openBtn = document.querySelector('.add-profile__link');
const closeBtn = document.querySelector('.modal__close');
const popup = document.querySelector('.modal');

if (openBtn) {
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('modal--show');
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('modal--show');
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      popup.classList.remove('modal--show');
    }
  });
}


/* FILTER */

const filterContainer = document.querySelector('.filter__container');
const filterToggle = document.querySelector('.filter-toggle');
const filterClose = document.querySelector('.dropdown-filter__close');

filterContainer.classList.add('filter__container--closed');
filterContainer.classList.add('filter__container--js');

filterToggle.addEventListener('click', () => {
  filterContainer.classList.toggle('filter__container--closed');
  filterToggle.classList.toggle('active');
});

filterClose.addEventListener('click', () => {
  filterContainer.classList.add('filter__container--closed');
  filterToggle.classList.toggle('active');
});
