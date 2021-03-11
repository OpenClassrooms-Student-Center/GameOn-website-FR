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
let options = document.getElementById('options');
// let cities = document.querySelectorAll('input[type=radio]');
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
// toutes les informations sont correctes

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validForm();
});

// A DEBUGGER ////////////////////////////////////////////////////////////////////
// SUBMIT SI SUCCESS / STOP SI ERROR

// Success == true;
// Error == false;
// const dataConstructor = [Success, Error];
// let dataConstructor = new validInputs(Success, Error);
// let dataConstructor = new checkInputs(Success, Error);
// console.log(dataConstructor);
// for (let i = 0; (i = dataConstructor.lenght); i++) {
//   if (dataConstructor[i] == true) {}
// }

// checkInputs();

// for (let i = 0; i = checkInputs.lenght; i++) {
//   if (checkInputs[i] == Success) {
//     submitBtn.disabled = false;
//     Success(submitBtn, '');
//     modalBody.style.display = 'none';
//     confirm.style.opacity = '1';
//     return true;
//   } else {
//     submitBtn.disabled = true;
//     Error(submitBtn, 'Veuillez renseigner tous les champs');
//     submitBtn.style.backgroundColor = 'grey';
//     return false;
//   }
// }

// let validForm = (checkInputs) => {
//   if (checkInputs) {
//     submitBtn.disabled = false;
//     Success(submitBtn, '');
//     modalBody.style.display = 'none';
//     confirm.style.opacity = '1';
//     return true;
//   } else {
//     submitBtn.disabled = true;
//     Error(submitBtn, 'Veuillez renseigner tous les champs');
//     submitBtn.style.backgroundColor = 'grey';
//     return false;
//   }
// };

//////////////////////////////////////////////////////////////////////

// VALIDATION DES INPUTS

// retirer l'eventListener quand la fonction submit sera débugguée //
form.addEventListener('change', function (e) {
  e.preventDefault();
  checkInputs();
});
//

const checkInputs = function () {
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

  if (
    validBirthdate(birthdate.value) > 13 &&
    validBirthdate(birthdate.value) < 100
  ) {
    Success(birthdate, '');
  } else if (validBirthdate(birthdate.value) < 13) {
    Error(birthdate, 'Vous devez avoir plus de 13 ans pour participer');
  } else if (validBirthdate(birthdate.value) > 100) {
    Error(birthdate, 'Veuillez vérifier votre année de naissance');
  } else {
    Error(birthdate, 'Veuillez saisir votre date de naissance');
  }

  if (validQuantity(quantity.value)) {
    options.style.display = 'block';
    Success(quantity, '');
    Error(errorCity, 'Veuillez sélectionner au moins une ville');
  } else if (location0()) {
    Success(errorCity, '');
  } else if (quantityNull(quantity.value)) {
    options.style.display = 'none';
    Success(quantity, '');
  } else {
    options.style.display = 'none';
    Error(quantity, 'Veuillez saisir un nombre compris entre 0 et 99');
  }

  // A DEBUGGER ////////////////////////////////////////////////////////////////////
  // SUCCESS / ERROR RADIO INPUT (selction ville)
  // if (location0()) {
  //   Success(errorCity, '');
  // } else {
  //   Error(errorCity, 'Veuillez sélectionner une ville');
  // }

  // if (validLocation()) {
  //   Success (errorCity, "");
  // } else {
  //   Error (errorCity, "Veuillez sélectionner une ville");
  // }

  // if (validCity() > 0) {
  //   Success(errorCity, '');
  // } else {
  //   Error(errorCity, 'Veuillez sélectionner au moins une ville');
  // }

  // if (validCity(city.lenght) > 1) {
  // Success(errorCity, '');
  // } else {
  //   Error(errorCity, 'Veuillez sélectionner au moins une ville');
  // }

  // CA FONCTIONNE MAIS CE N'EST PAS DRY /////////////////////////////

  if (
    validCitya() |
    validCityb() |
    validCityc() |
    validCityd() |
    validCitye() |
    validCityf()
  ) {
    Success(errorCity, '');
  } else {
    Error(errorCity, 'Veuillez sélectionner au moins une ville');
  }

  //////////////////////////////////////////////////////////////

  if (validConditions()) {
    Success(checkbox1, '');
  } else {
    Error(checkbox1, "* Veuillez accepter les conditions d'utilisation.");
  }
  return checkInputs;
}; // FIN DE LA FONCTION checkInputs

// PARAMETRES DE VALIDATION DES INPUTS

// INPUT "Prénom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " ") non consécutifs
function validFirstName(firstName) {
  return /^[A-zÀ-ÿ]+[ \-]?[A-zÀ-ÿ]{1,}$/.test(firstName);
}

// INPUT "Nom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " " ou "'") non consécutifs
function validLastName(lastName) {
  return /^[A-zÀ-ÿ]+[ \-']?[A-zÀ-ÿ]{1,}$/.test(lastName);
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
  return /^([1-9]|[1-9][0-9])$/.test(quantity);
}
function quantityNull(quantity) {
  return /^0$/.test(quantity);
}

// A DEBUGGER ////////////////////////////////////////////////////////////////////
// INPUT "Location"
// au moins un bouton radio est sélectionné

// let cities = document.querySelectorAll('input[type=radio]');

// ESSAI 1 //
// function city() {
//   let selectedCity;
//   for (const city of cities) {
//     if (city.checked) {
//       Success (errorCity, '')
//       selectedCity = city.value;
//       break;
//     }
//   }
// }

// ESSAI 2 //
// let cityOptions = function validCity() {
//   for (let i = 0; i < city.length; i++) {
//   return city[i].checked;
//   }
// }

// ESSAI 3 //
// let locationOption = [location0, location1, location2, location3, location4, location5];
// function validCity () {
//   return locationOption.checked;
// }

// ESSAI 4 //
// function validCity() {
//   console.log(validCity);
//   return city.checked;
// }

// ESSAI 5 //
// CA FONCTIONNE MAIS CE N'EST PAS DRY /////////////////////////////

function validCitya() {
  return location0.checked;
}
function validCityb() {
  return location1.checked;
}

function validCityc() {
  return location2.checked;
}

function validCityd() {
  return location3.checked;
}

function validCitye() {
  return location4.checked;
}

function validCityf() {
  return location5.checked;
}

// ESSAI 6 //
// function validLocation() {
//   var m=0;
//   for (i=0; i<6; i++) {
//     if (city[i].checked==true) {
//       m=i;
//       break;
//       // Success (options, "");
// //     } else {
//       // Error (options, "Veuillez sélectionner une ville");
//     }
//   }
// }

////////////////////////////////////////////////////////////////////////////////

// INPUT "conditions"
// la case doit être cochée

function validConditions() {
  return checkbox1.checked;
}

// MESSAGES
// Error
// Success

const Error = (input, message) => {
  console.log('error', input, message);
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  formData.className = 'formData error';
  small.innerText = message;
  return false;
};

const Success = (input, message) => {
  console.log('success', input);
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  formData.className = 'formData';
  small.innerText = message;
  return true;
};
