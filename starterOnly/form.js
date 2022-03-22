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
const modalbg = document.querySelector(".bground");
const Comfirm = document.querySelector('.thank');

const errorMessages = {
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};

function validateInput() {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailInput.value
  );
  let qtyRegex = /^[0-9]+$/.test(quantityInput.value);
  let FirstNameRegex = /^[A-Za-z]{2}/.test(firstNameInput.value);
  let lastNameRegex = /^[A-Za-z]{2}/.test(lastNameInput.value);
  let dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(
    birthdateInput.value
  );
  let locaValue = document.querySelectorAll(
    ".checkbox-input[type=radio]:checked"
  );
  let locaInput = document.getElementById('location1');

  if (FirstNameRegex == false) {
    firstNameInput.parentNode.setAttribute("data-error-visible", true);
    firstNameInput.parentNode.setAttribute(
      "data-error",
      errorMessages.firstName
    );
    return false;
  }

  if (lastNameRegex == false) {
    lastNameInput.parentNode.setAttribute("data-error-visible", true);
    lastNameInput.parentNode.setAttribute("data-error", errorMessages.lastName);
    return false;
  }

  if (emailRegex == false) {
    emailInput.parentNode.setAttribute("data-error-visible", true);
    emailInput.parentNode.setAttribute("data-error", errorMessages.email);
    return false;
  }

  if (locaValue.length == 0) {
    locaInput.parentNode.setAttribute("data-error-visible", true);
    locaInput.parentNode.setAttribute("data-error", errorMessages.location);
    return false;
  } 

  if (qtyRegex == false) {
    quantityInput.parentNode.setAttribute("data-error-visible", true);
    quantityInput.parentNode.setAttribute("data-error", errorMessages.quantity);
    return false;
  }

  if (dateRegex == false) {
    birthdateInput.parentNode.setAttribute("data-error-visible", true);
    birthdateInput.parentNode.setAttribute(
      "data-error",
      errorMessages.birthdate
    );
    return false;
  } else return true;
}

function validate(event) {
  event.preventDefault();
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
  if (!validateInput() !== false) {
    modalContent.classList.add("content_animated_invalid");
  }
  if (!validateInput() !== true) {
    Comfirm.style.transform = 'scale(1)';
    form.reset();
  }
}
