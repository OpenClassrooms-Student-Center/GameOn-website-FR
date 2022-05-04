function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const modalCross = document.querySelector('.close');
const form = document.getElementById('form');
const modalConfirm = document.querySelector('.confirm-bground');
const confirmCross = document.querySelector('.confirm-cross');
const confirmClose = document.querySelector('.confirm-close');
const textControl = document.getElementsByClassName('text-control');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalConfirm.style.display = "none";
}

// close modal event
modalCross.addEventListener("click", closeModal);

// submit form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm() === true) {
      displayConfirmation();
      form.reset();
      for (i = 0; i < textControl.length; i++) {
      textControl[i].style.border = 'none';
      }
  } else {
  checkAllFields();
  }
})

// display confirmation
function displayConfirmation() {
  modalbg.style.display = "none";
  modalConfirm.style.display ="block";
}

// close confirm
function closeConfirm() {
  modalConfirm.style.display = "none";
}

// close confirm event
confirmClose.addEventListener("click", closeConfirm);

// close confirm cross
function crossConfirm() {
  modalConfirm.style.display = "none";
}

// close confirm cross event
confirmCross.addEventListener("click", crossConfirm);