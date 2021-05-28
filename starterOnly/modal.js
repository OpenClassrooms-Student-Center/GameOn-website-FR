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
//var nombreTestReussi = 0;

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
formulaire.addEventListener("submit",function (evenement){
  let nombreTestReussi = 0;
  
  let nePasSubmit = (typeEvenement) => typeEvenement.preventDefault();
  let validerNomPrenom = (text) => text.value != "" && text.value.length >= 2;
  let validerMail = (mailAValider) => /[\s\S]{1,}@([a-zA-Z0-9-_]{1,}[.])+[a-zA-Z]{2,3}$/.test(mailAValider.value); //expression test complète issue d'internet : ^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$
  let validerDateNaissance = (dateAniv) => new Date().getFullYear() - new Date(dateAniv.value).getFullYear() >= 15; // vérifier si dans sa 15eme annee.
  let validerNombreTournoi = (qt) => /^(?!\-)[0-9]{1,}$/.test(qt.value) == true && qt.value < 99;
  let validerConditionUtilisation = (caseCocher) => caseCocher.checked == true;

  function validerSiUneVilleChoisie(villePossible){
    let compterVilleNonChoisie = 0;
    for (let ville of villePossible){
      if(ville.checked == false){
        compterVilleNonChoisie++;
      };
    };
    let result = () => (compterVilleNonChoisie != villePossible.length);
    return result();
  };

  function gestionErreur (fonctionATester, zoneErreur, messageErreur){
    if(fonctionATester == true){
      zoneErreur.innerText = "";
      nombreTestReussi++;
    } else {
      zoneErreur.innerText = messageErreur;
    };
  };

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