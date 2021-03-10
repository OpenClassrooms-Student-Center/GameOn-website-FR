function editNav() {
  var x = document.getElementById("myTopnav");
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
const modalBtnClose = document.querySelectorAll(".close"); /*span (x) fermeture formulaire */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnClose.forEach((span) => span.addEventListener("click", Modalclose));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function Modalclose() {
  modalbg.style.display = "none";
}

function prenomTestValidation(champPrenom) {
  let myregexPrenom = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/; //uniquement des lettres majuscules ou minuscules les tirets et les espaces
  let nombreCaractereMinimum = 2;

  // gestion des messages erreurs
  let messagePrenomErreur = document.getElementsByClassName("erreur")[0];
  let champsVide = 'Vous devez remplir le champ prénom';
  let champsInssufisant = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
  let caractereInterdits = 'Ce champ doit contenir uniquement des lettres'

  if (!champPrenom.value) {
    messagePrenomErreur.innerHTML = champsVide;
    return false;
  }
  if ((champPrenom.value.length < nombreCaractereMinimum) && (champPrenom.value.length >= 1)) {
    messagePrenomErreur.innerHTML = champsInssufisant;
    return false;
  }
  if (myregexPrenom.test(champPrenom.value) == false) {
    messagePrenomErreur.innerHTML = caractereInterdits;
    return false;
  }
  else {
    messagePrenomErreur.innerHTML = '';
    return true;
  }
}

function nomTestValidation(champNom) {
  let myregexNom = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/; //uniquement des lettres majuscules ou minuscules les tirets et les espaces
  let nombreCaractereMinimum = 2;

  // gestion des messages erreurs 
  let messageNomErreur = document.getElementsByClassName("erreur")[1];
  let champsVide = 'Vous devez remplir le champ nom';
  let champsInssufisant = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  let caractereInterdits = 'Ce champ doit contenir uniquement des lettres'

  if (!champNom.value) {
    messageNomErreur.innerHTML = champsVide;
    return false;
  }
  if ((champNom.value.length < nombreCaractereMinimum) && (champNom.value.length >= 1)) {
    messageNomErreur.innerHTML = champsInssufisant;
    return false;
  }
  if (myregexNom.test(champNom.value) == false) {
    messageNomErreur.innerHTML = caractereInterdits;
    return false;
  }
  else {
    messageNomErreur.innerHTML = '';
    return true;
  }
}

function mailTestValidation(champMail) {
  let regexmail = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/; 
  // explications avant le @ toutes les caracteres alphanumeriques + (. + - ), apres le point entre 2 a 4 caracteres

  // gestion des messages erreurs 
  let messageMailErreur = document.getElementsByClassName("erreur")[2];
  let mailInvalide = 'Mail invalide';
  let champsVide = 'Vous devez remplir le champ mail';

  if (!champMail.value) {
    messageMailErreur.innerHTML = champsVide;
    return false;
  }
  if (regexmail.test(champMail.value) == false) {
    messageMailErreur.innerHTML = mailInvalide;
    return false;
  }
  else {
    messageMailErreur.innerHTML = '';
    return true;
  }
}

function dateTestValidation(champBirthdate) {
  // gestion des messages erreurs 
  let messageBirthdateErreur = document.getElementsByClassName("erreur")[3];
  let birthdateErreur = 'Vous devez entrer votre date de naissance';

  if (!champBirthdate.value) {
    messageBirthdateErreur.innerHTML = birthdateErreur
    return false;
  }
  else {
    messageBirthdateErreur.innerHTML = '';
    return true;
  }
}

function nombreConcourTestValidation(champConcour) {

  let regexNombre = /^[0-9]+$/; // explications uniquement des chiffres

  // gestion des messages erreurs 
  let messageConcourErreur = document.getElementsByClassName("erreur")[4];
  let champsVide = 'Vous devez indiquer le nombre de tournois';

  if (!champConcour.value) {
    messageConcourErreur.innerHTML = champsVide;
    return false;
  }
  if (regexNombre.test(champConcour.value) == false) {
    messageConcourErreur.innerHTML = 'Vous devez entrer des chiffres uniquement';
    return false;
  }
  else {
    messageConcourErreur.innerHTML = '';
    return true;
  }
}


function villeTestValidation(champVille) {
  let i = 0;
  let result = true;
  let isChecked = 0;

  // gestion des messages erreurs 
  let messageVilleErreur = document.getElementsByClassName("erreur")[5];
  let champsVide = 'Vous devez choisir une option';

  while (i < champVille.length) //compteur
  {
    if (champVille[i].checked) {
      isChecked += 1; // chaques checkbox checked ajoute 1
    }
    i++;
  }
  // ischecked = nombre dinput selectionné
  if (isChecked != 0) { // si le nombre de checkbox n'est pas egale a zero
    messageVilleErreur.innerHTML = '';
    result = true;
  }
  else {
    result = false;
    messageVilleErreur.innerHTML = champsVide;
  }
  return result;
}

function conditionTestValidation(champCondition) {
  let messageConditionErreur = document.getElementsByClassName("erreur")[6];
  let conditionObligatoire = 'Vous devez vérifier que vous acceptez les termes et conditions';
  if (!champCondition.checked) {
    messageConditionErreur.innerHTML = conditionObligatoire;
    return false;
  }
  else {
    messageConditionErreur.innerHTML = '';
    return true;
  }
}
function validate() {
  let champPrenom = document.getElementById('first'); // Le prénom
  let champNom = document.getElementById('last'); // Le nom
  let champMail = document.getElementById('email'); // l'email
  let champBirthdate = document.getElementById('birthdate'); // La date d'anniversaire
  let champConcour = document.getElementById('quantity'); // Le nombre de concours
  let champVille = document.getElementsByName('location'); // Le choix des villes
  let champCondition = document.getElementById('checkbox1'); // Conditons d'utilisations
  let isValid = true;

  if (!prenomTestValidation(champPrenom)) {
    isValid = false;
  }
  if (!nomTestValidation(champNom)) {
    isValid = false;
  }
  if (!mailTestValidation(champMail)) {
    isValid = false;
  }

  if (!dateTestValidation(champBirthdate)) {
    isValid = false;
  }
  if (!nombreConcourTestValidation(champConcour)) {
    isValid = false;
  }
  if (!villeTestValidation(champVille)) {
    isValid = false;
  }
  if (!conditionTestValidation(champCondition)) {
    isValid = false;
  }
  if (isValid) {
    alert('Merci ! Votre réservation a été reçue.');
  }
  return isValid;
}