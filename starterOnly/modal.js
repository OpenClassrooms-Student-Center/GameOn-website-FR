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
const form = document.getElementById('reserve');
const formData = document.querySelectorAll('.formData');

// html labels links
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

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const emptyInputs = (
    firstName &&
    lastName &&
    email &&
    birthdate &&
    quantity
  ).value.trim();

  if ((emptyInputs) && (checkbox1.checked)) {
    // submitBtn.disabled = false;
    // errorForm.innerHTML = '';
    modalBody.style.display = 'none';
    confirm.style.opacity = '1';
  } else if (
    validFirstName(firstName) &&
    validLastName(lastName) &&
    validEmail(email) &&
    validBirthdate(birthdate) &&
    validQuantity(quantity) &&
    validConditions(checkbox1)
  ) {
    // submit.disabled = false;
    // submit.style.backgroundColor = 'limegreen';
    // errorForm.innerHTML = '';
  } else {
    // submit.disabled = true;
    submit.style.backgroundColor = 'grey';
    errorForm.innerHTML = 'Veuillez renseigner tous les champs';
  }
});

// VALIDATION DES INPUTS

// INPUT "Prénom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " ") non consécutifs

form.firstName.addEventListener('blur', function (e) {
  e.preventDefault();
  validFirstName(this);
});

const validFirstName = function (firstName) {
  let firstNameRegExp = /^[A-zÀ-ÿ]+[-\sA-zÀ-ÿ]{1,}$/;
  if (firstNameRegExp.test(firstName.value)) {
    Success(firstName, '');
  } else Error(firstName, 'Veuillez saisir au moins 2 lettres');
};

// INPUT "Nom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " " ou "'") non consécutifs

form.lastName.addEventListener('blur', function (e) {
  e.preventDefault();
  validLastName(this);
});

const validLastName = function (lastName) {
  let lastNameRegExp = /^[A-zÀ-ÿ]+[-\s'A-zÀ-ÿ]{1,}$/;
  if (lastNameRegExp.test(lastName.value)) {
    return Success(lastName, '');
  }

  return Error(lastName, 'Veuillez saisir au moins 2 lettres');
};

// INPUT "Email"
// tout caractère ASCII
// casse indifférente
// espaces et points non acceptés si en début ou fin de saisie et si répétés côte à côte
// strictement 1 "@" et 1 "." ensuite
// nom de domaine format entreprise

form.email.addEventListener('blur', function (e) {
  e.preventDefault();
  validEmail(this);
});

const validEmail = function (email) {
  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+\.{1}([a-zA-Z0-9-]{2,})$/;
  if (emailRegExp.test(email.value)) {
    return Success(email, '');
  }

  return Error(email, 'Veuillez saisir un format correct');
};

// INPUT "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir plus de 13 ans

form.birthdate.addEventListener('input', function (e) {
  e.preventDefault();
  validBirthdate(this);
});

// function validBirthdate() {

function userAge() {
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

const validBirthdate = function () {
  if (userAge() >= 13) {
    return Success(birthdate, '');
  }

  return Error(birthdate, 'Vous devez avoir plus de 13 ans pour participer');
};

// INPUT "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

// INPUT "Location"
// au moins un bouton radio est sélectionné

form.quantity.addEventListener('input', function (e) {
  e.preventDefault();
  validQuantity(this);
});

const validQuantity = function (quantity) {
  let quantityRegExp = /^([1-9]$|^[1-9][0-9]$)|^(99)$/;
  let quantityNullRegExp = /^0$/;
  // let locationOption = document.querySelectorAll('input[type="radio"]:checked').value;

  if (quantityRegExp.test(quantity.value)) {
    options.style.display = 'block';
    return Error(quantity, 'Veuillez sélectionner au moins une ville');
  } else if (quantityNullRegExp.test(quantity.value)) {
    options.style.display = 'none';
    return Success(quantity, '');

    // } else if (locationOption.lenght > 0) {
    //   return Success(quantity, '');
  } else {
    options.style.display = 'none';
    return Error(quantity, 'Veuillez saisir un nombre compris entre 0 et 99');
  }
};

// INPUT "conditions"
// la case doit être cochée

form.checkbox1.addEventListener('change', function (e) {
  e.preventDefault();
  validConditions(this);
});

const validConditions = function (checkbox1) {
  if (checkbox1.checked) {
    return Success(checkbox1, '');
  }

  return Error(checkbox1, "* Veuillez accepter les conditions d'utilisation.");
};

// MESSAGES
// Error
// Success

function Error(input, message) {
  const formData = input.parentElement;
  const small = formData.querySelector('small')
  formData.className = 'formData error';
  small.innerText = message;
}

function Success(input) {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = '';
}