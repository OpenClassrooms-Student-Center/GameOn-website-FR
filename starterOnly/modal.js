// Fonction pour modifier la classe du menu de navigation
function editNav() {
  // Récupération de l'élément du menu de navigation par son ID
  var x = document.getElementById("myTopnav");

  // Vérification de la classe actuelle de l'élément
  if (x.className === "topnav") {
    // Si la classe est "topnav", ajoute la classe "responsive"
    x.className += " responsive";
  } else {
    // Si la classe est différente de "topnav", réinitialise la classe à "topnav"
    x.className = "topnav";
  }
}
//elements de dom initial 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// element du dom pour le formulaire
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdayInput = document.getElementById("birthdate");
const numberInput = document.getElementById("quantity");
const locationRadios = document.querySelectorAll('input[type="radio"]');
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

//element du dom pour la validation du formulaire et la fermeture 
const startBtn = document.getElementById("btn-submit");

//elements du dom pour la page de reussite d inscription
const contentDiv = document.querySelector(".content");
const form = document.querySelector(".content form");
const modalBody = document.querySelector(".modal-body");
const successText = document.createElement("p");

//éléments du dom messages d erreurs
const errorFirstName = firstNameInput.parentNode;
const errorLastName = lastNameInput.parentNode;
const errorEmail = emailInput.parentNode;
const errorBirthday = birthdayInput.parentNode;
const errorNumber = numberInput.parentNode;
const errorLocation = document.getElementById("location1").parentNode;
const checkbox1Error = checkbox1.parentNode;

// Expressions régulières pour valider les champs de nom, email et nombre
const nameRegExp = /(^[a-z A-ZÂÀÈÉËÏÎéèëêïî-]{2,30})+$/;
const emailRegExp = /^[A-z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-zA-Z]{2,10}$/;
const numberRegExp = /^\d+$/;

// Tableau de messages d'erreur 
const message = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",//0 firstName
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",//1 lastName
  "Veuillez entrer un email valide.",//2 email
  "Veuillez entrer votre date de naissance.",//3 birthday vide
  "Vous devez avoir au moins 13 ans pour utiliser ce service.",//4 birthday -13 ans
  "Veuillez entrer un chiffre entre 0 et 99.",//5 number
  "veuillez choisir une ville",//6 isAnyRadioChecked
  "Vous devez vérifier que vous acceptez les termes et conditions.",//7 checkbox1
];

// ajout d'un écouteur d'événements pour le clic
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour afficher le modal
function launchModal() {
  modalbg.style.display = "block";
}

// Ajout d'un écouteur d'événements pour le clic sur le bouton de fermeture
modalClose.addEventListener("click", close);

// Fonction pour fermer le modal
function close() {
  modalbg.style.display = "none";
}

// Fonction pour définir un message d'erreur en recuperant le css et le rendre visible 
function setError(element, errorMessage) {
  element.setAttribute("data-error-visible", "true");
  element.setAttribute("data-error", errorMessage);
}

// Fonction pour effacer le message d'erreur en recuperant css et le rendre invisible 
function clearError(element) {
  element.setAttribute("data-error-visible", "false");
}

// Fonction de validation du prénom
function validateFirstName() {
  // Récupération de la valeur du prénom depuis l'input
  let firstName = firstNameInput.value;
  // Vérification du prénom avec l'expression régulière
  if (!nameRegExp.test(firstName)) {
    // En cas d'erreur, affichage du message d'erreur et retour false
    setError(errorFirstName, message[0]);
    return false;
  } else {
    // En cas de succès, effacement du message d'erreur et retour true
    clearError(errorFirstName);
    return true;
  }
}

// Fonction de validation du nom de famille
function validateLastName() {
  // Récupération de la valeur du nom de famille depuis l'input
  let lastName = lastNameInput.value;
  // Vérification du nom de famille avec l'expression régulière
  if (!nameRegExp.test(lastName)) {
    // En cas d'erreur, affichage du message d'erreur et retour false
    setError(errorLastName, message[1]);
    return false;
  } else {
    // En cas de succès, effacement du message d'erreur et retour true
    clearError(errorLastName);
    return true;
  }
}

// Fonction de validation de l'adresse e-mail
function validateEmail() {
  // Récupération de la valeur de l'adresse e-mail depuis l'input
  const email = emailInput.value;
  // Vérification de l'adresse e-mail avec l'expression régulière
  if (!emailRegExp.test(email)) {
    // En cas d'erreur, affichage du message d'erreur et retour false
    setError(errorEmail, message[2]);
    return false;
  } else {
    // En cas de succès, effacement du message d'erreur et retour true
    clearError(errorEmail);
    return true;
  }
}

// Fonction de validation de la date de naissance
function validateBirthday() {
  // Récupération de la valeur de la date de naissance depuis l'input
  let birthday = birthdayInput.value;
  // Vérification si la date de naissance est vide
  if (birthday === "") {
    // En cas d'erreur, affichage du message d'erreur et retour false
    setError(errorBirthday, message[3]);
    return false;
  } else {
    // Calcul de l'âge à partir de la date de naissance
    // Âge minimum requis
    const minAge = 13;
    // Obtenir la date actuelle
    const today = new Date();
    // Convertir la date de naissance fournie en objet Date
    const birthDate = new Date(birthday);
    // Calculer l'âge en soustrayant l'année de naissance de l'année actuelle en utilisant la methode annee
    let age = today.getFullYear() - birthDate.getFullYear();
    // Extraire le mois et le jour de la date de naissance en utilisant des methodes mois et jours
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
    // Extraire le mois et le jour de la date actuelle en utilisants les methodes mois et jour
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    // Ajustement de l'âge en fonction du mois et du jour actuels
    if (
      todayMonth < birthMonth ||
      (todayMonth === birthMonth && todayDay < birthDay)
    ) {
      age--;
    }
    // Vérification si l'âge est inférieur à l'âge minimum requis
    if (age < minAge) {
      // En cas d'erreur, affichage du message d'erreur et retour false
      setError(errorBirthday, message[4]);
      return false;
    } else {
      // En cas de succès, effacement du message d'erreur et retour true
      clearError(errorBirthday);
      return true;
    }
  }
}

// Fonction de validation du champ de numéro
function validateNumber() {
  // Récupération de la valeur du champ de numéro
  let number = numberInput.value;
  // Vérification si la valeur du champ passe la validation
  if (numberRegExp.test(number) && parseInt(number) <= 99) {
    // Effacement de l'erreur associée au champ de numéro
    clearError(errorNumber);
    return true; // La validation est réussie
  } else {
    // Affichage de l'erreur associée au champ de numéro
    setError(errorNumber, message[5]);
    return false; // La validation a échoué
  }
}

// Fonction de validation des boutons radio de localisation
function validateLocation() {
  // Variable pour vérifier si au moins un bouton radio est coché
  let isAnyRadioChecked = false;
  // Boucle à travers tous les boutons radio de localisation
  for (let i = 0; i < locationRadios.length; i++) {
    // Vérification si le bouton radio actuel est coché
    if (locationRadios[i].checked) {
      isAnyRadioChecked = true;
      // Affichage de la valeur du bouton radio coché dans la console
      console.log(locationRadios[i].value);
      break;
    }
  }
  // Vérification si au moins un bouton radio est coché
  if (!isAnyRadioChecked) {
    setError(errorLocation, message[6]);
    return false; // La validation a échoué
  }
  clearError(errorLocation);
  return true; // La validation est réussie
}

// Fonction de validation des cases à cocher
function validateCheckboxes() {
  // Vérification si la première case à cocher n'est pas cochée
  if (!checkbox1.checked) {
    // Affichage de l'erreur associée à la première case à cocher
    setError(checkbox1Error, message[7]);
    return false; // La validation a échoué
  } else {
    // Effacement de l'erreur associée à la première case à cocher
    clearError(checkbox1Error);
    return true; // La validation est réussie
  }
}

// Fonction pour finaliser la page après la validation
function validatePage() {
  // Modification du style pour masquer le formulaire
  form.style.display = "none";
  // Modification du style pour afficher la confirmation
  modalBody.style = `
    height: 710px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 15%;
  `;
  // Modification du texte de succès
  successText.innerHTML = "Merci !<br> Votre réservation a été reçue.";
  // Modification du style pour le texte de succès
  successText.style = `
    height: 50%;
    text-align: center;
  `;
  // Affichage du bouton "Fermer"
  startBtn.style.display = "block";
  startBtn.value = "Fermer";
  // Ajout de l'écouteur d'événements pour le bouton "Fermer"
  startBtn.addEventListener("click", close);
  // Ajout des éléments au DOM
  modalbg.appendChild(contentDiv);
  contentDiv.appendChild(modalBody);
  modalBody.appendChild(successText);
  modalBody.appendChild(startBtn);
}

// Ajout d'un écouteur d'événements pour le bouton "Fermer"
startBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Validation de tous les champs du formulaire
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isBirthdayValid = validateBirthday();
  const isNumberValid = validateNumber();
  const isLocationValid = validateLocation();
  const areCheckboxesValid = validateCheckboxes();

  // Soumission ou gestion des erreurs
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdayValid &&
    isNumberValid &&
    isLocationValid &&
    areCheckboxesValid
  ) {
    // Soumission réussie, appel de la fonction pour finaliser la page
    validatePage();
  }
});


