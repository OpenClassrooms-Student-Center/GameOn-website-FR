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
const modalBtnClose = document.querySelectorAll(".close"); // creation d'un dom element sur l'element tout les element de la classe "close"
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal)); // creation d'un event pour fermer le modal

// close modal form
function closeModal(){ // fonction qui arrete l'affichage du modal
  modalbg.style.display ="none"; 
}