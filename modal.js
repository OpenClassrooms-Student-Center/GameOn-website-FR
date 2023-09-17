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
const first = document.getElementById("first").value;
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const form = document.getElementById("form");


// Créer un message d'erreur pour les inputs du formulaire

// first erreur
let error = document.createElement("div");
error.classList.add("error");

let errorNoValue = document.createElement("p");
errorNoValue = "Veuillez renseigner le champ ci-dessus"

console.log(errorNoValue);

/*
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");

  const first = document.getElementById("first").value;
  
  form.reset();
  console.log(first);

  if(!first.value) {

    console.log("veuillez renseigner un prénom avec au moins deux caractères");
  }

});
*/
function validate(event) {

  // On empêche le comportement par défaut
  event.preventDefault();
  console.log("Il n’y a pas eu de rechargement de page");

  const first = document.getElementById("first").value;
  
  form.reset();

  console.log("Prénom:"+ first);
  console.log("Nom:"+ last);
  console.log("E-mail:"+ email);


  if(!first.value) {

    console.log("veuillez renseigner un prénom avec au moins deux caractères");
  }
}

