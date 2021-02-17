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
const formValid = document.getElementById("submit");
const input = document.getElementsByTagName("input");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationChoice = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");

// Message d'erreur
const error = document.getElementById("data-error");
const errorFirstName = document.getElementById("errorFirst");
const errorLastName = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorQuantity = document.getElementById("errorQuantity");
const errorLocation = document.getElementById("errorLocation");
const errorConditions = document.getElementById("errorConditions");

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

// First name
// function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
form.firstName.addEventListener("change", function (event) {
  event.preventDefault();
  validFirstName(this);
});

// Last name
// function strUcFirst(a){return (a+"").charAt(0).toUpperCase()+a.substr(1);}
form.lastName.addEventListener("change", function (event) {
  event.preventDefault();
  validLastName(this);
});

// Email
form.email.addEventListener("change", function (event) {
  event.preventDefault();
  validEmail(this);
});

// Birthdate
form.birthdate.addEventListener("change", function (event) {
  event.preventDefault();
  validBirthdate(this);
});

// Quantity of participations
form.quantity.addEventListener("change", function (event) {
  event.preventDefault();
  validQuantity(this);
});

// Location
// Error
// Uncaught TypeError: form.location.addEventListener is not a function
/*form.location.addEventListener("change", function(event) {
  event.preventDefault ();
  validLocation(this);
});*/

/*function option() {
  const n = location.length;
    for (const i=0; i<n; i++) {

    if (location[i].checked) {
      return false;
    }
  }
  return true;
}

console.log (location);*/

// Conditions acceptées
form.checkbox1.addEventListener("change", function conditionsCheck(e) {
  if (checkbox1.checked == false) {
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});

// Validation du champ "Prénom"
const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(
    // le champ n'est pas vide
    // le champ n'est pas remplis de " "
    // le champ contient 2 caractères minimum
    // le champ accepte des mots composés séparés par "-" ; " ")
    // le champ n'accepte pas 2 éléments de séparation consécutifs
    // casse indifférente
    "^[A-Za-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sA-Za-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$"
  );

  // Necesairement vrai donc inutile d'ajouter ==true
  if (firstNameRegExp.test(inputFirstName.value)) {
    // errorFirstName.innerHTML = "Prénom valide";
    errorFirstName.innerHTML = "Ok";

    // Ne fonctionne pas
    errorFirstName.classList.remove("text-danger");
    errorFirstName.classList.add("text-succes");
  } else {
    errorFirstName.innerHTML = "Veuillez saisir au moins 2 lettres";

    // Ne fonctionne pas
    errorFirstName.classList.add("text-succes");
    errorFirstName.classList.remove("text-danger");
  }
};

// Validation du champ "Nom"
const validLastName = function (inputLastName) {
  let lastNameRegExp = new RegExp(
    // le champ n'est pas vide
    // le champ n'est pas remplis de " "
    // le champ contient 2 caractères minimum
    // le champ accepte des mots composés séparés par "'" ; "-" ; " ")
    // le champ n'accepte pas 2 éléments de séparation consécutifs
    // casse indifférente
    "^[A-Za-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'sA-Za-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$"
  );

  if (lastNameRegExp.test(inputLastName.value)) {
  } else {
    errorLastName.innerHTML = "Veuillez saisir au moins 2 lettres";
  }
};

// Validation du champ "Email"
const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    // le champ n'est pas vide
    // le champ n'est pas remplis de " "
    // tout caractère ASCII accepté
    // espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
    // le champs contient strictement 1 "@" et 1 "." ensuite
    // le nom de domanaine accepte les formats entreprise
    // casse indifférente
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (emailRegExp.test(inputEmail.value)) {
  } else {
    errorEmail.innerHTML = "Veuillez saisir un format correct";
  }
};

// Validation du champ "Birthdate"
const validBirthdate = function (inputBirthdate) {
  let birthdateRegExp = new RegExp(
    // format jj/mm/aaaa
    // année comprise entre 1920 et 2019
    "^(0[1-9]|[12]d|3[01])/(0[1-9]|1[0-2])/(19[2-9]d|20[01]|d)$"
  );

  if (birthdateRegExp.test(inputBirthdate.value)) {
  } else {
    errorBirthdate.innerHTML = "Veuillez respecter le format jj/mm/aaaa";
  }
};

// Validation du champ Quantity
const validQuantity = function (inputQuantity) {
  let quantityRegExp = new RegExp(
    // quantité comprise entre 0 et 99
    "^[0-9]$|^[1-9][0-9]$|^(99)$"
  );

  if (quantityRegExp.test(inputQuantity.value)) {
  } else {
    errorQuantity.innerHTML = "Veuillez saisir un nombre compris entre 0 et 99";
  }
};

// Validation du formulaire
formValid.addEventListener ("click", validation, function(event) {
    event.preventDefault ();
});