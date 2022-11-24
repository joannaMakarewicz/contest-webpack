import '../scss/main.scss';

import moment from 'moment';
console.log(moment);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation__open');
})

