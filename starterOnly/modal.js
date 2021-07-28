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
const closeModalBtn = document.querySelectorAll("#close");

// Mes VARIABLES
let myForm = document.getElementById("myForm");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let tournoiNumber = document.getElementById("tournoi_number");
let locationUn = document.getElementById("location1");
let locationDeux = document.getElementById("location2");
let locationTrois = document.getElementById("location3");
let locationQuatre = document.getElementById("location4");
let locationCinq = document.getElementById("location5");
let locationSix = document.getElementById("location6");
let checkCondition = document.getElementById("checkbox1");

// MES FONCTIONS
myform.addEventListener("submit", (e) => {
  e.preventDefault();
});

function checkInputs() {
  // Conditions if NAME //
  // Si firstName est égal a vide ou inferieux a deux = msg d'erreur + return false.
  if (firstName.value == "" || firstName.value.length < 2) {
    alert("erreur");
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    alert("Merci");
  }

  // Conditions if LASTNAME //
  // Si lastName est égal a vide ou inferieur a deux = msg d'erreur + return false.
  if (lastName.value == "" || lastName.value.length < 2) {
    alert("erreur");
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    alert("Merci");
  }

  // Conditions if EMAIL //
  let myRegex =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  // Si myRegex est different de la valeur de email ou si email est égal a vide = msg d'erreur + return false.
  if (!myRegex.test(email.value) || email.Value == "") {
    alert("erreur");
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    alert("Merci");
  }

  // Conditions if TOURNOI //
  // Si tournoiNumber est égal à 0 ou si la valeur de tournoiNumber n'es pas un nombre = msg d'erreur + return false.
  if (tournoiNumber.value == "" || isNaN(tournoiNumber.value)) {
    alert("erreur");
    return false;
  } else {
    alert("Merci");
  }

  // Conditions if CHECKBOX //
  // Si au moins un des six inputs est checked = pas de msg d'erreur + return true.
  if (
    locationUn.checked ||
    locationDeux.checked ||
    locationTrois.checked ||
    locationQuatre.checked ||
    locationCinq.checked ||
    locationSix.checked
  ) {
    alert("Merci");
    // Sinon si aucun input n'est checked = msg d'erreur + return false
  } else {
    alert("erreur");
    return false;
  }

  // Conditions if REGLEMENT //
  // Si checkbox n'est pas coché = msg d'erreur + return false.
  if (!checkCondition.checked) {
    alert("erreur");
    return false;
    // Sinon pas de msg d'erreur + return true.
  } else {
    alert("Merci");
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal event
closeModalBtn.forEach((elt) => {
  elt.addEventListener("click", closeModal);
});

//Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
