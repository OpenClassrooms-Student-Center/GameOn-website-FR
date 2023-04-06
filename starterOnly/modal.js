// Function to handle navigation menu
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
const modalBody = document.querySelector(".modal-body");

// Event listener to launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Function to show modal window
function launchModal() {
  modalbg.style.display = "block";
}

// declaration of variables to validate each entry
let formFields = {
  isFirstValid: false,
  isLastValid: false,
  isEmailValid: false,
  isBirthdateValid: false,
  isNumberCompetitionsValid: false,
  whatTownChecked: false,
  useConditions: false,
};

const form = document.querySelector("form");

// Listen to input event on form
const inputFormListening = () => {
  form.addEventListener("input", (event) => {
    const target = event.target;
    console.log(target);
    target.matches("[required][name='first']")
      ? validateField(target, ["required", "first"])
      : target.matches("[required][name='last']")
      ? validateField(target, ["required", "last"])
      : target.matches("[required][name='email']")
      ? validateField(target, ["required", "email"])
      : target.matches("[required][name='birthdate']")
      ? validateField(target, ["required", "birthdate"])
      : target.matches("[required][name='quantity']")
      ? validateField(target, ["required", "quantity"])
      : target.matches("[name='location']")
      ? validateField(target, ["location"])
      : target.matches("[name='agreement1']")
      ? validateField(target, ["agreement1"])
      : null;
  });
};
inputFormListening();

// Display error message for invalid input
const displayErrorMessage = (field, message) => {
  console.log(field);
  const errorMessageSpan = field.closest(".formData").querySelector(".data-error");  
  console.log(errorMessageSpan);
  const errorTextfield = field.parentNode.querySelector(".text-control");
  errorMessageSpan.textContent = message;
  errorMessageSpan.classList.add("data-error-visible");
  errorTextfield !== null
    ? errorTextfield.classList.add("text-control-boder-red")
    : null;
};

// Remove error message when input is valid
const removeErrorMessage = (field) => {
  const errorMessageSpan = field.closest(".formData").querySelector(".data-error"); 
  const errorTextfield = field.parentNode.querySelector(".text-control");
  errorMessageSpan.textContent = "";
  errorMessageSpan.classList.remove("data-error-visible");
  errorTextfield !== null
    ? errorTextfield.classList.remove("text-control-boder-red")
    : null;
};

// Validate required field
const validateRequired = (value) => {
  return value.trim() !== "";
};

// Validate name input
const validateName = (value) => {
  const nameRegex = /^.+\S{2,}$/;
  return nameRegex.test(value);
};

// Validate email input
const validateEmail = (value) => {
  const emailRegex = /^[\w\.-]+@[\w-]+\.[\w\.-]+$/;
  return emailRegex.test(value);
};

// Validate birthdate input
const validateBirthday = (value) => {
  const regex = /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;
  return !regex.test(value)
    ? false
    : new Date(value) > Date.now()
    ? false
    : true;
};

// number of competitions entry test
const validateNumberCompetitions = (value) => {
  const regexNumberCompetitions = /^[0-9][0-9]?$/;
  return regexNumberCompetitions.test(value);
};

// Checkbox town of competitions
const validateTownTournament = () => {
  const selectRadioTownTournament = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );
  const isChecked = Array.from(selectRadioTownTournament).some(
    (town) => town.checked
  );
  return isChecked
    ? (formFields.whatTownChecked = true)
    : (displayErrorMessage(selectRadioTownTournament[0],"Vous devez sélectionner un tournoi auqel vous souhaitez participer"));
};


// Validate use conditions checkbox
const validateCheckBoxUse = () => {
  const selectCheckbox = document.querySelector(
    'input[type="checkbox"][name="agreement1"]'
  );
  const isValid = selectCheckbox.checked
    ? true
    : (displayErrorMessage(
        selectCheckbox,
        "Vous devez accepter les conditions d'utilisations."
      ),
      false);
  return isValid;
};

// Objects for rules and error messages
const validationRules = {
  required: {
    validator: validateRequired,
    errorMessage: "Ce champ est requis",
    formFieldKey: null,
  },
  first: {
    validator: validateName,
    errorMessage:
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
    formFieldKey: "isFirstValid",
  },
  last: {
    validator: validateName,
    errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
    formFieldKey: "isLastValid",
  },
  email: {
    validator: validateEmail,
    errorMessage: "Veuillez entrer une adresse email valide.",
    formFieldKey: "isEmailValid",
  },
  birthdate: {
    validator: validateBirthday,
    errorMessage: "Vous devez entrer votre date de naissance.",
    formFieldKey: "isBirthdateValid",
  },
  quantity: {
    validator: validateNumberCompetitions,
    errorMessage:
      "Le nombre de tournoi (entre 1 et 99) auquel vous avez participé cette année.",
    formFieldKey: "isNumberCompetitionsValid",
  },
  location: {
    validator: () => true,
    formFieldKey: "whatTownChecked",
  },
  agreement1: {
    validator: validateCheckBoxUse,
    errorMessage: "Veuillez accepter les conditions d'utilisation.",
    formFieldKey: "useConditions",
  },
};

// Validate each field according to its rules
const validateField = (field, rules) => {
  for (let rule of rules) {
    const { validator, errorMessage, formFieldKey } = validationRules[rule];
    if (!validator(field.value)) {
      if (errorMessage) {
        displayErrorMessage(field, errorMessage);
      }
      if (formFieldKey) {
        formFields[formFieldKey] = false;
      }
      return false;
    } else {
      removeErrorMessage(field);
      if (formFieldKey) {
        formFields[formFieldKey] = true;
      }
    }
  }
  return true;
};

// Validate all required fields
const requiredValidate = () => {
  let isValid = true;
  const selectFieldsValidation = document.querySelectorAll("input[required]");
  selectFieldsValidation.forEach((inputField) => {
    const value = inputField.value.trim();
    !validateRequired(value)
      ? (displayErrorMessage(inputField, "Ce champ est requis"),
        (isValid = false))
      : null;
  });
  validateTownTournament();
  validateCheckBoxUse();

  return isValid;
};

// Sending the form
const submitForm = () => {
  const form = document.forms["reserve"];
  if (areAllValid === true) {
    form.submit();
  }
};

// Event listener on form submission
form.addEventListener("submit", (event) => {
  let areAllValid = Object.values(formFields).every((value) => value === true);
  event.preventDefault();
  if (requiredValidate() && areAllValid === true) {
    submitForm();
  }
});
