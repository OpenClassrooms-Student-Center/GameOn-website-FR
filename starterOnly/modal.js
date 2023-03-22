
/////////////////////////////////////////////// RECUPERATION DES ELEMENTS //////////////////////////////////////////

//Récupération de la modale
const modalbg = document.querySelector(".bground"); // Modale
const innermodalBody = document.querySelector(".modal-body");  // Corps de la modale

//Récupération  des boutons de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const closeModal = document.querySelector(".close"); // Bouton de fermeture de la modale
const closeModal2 = document.querySelector(".modal-btn-close"); // Bouton de fermeture de la modale
const btnsubmit = document.querySelector(".btn-submit");  // Bouton d'envoi du formulaire


//Récupération de la Div De soumission du message de confirmation
const modalSubmissionDiv = document.querySelector(".modal-submission"); // Div de confirmation de la modale



//////////////////////////////////////////////// ELEMENTS A VERIFIER //////////////////////////////////////////

// Récupération des valeurs des éléments du formulaire
const inputFirstName = document.forms["reserve"]["first"];  // Champ input prénom
const inputLastName = document.forms["reserve"]["last"]; // Champ input nom
const inputEmail = document.forms["reserve"]["email"]; // Champ input e-mail
const inputBirthdate = document.forms["reserve"]["birthdate"]; // Champ input date de naissance
const InputChallengeNb = document.forms["reserve"]["quantity"]; // Champ input nombre de tournois
const listLocations = document.querySelectorAll('input[type="radio"][name="location"]')
const formLocations = document.querySelector('input.radio')
const inputTerms = document.forms["reserve"]["checkbox1"]; // Champ input conditions générales

//Régex pour la validation de l'email
const regexpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//Liste des objets à vérifier + conditions + messages de retour en cas d'erreur

const formfieldsObjects = [
  {   // Objet Prénom
    formfield: inputFirstName,
    condition: () => inputFirstName.value === "" || inputFirstName.value.length < 2,
    message: "Mettez votre prénom."
  },
  { // Objet Nom de Famille
    formfield: inputLastName,
    condition: () => inputLastName.value === "" || inputLastName.value.length < 2,
    message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  },
  { // Objet Date de naissance
    formfield: inputBirthdate,
    condition: () =>!validateBirthdate(),  // Vérifier si la date de naissance est valide (fonction validateBirthdate
    message: "Veuillez entrer votre date de naissance."
  },
  {  // Objet Objet Quantité
    formfield: InputChallengeNb,
    condition: () => InputChallengeNb.value === "",
    message: "Merci de compléter le formulaire avec le nombre de participation à nos tournois."
  },
  { // Objet E-mail
    formfield: inputEmail,
    condition: () => !regexpEmail.test(inputEmail.value),
    message: "Veuillez entrer une adresse e-mail valide."
  }, 
  { // Objet Conditions générales
    formfield: inputTerms,
    condition: () => !inputTerms.checked,  // Vérifier si les conditions générales sont cochées
    message: "Vous devez vérifier que vous acceptez les termes et conditions."
  },
  { // Objet Localisation 
    formfield: formLocations,        
    condition: () =>  // Vérifier si une ville est sélectionnée
      !validateLocation(),  // Vérifier si une ville est sélectionnée (fonction validateLocation
    message: "Veuillez sélectionner une ville."
  },
];

//////////////////////////////////////////////// GESTION MODALE //////////////////////////////////////////

//// OUVERTURE MODALE

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {// Lancement de la modale
  modalbg.style.display = "block";
  inputFirstName.focus();
}

//// FERMETURE MODALE

// Événement de fermeture de la modale
closeModal.addEventListener("click", closeForm);
closeModal2.addEventListener("click", closeForm);

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
function confirmValidation() {
  
  if (validate()) {
    innermodalBody.style.display = "none";
    modalSubmissionDiv.style.display = "flex";
  }
}


//////////////////////////////////////////////// GESTION DU FORMULAIRE //////////////////////////////////////////




// Fonction de validation des données des champs input
function validateLocation() {
  let selectedLocation = 0;

  for (let location of  listLocations ) {
    console.log(location.value)
    if (location.checked) {
    selectedLocation++;
    
  }}
  if (selectedLocation === 0) {
    return false;
  } else {
    return true;
  }
}

function validateBirthdate() {   
    // Convertir la date de naissance en objet Date
  this.BirthDate = new Date(inputBirthdate.value  );

  // Vérifier si la date est valide
  if (isNaN(this.BirthDate.getTime())) {
    return false;
  }

  // Vérifier si l'utilisateur a plus de 18 ans
  const today = new Date();
  let age = today.getFullYear() - this.BirthDate.getFullYear();
  const m = today.getMonth() - this.BirthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < this.BirthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    return false;
  }
  return true;
}


function validate() {
  let formIsTrue = true;
  for (let i = 0; i < formfieldsObjects.length; i++) {
    let condition = formfieldsObjects[i].condition();
    let message = formfieldsObjects[i].message;
    
    if (condition) {
      console.log("formNotOk = " + formfieldsObjects[i].message);
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error", message);
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "true");
      formfieldsObjects[i].formfield.focus();
      formIsTrue = false;
    } else {
      console.log("formOk = " +  formfieldsObjects[i].formfield.value);
      
      formfieldsObjects[i].formfield.parentElement.removeAttribute("data-error");
      formfieldsObjects[i].formfield.parentElement.setAttribute("data-error-visible", "false");
    }
  }
  return formIsTrue;
}