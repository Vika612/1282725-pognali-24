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
