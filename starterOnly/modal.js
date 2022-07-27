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
const closeBtn = document.querySelector(".close");
const firstName = document.getElementsByName("first");
const form = document.getElementsByName("reserve");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme la modal
function closeModal() {
  modalbg.style.display = "none";
}

// permet la fermeture de la modal au click sur le BTN X
closeBtn.addEventListener("click", closeModal);

// bloque L'action submit 
form[0].addEventListener('submit', (e) => {
  e.preventDefault();
})

// Check après la validation du form
// ! correspond a un negative operator
// si la condition est négative alors tu returnes false sinon true
function checkCondition(condition) {
  if (!condition) {
    return false;
  } else {
    return true;
  } 
}

// Fonction pour permet le faire apparaitre le message d'erreur
function getMessageError(message, errorId, inputId) {
  if (message && errorId) {
    document.getElementById(errorId).style.display = "block";
    document.getElementById(errorId).innerHTML = message;
    document.getElementById(inputId).style.border = "2px solid red";
  }
}

// Fonction qui permet de faire disparaître le message d'erreur 
function getMessageHide( errorId, inputId ) {
  if (errorId) {
    document.getElementById(errorId).style.display = "none";
    document.getElementById(inputId).style.border = "none";
  }

}

// Validation du Form
function validate(form) {

  // On test la condition si elle est true ou false. Ce qui donnera la condition tertiaire.
  let firstName = checkCondition(form["first"].value) && checkCondition(form["first"].value.length >= 2);
  // Condition tertiaire si FirstName est true alors envoie la function getMessageHide : false getMessageError
  firstName ? getMessageHide("error-firstName", form["first"].getAttribute("id")) : getMessageError("il faut 2 lettres ou plus", "error-firstName", form["first"].getAttribute("id"));

  let lastName = checkCondition(form["last"].value) &&  checkCondition(form["last"].value.length >= 2);
  lastName ? getMessageHide("error-lastName", form["last"].getAttribute("id")) : getMessageError("il faut 2 lettres ou plus", "error-lastName", form["last"].getAttribute("id"));

  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test ==> permet de tester si l'input contient les éléments d'un adresse mail
  let email = checkCondition(form["email"].value) &&  checkCondition(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form["email"].value));
  email ? getMessageHide("error-email", form["email"].getAttribute("id")) : getMessageError("Entrée une adresse valide", "error-email", form["email"].getAttribute("id"));








  // let input = document.getElementById("first");
  // let error = document.getElementById("error-firstName");
  // console.log(input);
  // if (input.value == "" || input.value.length <= 2) {
  //   console.log('dans le if');
  //   error.innerHTML = "Je suis en erreur";
  //   input.style.border = "2px solid red";
  //   error.style.display = "block";
  // }
}