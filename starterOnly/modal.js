function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const errorBorder = "1px solid red";

// Éléments DOM

const modalbg = document.querySelector(".bground");
const innermodalBody = document.querySelector(".modal-body");  // Corps de la modale

const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale

const regexpEmail = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)    // Expression régulière pour la validation de l'adresse e-mail
const closeModal = document.querySelector(".close", "modal-btn-close"); // Bouton de fermeture de la modale
const btnsubmit = document.querySelector(".btn-submit");  // Bouton d'envoi du formulaire
const formName = document.forms["reserve"]["first"];  // Champ input prénom
const formLastName = document.forms["reserve"]["last"]; // Champ input nom
const formEmail = document.forms["reserve"]["email"]; // Champ input e-mail
const formBirthDate = document.forms["reserve"]["birthdate"]; // Champ input date de naissance
const formQuantity = document.forms["reserve"]["quantity"]; // Champ input nombre de tournois
const formTerms = document.forms["reserve"]["terms"];

const formfieldsObjects = [
  {
    formfield: formName,
    condition: () => formName.value === "" || formName.value.length < 2,
    message: "Mettez votre prénom."
  },
  {
    formfield: formQuantity,
    condition: () => formQuantity.value === "",
    message: "Merci de compléter le formulaire avec le nombre de participation à nos tournois."
  },
  {
    formfield: formEmail,
    condition: () => !regexpEmail.test(formEmail.value),
    message: "Mettez une adresse e-mail valide."
  },
  {
    formfield: formLastName,
    condition: () => formLastName.value === "" || formLastName.value.length < 2,
    message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  {
    formfield: formBirthDate,
    condition: () => formBirthDate.value === "",
    message: "Veuillez entrer votre date de naissance."
  }
];

//////////////////////////////////////////////// GESTION MODALE //////////////////////////////////////////

//// OUVERTURE MODALE

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement de la modale
function launchModal() {
  modalbg.style.display = "block";
}

//// FERMETURE MODALE

// Événement de fermeture de la modale
closeModal.addEventListener("click", closeForm);

// Fermeture de la modale
function closeForm() {
  modalbg.style.display = "none";
}

//// SOUMISSION DE LA MODALE

// Événement d'envoi du formulaire
document.forms["reserve"].addEventListener("submit", confirmValidation);
// Vérification de la modale
document.forms["reserve"].addEventListener(
  "submit", 
  function (event) {
    event.preventDefault();
  }
);

// Fonction de confirmation de la modale
// Fonction de confirmation de la modale
function confirmValidation() {
  if (validate()) {
    innermodalBody.getElementsByTagName("form")[0].style.display = "none";
    modalSubmissionDiv.style.display = "block";
  }
}


//////////////////////////////////////////////// GESTION DU FORMULAIRE //////////////////////////////////////////

let formIsTrue = true;


// Fonction de validation des données des champs input
function validate() {
  let formIsTrue = true;

  for (let i = 0; i < formfieldsObjects.length; i++) {
    let condition = formfieldsObjects[i].condition();
    let message = formfieldsObjects[i].message;

    if (condition) {
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error", message);
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "true");
      formfieldsObjects[i].formfield.focus();
      formIsTrue = false;
    } else {
      formfieldsObjects[i].formfield.parentElement.removeAttribute("data-error");
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "false");
    }
  }
  return formIsTrue;
}