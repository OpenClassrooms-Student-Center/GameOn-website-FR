// Fonction pour basculer la classe CSS de la barre de navigation, rendant le menu responsive
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// Sélection des éléments du DOM nécessaires pour manipuler la modale et le formulaire
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtnCross = document.querySelector(".close");
const form = document.querySelector("form");

// Ajoute des écouteurs d'événements sur chaque bouton pour ouvrir la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour afficher la modale
function launchModal() {
  resetFormAndModal(); // Réinitialise le formulaire et la modale avant de l'afficher
  modalbg.style.display = "block";
};

// Écouteur d'événement pour fermer la modale
closeBtnCross.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Gère la soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Vérifie la validité de chaque champ du formulaire
  const isValid = validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validateLocation() &&
    validateConditions();

  newsletterSignup(); // Gère l'inscription à la newsletter indépendamment de la validité du formulaire

  if (isValid) {
    console.log("Le formulaire est validé.");
    form.style.display = 'none'; // Masque le formulaire
    displayConfirmationMessage("Merci pour votre inscription"); // Affiche le message de confirmation
  } else {
    console.log("Le formulaire contient des erreurs. La soumission est bloquée.");
  }
});

// Écouteurs d'événements pour la validation en temps réel des champs du formulaire
document.getElementById("first").addEventListener("input", validateFirstName);
document.getElementById("last").addEventListener("input", validateLastName);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);
document.getElementById("checkbox1").addEventListener("change", validateConditions);

// Réinitialise le formulaire et le contenu de la modale
function resetFormAndModal() {
  form.reset(); // Réinitialise les champs du formulaire
  form.style.display = 'block'; // Assure que le formulaire est visible

  // Supprime le message de confirmation s'il existe 
  const successMessage = document.querySelector('.form-confirmation');
  if (successMessage) {
    successMessage.remove();
  }

  // Supprime le bouton fermer s'il existe 
  const closeButton = document.querySelector('.btn-close');
  if (closeButton) {
    closeButton.remove();
  }
};

// Affiche un message de confirmation dans la modale
function displayConfirmationMessage(message) {
  const existingSuccessMessage = document.querySelector('.form-confirmation');
  if (existingSuccessMessage) {
    existingSuccessMessage.remove();
  }

  const successMessage = document.createElement('p');
  successMessage.textContent = message;
  successMessage.classList.add('form-confirmation');
  const modalBody = document.querySelector('.modal-body');
  modalBody.appendChild(successMessage);

  const closeButton = document.createElement('button');
  closeButton.textContent = "Fermer";
  closeButton.classList.add('button', 'btn-submit', 'btn-close');
  closeButton.onclick = function () {
    modalbg.style.display = 'none';
    resetFormAndModal(); // Réinitialise la modale pour la prochaine ouverture
  };
  modalBody.appendChild(closeButton);

  form.style.display = 'none'; // Masque le formulaire pour afficher uniquement le message de confirmation
};

// Fonction de validation du prénom
function validateFirstName() {
  const firstNameInput = document.getElementById("first");
  const formDataElement = firstNameInput.closest(".formData"); // Trouve le parent .formData
  const firstName = firstNameInput.value.trim();
  const regex = new RegExp("^[A-Za-zÀ-ÿ]+$");

  // Si le prénom est trop court ou ne correspond pas au regex, affiche un message d'erreur.
  if (firstName.length < 2 || !regex.test(firstName)) {
    formDataElement.setAttribute("data-error", "Le prénom doit contenir au moins 2 caractères et ne peut pas être vide.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    // En cas de succès, efface les attributs pour ne pas afficher d'erreur
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
};

// Fonction de validation du nom
function validateLastName() {
  const lastNameInput = document.getElementById("last");
  const formDataElement = lastNameInput.closest(".formData");
  const lastName = lastNameInput.value.trim();
  const regex = new RegExp("^[A-Za-zÀ-ÿ]+$");

  if (lastName.length < 2 || !regex.test(lastName)) {
    formDataElement.setAttribute("data-error", "Le nom doit contenir au moins 2 caractères et ne peut pas être vide.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true

  }
};

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
};


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
};


// Fonction de validation de la quantité
function validateQuantity() {
  const quantityInput = document.getElementById("quantity");
  const formDataElement = quantityInput.closest(".formData");
  const quantity = parseInt(quantityInput.value); // Convertir la valeur en nombre entier

  if (isNaN(quantity) || quantity < 0) { // Vérifier si la quantité est NaN ou négative
    formDataElement.setAttribute("data-error", "Merci d'entrer une valeur numérique positive pour la quantité.");
    formDataElement.setAttribute("data-error-visible", "true");
    return false; // La validation échoue, retourne false
  } else {
    formDataElement.setAttribute("data-error", "");
    formDataElement.removeAttribute("data-error-visible");
    return true; // La validation réussit, retourne true
  }
};

// Fonction de validation de la localisation
function validateLocation() {
  const locationTags = document.querySelectorAll('input[name="location"]');
  const formDataElement = document.getElementById("formData-location");
  let locationSelected = false;

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
};

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
};

// Fonction pour enregistrer la préférence pour la newsletter
function newsletterSignup() {
  let newsletterCheckbox = document.getElementById("checkbox2");
  if (newsletterCheckbox.checked) {
    console.log("Vous avez accepté d'être prévenu des prochains évènements.")
  } else {
    console.log("Vous n'avez pas accepté d'être prévenu des prochains évènements.")
  }
}

