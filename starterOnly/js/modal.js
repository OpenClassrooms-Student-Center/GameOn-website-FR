// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const modalContainer = document.querySelector('.modal-container');

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

// close modal form on click on X
function closeForm() {
  modalbg.style.display = "none";
}


// show modal confirmation after submit the form
function confirmationModal() {
  modalContainer.style.display = "block";
}

// hide modal confirmation after click on submit button or icon close
function hideModal() {
  modalContainer.style.display = "none";
  window.location.reload();
}


