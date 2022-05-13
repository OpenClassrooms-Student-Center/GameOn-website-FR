'use strict';

const firstName = document.getElementById('first');
const regName = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);
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

const isNameValid = (name) => name === regName ? regName.test(name) : false;

/*
const isEmailValid = (email) => {
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEmail.test(email);
};
*/

const checkFirstName = () =>{
  const valid = false;
  const min = 2;
  const max = 25;
  const formField = firstName.parentElement;
  const first = firstName.value.trim();

  if (!isRequired(first)) {
    formField.setAttribute('data-error', 'Ce champs ne pas être vide');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isNameValid(first)) {
    formField.setAttribute('data-error', 'Votre prenom n\'est pas valide.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isBetween(first.length, min, max)) {
    formField.setAttribute('data-error', `il doit y avoir entre ${min} et ${max} lettres.`);
    formField.setAttribute('data-error-visible', 'true');
  } else {
    valid = true;
  }
  return valid;
};

/** @return {function}  */
function validate() {
  if (checkFirstName) {
    return true;
  }
  return false;
};

// REGEXP VARIABLES


// const regEmail =
// new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
// const valideDate= new Date("dd/mm/yyyy");

