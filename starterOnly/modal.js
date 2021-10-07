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
// Modal close
const closeBtn = document.querySelector(".close");

// Regex elements
// (< 2 characters; Pas de chiffres)
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// Vérification d'email
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

/* ???????????????????????????????????????????????????????????????????????????????? */
// Error elements
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
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
const first = document.getElementById("first");

// Fonction de controle de la chaine de caractere du prenom
function controlFirst() {
  // Si la chaine a un minimum de 2 characters, qu'elle ne contient aucun chiffre ni caracteres spéciaux avec le test Regex, et qu'elle ne soit pas vide avec trim()
  if (firstLastRegex.test(first.value.trim())) {
    // On supprime le message d'erreur => true
    errorFirst.innerHTML = "";
    return true;
  }
  // Sinon on affiche le message d'erreur => false
  errorFirst.innerHTML =
    "Veuillez entrer 2 caractères littéral ou plus pour le champ du prénom.";
  return false;
}

// Lors de l'input sue first on execute la fonction controlFirst();
first.addEventListener("input", controlFirst);

/* ********************* NOM ******************************************* */
//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
const last = document.getElementById("last");

function controlLast() {
  // Si la chaine a un minimum de 2 characters, qu'elle ne contient aucun chiffre ni caracteres spéciaux avec le test Regex, et qu'elle ne soit pas vide avec trim()
  if (firstLastRegex.test(last.value.trim())) {
    // On supprime le message d'erreur => true
    errorLast.innerHTML = "";
    return true;
  }
  // Sinon on affiche le message d'erreur => false
  errorLast.innerHTML =
    "Veuillez entrer 2 caractères littéral ou plus pour le champ du nom.";
  return false;
}

// Lors de l'input sur last on execute la fonction controlLast();
last.addEventListener("input", controlLast);

/* ******************************* EMAIL ******************** */
//(3) L'adresse électronique est valide.
const email = document.getElementById("email");

// Control de la validité de l'email avec le test Regex
function controlEmail() {
  // Control de la validité de l'email avec le test Regex
  if (emailRegex.test(email.value)) {
    // On supprime le message d'erreur => true
    errorEmail.innerHTML = "";
    return true;
  }
  // Sinon on affiche le message d'erreur => false
  errorEmail.innerHTML = "Veuillez entrer une adresse Email valide.";
  return false;
}

//Lors de l'input sur email on execute la fonction controlEmail();
email.addEventListener("input", controlEmail);

/* **************************** BIRTHDATE ************************** */
const birthdate = document.getElementById("birthdate");

let birthdateYear = "";
let birthdateMonth = "";
let birthdateDay = "";
// récupération de la date actuelle
let date = new Date();
// récupération de l'année en cours
let year = date.getFullYear();

// Control de la validité de la date de naissance
function controlBirthdate() {
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
  // Si la chaine est vide
  if (birthdate.value === "") {
    // on affiche le message d'erreur => false
    errorBirthdate.innerHTML = "Veuillez entrer une date de naissance valide.";
    return false;
  }

  //Si l'année n'est pas comprise entre 1900 et l'année actuelle => false
  if (birthdateYear < 1900 || birthdateYear > year) {
    // on affiche le message d'erreur => false
    errorBirthdate.innerHTML =
      "Veuillez choisir une année entre 1900 et aujourd'hui";
    return false;
  }
  // // Sinon si le mois n'est pas comprise entre 1 et 12 => false
  // else if (birthdateMonth < 1 || birthdateMonth > 12) {
  //   // on affiche le message d'erreur => false
  //   errorBirthdate.innerHTML = "Veuillez choisir un mois entre 1 et 12";
  //   return false;
  // }
  // // Sinon si c'est un mois à 31 jours et que birthdateDay n'est pas compris entre 1 et 31 => false
  // else if (
  //   (birthdateMonth === 1 ||
  //     birthdateMonth === 3 ||
  //     birthdateMonth === 5 ||
  //     birthdateMonth === 7 ||
  //     birthdateMonth === 8 ||
  //     birthdateMonth === 10 ||
  //     birthdateMonth === 12) &&
  //   (birthdateDay < 1 || birthdateDay > 31)
  // ) {
  //   // on affiche le message d'erreur => false
  //   errorBirthdate.innerHTML = "Veuillez choisir un jour entre 1 et 31";
  //   return false;
  // }
  // // Sinon si c'est un mois à 30 jours et que birthdateDay n'est pas compris entre 1 et 30 => false
  // else if (
  //   (birthdateMonth === 4 ||
  //     birthdateMonth === 6 ||
  //     birthdateMonth === 9 ||
  //     birthdateMonth === 11) &&
  //   (birthdateDay < 1 || birthdateDay > 30)
  // ) {
  //   // on affiche le message d'erreur => false
  //   errorBirthdate.innerHTML = "Veuillez choisir un jour entre 1 et 30";
  //   return false;
  // }
  // // Sinon si c'est le mois de février et que birthdateDay n'est pas compris entre 1 et 29 => false
  // else if (birthdateMonth === 2 && (birthdateDay < 1 || birthdateDay > 29)) {
  //   // birthdateDay = "";
  //   // on affiche le message d'erreur => false
  //   errorBirthdate.innerHTML = "Veuillez choisir un jour entre 1 et 29";
  //   return false;
  // }
  // Sinon ... ben tout est bon!! true
  else {
    // on supprime le message d'erreur => true
    errorBirthdate.innerHTML = "";
    return true;
  }
}
birthdate.addEventListener("focus", controlBirthdate);
//Lors de l'input sur birhtdate on execute controlBirthdate()
birthdate.addEventListener("input", controlBirthdate);

/* ********************* QUANTITY ********************************** */
//(4) Pour le nombre de concours, une valeur numérique est saisie.
const quantity = document.getElementById("quantity");

// Control de la validité de quantity
function controlQuantity() {
  // Si la valeur numérique de la chaine est compris entre 0 est 100
  if (parseInt(quantity.value) < 100 && parseInt(quantity.value) >= 0) {
    // On suprime le message d'erreur => true
    errorQuantity.innerHTML = "";
    return true;
  } else {
    // Si la chaine est vide ou non comprise entre 0 et 100
    // Sinon on affiche le message d'erreur => false
    errorQuantity.innerHTML =
      "Veuillez entrer une valeur numérique entre 0 et 99.";
    return false;
  }
}

// Lors de l'input sur quantity on execute la fonction controlQuantity
quantity.addEventListener("input", controlQuantity);
// Lors de l'input sur quantity on execute la fonction controlQuantity
quantity.addEventListener("input", controlBtRadio);

/* ************************** BTRADIO ********************************************* */
//(5) Un bouton radio est sélectionné.
const btRadios = document.querySelectorAll("input[name=location]");
console.log(btRadios);
// Nombre de btRadios checked
let numberOfBtRadioChecked = 0;
// Control de la validité de btRadios
function controlBtRadio() {
  // Boucle pour savoir le nombre de btRadios checked
  for (let i = 0; i < btRadios.length; i++) {
    if (btRadios[i].checked) {
      numberOfBtRadioChecked += 1;
    }
  }

  // Si le nombre de villes cochés est superieur au nombre de tournois participé
  if (numberOfBtRadioChecked > quantity.value) {
    // On affiche le message d'erreur
    errorBtRadio.innerHTML =
      "Vous ne pouvez pas sélectionner plus de villes que de tournois participé";
    // On remet le nombre de ville a zéro => false
    numberOfBtRadioChecked = 0;
    return false;
    // Et si aucun btRadio checked  et quantitt.value > 0
  } else if (numberOfBtRadioChecked == 0 && quantity.value > 0) {
    // On affiche le message d'erreur
    errorBtRadio.innerHTML = "Veuillez sélectionner une ville";
    // On remet le nombre de ville a zéro => false
    numberOfBtRadioChecked = 0;
    return false;
  } else {
    // Sinon on supprime le message d'erreur
    errorBtRadio.innerHTML = "";
    // On remet le nombre de ville a zéro => tru
    numberOfBtRadioChecked = 0;
    return true;
  }
}

// Pour chaque btRadio dans le tableau btRadios
btRadios.forEach((btRadio) => {
  // Lors de l'input sur un btRadio on execute controlBtRadio();
  btRadio.addEventListener("input", controlBtRadio);
  // Lors de l'input sur un btRadio on execute controlQuantity();
  btRadio.addEventListener("input", controlQuantity);
});
/* ********************** CHECKBOX1 ******************************************************** */
//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
const checkbox1 = document.getElementById("checkbox1");
// Controle de la case conditions generales coché
function controlCheckbox1() {
  // Si la case est cochée
  if (checkbox1.checked) {
    // On supprime le message d'erreur => true
    errorCheckbox1.innerHTML = "";
    return true;
  }
  // On affiche le message d'erreur => false
  errorCheckbox1.innerHTML = "Veuillez accepter les conditions d'utilisation";
  return false;
}

//Lors de l'input, si controlCheckbox1() = true on suprime le message d'erreur
checkbox1.addEventListener("input", controlCheckbox1);

/* ********************** SUBMIT ******************************** */
//Soumission du formulaire
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  //Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
  e.preventDefault();
  validate();
});

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
