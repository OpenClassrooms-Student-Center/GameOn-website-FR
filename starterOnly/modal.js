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


// launch modal event et launch modal form
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// Fermer modal
document.getElementById("btn-close-modale").addEventListener("click",function(){
  modalbg.style.display = "none";
});

// VALIDER FORMULAIRE

// boite à outil
function nePasSubmit(typeEvenement){
  typeEvenement.preventDefault();
};

function validerNomPrenom(text){
  if (text.value != "" && text.value.length >= 2) {
    return 1;
  } else {
    return 0;
  };
};

function validerMail(mailAValider){
  let testResult = /[\s\S]{1,}@([a-zA-Z0-9-_]{1,}[.])+[a-zA-Z]{2,3}$/.test(mailAValider.value);
  //^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$
  if (testResult == true) {
    return 1;
  } else {
    return 0;
  };
};

function validerDateNaissance(dateAniv){
  let anneNaissance = new Date(dateAniv.value).getFullYear();
  let anneePresent = new Date().getFullYear();
  let comparerAnnee = anneePresent - anneNaissance;
  if(comparerAnnee >= 15){
    return 1;
  } else {
    return 0;
  };
};

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

// déclencheur de validation et message erreur
formulaire.addEventListener("submit",function (evenement){
  let nombreTestReussi = 0;
  
  if(validerNomPrenom(prenom) == 1){
    erreurPrenom.innerText = "";
    nombreTestReussi++;
  } else {
    erreurPrenom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  };
  
  if (validerNomPrenom(nom) == 1){
    erreurNom.innerText = "";
    nombreTestReussi++;
  } else {
    erreurNom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  };

  if (validerMail(mail) == 1){
    erreurMail.innerText = "";
    nombreTestReussi++;
  } else {
    erreurMail.innerText = "Veuiller entrer un couriel valide : forme attendue couriel@couriel.xxx";
  };

  if (validerDateNaissance(dateNaissance) == 1){
    erreurNaissance.innerText = "";
    nombreTestReussi++;
  } else {
    erreurNaissance.innerText = "Vous devez entrer votre date de naissance. Et être au moins dans votre 15ème année";
  };

  if (validerNombreTournoi(nombreTournoi) == 1){
    erreurTournoi.innerText = "";
    nombreTestReussi++;
  } else {
    erreurTournoi.innerText = "Veuillez saisir un nombre de participation entre 0 et 99";
  };

  if (validerSiUneVilleChoisie(choixVille) == 1){
    erreurVille.innerText = "";
    nombreTestReussi++;
  } else {
    erreurVille.innerText = "Veuillez choisir une ville";
  };

  if (validerConditionUtilisation(conditionUtilisation) == 1){
    erreurCondition.innerText = "";
    nombreTestReussi++;
  } else {
    erreurCondition.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
  };

  if (nombreTestReussi == 7){
    alert("Le formulaire est envoyé, Merci de votre participation")
  } else {
    nePasSubmit(evenement);
  }
});