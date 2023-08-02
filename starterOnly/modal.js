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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Ticket #1 fermer la modale
const btnClose = document.querySelector(".close");
btnClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Ticket #2
const BtnRadio = document.getElementsByName("location");
const CheckCondition = document.getElementById("checkbox1");

// Ticket #3

const prenom = document.getElementById("first");
const formPrenom = document.getElementById("formPrenom");
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

const nom = document.getElementById("last");
const formNom = document.getElementById("formNom");
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

const mail = document.getElementById("email");
const formEmail = document.getElementById("formEmail");
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

const dateNaissance = document.getElementById("birthdate");
const formDateNaissance = document.getElementById("formDateNaissance");
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

const nbParticipations = document.getElementById("quantity");
const formNbParticipations = document.getElementById("formNbParticipations");
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

// Vérification une ville sélectionnée btn radio
const formVille = document.getElementById("formVille");
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

// Vérification conditions d'utilisation
const formConditions = document.getElementById("formConditions");
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
const formulaire = document.getElementById("form");
const messageRemerciement = document.getElementById("messageRemerciement");
const btnMerci = document.getElementById("btnMerci");

function Message() {
  formulaire.className = "notActive";
  messageRemerciement.className = "active";
}

btnMerci.addEventListener("click", function event() {
  formulaire.className = "active";
  messageRemerciement.className = "notActive";
  closeModal();
  formulaire.reset();
});

// Validation

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
