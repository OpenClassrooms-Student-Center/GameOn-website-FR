// Fonction pour gérer le menu responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  // Si le menu est en mode normal, passe en mode responsive
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    // Si le menu est en mode responsive, passe en mode normal
    x.className = "topnav";
  }
}

// Récupération des éléments du DOM
const modalbg = document.querySelector(".bground"); // Fond de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons pour ouvrir la modale
const formData = document.querySelectorAll(".formData"); // Données du formulaire
const modalClose = document.querySelector(".close"); // Bouton pour fermer la modale

// Événement pour ouvrir et fermer la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModal);

var modal = document.querySelector(".content"); // Contenu de la modale

// Fonction pour fermer la modale
function closeModal() {
  modal.classList.add("closing"); // Ajoute la clase pour l'animation de fermeture
  modal.classList.remove("opening"); // Supprime la classe pour l'animation d'ouverture

  // Ferme la modale après l'animation de fermeture
  setTimeout(function () {
    modalbg.style.display = "none";
    modal.classList.remove("closing");
  }, 500);
}

// Fonction pour ouvrir la modale
function launchModal() {
  modalbg.style.display = "block"; // Affiche la modale
  modal.classList.add("opening"); // Ajoute l'animation d'ouverture

  // Désactive le bouton de soumission lorsque la modale est ouverte
  submitButton.disabled = true;
  submitButton.style.backgroundColor = "grey";
}

// Récupération des champs du formulaire
var firstName = document.getElementById("first"); // Prénom
var lastName = document.getElementById("last"); // Nom
var email = document.getElementById("email"); // Email
var birthdate = document.getElementById("birthdate"); // Date de naissance
var quantity = document.getElementById("quantity"); // Quantité de tournois
var radios = document.querySelectorAll('input[name="location"]'); // Lieu
var terms = document.getElementById("checkbox1"); // Conditions générales
var submitButton = document.querySelector('input[type="submit"]'); // Bouton de soumission

// Vérification que tous les champs sont remplis avant validation
firstName.addEventListener("input", validateForm); // Prénom
lastName.addEventListener("input", validateForm); // Nom
email.addEventListener("input", validateForm); // Email
birthdate.addEventListener("input", validateBirthdate); // Date de naissance
quantity.addEventListener("input", validateForm); // Quantité de tournois
radios.forEach((r) => r.addEventListener("input", validateForm)); // Lieu
terms.addEventListener("input", validateForm); // Conditions générales

// Fonction pour valider le formulaire
function validateForm() {
  // Vérfie si au moins un champ est rempli pour activer le bouton de soumission
  var isFormFilled =
    firstName.value ||
    lastName.value ||
    email.value ||
    birthdate.value ||
    quantity.value ||
    document.querySelector('input[name="location"]:checked') ||
    terms.checked;

  // Active ou désactive le bouton de soumission
  submitButton.disabled = !isFormFilled;

  // Change la couleur du bouton de soumission si désactivé
  if (submitButton.disabled) {
    submitButton.style.backgroundColor = "grey";
  } else {
    submitButton.style.backgroundColor = ""; // Reset à la couleur par default
  }

  // Enlève les messages d'erreur et les bordures rouges si tous les champs sont remplis correctement
  clearError(firstName);
  clearError(lastName);
  clearError(email);
  clearError(birthdate);
  clearError(quantity);
  clearError(document.querySelector('input[name="location"]'));
  clearError(terms);
}

// Fonction pour valider la date de naissance
function validateBirthdate() {
  clearError(birthdate);

  var birthdateValue = new Date(birthdate.value);

  // Vérifie si la date de naissance est valide
  if (!birthdate.value || isNaN(birthdateValue.getTime())) {
    displayError(birthdate, "La date de naissance n'est pas valide");
    return false;
  }
  return true;
}

// Fonctions pour afficher et enlever les messages d'erreur
function clearError(input) {
  // Retire le message d'erreur s'il existe
  var existingError = input.parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Reset la couleur de la bordure
  input.style.borderColor = "";
}

// Fonction pour afficher un message d'erreur
function displayError(input, message) {
  // Créer un élément pour le message d'erreur avec la classe "error-message" et le texte du message
  var error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;

  // Ajoute le message d'erreur après l'élément parent de l'input
  input.parentElement.appendChild(error);

  // Change la couleur de la bordure de l'input en rouge
  input.style.borderColor = "red";
}

// Événement pour soumettre le formulaire
document.querySelector("form").addEventListener("submit", function (event) {
  // Prévient le comportement par défaut du formulaire
  event.preventDefault();

  // Valide les champs du formulaire
  var isValid = true;

  // Vérifie si les champs sont remplis correctement
  if (firstName.value.length < 2) {
    displayError(firstName, "Le prénom doit comporter au moins 2 caractères"); // Si le prénom est vide ou a moins de 2 caractères, affiche un message d'erreur
    isValid = false;
  } else if (lastName.value.length < 2) {
    displayError(
      lastName,
      "Le nom de famille doit comporter au moins 2 caractères" // Si le nom est vide ou a moins de 2 caractères, affiche un message d'erreur
    );
    isValid = false;
  } else if (!email.value.includes("@")) {
    displayError(email, "L'adresse électronique n'est pas valide"); // Si l'email ne contient pas de @, affiche un message d'erreur
    isValid = false;
  } else if (!validateBirthdate()) {
    isValid = false; // On ne fait rien ici, la validation de la date de naissance est faite dans validateBirthdate()
  } else if (isNaN(quantity.value) || quantity.value === "") {
    displayError(quantity, "Le nombre de tournois doit être inscrit"); // Si la quantité de tournois est vide, affiche un message d'erreur
    isValid = false;
  } else if (isNaN(quantity.value)) {
    displayError(
      quantity,
      "Le nombre de tournois doit être une valeur numérique" // Si la quantité de tournois n'est pas un nombre, affiche un message d'erreur
    );
    isValid = false;
  } else if (!document.querySelector('input[name="location"]:checked')) {
    displayError(
      document.querySelector('input[name="location"]'),
      "Un lieu doit être sélectionné" // Si aucun lieu n'est sélectionné, affiche un message d'erreur
    );
    isValid = false;
  } else if (!terms.checked) {
    displayError(terms, "Les conditions générales doivent être acceptées"); // Si les conditions générales ne sont pas acceptées, affiche un message d'erreur
    isValid = false;
  }

  // Validation du formulaire uniquement si tous les champs sont remplis
  if (isValid) {
    // Récupère le contenu de la modale
    var modalContent = document.querySelector(".modal-body");

    // Vérifie si le contenu de la modale existe
    if (modalContent) {
      // Supprime tous les enfants du contenu de la modale
      while (modalContent.firstChild) {
        modalContent.firstChild.remove();
      }

      // Crée un message de remerciement
      var thankYouMessage = document.createElement("h2");
      thankYouMessage.textContent = "Merci pour votre inscription";
      thankYouMessage.style.textAlign = "center"; // Centre le texte
      thankYouMessage.className = "thank-you-msg"; // Ajoute une classe pour le style

      // Crée un bouton de fermeture
      var closeButton = document.createElement("input");
      closeButton.type = "submit";
      closeButton.value = "Fermer";
      closeButton.className = "btn-close"; // Ajoute une classe pour le style

      // Ajoute le message de remerciement et le bouton de fermeture au contenu de la modale
      modalContent.appendChild(thankYouMessage);
      modalContent.appendChild(closeButton);

      // Ajoute un écouteur d'événements au bouton de fermeture pour fermer la modale lorsqu'il est cliqué
      closeButton.addEventListener("click", closeModal);
    }
  }
});
