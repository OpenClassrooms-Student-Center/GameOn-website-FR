function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += 'responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const submitBtn = document.getElementById('submit');
const bground = document.querySelector('.bground');
const closeModalBtn = document.querySelector('.close');
const modalBody = document.querySelector('.modal-body');
const confirm = document.getElementById('confirmation');
const closeConfirmBtn = document.querySelector('.close-confirm');

// FORM
const form = document.getElementById('reserve');
const formData = document.querySelectorAll('.formData');

// INPUTS
const inputs = document.getElementsByTagName('input');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const options = document.getElementById('options');
// const locationOption = document.querySelectorAll('input[type=radio]');
const checkbox1 = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal event
closeModalBtn.addEventListener('click', function (event) {
  event.preventDefault();
  closeModal();
});

// close modal form
function closeModal() {
  bground.style.display = 'none';
}

// close confirm message event
closeConfirmBtn.addEventListener('click', function (event) {
  event.preventDefault();
  closeConfirm();
});

// close confirm message
function closeConfirm() {
  bground.style.display = 'none';
}

// VALIDATION FORMULAIRE
// tous les inputs sont remplis (sauf succession d'espaces)
// toutes les informations sont corrects

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validForm();
});

let emptyInputs = (
  firstName &&
  lastName &&
  email &&
  birthdate &&
  quantity
).value == '';

let validForm = function () {

if (checkInputs ()) {
  Success(submitBtn, '');
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = 'dodgerblue';
  modalBody.style.display = 'none';
  confirm.style.opacity = '1';
} else if (!checkInputs()) {
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = 'grey';
  Error(submitBtn, 'Veuillez renseigner tous les champs');
  }
};

// VALIDATION DES INPUTS

form.addEventListener('change', function (e) {
  e.preventDefault();
  checkInputs();
});

const checkInputs = function () {

  // if (emptyInputs) {
  //   Error(submitBtn, 'Veuillez renseigner tous les champs');
  //   // submitBtn.disabled = true;
  // } else {
  //   Success (submitBtn, '');
  //   // submitBtn.disabled = false;
  // }

  if (validFirstName(firstName.value)) {
    Success(firstName, '');
  } else {
    Error(firstName, 'Veuillez saisir au moins 2 lettres');
  }

  if (validLastName(lastName.value)) {
    Success(lastName, '');
  } else {
    Error(lastName, 'Veuillez saisir au moins 2 lettres');
  }

  if (validEmail(email.value)) {
    Success(email, '');
  } else {
    Error(email, 'Veuillez saisir un format correct');
  }

  if (validBirthdate(birthdate.value) > 13) {
    Success(birthdate, '');
  } else {
    Error(birthdate, 'Vous devez avoir plus de 13 ans pour participer');
  }

  if (validBirthdate(birthdate.value) > 100) {
    Error(birthdate, 'Veuillez vérifier votre année de naissance');
  } else {
  }

  if (validQuantity(quantity.value)) {
    options.style.display = 'block';
    Success(quantity, '');
  } else {
    options.style.display = 'none';
    Error(quantity, 'Veuillez saisir un nombre compris entre 0 et 99');
  }

  if (quantityNull(quantity.value)) {
    options.style.display = 'none';
    Success(quantity, '');
  } else {
  }

  if (checkbox1.checked) {
    Success(checkbox1, '');
  } else {
    Error(checkbox1, "* Veuillez accepter les conditions d'utilisation.");
  }
};

// PARAMETRES DE VALIDATION DES INPUTS

// INPUT "Prénom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " ") non consécutifs
function validFirstName(firstName) {
  return /^[A-zÀ-ÿ]+[-\sA-zÀ-ÿ]{1,}$/.test(firstName);
}

// INPUT "Nom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " " ou "'") non consécutifs
function validLastName(lastName) {
  return /^[A-zÀ-ÿ]+[-\s'A-zÀ-ÿ]{1,}$/.test(lastName);
}

// INPUT "Email"
// tout caractère ASCII
// casse indifférente
// espaces et points non acceptés si en début ou fin de saisie et si répétés côte à côte
// strictement 1 "@" et 1 "." ensuite
// nom de domaine format entreprise
function validEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+\.{1}([a-zA-Z0-9-]{2,})$/.test(
    email
  );
}

// INPUT "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir plus de 13 ans
// function validBirthdate() {

// function userAge() {
function validBirthdate() {
  // récupération de la valeur du champ "date"
  let userDateInput = form.birthdate.value;

  // conversion de la valeur du champ "date" en objet
  let userBirthdate = new Date(userDateInput);

  // différence entre la date de naissance et la date du jour
  let difference = Date.now() - userBirthdate.getTime();
  // calcul de l'âge
  let age = new Date(difference);
  let calculateAge = Math.abs(age.getUTCFullYear() - 1970);

  return calculateAge;
}

// INPUT "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

function validQuantity(quantity) {
  return /^([0-9]$|^[1-9][0-9]$)|^(99)$/.test(quantity);
}
function quantityNull(quantity) {
  return /^0$/.test(quantity);
}

// INPUT "Location"
// au moins un bouton radio est sélectionné

// INPUT "conditions"
// la case doit être cochée

// MESSAGES
// Error
// Success

function Error(input, message) {
  console.log('error', input, message);
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  formData.className = 'formData error';
  small.innerText = message;
  return false;
}

function Success(input) {
  console.log('success', input);
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = '';
  return true;
}
