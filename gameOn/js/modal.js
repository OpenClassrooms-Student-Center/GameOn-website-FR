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
const modalCross = document.querySelectorAll('.close, .confirm-close');
const form = document.getElementById('form');
const modalConfirm = document.querySelector('.confirm-bground');
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
  form.reset();
  for (i = 0; i < textControl.length; i++) {
    textControl[i].style.border = 'none';
    textControl[i].parentElement.setAttribute('data-error-visible', 'false');
  }
}

// close modal event
modalCross.forEach((btn) => btn.addEventListener("click", closeModal));

// submit form
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm()) {
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