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

// close modal
function closeModal() {
  modalbg.style.display = "none"
}

console.log(modalBtn);


let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let quantityNumber = document.getElementById("quantity");

// validation du formulaire lors de l'envoi
document.getElementById("inscription").addEventListener("submit", function(submitElement) {

  let erreur;

  if (!quantityNumber.value) {
    erreur = "veuillez renseigner un nombre de participation"
  }

  if (!birthdate.value) {
    erreur = "veuillez renseigner un l'année de naissance"
  }

  if (!email.value) {
    erreur = "veuillez renseigner un email"
  }

  if (!lastName.value) {
    erreur = "veuillez renseigner un nom de famille"
  }

  if (!firstName.value) {
    erreur = "veuillez renseigner un Prénom"
  }

  if (erreur) {
    submitElement.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    alert('formulaire envoyé !');
  }
});