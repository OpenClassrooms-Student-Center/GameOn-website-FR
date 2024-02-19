
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

const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing modal event

closeBtn.addEventListener("click", function () {
  modalbg.style.display = "none"
});

// Soumission du formulaire
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  let isValid = true; // Vérifier la validiter du formulaire

  // Vérification de chaque champ du formulaire
  if (validateFirstName() === false) {
    isValid = false;
  }
  if (validateLastName() === false) {
    isValid = false;
  }
  if (validateEmail() === false) {
    isValid = false;
  }
  if (validateBirthdate() === false) {
    isValid = false;
  }
  if (validateQuantity() === false) {
    isValid = false;
  }
  if (validateLocation() === false) {
    isValid = false;
  }
  if (validateConditions() === false) {
    isValid = false;
  }

  newsletterSignup(); // Enregistrement de la préférence pour la newsletter, ne change pas la validité

  // Affichage du résultat de la validation du formulaire
  if (isValid === true) {
    console.log("Le formulaire est validé.");
  } else {
    console.log("Le formulaire contient des erreurs. La soumission est bloquée.");
  }
});

// Fonctions de validation pour chaque champ du formulaire, chaque fonction
function validateFirstName() {
  const firstNameInput = document.getElementById("first")
  const firstName = firstNameInput.value.trim(); // Supprime les espaces blancs avant et après
  const regex = new RegExp("^[a-z]+$");
  const isFirstNameValid = regex.test(firstName);
  
  // Vérifie que le prénom contient au moins 2 caractères
  if (firstName.length < 2) {
    console.log("Le prénom doit contenir au moins 2 caractères.");
    return false;
  } else if (isFirstNameValid === false) {
    console.log("Le prénom ne doit contenir que des lettres.")
    return false;
  } else {
    console.log("Le champ prénom est valide.");
    return true;
  }
}

function validateLastName() {
  const lastNameInput = document.getElementById("last");
  const lastName = lastNameInput.value.trim();
  const regex = new RegExp("^[a-z]+$");
  const isLastNameValid = regex.test(lastName);
  // Vérifie que le nom contient au moins 2 caractères
  if (lastName.length < 2) {
    console.log("Le nom doit contenir au moins 2 caractères.");
    return false;
  } else if (isLastNameValid === false) {
    console.log("Le nom ne doit contenir que des lettres.")
    return false;
  } else {
    console.log("Le champ nom est valide.");
    return true;
  }

}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  // Utilise une expression régulière pour valider l'email
  const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  const isEmailValid = regex.test(email); // test regex

  if (isEmailValid === false) {
    console.log("L'email est invalide");
    return false;
  } else {
    console.log("L'email est valide");
    return true;
  }
}

function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdate = birthdateInput.value;

  const convertBirthdate = new Date(birthdate) //convertir la date de naissance en objet Date
  const today = new Date();// récuperer la date du jour 

  // Vérifie que la date de naissance est bien remplie et antérieure à la date actuelle
  if (birthdate === "") {
    console.log("La date de naissance est vide");
    return false;
  } else if (convertBirthdate >= today) {
    console.log("La date de naissance doit être inférieure à la date d'aujourd'hui");
    return false;
  } else {
    console.log("La date de naissance est remplie");
    return true;
  }
}

function validateQuantity() {
  const quantityInput = document.getElementById("quantity");
  const quantity = quantityInput.value;

  // Vérifie que la quantité est un nombre
  if (quantity === "") {
    console.log("Le champ quantité est vide");
    return false;
  } else if (isNaN(quantity)) {
    console.log("Merci d'entrer une valeur numérique");
    return false;
  } else {
    console.log("Le champ quantité est rempli");
    return true;
  }
}

function validateLocation() {
  let locationTag = document.querySelectorAll('input[name="location"]');
  let locationSelected = false;


  // Vérifie qu'une option de localisation est sélectionnée
  for (let i = 0; i < locationTag.length; i++) {
    if (locationTag[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if (locationSelected === false) {
    console.log("Aucune localisation sélectionnée");
    return false;
  } else {
    console.log("Une localisation est sélectionnée");
    return true;
  }
}

function validateConditions() {
  let conditionsCheckbox = document.getElementById("checkbox1");

  // Vérifie que les conditions d'utilisation sont acceptées
  if (conditionsCheckbox.checked) {
    console.log("Vous avez bien accepté les conditions d'utilisations.")
    return true;
  } else {
    console.log("Vous devez accepter les conditions d'utilisation.")
    return false;
  }
}

function newsletterSignup() {
  // Enregistre si l'utilisateur souhaite être notifié des prochains événements
  let newsletterCheckbox = document.getElementById("checkbox2");

  if (newsletterCheckbox.checked) {
    console.log("Vous avez accepté d'être prévenu des prochains évènements.")
  } else {
    console.log("Vous n'avez pas accepté d'être prévenu des prochains évènements.")
  }
}