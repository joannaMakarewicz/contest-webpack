import "../scss/main.scss";

import moment from "moment";
console.log(moment);


// navigation with hamburger

const nav = document.querySelector(".navigation--js");
const navLinks = document.querySelectorAll('.navigation__link--js');
const hamburger = document.querySelector(".hamburger--js");
const closeIcon = document.querySelector('.hamburger__close--js');
const menuIcon = document.querySelector('.hamburger__menu--js')

function openMenu() {
  if(nav.classList.contains("navigation__open")) {
    nav.classList.remove("navigation__open");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }else{
    nav.classList.add("navigation__open");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", openMenu);

navLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener('click', openMenu);
  }
)
