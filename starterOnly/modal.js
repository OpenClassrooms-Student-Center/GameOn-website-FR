function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//Modal close
const closeBtn = document.querySelector(".close");

// Regex elements
// (< 2 characters; Pas de chiffres)
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// Vérification d'email
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

/* ???????????????????????????????????????????????????????????????????????????????? */
//error elements
// const errorFirst = document.getElementById("errorFirst");
// const errorLast = document.getElementById("errorLast");
// const errorEmail = document.getElementById("errorEmail");
// const errorQuantity = document.getElementById("errorQuantity");
/* ??????????????????????????????????????????????????????????????????????????????????????? */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal
function closeModal() {
  modalBg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);

/* ********************* PRENOM ************************** */
//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
const first = document.getElementById("first");
// let firstInput = "";

//Control de la longueur du prénom
//Control que la chaine n'est pas vide avec trim()
function controlFirst() {
  return firstLastRegex.test(first.value.trim()) ? true : false;
}

//Lors de l'input, si controlFirst() = true on suprime le message d'erreur
first.addEventListener("input", () => {
  if (controlFirst()) {
    errorFirst.innerHTML = "";
  }
});

/* ********************* NOM ******************************************* */
//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
const last = document.getElementById("last");
let lastInput = "";

//Control le la longueur du nom
//Control que la chaine n'est pas vide avec trim()
function controlLast() {
  return firstLastRegex.test(last.value.trim()) ? true : false;
}

//Lors de l'input, si controlLast() = true on suprime le message d'erreur
last.addEventListener("input", () => {
  if (controlLast()) {
    errorLast.innerHTML = "";
  }
});

/* ******************************* EMAIL ******************** */
//(3) L'adresse électronique est valide.
const email = document.getElementById("email");

//control de la validité de l'email
function controlEmail() {
  return emailRegex.test(email.value) ? true : false;
}

//Lors de l'input, si controlLast() = true on suprime le message d'erreur
email.addEventListener("input", () => {
  if (controlEmail()) {
    errorEmail.innerHTML = "";
  }
});

/* **************************** BIRTHDATE ************************** */
const birthdate = document.getElementById("birthdate");

let birthdateYear = "";
let birthdateMonth = "";
let birthdateDay = "";
// récupération de la date actuelle
let date = new Date();
// récupération de l'année en cours
let year = date.getFullYear();

//control de la validité de la date de naissance
function controlBirthdate() {
  if (birthdate.value === "") {
    return false;
  }
  // récuperation de l'année entrée par l'utilisateur
  birthdateYear = parseInt(
    birthdate.value[0] +
      birthdate.value[1] +
      birthdate.value[2] +
      birthdate.value[3]
  );
  // récuperation du mois entrée par l'utilisateur
  birthdateMonth = parseInt(birthdate.value[5] + birthdate.value[6]);
  // récuperation du jour entrée par l'utilisateur
  birthdateDay = parseInt(birthdate.value[8] + birthdate.value[9]);

  // Si l'année n'est pas comprise entre 1900 et l'année actuelle
  if (birthdateYear < 1900 || birthdateYear > year) {
    return false;
  }
  // Sinon si le mois n'est pas comprise entre 1 et 12
  else if (birthdateMonth < 1 || birthdateMonth > 12) {
    return false;
  }
  // Sinon si c'est un mois à 31 jours et que birthdateDay n'est pas compris entre 1 et 31
  else if (
    (birthdateMonth === 1 ||
      birthdateMonth === 3 ||
      birthdateMonth === 5 ||
      birthdateMonth === 7 ||
      birthdateMonth === 8 ||
      birthdateMonth === 10 ||
      birthdateMonth === 12) &&
    (birthdateDay < 1 || birthdateDay > 31)
  ) {
    return false;
  }
  // Sinon si c'est un mois à 30 jours et que birthdateDay n'est pas compris entre 1 et 30
  else if (
    (birthdateMonth === 4 ||
      birthdateMonth === 6 ||
      birthdateMonth === 9 ||
      birthdateMonth === 11) &&
    (birthdateDay < 1 || birthdateDay > 30)
  ) {
    return false;
  }
  // Sinon si c'est le mois de février et que birthdateDay n'est pas compris entre 1 et 29
  else if (birthdateMonth === 2 && (birthdateDay < 1 || birthdateDay > 29)) {
    birthdateDay = "";
    return false;
  }
  // Sinon ... ben tout est bon!! true
  else {
    return true;
  }
}

//Lors de l'input, si controlBirthdate() = true on suprime le message d'erreur
birthdate.addEventListener("input", () => {
  if (controlBirthdate()) {
    errorBirthdate.innerHTML = "";
  }
});

/* ********************* QUANTITY ********************************** */
//(4) Pour le nombre de concours, une valeur numérique est saisie.
const quantity = document.getElementById("quantity");
function controlQuantity() {
  if (parseInt(quantity.value) < 100 && parseInt(quantity.value) >= 0) {
    return true;
  } else {
    return false;
  }
}

//Lors de l'input, si controlQuantity() = true on suprime le message d'erreur
quantity.addEventListener("input", () => {
  if (controlQuantity()) {
    errorQuantity.innerHTML = "";
  }
});

/* ************************** BTRADIO ********************************************* */
//(5) Un bouton radio est sélectionné.
const btRadio = document.querySelectorAll("input[type=radio]");
function controlBtRadio() {
  for (let i = 0; i < btRadio.length; i++) {
    if (btRadio[i].checked) {
      return true;
    }
  }
  return false;
}

//Lors de l'input, si controlBtRadio() = true on suprime le message d'erreur
for (let i = 0; i < btRadio.length; i++) {
  btRadio[i].addEventListener("input", () => {
    if (controlBtRadio()) {
      errorBtRadio.innerHTML = "";
    }
  });
}

/* ********************** CHECKBOX1 ******************************************************** */
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
const checkbox1 = document.getElementById("checkbox1");
function controlCheckbox1() {
  if (checkbox1.checked) {
    return true;
  }
  return false;
}

//Lors de l'input, si controlCheckbox1() = true on suprime le message d'erreur
checkbox1.addEventListener("input", () => {
  if (controlCheckbox1()) {
    errorCheckbox1.innerHTML = "";
  }
});

/* ********************** SUBMIT ******************************** */
//Soumission du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
  e.preventDefault();
  //Afficher les messages d'erreurs
  messageError();
  validate();
});

function messageError() {
  //Si controlFirst() = false on affiche le message d'erreur.
  if (!controlFirst()) {
    errorFirst.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
  //Si controlLast() = false on affiche le message d'erreur.
  if (!controlLast()) {
    errorLast.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  //Si controlEmail() = false on affiche le message d'erreur.
  if (!controlEmail()) {
    errorEmail.innerHTML = "Veuillez entrer une adresse Email valide.";
  }
  //Si controlbirthdate() = false on remet birthdate.value à zero et on affiche le message d'erreur.
  if (!controlBirthdate()) {
    birthdate.value = "";
    errorBirthdate.innerHTML = "Veuillez entrer une date de naissance valide.";
  }
  //Si controlQuantity() = false on affiche le message d'erreur.
  if (!controlQuantity()) {
    errorQuantity.innerHTML =
      "Veuillez entrer une valeur numérique entre 0 et 99.";
  }
  //Si controlBtRadio = false on affiche le message d'erreur.
  if (!controlBtRadio()) {
    errorBtRadio.innerHTML = "Veuillez selectionner une ville";
  }
  //Si controlCheckbox1 = false on affiche le message d'erreur.
  if (!controlCheckbox1()) {
    errorCheckbox1.innerHTML = "Veuillez accepter les conditions d'utilisation";
  }
}

function validate() {
  if (
    controlFirst() &&
    controlLast() &&
    controlEmail() &&
    controlBirthdate() &&
    controlQuantity() &&
    controlBtRadio() &&
    controlCheckbox1()
  ) {
    return true;
  }
  return false;
}
