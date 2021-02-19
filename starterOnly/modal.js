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

 /*let champs = document.getElementsByTagName("input");
  for (let i = 0; i < champs.length; i++) {
    if (champs[i].type == "text") {
        champs[i].value = "";
    }
  }selectionner tous les inputs*/ 


function prenomTestValidation(champPrenom){
      // Déclaration des variables du formulaire  

  let myregex = "/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u";
  let champsVide = 'remplissez les champs';
  let champsInssufisant = 'Au moins 2 carracteres sont demandés';
  let nombreCaractereMinimum = 3;
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

  if(champPrenom === myregex){
    messagePrenomErreur.innerHTML = caractereInterdits; 
    return false;
  }
 else  /*((champPrenom.value.length > nombreCaractereMinimum)*/{  // essayer de cibler le si le formulaire est  valide
  messagePrenomErreur.innerHTML = '';
  return true;
  }
}

function nomTestValidation(champNom){
  // Déclaration des variables du formulaire  

let champsVide = 'remplissez les champs';
let champsInssufisant = 'Au moins 2 carracteres sont demandés';
let nombreCaractereMinimum = 3;
let messageNomErreur = document.getElementsByClassName("erreur")[1];

  if (!champNom.value) {
  messageNomErreur.innerHTML = champsVide; 
  return false;
  } 
  if((champNom.value.length < nombreCaractereMinimum) && (champNom.value.length >= 1)) {
  messageNomErreur.innerHTML = champsInssufisant; 
  return false;
  }
  else /* (champPrenom.value.length > nombreCaractereMinimum)*/{  // essayer de cibler le si le formulaire est  valide
  messageNomErreur.innerHTML = '';
  return true;
  }
}



function validate() {
  let champPrenom = document.getElementById('first'); // Le prénom
  let champNom = document.getElementById('last'); // Le nom
  let champMail = document.getElementById('email'); // l'email
  let champBirthdate = document.getElementById('birthdate'); // La date d'anniversaire


  if (!prenomTestValidation(champPrenom)) { // declaration fonction prenom
    return false;
  } 
  if (!nomTestValidation(champNom)) { // declaration fonction prenom
    return false;
  } 


  else{
    alert ('formulaire envoyé');
  }
  
}