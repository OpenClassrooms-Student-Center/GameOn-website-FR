/*function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBgValid = document.querySelector(".bground-validation"); 
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelectorAll(".close");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//close modal validation
function closeModalValidation() {
  modalBgValid.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCross.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
// click on the cross
modalCross.forEach((btn) => btn.addEventListener("click", closeModalValidation));
// click on the button
document.getElementById("btn-validation").addEventListener("click", closeModalValidation);

// form valid

function validate() {
  const forename = document.getElementById("first");
  const name = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const checkbox = document.getElementById("checkbox1");
  const checkRadio = document.getElementsByName("location"); // array
  
  // Etat des innerHTML si rien écrit ou pas d'erreur

  document.getElementById("first-missing").innerHTML = "";
  document.getElementById("last-missing").innerHTML = "";
  document.getElementById("email-missing").innerHTML = "";
  document.getElementById("birthdate-missing").innerHTML = "";
  document.getElementById("quantity-missing").innerHTML = "";
  document.getElementById("checkbox-missing").innerHTML = "";
  document.getElementById("radio-missing").innerHTML = "";

  // form radio = init hasRadioSelected à false 
  // pour chaque "radio" du tableau checkRadio vérifier si le checked est différent de false
  // du coup renvoie true 

  let hasRadioSelected = false;
  checkRadio.forEach((radio) => {
    if (radio.checked !== false) hasRadioSelected = true;
  });

  let valid = true;  

  if (forename.value.length < 2) {
    document.getElementById("first-missing").innerHTML =
      "Veuillez entrer 2 caractères minimun pour le champ prénom";
    valid = false;
  }
  if (name.value.length < 2) {
    document.getElementById("last-missing").innerHTML =
      "Veuillez entrer 2 caractères minimun pour le champ nom";
    valid = false;
  }
  if (email.value == "") {
    document.getElementById("email-missing").innerHTML =
      "Veuillez entrer un email valide";
    valid = false;
  }
  if (birthdate.value == "") {
    document.getElementById("birthdate-missing").innerHTML =
      "Veuillez entrer une date de naissance correcte";
    valid = false;
  }
  if (quantity.value == "") {
    document.getElementById("quantity-missing").innerHTML =
      "Veuillez entre un nombre compris entre 0 et 99";
    valid = false;
  }
  if (checkbox.checked == false) {
    document.getElementById("checkbox-missing").innerHTML =
      "Vous devez accepter les termes et conditions générales";
    valid = false;
  }  
  if (hasRadioSelected == false) {
    document.getElementById("radio-missing").innerHTML =
      "il faut choisir une option";
    valid = false;
  }
  if (valid === true) {    
    closeModal();
  }
}

// la funtion validationPopUp prend comme argument un evenement qui empeche 
// la soumission par défaut du formulaire si on clique sur le submit;
// la function s'excutera quand le formulaire sera remplit et fera apparaitre le message de validation

const validationForm = document.getElementById("validation-form");

function validationPopUp(event) {
  event.preventDefault();
  validationForm.style.display = "block";  
}

document.getElementById("form").addEventListener("submit", validationPopUp);
