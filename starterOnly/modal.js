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
const locationOption = document.getElementsByTagName("locationOption");
// Uncaught TypeError: document.getElementsById is not a function
// const checkbox1 = document.getElementsById("checkbox1");

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

// Récupération des données des champs du formulaire
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

// Location option
form.location1.addEventListener("change", function () {
  validLocationOption(this);
});

form.location2.addEventListener("change", function () {
  validLocationOption(this);
});

form.location3.addEventListener("change", function () {
  validLocationOption(this);
});

form.location4.addEventListener("change", function () {
  validLocationOption(this);
});

form.location5.addEventListener("change", function () {
  validLocationOption(this);
});

form.location6.addEventListener("change", function () {
  validLocationOption(this);
});

/*var locationOption = form.locationOption;
var verif;
for(var i = 0; i < locationOption.length; i++){
    if(locationOption[i].checked){
        verif = locationOption[i].value;
    }
}*/

// Conditions acceptées
form.checkbox1.addEventListener("change", function () {
  validConditions(this);
});

// Submit /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    validFirstName(form.firstName) &&
    validLastName(form.lastName) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    // ok ci-après ?
    validLocationOption(form.location1, form.location2, form.location3, form.location4, form.location5, form.location6) &&
    validConditions(form.checkbox1)
  ) {
    form.onsubmit();
    // closeModal ();
    // alert = "Merci ! Votre réservation est enregistrée.";
    return true;
  } else {
    errorForm.innerHTML = "Veuillez vérifier vos informations";
    return false;
  }
});*/

// Validation du champ "Prénom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sa-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    "i"
  );

  if (firstNameRegExp.test(inputFirstName.value)) {
    errorFirstName.innerHTML = "";
    return true;
  } else {
    errorFirstName.innerHTML = "Veuillez saisir au moins 2 lettres";
    return false;
  }
};

// Validation du champ "Nom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

const validLastName = function (inputLastName) {
  let lastNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'sa-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    "i"
  );

  if (lastNameRegExp.test(inputLastName.value)) {
    errorLastName.innerHTML = "";
    return true;
  } else {
    errorLastName.innerHTML = "Veuillez saisir au moins 2 lettres";
    return false;
  }
};

// Validation du champ "Email"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@" et 1 "." ensuite
// le nom de domanaine accepte les formats entreprise
// casse indifférente

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (emailRegExp.test(inputEmail.value)) {
    errorEmail.innerHTML = "";
    return true;
  } else {
    errorEmail.innerHTML = "Veuillez saisir un format correct";
    return false;
  }
};

// Validation du champ "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir entre 13 et 100 ans
// année comprise entre 1920 et 2008

// bug RegExp => new ones but still invalid ///////////////////////////////////////////////////////////////////////////////////////////////////////
// "^(0[1-9]|[10-31]\/0[1-9]|[10-12]\/[1921-2008]$"
// "^(d{2})\/(d{2})\/(d{4})$"
// "^(^0[1-9]$|^[12]d$|^3[01]$)\/(^0[1-9]$|^1[0-2]$)\/(d{4})$"
// "^(0[1-9]|[12]d|3[01])\/(0[1-9]|1[0-2])\/(19[2-9]d|20[01]d)$"
// "^(0[1-9]|[12]d|3[01])\/(0[1-9]|1[0-2])\/(19|20[d{2}])$"

const validBirthdate = function (inputBirthdate) {
  let birthdateRegExp = new RegExp(
    "^(^0[1-9]$|^[12][0-9]$|^3[01]$)/(^0[1-9]$|^1[0-2])$/(^\1\9[2-9][0-9]$|^\2\0[01][0-8]$)$"
  );

  if (birthdateRegExp.test(inputBirthdate.value)) {
    errorBirthdate.innerHTML = "";
    return true;
  } else {
    errorBirthdate.innerHTML = "Veuillez respecter le format jj/mm/aaaa";
    return false;
  }
};

// Validation du champ Quantity
// quantité comprise entre 0 et 99

const validQuantity = function () {

  let quantityRegExp = new RegExp("^([0-9]$|^[1-9][0-9]$)|^(99)$");

  if (quantityRegExp.test(quantity.value)) {
    errorQuantity.innerHTML = "";
    return true;
  } else {
    errorQuantity.innerHTML = "Veuillez saisir un nombre compris entre 0 et 99";
    return false;
  }
};

function setLocationOption () {
if (quantity.value > 0 == true) {
  document.getElementsById(formDataOption).style.display = "block";
  }
};

// Validation LocationOption
// Si le nombre de particpation > 0, alors le block apparait et au moins une ville doit être cochée
function validLocationOption () {
  if (form.locationOption.checked == true) {
    errorLocation.innerHTML = "";
    return true;
  } else {
    errorLocation.innerHTML = "* Veuillez sélectionner au moins une ville";
    return false;
  }
};

// Validation checkbox Conditions
function validConditions() {
  if (checkbox1.checked == true) {
    errorConditions.innerHTML = "";
    return true;
  } else {
    errorConditions.innerHTML = "* Veuillez accepter les conditions d'utiliation";
    return false;
  }
};