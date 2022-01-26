import Product from '.javaScript/Inputs.js';
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

document.getElementById("reverve").addEventListener("submit", validate);

function validate(){
  const imputs = document.getElementsByTagName("input");
  for (let i = 0; i< inputs.lenght; i++){

  }
  

  if (last.value == "") {
    console.log('erreur');
    erreur = "Veuillez renseigner le champ"
    console.log(erreur);
  };
  if (erreur) {

    document.getElementById("erreur").innerHTML = erreur;
    return false
  };

  alert('Formulaire envoyé !');
};