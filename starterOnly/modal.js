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

// ##################################################################################################

// #1: fermer la modale (ajouter la fonctionnalité au bouton x)

function hideModal() {
  modalbg.style.display = "none";
}

let spanClose = document.querySelector(".close");
spanClose.addEventListener("click", (e) => {
  let target = e.target;
  if (target === spanClose) {
    hideModal();
  }
});

// ##################################################################################################
