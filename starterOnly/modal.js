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
const bground = document.querySelector('.bground');
const closeModalBtn = document.querySelector('.close');
const modalBody = document.querySelector('.modal-body');
const confirm = document.getElementById('confirmation');
const closeConfirmBtn = document.querySelector('.close-confirm');
const form = document.getElementById('reserve');
const formData = document.querySelectorAll('.formData');

// html labels links
// const formValid = document.getElementById("submit");
const inputs = document.getElementsByTagName('input');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locationOption = document.querySelectorAll('input[type=radio]');
const conditions = document.getElementById('checkbox1');

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

// VALIDATION DU FORMULAIRE

document.getElementById('reserve').addEventListener('input', function (e) {
  e.preventDefault();
  checkInput();
});

// TRAITEMENT CAS PAR CAS (input unique)
// stabiliser code avec "return" : HOW ? cela me ferme la fonction...

function checkInput() {

  if (validFirstName(firstName.value)) {
    Succes(firstName, '');
  } else  {
    Error(firstName, 'Veuillez saisir au moins 2 lettres');
  }

  if (validLastName(lastName.value)) {
    Succes(lastName, '');
  } else {
    Error(lastName, 'Veuillez saisir au moins 2 lettres');
  }

  if (validEmail(email.value)) {
    Succes(email, '');
  } else {
    Error(email, 'Veuillez saisir un format correct');
  }

  if (validBirthdate(birthdate.value)) {
    Succes(birthdate, '');
  } else {
    Error(birthdate, 'Vous devez avoir plus de 13 ans pour participer');
  }

  if (validQuantity(quantity.value)) {
    options.style.display = 'block';
    Succes(quantity, '');
  } else {
    options.style.display = 'none';
    Error(quantity, 'Veuillez saisir un nombre compris entre 0 et 99');
  }

  if (validQuantity(quantity.value) === 0) {
    options.style.display = 'none';
  } else {

  }
}

// TRAITEMENT GENERIQUE
// si tous les champs sont vides ou remplis d'espaces consécutifs = erreur (bloque l'envoi du formulaire)
// si tous les champs sont remplis (sauf espaces consécutifs) = succès (envoie formulaire, ferme modal, affiche confirmation résa)

document.getElementById("reserve").addEventListener("submit", function(e) {
  e.preventDefault();
  validForm ();
});

function validForm () {

  for (let i = 0; i < inputs.length; i++) {

    console.log(inputs[i]);
    if (inputs[i].value.trim()) {
      errorForm.innerHTML = '';
      modalBody.style.display = 'none';
      confirm.style.opacity = '1';
    } else {
      errorForm.innerHTML = 'Veuillez renseigner tous les champs';
      break;
    }
  }
}

function Error(input, message) {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  formData.className = 'formData error';
  small.innerText = message;
}

function Succes(input) {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = '';
}


// VALIDATION DES INPUTS

// INPUT "Prénom"
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés séparés par "-" ou " ") non consécutifs

function validFirstName(firstName) {
  //return /^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sa-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$/.test(firstName);
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
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(email);
}

// INPUT "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir plus de 13 ans

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

// return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(birthdate);

// VALIDATION DU CHAMP "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

// INPUT "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

function validQuantity(quantity) {
  return /^([0-9]$|^[1-9][0-9]$)|^(99)$/.test(quantity);
}

// NE FONCTIONNE PAS
const quantityNull = function () {
  if (quantity.value == 0) {
    errorQuantity.innerHTML = '';
    formDataOptions.style.display = 'none';
  } else {
  }
};

// INPUT "ville"
// au moins un bouton radio doit être sélectionné



// INPUT "conditions"
// la case doit être cochée

form.checkbox1.addEventListener('click', function () {
  validConditions(this);
});

function validConditions() {
  if (checkbox1.checked == true) {
    errorConditions.innerHTML = '';
    return true;
  } else {
    errorConditions.innerHTML =
      "* Veuillez accepter les conditions d'utiliation";
    return false;
  }
}