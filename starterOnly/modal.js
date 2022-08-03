

function editNav() {
  var x = document.querySelector("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg   = document.querySelector(".bground");
const modalBtn  = document.querySelectorAll(".modal-btn");
const formData  = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//fermeture du formulaire

// selection des class concernées pour la fermeture
const closeMod = document.querySelector(".close")

//fonction fermeture du formulaire
function closeModal(){
  modalbg.style.display = "none";
}

//evenement qui ferme le modal
closeMod.addEventListener("click", closeModal)


//IMPUT création des variables pour lier l'html

let firstName     = document.querySelector('#first');
let lastName      = document.querySelector('#last');
let email         = document.querySelector('#email');
let birthdate     = document.querySelector('#birthdate');
let quantity      = document.querySelector('#quantity');
let avertissements = document.querySelectorAll('.avertissement');

avertissements.forEach(function (avertissement){
  console.log(avertissement)
  avertissement.style.display = "none";
}) 






