//ajoute la classe responsive a l'element Topnav quand JS est activé
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
const btnClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const formulaire = document.getElementById("form");
const BtnRadio = document.getElementsByName("location");
const CheckCondition = document.getElementById("checkbox1");
const prenom = document.getElementById("first");
const formPrenom = document.getElementById("formPrenom");
const nom = document.getElementById("last");
const formNom = document.getElementById("formNom");
const mail = document.getElementById("email");
const formEmail = document.getElementById("formEmail");
const dateNaissance = document.getElementById("birthdate");
const formDateNaissance = document.getElementById("formDateNaissance");
const nbParticipations = document.getElementById("quantity");
const formNbParticipations = document.getElementById("formNbParticipations");
const formVille = document.getElementById("formVille");
const formConditions = document.getElementById("formConditions");
const messageRemerciement = document.getElementById("messageRemerciement");
const btnMerci = document.getElementById("btnMerci");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Ticket #1 fermer la modale
btnClose.addEventListener("click", closeModal);

//ferme la modale
function closeModal() {
  modalbg.style.display = "none";
  if (formulaire.className == "notActive") {
    formulaire.className = "active";
    messageRemerciement.className = "notActive";
    formulaire.reset();
  }
}

// Ticket #2, les entrées du formulaire sont implementées en html

// Ticket #3 validation et messages d'erreurs
//verifie que le champ prenom fait 2 caractères ou plus, sinon affiche un msg d'erreur
function ControlePrenom() {
  if (!prenom.validity.valid) {
    formPrenom.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    formPrenom.setAttribute("data-error-visible", true);
    return false;
  } else {
    formPrenom.setAttribute("data-error-visible", false);
    return true;
  }
}

//verifie que le champ nom fait 2 caractères ou plus, sinon affiche un msg d'erreur
function ControleNom() {
  if (!nom.validity.valid) {
    formNom.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    formNom.setAttribute("data-error-visible", true);
    return false;
  } else {
    formNom.setAttribute("data-error-visible", false);
    return true;
  }
}

//verifie que le champ mail est un email valide, sinon affiche un msg d'erreur
function ControleEmail() {
  if (!mail.validity.valid) {
    formEmail.setAttribute(
      "data-error",
      "Veuillez entrer une adresse e-mail valide"
    );
    formEmail.setAttribute("data-error-visible", true);
    return false;
  } else {
    formEmail.setAttribute("data-error-visible", false);
    return true;
  }
}

//verifie que le champ date de naissance est une date valide, sinon affiche un msg d'erreur
function ControleDateNaissance() {
  if (!dateNaissance.validity.valid) {
    formDateNaissance.setAttribute(
      "data-error",
      "Veuillez entrer une date valide"
    );
    formDateNaissance.setAttribute("data-error-visible", true);
    return false;
  } else {
    formDateNaissance.setAttribute("data-error-visible", false);
    return true;
  }
}

//verifie que le champ nombre de participation est entre 0-99, sinon affiche un msg d'erreur
function ControleNbParticipations() {
  if (!nbParticipations.validity.valid) {
    formNbParticipations.setAttribute(
      "data-error",
      "Veuillez entrer une valeur entre 0 et 99"
    );
    formNbParticipations.setAttribute("data-error-visible", true);
    return false;
  } else {
    formNbParticipations.setAttribute("data-error-visible", false);
    return true;
  }
}

//verifie qu'une ville a étée selectionnée dans les boutons radio, sinon affiche un msg d'erreur
function ControleLocation() {
  let j = 0;
  for (let i = 0; i < BtnRadio.length; i++) {
    if (BtnRadio[i].checked) {
      j++;
    }
  }
  if (j > 0) {
    formVille.setAttribute("data-error-visible", false);
    return true;
  } else {
    formVille.setAttribute("data-error", "Veuillez sélectionner une ville.");
    formVille.setAttribute("data-error-visible", true);
    return false;
  }
}

//verifie que les conditions d'utilisation sont acceptés, sinon affiche un msg d'erreur
function Conditions() {
  if (CheckCondition.checked) {
    formConditions.setAttribute("data-error-visible", false);
    return true;
  } else {
    formConditions.setAttribute(
      "data-error",
      "Veuillez accepter les conditions d'utilisation."
    );
    formConditions.setAttribute("data-error-visible", true);
    return false;
  }
}

// Ticket #4 Message de remerciement
//active le message de remerciement et desactive le formulaire
function Message() {
  formulaire.className = "notActive";
  messageRemerciement.className = "active";
}

//Reactive et reset le formulaire, desactive le message de remerciement et ferme la modale quand on clique sur le bouton de remerciement
btnMerci.addEventListener("click", closeModal);

//Fonctionalité pour fermer la modale avec la touche 'esc'
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Validation du formulaire au moment de l'envoi et affichage du message de remerciement si validé
formulaire.addEventListener("submit", function validate(e) {
  e.preventDefault();
  if (
    ControlePrenom() &&
    ControleNom() &&
    ControleEmail() &&
    ControleDateNaissance() &&
    ControleNbParticipations() &&
    ControleLocation() &&
    Conditions()
  ) {
    Message();
    return true;
  } else {
    return false;
  }
});
