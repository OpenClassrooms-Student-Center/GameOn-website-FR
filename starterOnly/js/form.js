'use strict';

const firstName = document.getElementById('first');
/* const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const parentCheckBox = document.getElementById('parentCheckBox');
const location = document.querySelectorAll('#parentCheckBox .checkbox-input');
const checkboxPolicy = document.getElementById('checkbox1');
const checkboxPub = document.getElementById('checkbox2');
const input = document.getElementsByClassName('text-control');
*/

const isRequired = (value) => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isNameValid = (name) => {
  const regName = '/^[\p{L}\'][\p{L}\'-]*[\p{L}]$/u';
  return regName.test(name);
};

/*
const isEmailValid = (email) => {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(email);
};
*/

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.setAttribute('data-error', 'roipoljhljbjkhbv');
  formField.setAttribute('data-error-visible', 'true');

  // show the error message
  const small = formField.createElement('small');
  formField.appendChild(small);
  const error = formField.querySelector('small');
  error.textContent = message;
};

const checkFirstName = () =>{
  const valid = false;
  const min = 2;
  const max = 25;
  const first = firstName.value.trim();

  if (!isRequired(first)) {
    showError(firstName, 'Ce champs ne pas être vide');
  } else if (!isNameValid(first)) {
    showError(firstName, 'Votre prenom n\'est pas valide.');
  }
  else if (!isBetween(first.length, min, max)) {
    showError(firstName, `il doit y avoir entre ${min} et ${max} lettres.`);
  } else {
    return true;
  }
  return valid;
};

function validate() {
  if(checkFirstName) {
    return true;
  }
  return false;
};

// REGEXP VARIABLES


// const regEmail =
// new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
// const valideDate= new Date("dd/mm/yyyy");

