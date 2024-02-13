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
    return false;
  } else {
    return true;
  }
}

// Last name
function validateLastName() {
  if (lastName.value.length < 2) {
    return false;
  } else {
    return true;
  }
}

// Email
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    return false;
  } else {
    return true;
  }
}

// Birthdate
function validateBirthdate() {
  if (birthdate.value.trim() !== '') {
    return true;
  } else {
    return false;
  }
}

// Quantity
function validateQuantity() {
  if (isNaN(quantity.value) && quantity.value < 0) {
    return false;
  } else {
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
    return false;
  } else {
    return checkedValue;
  }
}

// Checkbox Terms of use
function validateCheckboxTerms() {
  if (!checkbox1.checked) {
    return false;
  } else {
    return true;
  }
}

// Form validation

form.addEventListener('submit', function (e) {
  e.preventDefault();
  isFormValid();
});

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
    console.log(
      firstName.value,
      lastName.value,
      email.value,
      birthdate.value,
      quantity.value,
      validateCheckboxLocation(),
      checkbox1.checked,
      checkbox2.checked
    );
  else {
    console.log('not valid');
  }
}
