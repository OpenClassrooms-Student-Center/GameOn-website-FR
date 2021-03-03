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
  let myregexPrenom = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/;
  let champsVide = 'Vous devez remplir le champ prénom';
  let champsInssufisant = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
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
  if(myregexPrenom.test(champPrenom.value) == false){
    messagePrenomErreur.innerHTML = caractereInterdits;
    return false;
  }
 else {
  messagePrenomErreur.innerHTML = '';
  return true;
  }
  
}

function nomTestValidation(champNom){
  // Déclaration des variables du formulaire  
let myregexNom = /^[a-zA-ZÀ-Ÿà-ÿ-\s]+$/;
let champsVide = 'Vous devez remplir le champ nom';
let champsInssufisant = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
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
  if(myregexNom.test(champNom.value) == false){
    messageNomErreur.innerHTML = caractereInterdits;
    return false;
  }
  else{  
  messageNomErreur.innerHTML = '';
  return true;
  }
}

function mailTestValidation(champMail){
  let champsVide = 'Vous devez remplir le champ mail';
  let regexmail =  /^^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // explications
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
  let birthdateErreur = 'Vous devez entrer votre date de naissance';
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
  let champsVide = 'Vous devez indiquer le nombre de tournois';
  let regexNombre = /^[0-9]+$/;

  if (!champConcour.value) {
    messageConcourErreur.innerHTML = champsVide;
        return false;
    }
  if (regexNombre.test(champConcour.value) == false)
    {
      messageConcourErreur.innerHTML = 'Vous devez entrer des chiffres uniquement';
       return false;
    }
    else{
      messageConcourErreur.innerHTML = '';
      // proposition border ok champConcour.style.border = '3px solid green';
      return true;
    }
}

function villeTestValidation(champVille, champConcour){
   let messageVilleErreur = document.getElementsByClassName("erreur")[5];
   let champsVide = 'Vous devez indiquer les villes des tournois';
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
  // ischecked = nombre dinput selectionné
  if ((isChecked != 0) && (isChecked <= champConcour)){ // si le nombre de checkbox n'est pas egale a zero
    messageVilleErreur.innerHTML = '';
    result = true;
  } 
  else if (isChecked > champConcour) { 
    messageVilleErreur.innerHTML = 'Le nombre de ville est supérieur au nombre de tournois';
    result = false;
  }  
  else {
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
// modal popup validation
function openPopup(modalAlert) {
  modalAlert.style.display="flex";
}
function close() {
  let modalAlert = document.getElementById('modalAlertValidation');
  modalAlert.style.display = "none"; // popup validation
  Modalclose(); // le formulaire
}
function closePopup(){  
  let BtnClosepopup = document.getElementById("btn-close-validation");
  let CroixClosepopup = document.getElementById("croixPopup");

  BtnClosepopup.addEventListener("click", close);
  CroixClosepopup.addEventListener("click", close);
}
// modal popup validation

function validate() {
  let champPrenom = document.getElementById('first'); // Le prénom
  let champNom = document.getElementById('last'); // Le nom
  let champMail = document.getElementById('email'); // l'email
  let champBirthdate = document.getElementById('birthdate'); // La date d'anniversaire
  let champConcour = document.getElementById('quantity'); // Le nombre de concours
  let champVille = document.getElementsByName('location'); // Le choix des villes
  let champCondition = document.getElementById('checkbox1'); // Conditons d'utilisations
  let modalAlert = document.getElementById('modalAlertValidation'); // popup validation
  let isValid = true;

    if (!prenomTestValidation(champPrenom))
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
      //alert('Merci ! Votre réservation a été reçue.');
      openPopup(modalAlert); // avec la popup maquette
      closePopup();
      isValid = false;
    }
     return isValid;    
}

