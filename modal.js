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
const modalCloseBtn = document.querySelector(".close");
const confirmCloseBtn = document.querySelector(".btn-confirm-close");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const confirmBody = document.querySelector(".confirm-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  form.style.display = "initial";
  modalbg.style.display = "block";
  setAttributeToBirthdate();
}

// Close modal
const closeModal = () => {
  modalbg.style.display = "none";
  confirmBody.style.display = "none";
  removeAllErrors();
};

// Close modal event
modalCloseBtn.addEventListener("click", closeModal);
confirmCloseBtn.addEventListener("click", closeModal);

// Fonction pour gérer l'affichage des erreurs
const setError = (element, message) => {
  element.parentElement.setAttribute("data-error", message);
  element.parentElement.dataset.errorVisible = "true";
};

// Fonction pour masquer les erreurs
const clearError = (element) => {
  element.parentElement.removeAttribute("data-error");
  element.parentElement.dataset.errorVisible = "false";
};

// Fonction pour supprimer tous les attributs data-error et data-error-visible
const removeAllErrors = () => {
  const elementsWithError = document.querySelectorAll("[data-error]");

  elementsWithError.forEach((element) => {
    element.removeAttribute("data-error");
    element.dataset.errorVisible = "false";
  });
};

// Set Attribute to birthdate
const setAttributeToBirthdate = () => {
  const birthdate = document.querySelector("#birthdate");
  const currentYear = new Date().getFullYear();

  birthdate.setAttribute("min", `${currentYear - 100}-01-01`);
  birthdate.setAttribute("max", `${currentYear - 18}-01-01`);
};

// (1) Validation du prénom
const validateFirstName = (firstName) => {
  if (!firstName.value || firstName.value.length < 2) {
    setError(
      firstName,
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    return false;
  } else {
    clearError(firstName);
    return true;
  }
};

// (2) Validation du nom de famille
const validateLastName = (lastName) => {
  if (!lastName.value || lastName.value.length < 2) {
    setError(
      lastName,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    return false;
  } else {
    clearError(lastName);
    return true;
  }
};

// (3) Validation de l'adresse email
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    setError(email, "Vous devez saisir un email valide.");
    return false;
  } else {
    clearError(email);
    return true;
  }
};

// (4) Validation de la date de naissance
const validateBirthdate = (birthdate) => {
  if (!birthdate.value) {
    setError(birthdate, "Vous devez entrer votre date de naissance.");
    return false;
  } else {
    clearError(birthdate);
    return true;
  }
};

// (5) Validation du nombre de concours
const validateQuantity = (quantity) => {
  if (!quantity.value || quantity.value < 0 || isNaN(quantity.value)) {
    setError(quantity, "Vous devez saisir un nombre.");
    return false;
  } else {
    clearError(quantity);
    return true;
  }
};

// (6) Validation du choix d'une localisation
const validateLocation = (locations, location6) => {
  const selectedLocation = Array.from(locations).some(
    (location) => location.checked
  );

  if (!selectedLocation && location6) {
    setError(location6, "Vous devez choisir une option.");
    return false;
  } else if (location6) {
    clearError(location6);
    return true;
  }
};

// (7) Validation de l'acceptation des conditions générales
const validateTermsAccepted = (termsAccepted) => {
  if (!termsAccepted.checked) {
    setError(termsAccepted, "Vous devez acceptez les termes et conditions.");
    return false;
  } else {
    clearError(termsAccepted);
    return true;
  }
};

// Fonction principale de validation du formulaire
const validFormSubmit = (formDataObject) => {
  let formDataIsValid = true;

  formDataIsValid =
    validateFirstName(formDataObject.firstName) && formDataIsValid;

  formDataIsValid =
    validateLastName(formDataObject.lastName) && formDataIsValid;

  formDataIsValid = validateEmail(formDataObject.email) && formDataIsValid;

  formDataIsValid =
    validateBirthdate(formDataObject.birthdate) && formDataIsValid;

  formDataIsValid =
    validateQuantity(formDataObject.quantity) && formDataIsValid;

  formDataIsValid =
    validateLocation(formDataObject.locations, formDataObject.location6) &&
    formDataIsValid;

  formDataIsValid =
    validateTermsAccepted(formDataObject.termsAccepted) && formDataIsValid;

  return formDataIsValid;
};

const validate = () => {
  const formDataObject = {
    firstName: document.querySelector("#first"),
    lastName: document.querySelector("#last"),
    email: document.querySelector("#email"),
    birthdate: document.querySelector("#birthdate"),
    quantity: document.querySelector("#quantity"),
    locations: document.querySelectorAll('input[name="location"]'),
    location6: document.querySelector("#location6"),
    termsAccepted: document.querySelector("#checkbox1"),
    wantsUpdates: document.querySelector("#checkbox2"),
  };

  return validFormSubmit(formDataObject);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid = validate();
  if (isValid) {
    const formData = new FormData(this);
    form.style.display = "none";
    confirmBody.style.display = "grid";
  }
});
