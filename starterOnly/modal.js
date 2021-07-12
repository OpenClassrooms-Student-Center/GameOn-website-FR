function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
let first = document.getElementById("first");
const formGlobal = document.getElementById("formGlobal");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.classList.remove("bgroundNone");
  modalbg.classList.add("bgroundBlock");
  first.focus();
}

// close modal event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.classList.remove("bgroundBlock");
  modalbg.classList.add("bgroundNone");
}

/*******************************TRAITEMENT DES INPUTS **********************/

let erreur;
// INJECTION DES ATTRIBUTS EN CAS DE PROBLEME
function setAtt(value) {
  value.parentElement.setAttribute("data-error", erreur);
  value.parentElement.setAttribute("data-error-visible", "true");
}

// SUPRESSION DES ATTRIBUTS
function removeAtt(value) {
  value.parentElement.removeAttribute("data-error");
  value.parentElement.removeAttribute("data-error-visible");
}

//TEST DE LA LONGUEUR ET DE LA VALIDITÉE DU CHAMP NOM ET PRENOM
function testFirstAndLast(input) {
  return /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(input);
}

// FONCTION DE TEST DU PRENOM
function testFirstName() {
  if (testFirstAndLast(first.value)) {
    removeAtt(first);
    return true;
  } else {
    erreur = "veuillez entrer un prénom de 2 lettres minimum";
    setAtt(first);
    return false;
  }
}

//FONCTION DE TEST DU NOM
function testLastName() {
  let last = document.getElementById("last");

  if (testFirstAndLast(last.value)) {
    removeAtt(last);
    return true;
  } else {
    erreur = "veuillez entrer un nom de 2 lettres minimum";
    setAtt(last);
    return false;
  }
}

//TEST DE LA VALIDITE DE L EMAIL
function testMail(input) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
}

// FONCTION DE TEST DU MAIL
function email() {
  let mail = document.getElementById("email");
  if (testMail(mail)) {
    removeAtt(mail);
    return true;
  } else {
    erreur = "veuillez entrer un email valide";
    setAtt(mail);
    return false;
  }
}

// FONCTION DE TRAITEMENT DE LA DATE DE NAISSANCE
function testBirthdayDate() {
  let birthDate = document.getElementById("birthdate");
  let parseBirthDate = Date.parse(birthDate.value); //converti la date entrée en milliseconde utc
  const today = Date.now(); // défini la date d'aujourd'hui en ms utc
  const todayDate = new Date().toLocaleDateString(); //converti la date du jour au format jour/mois/année
  // const todayDate = today.toLocaleDateString();
  if (!parseBirthDate || parseBirthDate > today) {
    erreur = "veuillez entrez une date antérieure au " + todayDate;
    setAtt(birthDate);
    return false;
  } else {
    removeAtt(birthDate);
    return true;
  }
}

// TRAITEMENT DU NOMBRE DE TOURNOI
function testNumberOfTounaments(input) {
  return /^[0-9]{1,2}$/.test(input.value);
}

// FONCTION DE TRAITEMENT DU NOMBRES DE TOURNOIS EFFECTUÉ

let numberOfTounaments = document.getElementById("quantity");
function tournament() {
  if (testNumberOfTounaments(numberOfTounaments)) {
    removeAtt(numberOfTounaments);
    return true;
  } else {
    erreur = "veuillez entrez un nombre compris entre 0 et 99 ";
    setAtt(numberOfTounaments);
    return false;
  }
}
// TRAITEMENT DU NOMBRE DE VILLE SÉLECTIONNÉES
let location1 = document.getElementById("location1");
let ville = document.getElementsByName("location");
let numberOfTownChecked = 0;

// compter le nb de ville sélectionnées

function validateTownChecked() {
  if (!numberOfTownChecked && numberOfTounaments.value > 0) {
    erreur =
      " merci de sélectionner une ville si vous avez déja participé à un tournoi";
    setAtt(location1);
    return false;
  } else if (numberOfTownChecked > numberOfTounaments.value) {
    erreur =
      "Le nombre de ville sélectionnées ne peut pas être supérieur au nombre de tournois joué";
    setAtt(location1);
    return false;
  } else {
    removeAtt(location1);
    return true;
  }
}

// CONDITIONS D'UTILISATION

function conditions() {
  let checkbox1 = document.getElementById("checkbox1");
  if (checkbox1.checked) {
    removeAtt(checkbox1);
    return true;
  } else {
    erreur = "veuillez accepter les conditions d'utilisation ";
    setAtt(checkbox1);
    return false;
  }
}

// VALIDATION DU FORMULAIRE

const valid = document.querySelector(".valid");

formGlobal.addEventListener("submit", function (e) {
  //comptage du nb de ville sélectionnées
  e.preventDefault();
  for (let i = 0; i < ville.length; i++) {
    if (ville[i].checked) {
      numberOfTownChecked++;
    }
  }
  if (
    testFirstName() &&
    testLastName() &&
    email() &&
    testBirthdayDate() &&
    tournament() &&
    validateTownChecked() &&
    conditions()
  ) {
    closeModal();
    valid.classList.remove("displayNone");
    valid.classList.add("displayBlock");
    formGlobal.reset();
  } else {
    numberOfTownChecked = 0;
  }
});

// fermeture de la page de validation

//Avec le boutton fermer
let btnClose = document.getElementById("closeBtn");
btnClose.addEventListener("click", function () {
  valid.classList.replace("displayBlock", "displayNone");
});
//Avec la croix
let closeValid = document.querySelector(".closeValid");
closeValid.addEventListener("click", function () {
  valid.classList.replace("displayBlock", "displayNone");
});
