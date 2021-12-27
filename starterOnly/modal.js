// Form input datas
const DATAS = [
  {
    key: "first",
    status: "default",
    errorMessage: null,
    validateFunction: validateName
  },
  {
    key: "last",
    status: "default",
    errorMessage: null,
    validateFunction: validateName
  },
  {
    key: "email",
    status: "default",
    errorMessage: null,
    validateFunction: validateEmail
  },
  {
    key: "birthdate",
    status: "default",
    errorMessage: null,
    validateFunction: validateBirthDate
  },
  {
    key: "quantity",
    status: "default",
    errorMessage: null,
    validateFunction: validateQuantity
  },
  {
    key: "checkbox1",
    status: "default",
    errorMessage: null,
    validateFunction: validateCheckbox
  }
];

// Form input errors
const ERRORS = [
  {
    key: "first",
    errorMessage: "Le prénom doit contenir au moins 2 caractères."
  },
  {
    key: "last",
    errorMessage: "Le nom doit contenir au moins 2 caractères."
  },
  {
    key: "email",
    errorMessage: "L'email doit respécter le format : xxxxx@xxxx.xxx."
  },
  {
    key: "birthdate",
    errorMessage: "La date de naissance doit être antérieure à la date du jour."
  },
  {
    key: "quantity",
    errorMessage: "La quantité doit être un nombre entier."
  },
  {
    key: "checkbox1",
    errorMessage: "Veuillez accepter les conditions d'utilisation."
  }
];

// Name validation
function validateName(value) {
  if (value.length < 2) {
    return false;
  }

  return true;
}

// Email validation
function validateEmail(value) {
  // Matches anystring@anystring.anystring with 1 and only 1 @
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  return regex.test(value);
}

// Birth date validation
function validateBirthDate(value) {
  const currentDate = new Date();

  const birthDate = value.split('-');
  const birthYear = parseInt(birthDate[0]);
  const birthMonth = parseInt(birthDate[1]);
  const birthDay = parseInt(birthDate[2]);
  
  if (birthYear > currentDate.getFullYear()) {
    return false;
  } else if (birthYear === currentDate.getFullYear()) {
    if (birthMonth > (currentDate.getMonth() + 1)) {
      return false;
    } else if (birthMonth === (currentDate.getMonth() + 1)) {
      if (birthDay >= currentDate.getDate()) {
        return false;
      }

      return true;
    }

    return true;
  }

  return true;
}

// Quantity validation
function validateQuantity(value) {
  const quantity = Number(value);

  return Number.isInteger(quantity);
}

// Checkbox validation
function validateCheckbox(value) {
  return value;
}

// Show error
function showError(obj) {
  document.getElementById(obj.key).classList.add('error');

  const errorParagraph = document.createElement('p');
  errorParagraph.classList.add('error-message');
  errorParagraph.textContent = obj.errorMessage;

  document.getElementById(obj.key).parentElement.appendChild(errorParagraph);
}

// Hide error
function hideError(obj) {
  document.getElementById(obj.key).classList.remove('error');

  const formData = document.getElementById(obj.key).parentElement;
  const errorParagraph = formData.querySelector('.error-message');
  formData.removeChild(errorParagraph);
}

// Get input datas for a key
function getObjByKey(key) {
  return DATAS.filter(obj => obj.key === key)[0];
}

// Get input errors for a key
function getErrByKey(key) {
  return ERRORS.filter(obj => obj.key === key)[0];
}

// Check validity of an input
function checkValidity(id, value) {
  const obj = getObjByKey(id);
  const isValid = obj.validateFunction(value);

  if (isValid) {
    obj.status = "success";
    obj.errorMessage = null;
    hideError(obj);
  } else {
    const error = getErrByKey(id);
    obj.status = "error";
    obj.errorMessage = error.errorMessage;
    showError(obj);
  } 
}

// Form's on-change handler
function onChange(event) {
  if (event.target.id === "checkbox1") {
    checkValidity(event.target.id, event.target.checked);
  } else {
    checkValidity(event.target.id, event.target.value);
  }
}

// Responsive handler for the navigation section
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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// launch form event
DATAS.forEach(obj => {
  document.getElementById(obj.key).addEventListener('change', onChange);
});