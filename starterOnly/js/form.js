'use strict';

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const input = document.querySelectorAll('#citiesContests .checkbox-input');
const checkCgu = document.getElementById('checkbox1');
/* const checkboxPub = document.getElementById('checkbox2'); */


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
  const regDate = 
  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  return date.match(regDate);
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
    return false;
  } else {
    firstName.style.border = '2px solid #00c040';
    return true;
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
    return false;
  } else {
    lastName.style.border = '2px solid #00c040';
    return true;
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
    return false;
  } else {
    email.style.border = '2px solid #00c040';
    return true;
  }
};

const checkDate = () =>{
  const formField = birthdate.parentElement;
  const bday = birthdate.value.trim();

  if (!isRequired(bday)) {
    formField.setAttribute('data-error', 'Merci de remplir ce champs.');
    formField.setAttribute('data-error-visible', 'true');
  } else if (!isDateValid(bday)) {
    formField.setAttribute('data-error', 'Votre format attendu dd/mm/aaaa.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    birthdate.style.border = '2px solid #00c040';
    return true;
  }
};

const checkNumbContest = () =>{
  const formField = quantity.parentElement;
  const contest = quantity.value.trim();

  if (!isRequired(contest)) {
    formField.setAttribute(
        'data-error', 'Merci de remplir ce champs, même à 0.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    quantity.style.border = '2px solid #00c040';
    return true;
  }
};

const checkSelectCity = () =>{
  const formField = document.getElementById('citiesContests');
  let c = -1;
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      c = i;
    }
  }
  if (c == -1) {
    formField.setAttribute('data-error', 'Merci de séléctionner une ville.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    return true;
  }
};


const checkCgukBoxes = () => {
  const formField = checkCgu.parentElement;
  const cgu = checkCgu.checked;
  if (!cgu) {
    formField.setAttribute(
        'data-error', 'Merci de valider les conditions d\'utilisation.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    return true;
  }
};
