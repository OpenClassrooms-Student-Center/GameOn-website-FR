// Déclaration des variables d'affichage du formulaire

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");


// Evénements qui déclenche l'Affichage formulaire

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction qui modifie l'affichage (le css)
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// Déclaration des variables de fermeture du formulaire
// DOM ELEMENTS
const modalBackground = document.querySelector(".bground");
const closeBtn = document.querySelector('.close');

// Déclenchement
closeBtn.addEventListener("click", closeModal);

// fonction qui modifie l'affichage (css)
// close modal
function closeModal() {
  modalBackground.style.display = "none";
}








