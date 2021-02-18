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
const formData = document.querySelectorAll(".formData");
const bground = document.querySelector(".bground");
const closeModalBtn = document.querySelector(".close");

// html labels links
// const formValid = document.getElementById("submit");
const input = document.getElementsByTagName("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationOption = document.getElementsByName("locationOption");
const conditions = document.getElementById("checkbox1");

// Message d'erreur
const errorFirstName = document.getElementById("errorFirst");
const errorLastName = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorQuantity = document.getElementById("errorQuantity");
const errorLocation = document.getElementById("errorLocation");
const errorConditions = document.getElementById("errorConditions");
const errorForm = document.querySelector(".errorForm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
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

// Validation des champs du formulaire
let form = document.getElementById("reserve");
form.addEventListener("submit", function () {});

// First name
// function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
form.firstName.addEventListener("change", function () {
  validFirstName(this);
});

// Last name
// function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
form.lastName.addEventListener("change", function () {
  validLastName(this);
});

// Email
form.email.addEventListener("change", function () {
  validEmail(this);
});

// Birthdate
form.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});

// Quantity of participations
form.quantity.addEventListener("change", function () {
  validQuantity(this);
});

// Location // NE FONCTIONNE PAS // VOIR l.239
/*form.locationOption.addEventListener("click", function() {
  validLocationOption(this);
});*/

// Conditions acceptées
form.checkbox1.addEventListener("click", function () {
  validConditions(this);
});

// Submit /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    validFirstName(form.firstName) &&
    validLastName(form.lastName) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validLocationOption(form.locationOption) &&
    validConditions(form.checkbox1)
  ) {
    form.onsubmit();
    errorForm.innerHTML = "";
    return true;
  } else {
    errorForm.innerHTML = "Veuillez vérifier vos informations";
    return false;
  }
});

// Submit ok ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// = close modal & show msg "Merci ! Votre réservation a été reçue." ////////////////////////////////////////////////////////////////////

// Validation du champ "Prénom"
const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sa-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    "i"
  );

// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

  if (firstNameRegExp.test(inputFirstName.value)) {
    errorFirstName.innerHTML = "";
    return true;
  } else {
    errorFirstName.innerHTML = "Veuillez saisir au moins 2 lettres";
    return false;
  }
};

// Validation du champ "Nom"
const validLastName = function (inputLastName) {
  let lastNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'sa-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    "i"
  );

// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

  if (lastNameRegExp.test(inputLastName.value)) {
    errorLastName.innerHTML = "";
    return true;
  } else {
    errorLastName.innerHTML = "Veuillez saisir au moins 2 lettres";
    return false;
  }
};

// Validation du champ "Email"
const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@" et 1 "." ensuite
// le nom de domanaine accepte les formats entreprise
// casse indifférente

  if (emailRegExp.test(inputEmail.value)) {
    errorEmail.innerHTML = "";
    return true;
  } else {
    errorEmail.innerHTML = "Veuillez saisir un format correct";
    return false;
  }
};

// Validation du champ "Birthdate"
const validBirthdate = function (inputBirthdate) {
  let birthdateRegExp = new RegExp(
    "^(^0[1-9]$|^[12]d$|^3[01]$)/(^0[1-9]$|^1[0-2]$)/(^19[2-9]d$|^20[01]d$)$"
    );

// format jj/mm/aaaa
// année comprise entre 1920 et 2019

// bug RegExp => new ones but still invalid ///////////////////////////////////////////////////////////////////////////////////////////////////////
// "^(d{2})\/(d{2})\/(d{4})$"
// "^(^0[1-9]$|^[12]d$|^3[01]$)\/(^0[1-9]$|^1[0-2]$)\/(d{4})$"
// "^(0[1-9]|[12]d|3[01])\/(0[1-9]|1[0-2])\/(19[2-9]d|20[01]d)$"
// "^(0[1-9]|[12]d|3[01])\/(0[1-9]|1[0-2])\/(19|20[d{2}])$"

  if (birthdateRegExp.test(inputBirthdate.value)) {
    errorBirthdate.innerHTML = "";
    return true;
  } else {
    errorBirthdate.innerHTML = "Veuillez respecter le format jj/mm/aaaa";
    return false;
  }
};

// Validation du champ Quantity
const validQuantity = function (inputQuantity) {
  let quantityRegExp = new RegExp(
    "^[0-9]$|^[1-9][0-9]$|^(99)$"
  );

// quantité comprise entre 0 et 99

  if (quantityRegExp.test(inputQuantity.value)) {
    errorQuantity.innerHTML = "";
    return true;
  } else {
    errorQuantity.innerHTML = "Veuillez saisir un nombre compris entre 0 et 99";
    return false;
  }
};

// Validation checkbox Location ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if n participation = 0 alors locationOption.checked == false
// else if n participation > 0 alors locationOption.checked == true (lenght = 6); errorLocation.innerHTML = ""; return true;
// else : errorLocation.innerHTML = "* Veuillez sélectionner une ville"; return false;

// l.94 Uncaught TypeError: form.locationOption.addEventListener is not a function l.94
// const validLocationOption = function () {
// nécessaire ? // for (i=1;i<7;i++) {
  /*if (validQuantity = 0) {
    form.locationOption.checked == false
  } else if (validQuantity >= 0) {
      form.locationOption.checked == true;
      errorLocation.innerHTML = "";
      return true;
    } else {
      errorLocation.innerHTML = "* Veuillez sélectionner une ville";
      return false;
    }
  }
};*/

// Validation checkbox Conditions
const validConditions = function () {
  if (form.checkbox1.checked == false) {
    errorConditions.innerHTML = "* Veuillez vérifier que vous acceptez les termes et conditions"
    return false;
  } else {
    errorConditions.innerHTML = ""
    return true;
  }
};