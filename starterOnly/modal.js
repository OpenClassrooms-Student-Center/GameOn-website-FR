function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const submitBtn = document.getElementById("submit");
const bground = document.querySelector(".bground");
const closeModalBtn = document.querySelector(".close");
const modalBody = document.querySelector(".modal-body");
const confirm = document.getElementById("confirmation");
const closeConfirmBtn = document.querySelector(".close-confirm");

// FORM
const form = document.getElementById("reserve");
const formData = document.querySelectorAll(".formData");

// INPUTS
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const options = document.getElementById("options");
const cgu = document.getElementById("checkbox1");

// EVENEMENTS MODAL
// focus first input
const focusInput = () => {
  firstName.focus();
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  focusInput()
}

// close modal event
closeModalBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeModal();
});

// close modal form
function closeModal() {
  bground.style.display = "none";
}

// close confirm message event
closeConfirmBtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeConfirm();
});

// close confirm message
function closeConfirm() {
  bground.style.display = "none";
}

// VALIDATION DU FORMULAIRE
// tous les inputs remplis (sauf succession d'espaces)
// toutes les informations correctes

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emptyInputs()) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "grey";
    errorForm.style.visibility = "visible";
    errorForm.innerHTML = "Veuillez renseigner tous les champs";
  } else if (!emptyInputs() && validInputs()) {
    modalBody.style.display = "none";
    confirm.style.opacity = "1";
    form.reset();
  }
});

// VALIDATION DES INPUTS
form.addEventListener("input", function (e) {
  e.preventDefault();

  // VALIDATIONS GENERALES
  // Tous les inputs vides
  // Au moins 1 input vide
  // Au moins 1 saisie erronnée
  if (oneEmptyInput()) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "grey";
    errorForm.style.visibility = "visible";
    errorForm.innerHTML = "Veuillez renseigner tous les champs";
  } else if (!emptyInputs() && invalidInput()) {
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "grey";
    errorForm.style.visibility = "hidden";
  } else {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "royalblue";
    errorForm.style.visibility = "hidden";
  }

  // VALIDATION AU CAS PAR CAS
  // firstname
  if (validFirstName(firstName)) {
    dataSuccess(firstName, "");
  } else {
    dataError(firstName, "Veuillez saisir au moins 2 lettres");
  }
  // lastname
  if (validLastName(lastName)) {
    dataSuccess(lastName, "");
  } else {
    dataError(lastName, "Veuillez saisir au moins 2 lettres");
  }
  // email
  if (validEmail(email)) {
    dataSuccess(email, "");
  } else {
    dataError(email, "Veuillez saisir un format correct");
  }
  // age : compris entre 13 et 100 ans
  if (validBirthdate() > 13 && validBirthdate() < 100) {
    dataSuccess(birthdate, "");
  } else if (validBirthdate() < 13) {
    dataError(birthdate, "Vous devez avoir plus de 13 ans pour participer");
  } else if (validBirthdate() > 100) {
    dataError(birthdate, "Veuillez vérifier votre année de naissance");
  } else {
    dataError(birthdate, "Veuillez saisir votre date de naissance");
  }
  // participation(s) > 0
  if (validQuantity(quantity)) {
    options.style.display = "block";
    dataSuccess(quantity, "");
  // participation = 0
  } else if (quantityNull(quantity)) {
    options.style.display = "none";
    dataSuccess(quantity, "");
  } else {
    options.style.display = "none";
    dataError(quantity, "Veuillez saisir un nombre compris entre 0 et 99");
  }
  // ville (si participation > 0)
  if ((validCity() > 0) | quantityNull(quantity)) {
    dataSuccess(errorCity, "");
  } else {
    dataError(errorCity, "Veuillez sélectionner une ville");
  }
  // conditions générales
  if (validConditions()) {
    dataSuccess(cgu, "");
  } else {
    dataError(cgu, "* Veuillez accepter les conditions d'utilisation.");
  }
});

// FONCTIONS DE VALIDATIONS GENERALES

// Tous les inputs vides
const emptyInputs = () => {
  const allEmpty =
    firstName.value.trim() === "" &&
    lastName.value.trim() === "" &&
    email.value.trim() === "" &&
    birthdate.value.trim() === "" &&
    quantity.value.trim() === "" &&
    !cgu.checked;
  return allEmpty;
};

// Au moins 1 input vide
const oneEmptyInput = () => {
  const oneEmpty =
    (firstName.value.trim() === "") |
    (lastName.value.trim() === "") |
    (email.value.trim() === "") |
    (birthdate.value.trim() === "") |
    (quantity.value.trim() === "") |
    !cgu.checked;
  return oneEmpty;
};

// Au moins 1 saisie erronnée
function invalidInput() {
  const oneError =
    !validFirstName(firstName) |
    !validLastName(lastName) |
    !validEmail(email) |
    (validBirthdate() < 13) |
    (validBirthdate() > 100) |
    (!validQuantity(quantity) && !quantityNull(quantity)) |
    !validConditions();
  return oneError;
}

// Tous les inputs validés
function validInputs() {
  const allValid =
    validFirstName(firstName) |
    validLastName(lastName) |
    validEmail(email) |
    (validBirthdate() > 13 && validBirthdate() < 100) |
    (validQuantity(quantity) && quantityNull(quantity)) |
    validCity() |
    validConditions();
  return allValid;
}

// FONCTIONS DE VALIDATION DES INPUTS AU CAS PAR CAS

// input PRENOM
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés, séparés par 1 "-" ou " "
const validFirstName = (firstName) =>
  /^[A-zÀ-ÿ]+[ \-]?[A-zÀ-ÿ]{1,}$/.test(firstName.value);

// input NOM
// 2 caractères minimum
// casse indifférente
// toute lettre latine, y compris accentuée
// mots composés, séparés par 1 "-" ou " "
const validLastName = (lastName) =>
  /^[A-zÀ-ÿ]+[ \-']?[A-zÀ-ÿ]{1,}$/.test(lastName.value);

// input EMAIL
// tout caractère ASCII
// casse indifférente
// espaces et points non acceptés si en début ou fin de saisie et si répétés côte à côte
// strictement 1 "@" et 1 "." ensuite
// nom de domaine format entreprise
const validEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+\.{1}([a-zA-Z0-9-]{2,})$/.test(
    email.value
  );

// input BIRTHDATE
// format jj/mm/aaaa
// calcul de l'âge à partir de la date de naissance
const validBirthdate = () => {
  // récupération de la valeur du champ "date"
  let userDateInput = birthdate.value;
  // conversion de la valeur du champ "date" en objet
  let userBirthdate = new Date(userDateInput);
  // différence entre la date de naissance et la date du jour
  let difference = Date.now() - userBirthdate.getTime();
  // calcul de l'âge
  let age = new Date(difference);
  let calculateAge = Math.abs(age.getUTCFullYear() - 1970);
  return calculateAge;
};

// input QUANTITY
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche
const validQuantity = (quantity) => /^([1-9]|[1-9][0-9])$/.test(quantity.value);
const quantityNull = (quantity) => /^0$/.test(quantity.value);

// input LOCATION
// au moins un bouton radio est sélectionné
const validCity = () =>
  document.querySelectorAll("input[type=radio]:checked").length;

// input CONDITIONS
// la case doit être cochée
const validConditions = () => cgu.checked;

// MESSAGES
// Error
const dataError = (input, message) => {
  const formData = input.parentElement;
  const small = formData.querySelector("small");
  formData.className = "formData error";
  small.innerText = message;
};

// Success
const dataSuccess = (input, message) => {
  const formData = input.parentElement;
  const small = formData.querySelector("small");
  formData.className = "formData";
  small.innerText = message;
};