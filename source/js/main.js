'use strict';

/* MENU */

const headerBody = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

headerBody.classList.add('header--js');
navigation.classList.add('header__navigation--closed');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('header__navigation--closed');
    headerBody.classList.toggle('header--opened');
  });
}

/* SCROLL */

const header = document.querySelector('.header');

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  };
