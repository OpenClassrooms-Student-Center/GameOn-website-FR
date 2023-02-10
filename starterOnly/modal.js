function editNav() {
  var menuIcon = document.getElementById("myTopnav");
  if (menuIcon.className === "topnav") {
    menuIcon.className += " responsive";
  } else {
    menuIcon.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form on click on X
function closeModal() {
  modalbg.style.display = "none";
}

