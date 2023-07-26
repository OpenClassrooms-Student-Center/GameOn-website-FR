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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Ticket #1 fermer la modale
const btnClose = document.querySelector('.close');
btnClose.addEventListener('click', closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Ticket #2 
const BtnRadio = document.getElementsByName('location');
const CheckCondition = document.getElementById('checkbox1');

// Ticket #3

