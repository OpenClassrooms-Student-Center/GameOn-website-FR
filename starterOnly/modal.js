function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("reserve");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");

const heroSection = document.querySelector('.hero-section');


// variable mobile media query
let mediaQueryMobile = window.matchMedia("(max-width: 540px)");


/// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // if mobile screen, heroSection doesn't appear
  if(mediaQueryMobile.matches){
    heroSection.style.display = "none";
  }
}
