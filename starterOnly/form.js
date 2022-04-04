const modalForm = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const detailsModal = document.querySelector(".confirm_modal");
const Comfirm = document.querySelector(".thank");

const errorMessages = {
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  legalage: "Vous n'avez pas l'age requis",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

function validateInput() {
  let birthdate = new Date(birthdateInput.value);
  let today = new Date();
  let emailRegex = /^(\w[-\.]?)*@[\w]{1,}(\.\w{2,3}){1,2}$/.test(
    emailInput.value
  );
  let qtyRegex = /^[\d]{1,}$/.test(quantityInput.value);
  // \w pour tout les charactère alphanumerique  et \d? pour chiffre possible ex: Jean-paul 2
  let FirstNameRegex =
    /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(
      firstNameInput.value
    );
  let lastNameRegex =
    /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(
      lastNameInput.value
    );

  let locationValue = document.querySelector(
    ".checkbox-input[type=radio]:checked"
  );
  let locaInput = document.getElementById("location1");

  // si ma variable FirstNameRegex et egale a faux alors return false et affiche erreur
  if (FirstNameRegex === false) {
    firstNameInput.parentNode.setAttribute("data-error-visible", true);
    firstNameInput.parentNode.setAttribute(
      "data-error",
      errorMessages.firstName
    );
    return false;
  } else if (FirstNameRegex === true) {
    firstNameInput.parentNode.setAttribute("data-valid-visible", true);
  }
  // si ma variable LastNameRegex et egale a faux alors return false et affiche erreur
  if (lastNameRegex === false) {
    lastNameInput.parentNode.setAttribute("data-error-visible", true);
    lastNameInput.parentNode.setAttribute("data-error", errorMessages.lastName);
    return false;
  } else if (lastNameRegex === true) {
    lastNameInput.parentNode.setAttribute("data-valid-visible", true);
  }
  // si ma variable emailRegex et egale a faux alors return false et affiche erreur
  if (emailRegex === false) {
    emailInput.parentNode.setAttribute("data-error-visible", true);
    emailInput.parentNode.setAttribute("data-error", errorMessages.email);
    return false;
  } else if (emailRegex === true) {
    emailInput.parentNode.setAttribute("data-valid-visible", true);
  }
  // si ma variable locaValue et egale a 0 alors return false et affiche erreur
  if (locationValue === null || locationValue === undefined) {
    locaInput.parentNode.setAttribute("data-error-visible", true);
    locaInput.parentNode.setAttribute("data-error", errorMessages.location);
    return false;
  }
  // si ma variable atyRegex et egale a faux alors return false et affiche erreur

  if (qtyRegex === false || qtyRegex === undefined) {
    quantityInput.parentNode.setAttribute("data-error-visible", true);
    quantityInput.parentNode.setAttribute("data-error", errorMessages.quantity);
    return false;
  } else if (qtyRegex === true || qtyRegex !== undefined) {
    quantityInput.parentNode.setAttribute("data-valid-visible", true);
  }
  if (!checkboxInput === checkboxInput.checked) {
    checkboxInput.parentNode.setAttribute("data-error-visible", true);
    checkboxInput.parentNode.setAttribute("data-error", errorMessages.checkbox);
    return false;
  }
  if (birthdate.getFullYear() >= today.getFullYear() - 10) {
    birthdateInput.parentNode.setAttribute("data-error-visible", true);
    birthdateInput.parentNode.setAttribute(
      "data-error",
      errorMessages.legalage
    );
    return false;
  } else return true;
}

function validate(event) {
  // Ne recharge pas
  event.preventDefault();
  // variable -> input avec erreur
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  // pour chaque input invalid qui devient valid retire l'erreur
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
  // Si retourne faux alors lancer animation
  if (validateInput() === false) {
    modalContent.classList.add("content_animated_invalid");
  }
  // Si retourne vraix alors affiche confirmation et form reset
  if (validateInput() === true) {
    Comfirm.style.transform = "scale(1)";
    form.reset();
  }
}
