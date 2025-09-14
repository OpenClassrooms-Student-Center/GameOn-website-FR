// ---------------------- MODALE DE CONFIRMATION ----------------------
function launchConfirmationModal() {
  const confirmationModal = document.getElementById("confirmation_modal");
  if (confirmationModal) confirmationModal.classList.add("show");
}
window.launchConfirmationModal = launchConfirmationModal;

document.addEventListener("DOMContentLoaded", () => {
  const confirmationModal = document.getElementById("confirmation_modal");
  if (!confirmationModal) return;

  const closeButton = document.getElementById("close_button");
  const confirmClose = document.getElementById("confirm_close");
  const form = document.getElementById("form");

  function closeConfirmationModal() {
    confirmationModal.classList.remove("show");

    // --- RÉINITIALISATION DU FORMULAIRE ET EFFACER LES MESSAGES ---
    form.reset();
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));
    const validMessage = document.getElementById("valid-message");
    if (validMessage) validMessage.textContent = "";
  }

  if (closeButton)
    closeButton.addEventListener("click", closeConfirmationModal);
  if (confirmClose)
    confirmClose.addEventListener("click", closeConfirmationModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeConfirmationModal();
  });
});

// ---------------------- SÉLECTION DU FORMULAIRE ----------------------
const form = document.getElementById("form");

// ---------------------- VALIDATION CHAMPS ----------------------
function validateFirstname() {
  // Récupération de l'élément html dont l'ID est "firstname"
  const firstnameInput = document.getElementById("firstname");
  // Récupération de la div qui sert à afficher l'erreur
  const firstnameError = document.getElementById("firstname-error");
  // Récupération de la saisie, suppression des espaces avant et après
  // pour ne pas valider un champ contenant uniquement des espaces.
  const value = firstnameInput.value.trim();
  // Si l'input est vide on affiche l'erreur
  if (value === "") {
    firstnameError.textContent = "Veuillez entrer votre prénom.";
    return false;
  }
  // Si la saisie est < 2 caractères on affiche l'erreur
  if (value.length < 2) {
    firstnameError.textContent =
      "Le prénom doit contenir au moins 2 caractères.";
    // si ce n'est pas le cas la saisie n'est pas validée
    return false;
  }
  // On efface au cas où un message était présent d'une saisie antérieure
  firstnameError.textContent = "";
  // On valide la saisie
  return true;
}

function validateLastname() {
  const lastnameInput = document.getElementById("lastname");
  const lastnameError = document.getElementById("lastname-error");
  const value = lastnameInput.value.trim();

  if (value === "") {
    lastnameError.textContent = "Veuillez entrer votre nom.";
    return false;
  }
  if (value.length < 2) {
    lastnameError.textContent = "Le nom doit contenir au moins 2 caractères.";
    return false;
  }
  lastnameError.textContent = "";
  return true;
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const value = emailInput.value.trim();
  // Regex adresse email :
  // ^                          -> début de la chaîne
  // [a-zA-Z0-9._%+-]+          -> au moins 1 caractère valide avant le @
  //                              (lettres, chiffres, point, underscore, %, +, -)
  // @                          -> caractère arobase obligatoire
  // [a-zA-Z0-9-]+              -> domaine (lettres, chiffres, tirets)
  // (\.[a-zA-Z]{2,10})+        -> au moins un point suivi de 2 à 10 lettres (extensions .fr, .com, .co.uk)
  // $                          -> fin de la chaîne
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,10})+$/;

  if (!emailRegex.test(value)) {
    emailError.textContent =
      "Veuillez entrer une adresse email valide (ex : nom@domaine.fr).";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validateBirthdate() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdate-error");
  const value = birthdateInput.value.trim();

  if (value === "") {
    birthdateError.textContent = "Veuillez indiquer une date de naissance.";
    return false;
  }
  if (!birthdateInput.checkValidity()) {
    birthdateError.textContent =
      "Le format de la date de naissance est invalide.";
    return false;
  }

  const today = new Date(); // objet Date avec date/heure actuelle
  const enteredDate = new Date(value); // convertit valeur saisie -> objet Date
  today.setHours(0, 0, 0, 0); // reset l'heure d'ajd à 00.00.00
  // = comparer uniquement dates sans heures

  // vérifier si date future
  if (enteredDate > today) {
    birthdateError.textContent =
      "La date de naissance ne peut pas être dans le futur.";
    return false;
  }
  birthdateError.textContent = "";
  return true;
}

function validateQuantity() {
  // Récupération de l'input de type number
  const quantityInput = document.getElementById("quantity");
  // Récupération de la div qui affiche le message d'erreur
  const quantityError = document.getElementById("quantity-error");
  const value = quantityInput.value.trim();

  if (value === "") {
    quantityError.textContent = "Veuillez entrer une valeur.";
    return false;
  }
  // checkValidity() vérifie automatiquement les contraintes en HTML.
  if (!quantityInput.checkValidity()) {
    quantityError.textContent = "La valeur doit être comprise entre 0 et 99.";
    return false;
  }
  quantityError.textContent = "";
  return true;
}

function validateLocation() {
  // On récupére la zone d'affichage d'erreur
  const locationError = document.getElementById("location-error");
  // On récupére tous les inputions de type radio dont le nom est "location"
  const inputs = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );
  // Par défaut rien n'est selectionné
  let selected = false;
  // On parcourt tous les boutons radios pour détecter si l'un d'eux est coché
  inputs.forEach((input) => {
    if (input.checked) selected = true;
  });
  // Si aucun n'est coché on affiche l'erreur
  if (!selected) {
    locationError.textContent = "Veuillez sélectionner un lieu de tournoi.";
    return false;
  }
  // Sinon pas de message, effacement au cas ou le message était affiché
  // d'une précédente tentative
  locationError.textContent = "";
  // Validation du champs
  return true;
}

function validateTermsConsent() {
  const termsConsent = document.getElementById("terms-consent");
  const termsError = document.getElementById("terms-error");

  if (!termsConsent.checked) {
    termsError.textContent =
      "Vous devez avoir lu et accepté les conditions pour vous inscrire.";
    return false;
  }
  termsError.textContent = "";
  return true;
}

// ---------------------- VALIDATION GLOBALE ----------------------
// vérifie le formulaire en appelant chaque fonction individuellement
function validate() {
  return (
    // && = ET logique
    // toutes les fonctions individuelles doivent retourner true -> validate() renvoie true
    // si une renvoie false -> validate() sera false et form invalide
    validateFirstname() &&
    validateLastname() &&
    validateEmail() &&
    validateBirthdate() &&
    validateQuantity() &&
    validateLocation() &&
    validateTermsConsent()
  );
}

// ---------------------- ÉVÉNEMENTS EN TEMPS RÉEL ----------------------
// Validation en direct lors de la saisie ou modification des champs
document
  .getElementById("firstname")
  .addEventListener("input", validateFirstname);
document.getElementById("lastname").addEventListener("input", validateLastname);
document.getElementById("email").addEventListener("input", validateEmail);
document
  .getElementById("birthdate")
  .addEventListener("change", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);
document
  .querySelectorAll('input[type="radio"][name="location"]')
  .forEach((input) => {
    input.addEventListener("change", validateLocation);
  });
document
  .getElementById("terms-consent")
  .addEventListener("change", validateTermsConsent);

// ---------------------- SOUMISSION DU FORMULAIRE ----------------------
form.addEventListener("submit", (event) => {
  // empeche le reload de la page
  event.preventDefault();
  // validation globale de tous les champs
  const formIsValid = validate();
  // zone d'affichage du message de validation
  const validMessage = document.getElementById("valid-message");

  if (formIsValid) {
    // --- RÉCUPÉRATION DES DONNÉES DU FORMULAIRE ---
    const formData = {
      firstname: document.getElementById("firstname").value.trim(),
      lastname: document.getElementById("lastname").value.trim(),
      email: document.getElementById("email").value.trim(),
      birthdate: document.getElementById("birthdate").value.trim(),
      quantity: document.getElementById("quantity").value.trim(),
      location: (() => {
        const inputs = document.querySelectorAll(
          'input[type="radio"][name="location"]'
        );
        for (const input of inputs)
          if (input.checked) return input.value.trim();
        return "";
      })(),
      termsConsent: document.getElementById("terms-consent").checked,
      subscribeNewsletter: document.getElementById("events-consent").checked,
    };

    console.log("Données du formulaire :", formData); // Affichage des données dans la console

    // --- AFFICHAGE MESSAGE SUCCÈS ---
    validMessage.classList.remove("form-error"); // supprime l'éventuelle classe d'erreur
    validMessage.classList.add("form-success"); // ajoute la classe succès
    validMessage.textContent = "Votre inscription a été validée, merci."; // message de validation affiché

    // --- OUVRIR LA MODALE DE CONFIRMATION ---
    if (typeof launchConfirmationModal === "function") {
      launchConfirmationModal(); // ouverture de la modale si la fonction existe
    } else {
      console.error("launchConfirmationModal n'est pas défini !"); // avertissement dans la console
    }
  }
});
