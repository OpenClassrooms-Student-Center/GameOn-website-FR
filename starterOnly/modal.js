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

// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


