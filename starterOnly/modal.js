function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//DOM form
const myForm = document.getElementById("myform");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const logation = document.getElementById("location");
const location1 = document.getElementById("location1") ;
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkBox1 = document.getElementById("checkbox1");

//Variable pour ajouter ou supprimer les erreurs
const errorFirst = document.getElementById ("errorfirst");
const errorLast = document.getElementById ("errorlast");
const errorEmail = document.getElementById ("erroremail");
const errorBirthdate = document.getElementById ("errorbirthdate");
const errorQuantity = document.getElementById ("errorquantity");
const errorLocation = document.getElementById ("errorlocation");
const errorCheckbox1 = document.getElementById ("errorcheckbox1");

//Regex pour acceptation texte, email, date et nombres
let regexText = /^[a-zA-Z-\s]+$/;
let regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
let regexDate = /[0-9]\-/;
let regexNumbers = /^[0-9]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// fermeture formulaire via le bouton (X)
document.getElementById("closeform").addEventListener("click", function(closeModal) {
  modalBg.style.display = "none";
});

//Fontion pour le prénom
function validateFirst(input, error_first) {
  
  if (input.value >= 2 && input.value.trim() !== "") {
    error_first.innerHTML = "";
    first.classList.remove("class_error");
  } else if (regexText.test(input.value) == false || input.value.trim() == "") {
    error_first.innerHTML = "Le prénom doit comporter au moins 2 caractères.";
    first.classList.add("class_error");
  } else {
    error_first.innerHTML = "";
    first.classList.remove("class_error");
  }
}

//Fontion pour le nom
function validateLast(input, error_last) {
  
  if (input.value >= 2 && input.value.trim() !== "") {
    error_last.innerHTML = "";
  } else if (regexText.test(input.value) == false) {
    last.classList.add("class_error");
    error_last.innerHTML = "Le nom doit comporter au moins 2 caractères. ";
  } else {
    error_last.innerHTML = "";
    last.classList.remove("class_error");
  }
}

//Fontion pour le mail
function validateEmail(inputMail, error_email) {
  
  if (inputMail.value == true || regexMail.test(inputMail.value) == true) {
    error_email.innerHTML = "";
    email.classList.remove("class_error");
  } else {
    email.classList.add("class_error");
    error_email.innerHTML = "Veuillez entrer une adresse mail valide.";
  }
}

//Fontion pour la date de naissance
function validateBirthdate(inputBirthdate, error_birthdate) {
  
  if (inputBirthdate.value == true || regexDate.test(inputBirthdate.value) == true) {
    error_birthdate.innerHTML = "";
    birthdate.classList.remove("class_error");
  } else {
    birthdate.classList.add("class_error");
    error_birthdate.innerHTML = "Veuillez entrer une date valide.";
  }
}

//Fontion pour la date de naissance
function validateQuantity(input, error_quantity) {
  
  if (regexNumbers.test(input.value) == true) {
    error_quantity.innerHTML = "";
    quantity.classList.remove("class_error");
  } else {
    quantity.classList.add("class_error");
    error_quantity.innerHTML = "Veuillez entrer un chiffre valide.";
  } 
}

//Fontion pour la localité
function validateLocation(location, error_location) {
  
  if (location = location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    error_location.innerHTML = "";
    logation.classList.remove("class_error");
    return true;
  } else {
    logation.classList.add("class_error");
    error_location.innerHTML = "Veuillez selectionner une ville..";
  }
}

//Fontion pour checkbox
function validateCheckbox1(input, error_checkbox1) {
  
  if (input.checked) {
    error_checkbox1.innerHTML = "";
    checkbox1_label.classList.remove("class_error");
    return true;
  } else {
    checkbox1_label.classList.add("class_error");
    error_checkbox1.innerHTML = "Merci d'accepter les termes et conditions.";
  }
}

/*Validation formulaire*/
myForm.addEventListener('submit', valideForm);
function valideForm(event) {
  event.preventDefault();
  validateFirst(firstName, errorFirst);
  validateLast(lastName, errorLast);
  validateEmail(email, errorEmail);
  validateBirthdate(birthDate, errorBirthdate);
  validateQuantity(quantity, errorQuantity);
  validateLocation(location, errorLocation);
  validateCheckbox1(checkbox1, errorCheckbox1);
}

