// Fonction pour basculer la navigation responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
// Ajout des écouteurs d'événements pour afficher la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Fonction pour afficher la modal
function launchModal() {
  modalbg.style.display = "block";
}
// Ajout d'un écouteur d'événement pour fermer la modal
closeBtn.addEventListener("click", function () {
  modalbg.style.display = "none"
});
// Soumission du formulaire
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Vérification de chaque champ du formulaire en une seule ligne
  const isValid = validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validateLocation() &&
    validateConditions();

  newsletterSignup(); // Enregistrement de la préférence pour la newsletter, ne change pas la validité

  // Affichage du résultat de la validation du formulaire
  if (isValid) {
    console.log("Le formulaire est validé.");
  } else {
    console.log("Le formulaire contient des erreurs. La soumission est bloquée.");
  }
});
// Ajout d'un écouteur d'événement pour valider le prénom à chaque changement
document.getElementById("first").addEventListener("input", function () {
  validateFirstName();
});
// Fonction de validation du prénom
function validateFirstName() {
  const firstNameInput = document.getElementById("first");
  const formDataElement = firstNameInput.closest(".formData"); // Trouve le parent .formData
  const firstName = firstNameInput.value.trim();
  const regex = new RegExp("^[A-Za-zÀ-ÿ]+$");
  if (firstName.length < 2) {
    formDataElement.setAttribute("data-error", "Le prénom doit contenir au moins 2 caractères et ne peut pas être vide.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else if (!regex.test(firstName)) {
    formDataElement.setAttribute("data-error", "Le prénom ne doit contenir que des lettres.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    // En cas de succès, efface les attributs pour ne pas afficher d'erreur
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
}
// Ajout d'un écouteur d'événement pour valider le nom à chaque changement
document.getElementById("last").addEventListener("input", validateLastName);
// Fonction de validation du nom
function validateLastName() {
  const lastNameInput = document.getElementById("last");
  const formDataElement = lastNameInput.closest(".formData");
  const lastName = lastNameInput.value.trim();
  const regex = new RegExp("^[A-Za-zÀ-ÿ]+$");
  if (lastName.length < 2) {
    formDataElement.setAttribute("data-error", "Le nom doit contenir au moins 2 caractères et ne peut pas être vide.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else if (!regex.test(lastName)) {
    formDataElement.setAttribute("data-error", "Le nom ne doit contenir que des lettres.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true

  }
}
// Ajout d'un écouteur d'événement pour valider l'email à chaque changement
document.getElementById("email").addEventListener("input", validateEmail);
// Fonction de validation de l'email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const formDataElement = emailInput.closest(".formData");
  const email = emailInput.value.trim();
  const regex = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "i");
  if (!regex.test(email)) {
    formDataElement.setAttribute("data-error", "L'email est invalide");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true

  }
}
// Ajout d'un écouteur d'événement pour valider la date de naissance à chaque changement
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
// Fonction de validation de la date de naissance
function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const formDataElement = birthdateInput.closest(".formData");
  const birthdate = birthdateInput.value;
  const convertBirthdate = new Date(birthdate);
  const today = new Date();
  if (birthdate === "" || convertBirthdate >= today) {
    formDataElement.setAttribute("data-error", "La date de naissance doit être antérieure à la date d'aujourd'hui et ne peut pas être vide.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
}
// Ajout d'un écouteur d'événement pour valider la quantité à chaque changement
document.getElementById("quantity").addEventListener("input", validateQuantity);
// Fonction de validation de la quantité
function validateQuantity() {
  const quantityInput = document.getElementById("quantity");
  const formDataElement = quantityInput.closest(".formData");
  const quantity = quantityInput.value;
  if (quantity === "" || isNaN(quantity)) {
    formDataElement.setAttribute("data-error", "Merci d'entrer une valeur numérique pour la quantité.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true

  }
}
// Fonction de validation de la localisation
function validateLocation() {
  const locationTags = document.querySelectorAll('input[name="location"]');
  let locationSelected = false;
  const formDataElement = document.getElementById("formData-location");
  for (let i = 0; i < locationTags.length; i++) {
    if (locationTags[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if (!locationSelected) {
    formDataElement.setAttribute("data-error", "Veuillez sélectionner une option de localisation.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
}
// Ajout d'un écouteur d'événement pour valider les conditions à chaque changement
document.getElementById("checkbox1").addEventListener("change", validateConditions);
// Fonction de validation des conditions
function validateConditions() {
  const conditionsCheckbox = document.getElementById("checkbox1");
  const formDataElement = conditionsCheckbox.closest(".formData"); // Trouvez le conteneur .formData approprié.

  if (!conditionsCheckbox.checked) {
    formDataElement.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
}
// Fonction pour enregistrer la préférence pour la newsletter
function newsletterSignup() {
  let newsletterCheckbox = document.getElementById("checkbox2");
  if (newsletterCheckbox.checked) {
    console.log("Vous avez accepté d'être prévenu des prochains évènements.")
  } else {
    console.log("Vous n'avez pas accepté d'être prévenu des prochains évènements.")
  }
}

