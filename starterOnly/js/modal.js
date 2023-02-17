// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');

// handle modal menu
function editNav() {
  var menuIcon = document.getElementById("myTopnav");
  if (menuIcon.className === "topnav") {
    menuIcon.className += " responsive";
  } else {
    menuIcon.className = "topnav";
  }
}

// handle modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// handle modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form on click on X
function closeModal() {
  modalbg.style.display = "none";
}

console.log(form);



