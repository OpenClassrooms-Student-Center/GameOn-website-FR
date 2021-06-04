function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  };
};

// AFFICHER / FERMER MODALE
// DOM Elements affichage Modale
const modalbg = document.getElementById("formulaire-inscription");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
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
// DOM elements Validation formulaire
const formulaire = document.getElementById("formulaire");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const mail = document.getElementById("email");
const dateNaissance = document.getElementById("birthdate");
const nombreTournoi = document.getElementById("quantity");
const choixVille = document.getElementsByName("location");
const conditionUtilisation = document.getElementById("checkbox1");
const btnValiderFormulaire = document.getElementById("btn-valider");
const erreurPrenom = document.getElementById("erreur-prenom");
const erreurNom = document.getElementById("erreur-nom");
const erreurMail = document.getElementById("erreur-mail");
const erreurNaissance = document.getElementById("erreur-naissance");
const erreurTournoi = document.getElementById("erreur-tournoi");
const erreurVille = document.getElementById("erreur-ville");
const erreurCondition = document.getElementById("erreur-condition");
const fermerValidation1 = document.getElementById("btn-close-form-envoye");
const fermerValidation2 = document.getElementById("btn-fermer-form-envoye");
const message = document.getElementById("message-formulaire-envoye");
// Variable formulaire
const couleurDefaut = "#fc4059";
const couleurValide = "";
// Fonction test des champs du formulaire
function testFormulaire(evenement){
  let nombreTestReussi = 0;
  let chercherVilleNonChoisie = 0;
  // Test prénom
  if(prenom.value != "" && prenom.value.length >= 2){
    erreurPrenom.innerText = "";
    prenom.style.borderColor =couleurValide;
    nombreTestReussi++;
  } else {
    erreurPrenom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom.style.borderColor =couleurDefaut;
  }
  // Test nom 
  if (nom.value != "" && nom.value.length >= 2){
    erreurNom.innerText = "";
    nom.style.borderColor = couleurValide;
    nombreTestReussi++;
  } else {
    erreurNom.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nom.style.borderColor = couleurDefaut;
  }
  // Test mail
  if (/[\s\S]{1,}@([a-zA-Z0-9-_]{1,}[.])+[a-zA-Z]{2,3}$/.test(mail.value)){
    erreurMail.innerText = "";
    mail.style.borderColor = couleurValide;
    nombreTestReussi++;
  } else {
    erreurMail.innerText = "Veuiller entrer un couriel valide";
    mail.style.borderColor = couleurDefaut;
  }
  // Test age
  if (new Date().getFullYear() - new Date(dateNaissance.value).getFullYear() >= 18){
    erreurNaissance.innerText = "";
    dateNaissance.style.borderColor = couleurValide;
    nombreTestReussi++;
  } else {
    erreurNaissance.innerText = "Vous devez entrer votre date de naissance. Et être majeur";
    dateNaissance.style.borderColor = couleurDefaut;
  }
  // Test nb tournois
  if (/^(?!\-)[0-9]{1,}$/.test(nombreTournoi.value) && nombreTournoi.value < 99){
    erreurTournoi.innerText = "";
    nombreTournoi.style.borderColor = couleurValide;
    nombreTestReussi++;
  } else {
    erreurTournoi.innerText = "Veuillez saisir un nombre de participation entre 0 et 99";
    nombreTournoi.style.borderColor = couleurDefaut;
  }
  // Test choix ville
  for (let ville of choixVille){
    if(ville.checked == false){
      chercherVilleNonChoisie++;
    }
  }
  if(chercherVilleNonChoisie != choixVille.length){
    erreurVille.innerText = "";
    nombreTestReussi++;
  } else {
    erreurVille.innerText = "Veuillez choisir une ville";
  }
  // Test condition utilisation
  if (conditionUtilisation.checked){
    erreurCondition.innerText = "";
    nombreTestReussi++;
  } else {
    erreurCondition.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
  // Gestion comportement formulaire et message formulaire valide
  if (nombreTestReussi == 7){
    return true;
  } else {
    return false;
  }
}
// Fonction fermeture du message de validation formulaire
fermerValidation1.addEventListener("click",function(){
  message.style.display = "none";
})
fermerValidation2.addEventListener("click",function(){
  message.style.display = "none";
})
// Déclencheur de validation et message erreur
formulaire.addEventListener("submit", function(submit){
  let test = testFormulaire();
  if (test) {
    message.style.display = "block";
  }else{
    submit.preventDefault();
  }
})