'use strict';

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
/*


const parentCheckBox = document.getElementById('parentCheckBox');
const location = document.querySelectorAll('#parentCheckBox .checkbox-input');
const checkboxPolicy = document.getElementById('checkbox1');
const checkboxPub = document.getElementById('checkbox2');
const input = document.getElementsByClassName('text-control');
*/

const isRequired = (value) => value === '' ? false : true;

const isNameValid = function(name) {
  const regName = new RegExp(/([A-Z])\w+/);
  return regName.test(name);
};


const isEmailValid = (email) => {
  const regEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return regEmail.test(email);
};
const isDateValid = (date) => {
  const regDate = new RegExp(
      /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/);
  return regDate.test(date);
};


const checkFirstName = () =>{
  const formField = firstName.parentElement;
  const first = firstName.value.trim();

  if (!isRequired(first)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isNameValid(first)) {
    formField.setAttribute('data-error', 'Votre prenom n\'est pas valide.');
    formField.setAttribute('data-error-visible', 'true');
  } else {
    return displaySucess();
  }
};
const checkLastName = () =>{
  const formField = lastName.parentElement;
  const last = lastName.value.trim();

  if (!isRequired(last)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isNameValid(last)) {
    formField.setAttribute('data-error', 'Votre nom n\'est pas valide.');
    formField.setAttribute('data-error-visible', 'true');
  } else {
    return displaySucess();
  }
};

const checkEmail = () =>{
  const formField = email.parentElement;
  const mail = email.value.trim();

  if (!isRequired(mail)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isEmailValid(mail)) {
    formField.setAttribute('data-error', 'Votre email n\'est pas valide.');
    formField.setAttribute('data-error-visible', 'true');
  } else {
    return displaySucess();
  }
};

const checkDate = () =>{
  const formField = birthdate.parentElement;
  const bday = birthdate.value.trim();

  if (!isRequired(bday)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isEmailValid(bday)) {
    formField.setAttribute('data-error', 'Votre format attendu dd/mm/aaaa.');
    formField.setAttribute('data-error-visible', 'true');
  } else {
    return displaySucess();
  }
};

const checkNumbContest = () =>{
  const formField = quantity.parentElement;
  const contest = quantity.value.trim();

  if (!isRequired(contest)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else {
    return displaySucess();
  }
};
