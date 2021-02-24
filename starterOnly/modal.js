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


function prenomTestValidation(champPrenom){
     // Déclaration des variables du formulaire  
  let myregex = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/;
  let champsVide = 'remplissez les champs';
  let champsInssufisant = 'Au moins 2 carracteres sont demandés';
  let nombreCaractereMinimum = 2;
  let messagePrenomErreur = document.getElementsByClassName("erreur")[0];
  let caractereInterdits = 'Ce champ doit contenir uniquement des lettres'

  if (!champPrenom.value) {
    messagePrenomErreur.innerHTML = champsVide; 
    return false;
  } 
  if((champPrenom.value.length < nombreCaractereMinimum) && (champPrenom.value.length >= 1)) {
    messagePrenomErreur.innerHTML = champsInssufisant; 
    return false;
  }
  if(myregex.test(champPrenom.value) == false){
    messagePrenomErreur.innerHTML = caractereInterdits;
    return false;
  }
 else {  // essayer de cibler le si le formulaire est  valide
  messagePrenomErreur.innerHTML = '';
  return true;
  }
  
}

function nomTestValidation(champNom){
  // Déclaration des variables du formulaire  
let myregex = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/;
let champsVide = 'remplissez les champs';
let champsInssufisant = 'Au moins 2 carracteres sont demandés';
let nombreCaractereMinimum = 2;
let caractereInterdits = 'Ce champ doit contenir uniquement des lettres'
let messageNomErreur = document.getElementsByClassName("erreur")[1];

  if (!champNom.value) {
    messageNomErreur.innerHTML = champsVide; 
    return false;
  } 
  if((champNom.value.length < nombreCaractereMinimum) && (champNom.value.length >= 1)) {
    messageNomErreur.innerHTML = champsInssufisant; 
    return false;
  }
  if(myregex.test(champNom.value) == false){
    messageNomErreur.innerHTML = caractereInterdits;
    return false;
  }
  else /* (champPrenom.value.length > nombreCaractereMinimum)*/{  
  messageNomErreur.innerHTML = '';
  return true;
  }
}

function mailTestValidation(champMail){
  let champsVide = 'remplissez les champs';
  let regexmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; /*marche pas */
  let messageMailErreur = document.getElementsByClassName("erreur")[2];
  let mailInvalide = 'Mail invalide';

  if(!champMail.value){
    messageMailErreur.innerHTML = champsVide; 
    return false;
  }
  if (regexmail.test(champMail.value) == false)
  {
    messageMailErreur.innerHTML = mailInvalide;
     return false;
  }
  else{
    messageMailErreur.innerHTML = '';
    return true;
  }
}

function dateTestValidation(champBirthdate){
  let birthdateErreur = 'Sélectionnez une date';
  let messageBirthdateErreur = document.getElementsByClassName("erreur")[3];
  if (!champBirthdate.value) {
  messageBirthdateErreur.innerHTML = birthdateErreur
      return false;
  }
  else{
    messageBirthdateErreur.innerHTML = '';
    return true;
  }
}

function nombreConcourTestValidation(champConcour){
  let messageConcourErreur = document.getElementsByClassName("erreur")[4];
  let champsVide = 'remplissez les champs';
  if (!champConcour.value) {
    messageConcourErreur.innerHTML = champsVide
        return false;
    }
    else{
      messageConcourErreur.innerHTML = '';
      return true;
    }
}
function villeTestValidation(champVille, champConcour){
   let messageVilleErreur = document.getElementsByClassName("erreur")[5];
   let champsVide = 'remplissez les champs';
   let i = 0;
   let result = true;
   let isChecked = 0;

   if (!champConcour || champConcour == 0) { // si le nombre de concour est == a 0 ou rien 
     return true;
   }

  while (i < champVille.length) 
  {
    if (champVille[i].checked) {
      isChecked += 1; // chaques checkbox checked ajoute 1
    }
    i++;
  }

  if (isChecked != 0) { // si le nombre de checkbox n'est pas egale a zero
    result = true;
    messageVilleErreur.innerHTML = '';
  } else {
    result = false;
    messageVilleErreur.innerHTML = champsVide;
  }
  return result;
}

function conditionTestValidation(champCondition){
  let messageConditionErreur = document.getElementsByClassName("erreur")[6];
  let conditionObligatoire = 'Vous devez vérifier que vous acceptez les termes et conditions';
  if(!champCondition.checked){
    messageConditionErreur.innerHTML = conditionObligatoire;
    return false;
  }
  else{
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
  let champVille = document.getElementsByName('location');
  let champCondition = document.getElementById('checkbox1');
  let isValid = true;

  if (!prenomTestValidation(champPrenom))// declaration fonction prenom et nom
  { 
    isValid = false;
  }

  if (!nomTestValidation(champNom))
  {
    isValid = false;
  }
  if (!mailTestValidation(champMail))
  {
    isValid = false;
  }
  
  if (!dateTestValidation(champBirthdate))
  {
    isValid = false;
  }
  if (!nombreConcourTestValidation(champConcour))
  {
    isValid = false;
  }

  if (!villeTestValidation(champVille, champConcour.value))
  {
    isValid = false;
  }
  if (!conditionTestValidation(champCondition))
  {
    isValid = false;
  }
  if (isValid)
  {
    alert ('formulaire envoyé');
  }
  return  isValid;
}