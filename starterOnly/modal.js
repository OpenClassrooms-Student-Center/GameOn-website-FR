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
const formData = document.querySelectorAll('.formData');
const bground = document.querySelector('.bground');
const closeModalBtn = document.querySelector('.close');

// html labels links
// const formValid = document.getElementById("submit");
const input = document.getElementsByTagName('input');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locationOption = document.querySelectorAll('input[type=radio]');

// Message d'erreur
const errorFirstName = document.getElementById('errorFirst');
const errorLastName = document.getElementById('errorLast');
const errorEmail = document.getElementById('errorEmail');
const errorBirthdate = document.getElementById('errorBirthdate');
const errorQuantity = document.getElementById('errorQuantity');
const errorLocation = document.getElementById('errorLocation');
const errorConditions = document.getElementById('errorConditions');
const errorForm = document.getElementById('errorForm');

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

// Récupération des données des champs du formulaire
let form = document.getElementById('reserve');
form.addEventListener('submit', function () {});

// VALIDATION DU CHAMP "Prénom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

form.firstName.addEventListener('change', function () {
  validFirstName(this);
});

const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(
    '^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sa-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$',
    'i'
  );

  if (firstNameRegExp.test(inputFirstName.value)) {
    document.getElementsByTagName('data-error') = '';
    return true;
    //return '';
  }
  document.getElementsByTagName(
    'data-error'
  ) = 'Veuillez saisir au moins 2 lettres';
  return false;
  //return 'Veuillez saisir au moins 2 lettres';
};

// VALIDATION DU CHAMP "Nom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

form.lastName.addEventListener('change', function () {
  validLastName(this);
});

const validLastName = function (inputLastName) {
  let lastNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'sa-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    'i'
  );

  if (lastNameRegExp.test(inputLastName.value)) {
    return '';
  }

  return 'Veuillez saisir au moins 2 lettres';
};

// VALIDATION DU CHAMP "Email"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@" et 1 "." ensuite
// le nom de domanaine accepte les formats entreprise
// casse indifférente

form.email.addEventListener('change', function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (emailRegExp.test(inputEmail.value)) {
    return '';
  }

  return 'Veuillez saisir un format correct';
};

// VALIDATION DU CHAMP "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir plus de 13 ans

// calcul de l'âge du joueur
form.birthdate.addEventListener('blur', function () {
  userAge(this);
});

let userAge = function () {
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
};

// Vérification âge > 13 ans et < 100 ans

form.birthdate.addEventListener('change', function () {
  validAge(this);
});

function validAge() {
  if (userAge() >= 13) {
    return '';
  }

  return 'Vous devez avoir plus de 13 ans pour participer';
}

// VALIDATION DU CHAMP "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

form.quantity.addEventListener('change', function () {
  validQuantity(this);
  quantityNull(this);
});

const validQuantity = function () {
  let quantityRegExp = new RegExp('^([0-9]$|^[1-9][0-9]$)|^(99)$');

  if (quantityRegExp.test(quantity.value)) {
    options.style.display = 'block';
    return '';
  }

  options.style.display = 'none';
  return 'Veuillez saisir un nombre compris entre 0 et 99';
};

const quantityNull = function () {
  if (quantity.value == 0) {
    options.style.display = 'none';
  }
};

// VALIDATION DU CHOIX "ville"
// au moins un bouton radio doit être sélectionné

options.addEventListener('click', function () {
  validLocationOption(this);
});

const validLocationOption = function () {
  if (document.querySelectorAll('input[type=radio]:checked').length > 0) {
    return '';
  }

  return 'Veuillez sélectionner au moins une ville';
};

// VALIDATION DE L'ACCEPTATION DES CONDITIONS
// la case doit être cochée

form.checkbox1.addEventListener('change', function () {
  validConditions(this);
});

const validConditions = function () {
  if (checkbox1.checked == true) {
    return '';
  }

  return "* Veuillez accepter les conditions d'utiliation";
};

// Submit
// si tous les champs sont remplis ET validés alors le formulaire est envoyé, le modal se ferme et le message de confirmation de la réservation apparaît
// sinon le formulaire n'est pas envoyé. Le modal reste ouvert, les informations fournies sont conservées et un message d'erreur apparait

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validForm(this);
});

function validForm() {
  error.firstName = validFirstName(form.firstName);
  error.lastName = validLastName(form.lastName);
  error.email = validEmail(form.email);
  error.birthdate = validAge(form.birthdate);
  error.quantity = validQuantity(form.quantity);
  error.location = validLocationOption(form.location);
  error.checkbox1 = validConditions(form.checkbox1);
  error.form = validForm(form.reserve);

  let validForm = validFirstName && validLastName && validEmail && validAge && validQuantity && validLocationOption && validConditions;

  if (validForm) {
    return 'Merci ! Votre réservation est enregistrée.';
  }
    return 'Veuillez vérifier vos informations'
};
