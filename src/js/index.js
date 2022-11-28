import "../scss/main.scss";

import moment from "moment";
console.log(moment);


const article1 = document.querySelector('#question');
const article2 = document.querySelector('#personal');

const link1 = document.querySelector('.navigation__link-1--js');
const link2 = document.querySelector('.navigation__link-2--js');

console.log(article1.classList);

window.addEventListener('scroll', () => {
    if(article1.classList.contains('padding')){
    article1.classList.remove('special__padding'); 
    console.log('usunęłam');
    }else{
        console.log('nie ma klasy');
    }
})

link1.addEventListener('click', () => {
article1.classList.add('special__padding');
console.log('dodałam');
})

link2.addEventListener('click', () => {
    article2.classList.add('special__padding');
})



const hamburger = document.querySelector(".hamburger--js");
const nav = document.querySelector(".navigation--js");


hamburger.addEventListener("click", () => {
  nav.classList.toggle("navigation__open");
});

