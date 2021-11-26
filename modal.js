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
// get the form element
const forms = document.querySelectorAll("form[data-form]");

// =================================
// === Modal opening and closing ===
// =================================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// === Close the modal by click on the cross ===

// function to close the modal
const closeModal = () => (modalbg.style.display = "none");

// listen the event click on the cross
closeModalElement.addEventListener("click", closeModal);

// =======================
// === Form validation ===
// =======================

// Check if form exist
if (forms.length > 0) {
  // Loop on all elements
  for (let form of forms) {
    // Get all inputs that have to be validated (have data-validate attribute)
    const inputs = form.querySelectorAll("[data-validate]");

    // Loops trough inputs to check them
    inputs.forEach((input) => {
      // Add input event to all inputs to check them with checkInput function
      input.addEventListener("submit", checkInput);
    });

    // Listen the form submit event and submit the form
    form.addEventListener("submit", submitForm.bind(form, inputs));
  }
}

// Check input
function checkInput() {
  const input = this;
  validateInput(input);
}

// Validate input
function validateInput(input) {
  // get the value and formData element for assigning error message
  // (via CSS pseudo-elements)
  const value = input.value;
  let formDataElement = input.closest("[data-formData]");
  // Declare error variable for displaying error messages and assign null by default
  let error = null;

  // Check if : -> if the input is not radio or checkbox
  // -> and input has data-required attribute
  //  -> and the value is empty and the value has a required minlength
  // -> the input value is < to the minlength
  if (
    input.type !== "radio" &&
    input.type !== "checkbox" &&
    input.dataset.required !== undefined &&
    input.dataset.minlength !== undefined &&
    value.length < +input.dataset.minlength
  ) {
    // Set data-error-visible attribute to true for applying error styles
    // formDataElement.setAttribute("data-error-visible", "true");
    // Set an error message to the data-error attribute for display to the user
    formDataElement.setAttribute(
      "data-error",
      `Ce champ est requis. Veuillez entrer au moins ${input.dataset.minlength} caractères.`
    );
    error = formDataElement.dataset.error;
  }

  // Check if input has data-email attribute and if email is not valid with validateEmail function
  if (input.dataset.email !== undefined && !validateEmail(value)) {
    // formDataElement.setAttribute("data-error-visible", "true");
    formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. Veuillez entrer une adresse email valide."
    );
    error = formDataElement.dataset.error;
  }

  // Validate email using a regex
  function validateEmail(email) {
    var regexMail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexMail.test(String(email).toLowerCase());
  }

  // Check if input has data-date and data-required attributes and if the value is empty
  if (
    input.dataset.date !== undefined &&
    input.dataset.required !== undefined &&
    value === ""
  ) {
    // formDataElement.setAttribute("data-error-visible", "true");
    formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. Veuillez entrer une date."
    );
    error = formDataElement.dataset.error;
    console.log(error);
  }

  // Check if input has data-number and data-required attributes and if the value is empty
  if (
    input.dataset.number !== undefined &&
    input.dataset.required !== undefined &&
    value === ""
  ) {
    // formDataElement.setAttribute("data-error-visible", "true");
    formDataElement.setAttribute(
      "data-error",
      "Ce champ est requis. Veuillez entrer un nombre entre 0 et 99."
    );
    error = formDataElement.dataset.error;
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
    });

    if (!isChecked) {
      // formDataElement.setAttribute("data-error-visible", "true");
      formDataElement.setAttribute(
        "data-error",
        "Ce champ est requis. Veuillez sélectionner une réponse."
      );
      error = formDataElement.dataset.error;
    }
  }

  // Check if input is checkbox and if it has data-required attribute and if it is not checked
  if (
    input.type === "checkbox" &&
    input.dataset.required !== undefined &&
    !input.checked
  ) {
    // formDataElement.setAttribute("data-error-visible", "true");
    formDataElement.setAttribute(
      "data-error",
      "Veuillez accepter les conditions générales pour continuer."
    );
    error = formDataElement.dataset.error;
  }

  // If there is no error, remove message from error element and so data-error attribute
  // and set data-error-visible attribute to false
  if (!error) {
    formDataElement.setAttribute("data-error-visible", "false");
    error = "";
    formDataElement.setAttribute("data-error", "");
  } else {
    formDataElement.setAttribute("data-error-visible", "true");
  }

  console.log("Soumission du form, variable error :");
  console.log(error);

  return error;
}

// submit form on submit button click
// all inputs are passed as argument with bind to loop through inputs
// and call validateInput on each input element
function submitForm(inputs, event) {
  event.preventDefault();
  const errors = [];

  inputs.forEach((input) => {
    const error = validateInput(input);
    if (error) {
      errors.push(error);
    }
  });
  // Check if errors array is empty and only in that case, form is submited
  if (errors.length === 0) {
    console.log("Le formulaire peut être soumis...");
  }
}
