function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  };
};

// DOM Elements affichage formulaire
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// DOM elements Validation formulaire
const formulaire = document.getElementById("formulaire");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const mail = document.getElementById("email");
const dateNaissance = document.getElementById("birthdate");
const nombreTournoi = document.getElementById("quantity");
const choixVille = document.getElementsByName("location");
const conditionUtilisation = document.getElementById("checkbox1");
const erreurPrenom = document.getElementById("erreur-prenom");
const erreurNom = document.getElementById("erreur-nom");
const erreurMail = document.getElementById("erreur-mail");
const erreurNaissance = document.getElementById("erreur-naissance");
const erreurTournoi = document.getElementById("erreur-tournoi");
const erreurVille = document.getElementById("erreur-ville");
const erreurCondition = document.getElementById("erreur-condition");
var nombreTestReussi = 0;

// launch modal event et launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
};

// Fermer modal
document.getElementById("btn-close-modale").addEventListener("click",function(){
  modalbg.style.display = "none";
});

// VALIDER FORMULAIRE

// boite à outil

let nePasSubmit = (typeEvenement) => typeEvenement.preventDefault();
let validerNomPrenom = (text) => text.value != "" && text.value.length >= 2;
let validerMail = (mailAValider) => /[\s\S]{1,}@([a-zA-Z0-9-_]{1,}[.])+[a-zA-Z]{2,3}$/.test(mailAValider.value); //expression test complète issue d'internet : ^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$
let validerDateNaissance = (dateAniv) => (new Date().getFullYear() - new Date(dateAniv.value).getFullYear()) >= 15;



/*
function validerDateNaissance(dateAniv){
  let anneNaissance = new Date(dateAniv.value).getFullYear();
  let anneePresent = new Date().getFullYear();
  let comparerAnnee = anneePresent - anneNaissance;
  if(comparerAnnee >= 15){
    return 1;
  } else {
    return 0;
  };
};*/

function validerNombreTournoi(qt){
  let testResult = /^(?!\-)[0-9]{1,}$/.test(qt.value);
  if (testResult == true && qt.value < 99){
    return 1;
  } else {
    return 0;
  };  
};

function validerSiUneVilleChoisie(villePossible){
  let chercherVilleNonChoisie = 0;
  for (let ville of villePossible){
    if(ville.checked == false){
      chercherVilleNonChoisie++;
    };
  };
  if(chercherVilleNonChoisie == villePossible.length){
      return 0;
    } else {
      return 1;
  };
};

function validerConditionUtilisation(caseCocher){
  if(caseCocher.checked == true){
    return 1;
  } else {
    return 0;
  };
};

function gestionErreur (fonctionATester, zoneErreur, messageErreur){
  if(fonctionATester == 1 || fonctionATester == true){
    zoneErreur.innerText = "";
    nombreTestReussi++;
  } else {
    zoneErreur.innerText = messageErreur;
  };
};


// déclencheur de validation et message erreur
formulaire.addEventListener("submit",function (evenement){
  nombreTestReussi = 0;
  
  gestionErreur(validerNomPrenom(prenom), erreurPrenom, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  gestionErreur(validerNomPrenom(nom), erreurNom, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  gestionErreur(validerMail(mail), erreurMail, "Veuiller entrer un couriel valide : forme attendue couriel@couriel.xxx");
  gestionErreur(validerDateNaissance(dateNaissance), erreurNaissance, "Vous devez entrer votre date de naissance. Et être au moins dans votre 15ème année");
  gestionErreur(validerNombreTournoi(nombreTournoi), erreurTournoi, "Veuillez saisir un nombre de participation entre 0 et 99");
  gestionErreur(validerSiUneVilleChoisie(choixVille), erreurVille, "Veuillez choisir une ville");
  gestionErreur(validerConditionUtilisation(conditionUtilisation), erreurCondition, "Vous devez vérifier que vous acceptez les termes et conditions.");

  if (nombreTestReussi == 7){
    alert("Le formulaire est envoyé, Merci de votre participation")
  } else {
    
    nePasSubmit(evenement);
    alert("Vous avez remplis " + (7 - nombreTestReussi) + " champ(s) incorrectement");
  };
});