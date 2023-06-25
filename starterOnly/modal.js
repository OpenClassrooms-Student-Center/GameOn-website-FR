// Responsive de la barre de navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Elements du DOM
const modalbg = document.querySelector(".bground");
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const modalForm = document.querySelector("form");
const modalThanks = document.querySelector(".thanks");
const signUpButtons = document.querySelectorAll(".btn-signup");

// Déclencher l'ouverture du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ouvrir le formulaire
function launchModal() {
  modalbg.style.display = "block";
  // On réinitialise les propriétés qui ont été ajoutée dans closeModal()
  modalbg.style.animationName = "none";
  modalcontent.style.animationName = "modalopen";
}

// Déclencher la fermeture du formulaire
modalCloseBtn.addEventListener("click", closeModal);

// Fermer le formulaire
function closeModal() {
  const closeAnimation = "modalclose 0.8s";

  modalcontent.style.animation = closeAnimation;
  modalbg.style.animation = closeAnimation;

  // L'élément modalbg disparaît seulement à la fin de l'animation
  modalbg.addEventListener("animationend", function () {
    if (modalbg.style.animationName === "modalclose") {
      modalbg.style.display = "none";
    }
  });
}

// Elements du formulaire
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournamentLocation = document.getElementById("location1");
const locationInputs = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById("checkbox1");

// Date de naissance maximale assignée à la date d'aujourd'hui
// Aucune limite d'âge
birthdate.max = new Date().toISOString().split("T")[0];

// Fonction générique de validation de chaque champ du formulaire
function validateInput(inputElement, errorMessage) {
  if (!inputElement.checkValidity()) {
    showError(inputElement, errorMessage);
  } else {
    hideError(inputElement);
  }
}

// Fonctions pour faire apparaître ou disparaître une erreur sous un champ
function showError(inputElement, errorMessage) {
  inputElement.parentNode.setAttribute("data-error-visible", "true");
  inputElement.parentNode.setAttribute("data-error", errorMessage);
}

function hideError(inputElement) {
  inputElement.parentNode.setAttribute("data-error-visible", "false");
  inputElement.parentNode.setAttribute("data-error", "");
}

// Déclencher les fonctions de validation à chaque changement dans les 5 premiers champs
firstName.addEventListener("input", () =>
  validateInput(firstName, "Veuillez entrer 2 caractères ou plus.")
);
lastName.addEventListener("input", () =>
  validateInput(lastName, "Veuillez entrer 2 caractères ou plus.")
);
email.addEventListener("input", () =>
  validateInput(email, "Veuillez entrer une adresse e-mail valide.")
);
// birthdate a besoin de 2 triggers
// onkeyup permet de détecter les entrées au clavier
birthdate.addEventListener("keyup", () =>
  validateInput(birthdate, "Veuillez entrer une date valide.")
);
// onchange permet de détecter les sélections de date à travers le widget calendrier
birthdate.addEventListener("change", () =>
  validateInput(birthdate, "Veuillez entrer une date valide.")
);
quantity.addEventListener("input", () =>
  validateInput(quantity, "Veuillez entrer un nombre entre 0 et 99.")
);

// Validation du formulaire
function validate(event) {
  // Appeler les fonctions de validation individuelles
  validateInput(firstName, "Veuillez entrer 2 caractères ou plus.");
  validateInput(lastName, "Veuillez entrer 2 caractères ou plus.");
  validateInput(email, "Veuillez entrer une adresse e-mail valide.");
  validateInput(birthdate, "Veuillez entrer une date valide.");
  validateInput(quantity, "Veuillez entrer un nombre entre 0 et 99.");
  validateInput(tournamentLocation, "Veuillez sélectionner une ville.");
  validateInput(checkbox1, "Veuillez accepter les conditions d'utilisation.");

  // Liste de tous les champs montrant des erreurs de validation
  var errorElements = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );

  // Empêcher la fermeture automatique du formulaire
  event.preventDefault();

  // S'il existe au moins une erreur
  if (errorElements.length > 0) {
    // Définir le focus sur le premier champ en erreur
    errorElements[0].querySelector(".text-control").focus();
  } else {
    // Afficher la confirmation d'inscription
    modalForm.style.display = "none";
    modalThanks.style.display = "block";
    // Désactiver les boutons "Je m'inscris" (format desktop et mobile)
    // pour ne pas pouvoir remplir à nouveau le formulaire
    signUpButtons.forEach((button) => {
      button.disabled = true;
      button.textContent = "Merci pour votre inscription";
      button.style.backgroundColor = "#3876ac";
      button.style.cursor = "default";
    });

    // Réinitialiser le formulaire (pour Firefox)
    // pour avoir un formulaire vierge au rafraîchissement de la page
    modalForm.reset();
  }
}
