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
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //On réinitialise les propriétés qui ont été ajoutée dans closeModal()
  modalbg.style.animationName = "none";
  modalcontent.style.animationName = "modalopen";
}
//Faire une toggle, change entre l'état initiale et l'état finale

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  const closeAnimation = "modalclose 0.8s";

  modalcontent.style.animation = closeAnimation;
  modalbg.style.animation = closeAnimation;

  //L'élément modalbg disparaît seulement à la fin de l'animation
  modalbg.addEventListener("animationend", function () {
    if (modalbg.style.animationName === "modalclose") {
      modalbg.style.display = "none";
    }
  });
}

//Form inputs Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationInputs = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById("checkbox1").checked;

function validateFirstName() {
  let isValid = false;
  if (firstName.value.length < 2) {
    showError(firstName, "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideError(firstName);
  }
}

function validateLastName() {
  if (lastName.value.length < 2) {
    showError(lastName, "Veuillez entrer 2 caractères ou plus.");
  } else {
    hideError(lastName);
  }
}

function validateEmail() {
  if (!email.checkValidity()) {
    showError(email, "Veuillez entrer une adresse e-mail valide.");
  } else {
    hideError(email);
  }
}

function validateDate() {
  console.log("validateDate()");
  if (!date.checkValidity()) {
    showError(date, "Veuillez entrer une date valide.");
  } else {
    hideError(date);
  }
}

function validateQuantity() {
  if (!quantity.checkValidity()) {
    showError(quantity, "Veuillez entrer un nombre entre 0 et 99.");
  } else {
    hideError(quantity);
  }
}

function showError(inputElement, errorMessage) {
  inputElement.parentNode.setAttribute("data-error-visible", "true");
  inputElement.parentNode.setAttribute("data-error", errorMessage);
}

function hideError(inputElement) {
  inputElement.parentNode.setAttribute("data-error-visible", "false");
  inputElement.parentNode.setAttribute("data-error", "");
}

// function validate() {
//   //Mettre en var à l'extérieur de la fonction avec un scope plus large
//   //GetDataFromForm() pour tout récupérer
//   //Factoriser chaque validation de champ function(nomduchamp, fonction validation)
//   //validateField(input, fonction de validation)
//   //fichier validationfunctions, ou faire en fonction fléchée directement

//   var isValid = true;

//   // Validation du champ Prénom
//   //Faire une fonction générique, retourner un object avec le message d'erreur, et la var isValid boolean
//   //(field, function fléchée) pour retourner le champ entier avec ou non le message d'erreur (pourquoi pas dans un autre fichier)
//   //Mettre le curseur à l'intérieur du premier champ où il y a une erreur

//   if (isNaN(quantity) || quantity < 0) {
//     alert(
//       "Veuillez saisir une valeur numérique positive pour le nombre de tournois."
//     );
//     return false;
//   }

//   let locationSelected = false;
//   for (let i = 0; i < locationInputs.length; i++) {
//     if (locationInputs[i].checked) {
//       locationSelected = true;
//       break;
//     }
//   }
//   if (!locationSelected) {
//     alert("Veuillez sélectionner une option de tournoi.");
//     return false;
//   }

//   if (!checkbox1) {
//     alert("Veuillez accepter les conditions d'utilisation.");
//     return false;
//   }

//   return isValid;
// }
