'use strict';

/* MENU */

const headerBody = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');

headerBody.classList.add('header--js');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    headerBody.classList.toggle('header--js');
    menuToggle.classList.toggle('active');
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
