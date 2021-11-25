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
const closeModalElement = document.querySelector(".close");
// get the form
const form = document.querySelector("form[data-form]");
// Get each input of the form
// const firstnameInput = document.querySelector("#first");
// const lastnameInput = document.querySelector("#last");
// const emailInput = document.querySelector("#email");
// const birthdateInput = document.querySelector("#birthdate");
// const quantityInput = document.querySelector("#quantity");
// const lastnameInput = document.querySelector("#last");
// const lastnameInput = document.querySelector("#last");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// === Close modal by click on the cross ===

// function to close the modal
const closeModal = () => (modalbg.style.display = "none");

// listen the event on the cross of the modal for closing it
closeModalElement.addEventListener("click", closeModal);

// === Form validation ===

// Check if form exist
if (form.lenght > 0) {
  // Loop on all elements
  for (let formElement of form) {
    // Get all inputs that have to be validated (have data-validate attribute)
    const inputs = formElement.querySelectorAll("input[data-validate]");

    // Listen the form submit event
    form.addEventListener("submit", submitForm.bind(form, inputs));
  }

  // Loops trough inputsto check them
  inputs.forEach((input) => {
    // Add input event to all inputs to check if valid with validateInput function
    input.addEventListener("input", validateInput);
  });
}

function submitForm(inputs, event) {
  event.preventDefault();
  const errors = [];
}

// Check if input is valid
// function check(input) {
// const input = this;
//   validateInput(input);
// }

// Validate input
function validateInput(input) {
  // get the value and error element
  const value = input.value;
  // const dataErrorAttr = input.closest('div[data-formData]').querySelector('[data-error]');
  // Declare errorMessage variable for displaying error messages and assign null by default
  let errorMessage = null;
  let formDataElement = input.closest("div[data-formData]");

  // Check if input has data-required attribute and if the value is empty
  // and if the input is not radio or checkbox
  if (
    input.type !== "radio" &&
    input.type !== "checkbox" &&
    input.dataset.required !== undefined &&
    input.dataset.minlength !== undefined &&
    value.length < +input.dataset.minlength
  ) {
    formDataElement.setAttribute("data-error-visible", "true");
    errorMessage = formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. S'il vous plaît, entrez au moins ${input.dataset.minlength} caractères."
    );
  }

  // Check if input has data-email attribute and if email is not valid
  if (input.dataset.email !== undefined && !validateEmail(value)) {
    formDataElement.setAttribute("data-error-visible", "true");
    errorMessage = formDataElement.setAttribute(
      "data-error",
      "Veuillez s'il vous plaît entrer une adresse email valide."
    );
  }

  // Validate email
  function validateEmail(email) {
    var regexMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexMail.test(String(email).toLowerCase());
  }

  // Check if input type is date and if the value is empty
  if (
    input.type === "date" &&
    input.dataset.required !== undefined &&
    value === ""
  ) {
    formDataElement.setAttribute("data-error-visible", "true");
    errorMessage = formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. S'il vous plaît, veuillez entrer une date."
    );
  }

  // Check if input type is number and if the value is empty
  if (
    input.type === "number" &&
    input.dataset.required !== undefined &&
    value === ""
  ) {
    formDataElement.setAttribute("data-error-visible", "true");
    errorMessage = formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. S'il vous plaît, veuillez entrer un nombre compris entre 0 et 99."
    );
  }

  // Check if input is radio
  if (input.type === "radio") {
    // Get all radio inputs in the group
    const radios = formDataElement.querySelectorAll('input[type="radio"]');
    let isChecked = false;
    let errorMsg = "";

    // Loop through radios and check if any radio is checked and if is checked,
    // set isChecked to true
    radios.forEach((radio) => {
      if (radio.checked) {
        isChecked = true;
      }

      if (!isChecked) {
        formDataElement.setAttribute("data-error-visible", "true");
        errorMessage = formDataElement.setAttribute(
          "data-error",
          "Ce champ est requis. S'il vous plaît, veuillez sélectionner une réponse."
        );
      }
    });
  }

  // Check if input is checkbox and it is not checked
  if (
    input.type === "checkbox" &&
    input.dataset.required !== undefined &&
    !input.checked
  ) {
    formDataElement.setAttribute("data-error-visible", "true");
    errorMessage = formDataElement.setAttribute(
      "data-error",
      "Veuillez accepter les conditions générales pour continuer."
    );
  }
}
