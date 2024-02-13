function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// Close modal event
closeBtn.addEventListener('click', closeModal);

// Close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// DOM Elements form validation
const form = document.getElementById('reserveForm');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const submit = document.getElementById('submit');

// First name
function validateFirstName() {
  if (firstName.value.length < 2) {
    displayError(
      firstName,
      'Veuillez entrer 2 caractères ou plus pour le champ du prénom.'
    );
    return false;
  } else {
    hideError(firstName);
    return true;
  }
}

// Last name
function validateLastName() {
  if (lastName.value.length < 2) {
    displayError(
      lastName,
      'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    );
    return false;
  } else {
    hideError(lastName);
    return true;
  }
}

// Email
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    displayError(email, 'Veuillez entrer un email valide.');
    return false;
  } else {
    hideError(email);
    return true;
  }
}

// Birthdate
function validateBirthdate() {
  if (birthdate.value.trim() !== '') {
    hideError(birthdate);
    return true;
  } else {
    displayError(birthdate, 'Vous devez entrer votre date de naissance.');
    return false;
  }
}

// Quantity
function validateQuantity() {
  if (isNaN(quantity.value) || quantity.value < 0 || quantity.value === '') {
    displayError(quantity, 'Veuillez entrer un nombre valide.');
    return false;
  } else {
    hideError(quantity);
    return true;
  }
}

// Checkbox Location
function validateCheckboxLocation() {
  const locationCheckBoxes = document.getElementsByName('location');
  let checkedValue = null;

  locationCheckBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValue = checkbox.value;
    }
  });

  if (checkedValue === null) {
    displayError(locationCheckBoxes[0], 'Veuillez choisir une option.');

    return false;
  } else {
    hideError(locationCheckBoxes[0]);
    return checkedValue;
  }
}

// Checkbox Terms of use
function validateCheckboxTerms() {
  if (!checkbox1.checked) {
    displayError(
      checkbox1,
      'Vous devez vérifier que vous acceptez les termes et conditions.'
    );
    return false;
  } else {
    hideError(checkbox1);
    return true;
  }
}

// Form validation

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateFormFields();
  if (isFormValid()) {
    displayValidMessage();
  }
});

// Validate all form fields
function validateFormFields() {
  validateLastName();
  validateFirstName();
  validateEmail();
  validateQuantity();
  validateCheckboxLocation();
  validateCheckboxTerms();
  validateBirthdate();
}

// Is Form Valid

function isFormValid() {
  if (
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validateQuantity() &&
    validateCheckboxLocation() &&
    validateCheckboxTerms() &&
    validateBirthdate()
  )
    return true;
  else {
    return false;
  }
}

//  error message
function displayError(inputElement, message) {
  const formData = inputElement.parentElement;
  formData.setAttribute('data-error', message);
  formData.setAttribute('data-error-visible', 'true');
}

function hideError(inputElement) {
  const formData = inputElement.parentElement;
  formData.removeAttribute('data-error');
  formData.removeAttribute('data-error-visible');
}

// valid message after submit
function displayValidMessage() {
  const validMessage = document.querySelector('#text-validMessage');
  const buttonValid = document.querySelector('#valid-btn-close');
  const container = document.querySelector('.container-validMessage');
  form.style.display = 'none';
  validMessage.style.display = 'inline-block';
  buttonValid.style.display = 'block';
  container.style.display = 'block';
}

// close modal after submit

const closeValidBtn = document.querySelector('#valid-btn-close');
closeValidBtn.addEventListener('click', closeModal);
