function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const UI = {
  modal: document.querySelector(".modal"),
  openModalBtn: document.querySelector(".open-modal-btn"),
  closeModalBtn: document.querySelector(".close-modal-btn"),
  closeThanksModalBtn: document.querySelector(".close-thanks-modal-btn"),
  submitModalFormBtn: document.querySelector(".submit-modal-form-btn"),
  thanksModal: document.querySelector(".thanks-modal"),
  modalForm: {
    firstNameInput: document.querySelector("#first"),
    lastNameInput: document.querySelector("#last"),
    emailInput: document.querySelector("#email"),
    birthDateInput: document.querySelector("#birthdate"),
    eventCountInput: document.querySelector("#quantity"),
    cityChoiceInputs: document.getElementsByName("location"),
    conditionsInput: document.querySelector("#checkbox1"),
    newsletterInput: document.querySelector("#checkbox2"),
  },
};

// Display modal
function displayModal() {
  UI.modal.style.display = "block";
}
UI.openModalBtn.addEventListener("click", displayModal);

// Close modal
function closeModal() {
  UI.modal.style.display = "none";
  resetForm(UI.modalForm);
}
UI.closeModalBtn.addEventListener("click", closeModal);

// Form validation
function isNameValid(name) {
  return name && name.length >= 2;
}

function isEmailValid(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function isBirthDateValid(birthDate) {
  const regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
  return regex.test(birthDate);
}

function isEventCountValid(eventCount) {
  return parseInt(eventCount, 10) >= 0;
}

function isCityChosen(cityChoices) {
  return Array.from(cityChoices).find((cityChoice) => cityChoice.checked);
}

function areConditionsChecked() {
  return UI.modalForm.conditionsInput.checked;
}

function isFormValid() {
  let isValid = true;

  if (!isNameValid(UI.modalForm.firstNameInput.value)) {
    UI.modalForm.firstNameInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.firstNameInput.parentElement.dataset.error =
      "Veuillez entrer 2 caractères ou plus pour ce champ.";
    isValid = false;
  } else {
    UI.modalForm.firstNameInput.parentElement.dataset.errorVisible = false;
  }

  if (!isNameValid(UI.modalForm.lastNameInput.value)) {
    UI.modalForm.lastNameInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.lastNameInput.parentElement.dataset.error =
      "Veuillez entrer 2 caractères ou plus pour ce champ.";
    isValid = false;
  } else {
    UI.modalForm.lastNameInput.parentElement.dataset.errorVisible = false;
  }

  if (!isEmailValid(UI.modalForm.emailInput.value)) {
    UI.modalForm.emailInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.emailInput.parentElement.dataset.error =
      "Veuillez entrer une adresse email valide.";
    isValid = false;
  } else {
    UI.modalForm.emailInput.parentElement.dataset.errorVisible = false;
  }

  if (!isBirthDateValid(UI.modalForm.birthDateInput.value)) {
    UI.modalForm.birthDateInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.birthDateInput.parentElement.dataset.error =
      "Veuillez entrer votre date de naissance.";
    isValid = false;
  } else {
    UI.modalForm.birthDateInput.parentElement.dataset.errorVisible = false;
  }

  if (!isEventCountValid(UI.modalForm.eventCountInput.value)) {
    UI.modalForm.eventCountInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.eventCountInput.parentElement.dataset.error =
      "Veuillez choisir une option.";
    isValid = false;
  } else {
    UI.modalForm.eventCountInput.parentElement.dataset.errorVisible = false;
  }

  if (!isCityChosen(UI.modalForm.cityChoiceInputs)) {
    UI.modalForm.cityChoiceInputs[0].parentElement.dataset.errorVisible = true;
    UI.modalForm.cityChoiceInputs[0].parentElement.dataset.error =
      "Veuillez choisir une option.";
    isValid = false;
  } else {
    UI.modalForm.cityChoiceInputs[0].parentElement.dataset.errorVisible = false;
  }

  if (!areConditionsChecked()) {
    UI.modalForm.conditionsInput.parentElement.dataset.errorVisible = true;
    UI.modalForm.conditionsInput.parentElement.dataset.error =
      "Veuillez vérifier que vous acceptez les termes et conditions.";
    isValid = false;
  } else {
    UI.modalForm.conditionsInput.parentElement.dataset.errorVisible = false;
  }

  return isValid;
}

// Reset form
function resetForm(form) {
  Object.keys(form).forEach((key) => {
    if (form[key].type === "checkbox") {
      form[key].checked = false;
    } else if (key === "cityChoiceInputs") {
      Array.from(form[key]).forEach(
        (cityChoice) => (cityChoice.checked = false)
      );
    } else {
      form[key].value = "";
      form[key].parentElement.dataset.errorVisible = false;
    }
  });
}

// Submit form
function submitForm(form) {
  const cityChoice = Array.from(form.cityChoiceInputs).find(
    (cityChoice) => cityChoice.checked
  ).value;

  const requestContent = {
    firstName: form.firstNameInput.value,
    lastName: form.lastNameInput.value,
    email: form.emailInput.value,
    birthDate: form.birthDateInput.value,
    eventCount: form.eventCountInput.value,
    cityChoice,
    conditions: true,
    newsletter: form.newsletterInput.checked,
  };

  fetch("url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestContent),
  });
}

UI.submitModalFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isFormValid()) {
    console.log("Form is not valid");
    return;
  }
  submitForm(UI.modalForm);
  UI.thanksModal.style.display = "flex";
});

// Close thanks modal
function closeThanksModal() {
  UI.modal.style.display = "none";
  UI.thanksModal.style.display = "none";
  resetForm(UI.modalForm);
}
UI.closeThanksModalBtn.addEventListener("click", closeThanksModal);
