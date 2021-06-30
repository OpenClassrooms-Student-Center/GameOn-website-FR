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
const form = document.querySelector("form[name='reserve']");
const formData = document.querySelectorAll(".formData");
const btnClose = document.getElementById("close");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const birthday = document.getElementById("birthdate");
const email = document.getElementById("email");
const nbrTournois = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const villes = [newYork, sanFrancisco, seattle, chicago, boston, portland];
const conditionUtilisation = document.getElementById("checkbox1");
const btnSubmit = document.querySelector('.btn-submit[type="submit"]');
const formulaire = document.getElementById("formulaire"); 

//Injection des message d'erreurs.
const erreurQuantiteTournois = document.getElementById("message__tournoi");
const erreurNom = document.getElementById("message__nom");
const erreurPrenom = document.getElementById("message__prenom");
const erreurEmail = document.getElementById("message__email");
const erreurBirthday = document.getElementById("message__birthday");
const erreurVille = document.getElementById("message__ville");
const erreurConditionVente = document.getElementById(
  "message__conditionsUtilisation"
);

// Pour validation des dates
const dateBasse = new Date(1921, 1, 01);
const dateHaute = new Date(2011, 1, 01);
const dateNow = new Date(Date.now());

//Class resultat qui permet d'avoir l'endroit ou injceter le message d'erreur,  
// la valeur retouner par les fonctions de test et le message d'erreur
class resultat {
  constructor(endroit, valeur, message) {
    this.endroit = endroit;
    this.valeur = valeur;
    this.message = message;
  }
}

let resPrenom = new resultat(
  erreurPrenom,
  false,
  "Veuillez rentrer 2 caractères ou plus."
);
let resNom = new resultat(
  erreurNom,
  false,
  "Veuillez rentrer 2 caractères ou plus."
);
let resEmail = new resultat(
  erreurEmail,
  false,
  "Veuillez rentrer une adresse mail valide."
);
let resBirthday = new resultat(
  erreurBirthday,
  false,
  "Merci de rentrer un date valide."
);
let resTournois = new resultat(
  erreurQuantiteTournois,
  false,
  "Veuillez renseigner un nombre entre 0 et 99."
);
let resVille = new resultat(erreurVille, false, "Veuillez indiquer une ville.");
let resCondition = new resultat(
  erreurConditionVente,
  false,
  "Veuillez accepter les conditions d'utilisation."
);

/*
let resTotals = [
  resPrenom,
  resNom,
  resEmail,
  resBirthday,
  resTournois,
  resVille,
  resCondition,
];
*/ 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Ferme la modale
btnClose.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// Fonction qui renvoi le message d'erreur en cas de mauvaise saisie
/*
function messageErreur(ouInjecter, messageErreur, styleInput) {
  ouInjecter.innerText = messageErreur;
  styleInput.style.border = " 2px solid red";
}
//Fonction qui annule le message et la mise en forme en cas d'erreur
function annuleErreur(ouInjecter, messageErreur, styleSurInput) {
  ouInjecter.innerText = messageErreur;
  styleSurInput.style.border = "1px solid black";
}
*/

//fonction qui renvoie une erreur si l'input du nom est un nombre ou s'il a moins de 2 caratères.
function validPrenom() {
  if (/(^[a-zA-Z])([a-zA-Z\-\'])/.test(firstName.value)) {
    resPrenom.valeur = true;
    resPrenom.endroit.innerText = "";
  } else {
    resPrenom.valeur = false;
    resPrenom.endroit.innerText = resPrenom.message;
  }
}
//fonction qui renvoie une erreur si l'input du prenom est un nombre ou s'il a moins de 2 caratères.
function validNom() {
  if (/(^[a-zA-Z])([a-zA-Z\-\'])/.test(lastName.value)) {
    resNom.valeur = true;
    resNom.endroit.innerText = "";
  } else {
    resNom.valeur = false;
    resNom.endroit.innerText = resNom.message;
  }
}

//Fonction qui renvoie un resultat true si le format de l'email correpsond ou sinon message d'erreur.
function validEmail() {
  if (/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i.test(email.value)) {    
    resEmail.valeur = true;
    resEmail.endroit.innerText = "";
  } else {
    resEmail.valeur = false;
    resEmail.endroit.innerText = resEmail.message;
  }
}

//Renvoie des messages d'erreurs si false en fonction de l'age rentré ou true si l'age est bon
function validBirthday() {
  let anniversaire = new Date(birthday.value);
  if (anniversaire >= dateBasse && anniversaire <= dateHaute) {
    resBirthday.valeur = true;
    resBirthday.message = resBirthday.endroit.innerText = "";
  } else if (anniversaire < dateBasse) {
    resBirthday.valeur = false;
    resBirthday.message = resBirthday.endroit.innerText =
      "Vous me semblez un peu trop agé pour participer. Merci de rentrer une date valide.";
  } else if (anniversaire > dateNow) {
    resBirthday.valeur = false;
    resBirthday.message = resBirthday.endroit.innerText =
      "Merci de rentrer un date valide.";
  } else if (anniversaire > dateHaute && anniversaire <= dateNow) {
    resBirthday.valeur = false;
    resBirthday.message = resBirthday.endroit.innerText =
      "Tu me semble un peu jeune pour participer, reviens nous voir dans quelques années.";
  } else {
    resBirthday.valeur = false;
    resBirthday.message = resBirthday.endroit.innerText =
      "Merci de rentrer un date valide.";
  }
}

//Fonction qui renvoi une erreur si elle si elle l'entrée n'est pas comprise entre 0-99 ou si lettres
function validTournois() {
  if (
    /[0-9]/.test(nbrTournois.value) &&
    nbrTournois.value >= 0 &&
    nbrTournois.value < 100
  ) {
    resTournois.valeur = true;
    resTournois.endroit.innerText = "";
  } else {
    resTournois.valeur = false;
    resTournois.endroit.innerText = resTournois.message;
  }
}

//Fonction qui retourne true si une valeur est check
function validVille() {
  for (let i = 0; i < villes.length; i++) {
    if (villes[i].checked) {
      resVille.endroit.innerText = "";
      return (resVille.valeur = true);
    }
    resVille.valeur = false;
    resVille.endroit.innerText = resVille.message;
  }
}

//Fonction qui renvoie true si check et false sinon.
function validCondition() {
  if (conditionUtilisation.checked) {
    resCondition.valeur = true;
    resCondition.endroit.innerText = "";
  } else {
    resCondition.valeur = false;
    resCondition.endroit.innerText = resCondition.message;
  }
}

//Fonction qui va mettre un message de validation au centre de la modale
function messageValidation() {
  formData.forEach((items) => {
    items.style["visibility"] = "hidden";
  });
  btnSubmit.style["visibility"] = "hidden";
  let messsageValidation = document.createElement("p");
  messsageValidation.className = "validation";
  messsageValidation.innerText = "Merci pour votre inscription !";
  form.appendChild(messsageValidation);
  let boutonFermer = document.createElement('div'); 
  boutonFermer.className = "bouton-fermer"; 
  boutonFermer.innerText = "Fermer"; 
  form.appendChild(boutonFermer)
}

// Fonciton qui test toute nos entrées de formulaire en lançant toutes les fonctions associées
function validationFormulaire() {
  validPrenom();
  validNom();
  validEmail();
  validBirthday();
  validTournois();
  validVille();
  validCondition();
}

// Fonction qui permet un reset du formulaire
function resetFormulaire () {
  formData.forEach((items) => {
    items.style["visibility"] = "visible" ; 
  });
  document.querySelectorAll(".validation").forEach(element => element.remove());
  form.reset()
}

//Fonction qui femre la modale
function fermeModal() {
  document.querySelector(".bouton-fermer").remove();
  btnSubmit.style["visibility"] = "visible";
  modalbg.style.display = "none";
  resetFormulaire()
}


//Fonction qui vérifie si si le formulaire est bien renplis et l'envoi si c'est bon avec un message
//Sinon affiche un message d'erreur sur les éléments mal remplis
function validationModale(e) {
  validationFormulaire();
  e.preventDefault(); 
  if (!resPrenom.valeur) {
    return;
  } else if (!resNom.valeur) {
    return;
  } else if (!resEmail.valeur) {
    return;
  } else if (!resBirthday.valeur) {
    return;
  } else if (!resTournois.valeur) {
    return;
  } else if (!resVille.valeur) {
    return;
  } else if (!resCondition.valeur) {
    return;
  } else {
    messageValidation();
  }
  document.querySelector('.bouton-fermer').addEventListener('click', fermeModal);
  btnClose.addEventListener("click", fermeModal);
}


btnSubmit.addEventListener("click", validationModale);


