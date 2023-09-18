/********** navbar tablet et mobile ***********/

// DOM Elements
const icon = document.querySelector(".icon");
const navbar = document.querySelector(".main-navbar");
const navbarClose = document.querySelector(".navbar-close");

// Ajouter la class open à main-navbar
function openNavbar() {

  navbar.classList.add("open");

}

// Enlever la class open à main-navbar 
function removeNavbar() {

  navbar.classList.remove("open");
  
}

// Cliquer sur l'icon pour ouvrir la navbar de la version tablette ou mobile
icon.addEventListener("click", openNavbar);

// Cliquer sur navabr-close pour fermer la navbar de la version tablette ou mobile
navbarClose.addEventListener("click", removeNavbar);

/********** Formulaire ***********/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");
const modalBgContent = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeForm.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalBgContent.classList.remove("closed");
}


// close modal form
function closeModal() {

  modalBgContent.classList.add("closed");

  setTimeout(() => {
  modalbg.style.display = "none";
  }, 800);

}

// Formulaire

// Input du formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const input = document.getElementsByTagName("input");
const form = document.getElementById("form");


// Créer un message d'erreur pour les inputs du formulaire
// first erreur
let errorFirst = document.createElement("p");
errorFirst.classList.add("error");

let errorLast = document.createElement("p");
errorLast.classList.add("error");


// valide
//let valide = document.createElement("p");
//valide.classList.add("valide");

//Ecouter la modification de prénom
first.addEventListener('change', (event) => {
  event.preventDefault();

  if(first.value.length < 2) {
    first.parentElement.appendChild(errorFirst);
    errorFirst.style.display = "block";
    errorFirst.innerHTML = "Le prénom doit contenir au moins 2 lettres";
  }
  else {
    errorFirst.style.display = "none";
  }

});


if(first.value.length === 0) {
  errorFirst.style.display = "block";
  first.parentElement.appendChild(errorFirst);
  errorFirst.innerHTML = "Champ requis";

}


last.addEventListener('change', (event) => {
  event.preventDefault();

  if(last.value.length < 2) {
    last.parentElement.appendChild(errorLast);
    errorLast.style.display = "block";
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  else {
    errorLast.style.display = "none";
  }

});



form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");


  form.reset();

  console.log("Prénom:"+ first);
  console.log("Nom:"+ last);
  console.log("E-mail:"+ email);
  console.log("anniversaire:"+ birthdate);

  return true;

});



