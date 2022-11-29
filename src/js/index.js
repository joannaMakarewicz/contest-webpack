import "../scss/main.scss";

import moment from "moment";
console.log(moment);


// navigation with hamburger

const hamburger = document.querySelector(".hamburger--js");
const nav = document.querySelector(".navigation--js");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("navigation__open");
});
