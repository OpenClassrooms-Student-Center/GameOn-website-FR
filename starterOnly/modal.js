
/////////////////////////////////////////////// RECUPERATION DES ELEMENTS //////////////////////////////////////////

//Récupération de la modale
const modalbg = document.querySelector(".bground"); // Modale
const innermodalBody = document.querySelector(".modal-body");  // Corps de la modale

//Récupération  des boutons de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const closeModal = document.querySelector(".close", "modal-btn-close"); // Bouton de fermeture de la modale
const btnsubmit = document.querySelector(".btn-submit");  // Bouton d'envoi du formulaire


//Récupération de la Div De soumission du message de confirmation
const modalSubmissionDiv = document.querySelector(".modal-submission"); // Div de confirmation de la modale



//////////////////////////////////////////////// ELEMENTS A VERIFIER //////////////////////////////////////////

// Récupération des valeurs des éléments du formulaire
const formName = document.forms["reserve"]["first"];  // Champ input prénom
const formLastName = document.forms["reserve"]["last"]; // Champ input nom
const formEmail = document.forms["reserve"]["email"]; // Champ input e-mail
const formBirthDate = document.forms["reserve"]["birthdate"]; // Champ input date de naissance
const formQuantity = document.forms["reserve"]["quantity"]; // Champ input nombre de tournois
const formLocation = document.forms["reserve"]["location"]; // Champ input ville
const formTerms = document.forms["reserve"]["checkbox1"]; // Champ input conditions générales

//Régex pour la validation de l'email
const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//Liste des objets à vérifier + conditions + messages de retour en cas d'erreur

const formfieldsObjects = [
  {   // Objet Prénom
    formfield: formName,
    condition: () => formName.value === "" || formName.value.length < 2,
    message: "Mettez votre prénom."
  },
  {  // Objet Objet Quantité
    formfield: formQuantity,
    condition: () => formQuantity.value === "",
    message: "Merci de compléter le formulaire avec le nombre de participation à nos tournois."
  },
  { // Objet Email
    formfield: formEmail,
    condition: () => !regexpEmail.test(formEmail.value),
    message: "Mettez une adresse e-mail valide."
  },
  { // Objet Nom de Famille
    formfield: formLastName,
    condition: () => formLastName.value === "" || formLastName.value.length < 2,
    message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  { // Objet Date de naissance
    formfield: formBirthDate,
    condition: () => formBirthDate.value === "" || !validateBirthdate(),
    message: "Veuillez entrer votre date de naissance."
  },
  { // Objet Localisation
    formfield: formLocation,
    condition: () => formLocation.checked === false,
    message: "Veuillez sélectionner une ville"
  },
  { // Objet Conditions générales
    formfield: formTerms,
    condition: () => formTerms.checked === false,
    message: "Veuillez Valider les conditions générales d'utilisation."
  }
];

//////////////////////////////////////////////// GESTION MODALE //////////////////////////////////////////

//// OUVERTURE MODALE

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {// Lancement de la modale
  modalbg.style.display = "block";
}

//// FERMETURE MODALE

// Événement de fermeture de la modale
closeModal.addEventListener("click", closeForm);

function closeForm() {// Fermeture de la modale

  modalbg.style.display = "none";
}

//// SOUMISSION DE LA MODALE

// Événement d'envoi du formulaire
document.forms["reserve"].addEventListener("submit", confirmValidation);  // Fonction de confirmation de la modale
document.forms["reserve"].addEventListener(   // Fonction de validation des données des champs input
  "submit", 
  e => {  
    e.preventDefault(); // Annuler l'envoi du formulaire
    validate(); 
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
function validateBirthdate() {
  // Convertir la date de naissance en objet Date
  this.BirthDate = new Date(formBirthDate.value);

  // Vérifier si la date est valide
  if (isNaN(this.BirthDate.getTime())) {
    return false;
  }

  // Vérifier si l'utilisateur a plus de 18 ans
  const today = new Date();
  const age = today.getFullYear() - this.BirthDate.getFullYear();

  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
    return false  // L'utilisateur n'a pas encore eu son anniversaire cette année
  }

  return age >= 18;
}

function validate() {
  let formIsTrue = true;
  console.log(typeof rfgv4rf6g46)



  for (let i = 0; i < formfieldsObjects.length; i++) {
    let condition = formfieldsObjects[i].condition();
    let message = formfieldsObjects[i].message;
    let formField = formfieldsObjects[i].formfield;
    if (condition) {
      formField.setAttribute("data-error", message);
      formField.childlement.setAttribute("data-error-visible", "true");
      formField.focus();
      formIsTrue = false;
    } else {
      formField.removeAttribute("data-error");
      formField.childlement.removeAttribute("data-error-visible");
    }
  }
  return formIsTrue;
}