function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const errorBorder = "1px solid red"

// Éléments DOM

const modalbg = document.querySelector(".bground");
const modalSubmissionMsg = document.querySelector(".confirm-msg") // Message de confirmation de soumission du formulaire dans la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const innermodalBody = document.querySelector(".modal-body")  // Corps de la modale
const regexpEmail = new RegExp(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)    // Expression régulière pour la validation de l'adresse e-mail
const closeModal = document.querySelector(".close", "modal-btn-close"); // Bouton de fermeture de la modale
const btnsubmit = document.querySelector(".btn-submit");  // Bouton d'envoi du formulaire
const formName = document.forms["reserve"]["first"];  // Champ input prénom
const formLastName = document.forms["reserve"]["last"]; // Champ input nom
const formEmail = document.forms["reserve"]["email"]; // Champ input e-mail
const formBirthDate = document.forms["reserve"]["birthdate"]; // Champ input date de naissance
const formQuantity = document.forms["reserve"]["quantity"]; // Champ input nombre de tournois
const formfieldsObjects = [ // Tableau d'objets contenant les champs input du formulaire
  {
    "formfield": formName,  // Champ input prénom
    "condition": formName.value == "" || formName.value.length < 2,  // Condition de validation du champ input
    "message": 'Mettez votre prénom.' // Message d'erreur
  },
  {
    "formfield": formQuantity,
    "condition": formQuantity.value == "",
    "message": 'Merci de compléter le formulaire avec le nombre de participation à nos tournois.'
  },
  {
    "formfield": formEmail,
    "condition": !regexpEmail.test(formEmail.value),
    "message": 'Mettez une adresse e-mail valide.'
  },
  {
    "formfield": formLastName,
    "condition": formLastName.value == "" || formLastName.value.length < 2,
    "message": 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
  },
  {
    "formfield": formBirthDate,
    "condition": formBirthDate.value !== true,
    "message": 'Vous devez entrer votre date de naissance.'
  }
]

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
//document.forms["reserve"].addEventListener("submit", confirmValidation);

function confirmValidation() {
  
    innermodalBody.innerHTML= "";
    innermodalBody.innerHTML = `<p class="confirm-msg">Merci ! Votre réservation a été reçue.</p>`;
  
}

// Fonction de validation des données des champs input
function validate() {
 
  formIsTrue = true;
  
  for (let i = 0; i < formfieldsObjects.length; i++) {  // Boucle sur le tableau d'objets contenant les champs input du formulaire
    // if (formIsTrue === false) {
    //   formfieldsObjects[i].formfield.nextElementSibling.innerHTML = "";
    // }
    if (formfieldsObjects[i].condition) {  // Si la condition de validation du champ input est fausse         
       formfieldsObjects[i].formfield.style.border = errorBorder;
       formfieldsObjects[i].formfield.insertAdjacentHTML("afterend", `<p id="error" >${formfieldsObjects[i].message}</p>`);
       formfieldsObjects[i].formfield.focus();
       formIsTrue = false;
     }
  };
  if (formIsTrue == false) {
   return false
  }
  else {
   return true
  }
}