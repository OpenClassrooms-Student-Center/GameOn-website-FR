// liste des variables dont on aura besoin pour manipuler les événements.
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const birthdateField = document.getElementById("birthdate");
const tournamentQuantityField = document.getElementById("tournament-quantity");
const locationField1 = document.getElementById("location1");
const locationField2 = document.getElementById("location2");
const locationField3 = document.getElementById("location3");
const locationField4 = document.getElementById("location4");
const locationField5 = document.getElementById("location5");
const locationField6 = document.getElementById("location6");
const termsOfUseField = document.getElementById("checkbox1");
const thankYou = document.getElementById("thank-you");
const form = document.getElementById("form");

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

// retirer content
window.onclick = function (event) {
  const modal = document.getElementById("content");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  const bground = document.getElementById("bground");
  const cross = document.getElementById("cross"); // rajout de la variable qui cible la croix
  if (event.target == bground || event.target == cross) {
    // rajout de la condition " ou || " pour supprimer la modale
    bground.style.display = "none";
    form.style.display = "block";
    thankYou.innerHTML = "";
  }
};

// ==============================  CHAMPS DU FORMULAIRE =============================

const submitBtn = document.getElementById("submit-btn"); // bouton submit de la modale
submitBtn.addEventListener("click", validate); // écouteur d'événement posé sur le bouton submit et qui déclenche la fonction validate.

// liste des messages d'erreur stockée dans un objet.
const ERROR_MESSAGE = {
  emptyField: "Veuillez remplir ce champ s'il vous plait",
  tooShortFirstName:
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  tooShortLastName:
    "Veuillez entrer 2 caractères ou plus pour le champ du nom.", // divers messages d'erreur a afficher selon l'erreur saisie dans le champ correspondant
  invalidEmail:
    "votre email n'est pas valide, essayez ce format : 'exemple@exemple.fr'",
  invalidBirthDate: "Veuillez entrer une date valide comme : jj/mm/aaaa",
  sameAsCurrentDate: "Vous êtez trop jeune pour pouvoir vous inscrire !",
  notAString: "Ce champ n'accepte que des lettres",
  onlyIntegers: "veuillez entrer uniquement des chiffres",
  onlyChars: "veuillez saisir uniquement des lettres",
  option: "Veuillez cocher un lieu s'il vous plait",
  termsOfUse: "Veuillez accepter les termes et conditions",
};

function validateFirstName() {
  let isValid = false; // rend la fonction fausse par défaut en attendant la bonne valeur
  const firstName = firstNameField.value; // récupération du champ correspondant dans le html en l'occurence ici, l'id first-name
  const firstNameError = document.getElementById("firstname-error"); //champ qui permet d'afficher les messages d'erreur si besoin.
  const stringRegex = /^[a-zA-Z\s-]+$/; // regex qui accepte les lettres majuscules et minuscules répétables, espaces et traits d'union
  if (firstName.trim() == "") {
    // .trim() permet de supprimer les espaces en trop qund on récupère la valeur du champ.
    firstNameError.innerHTML = ERROR_MESSAGE.emptyField; // message d'erreur pour un champ vide.
    firstNameField.className = "formData[data-error-visible='true']", "text-control";
    isValid = false; // la condition reste fausse
  } else if (/[\d]/.test(firstName)) {
    // regex qui permet de détecter s'il y a des chiffres.
    // .test() permet de comparer si la variable donnée est identique à la regex
    firstNameError.innerHTML = ERROR_MESSAGE.onlyChars; // message d'erreur qui demande a insérer des lettres uniqueemnt
  } else if (firstName.length < 2) {
    // vérifie si le champ inséré n'est pas inférieur à une chaine de caractère inférieure à 2
    firstNameError.innerHTML = ERROR_MESSAGE.tooShortFirstName; // message d'erreur qui annonce une chaine de caracte1re trop courte pour être acceptée
    isValid = false;
  } else if (!stringRegex.test(firstName)) {
    // regex qui permet de savoir si une chaine de caractère rentre dans les crite1res demandés, en l'occurence des lettres
    firstNameError.innerHTML = ERROR_MESSAGE.notAString; // message d'erreur qui annonce que cette chaine de caractère n'est pas conforme
  } else {
    firstNameError.innerHTML = ""; // vide le champ des message d'erreur
    isValid = true; // la condition est bonne, on passe donc la valeur a vrai.
  }
  return isValid; // on retourne la valeur vrai à la sortie de la fonction.
}
firstNameField.addEventListener("blur", validateFirstName); // "blur" permet de récupérer un événement lorsque l'on sort d'un champ.

function validateLastName() {
  let isValid = false;
  const lastName = lastNameField.value;
  const lastNameError = document.getElementById("lastname-error");
  const lastNameRegex = /^[a-zA-Z]+$/;
  if (lastName.trim() == "") {
    lastNameError.innerHTML = ERROR_MESSAGE.emptyField;
    isValid = false;
  } else if (/[\d]/.test(lastName)) {
    lastNameError.innerHTML = ERROR_MESSAGE.onlyChars;
    isValid = false;
  } else if (lastName.length < 2) {
    lastNameError.innerHTML = ERROR_MESSAGE.tooShortLastName;
    isValid = false;
  } else if (!lastNameRegex.test(lastName)) {
    lastNameError.innerHTML = ERROR_MESSAGE.notAString;
    isValid = false;
  } else {
    lastNameError.innerHTML = "";
    isValid = true;
  }
  return isValid;
}
lastNameField.addEventListener("blur", validateLastName);

function validateEmail() {
  let isValid = false;
  const email = emailField.value;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/; // Regex qui valide les adresses mail
  const emailError = document.getElementById("email-error");
  if (email.trim() == "") {
    isValid = false;
    emailError.innerHTML = ERROR_MESSAGE.emptyField; // renvoi un message d'erreur si le champ est vide
  } else if (!emailRegex.test(email)) {
    isValid = false;
    emailError.innerHTML = ERROR_MESSAGE.invalidEmail; // renvoi un message d'email invalide après avoir testé la valeur du champ avec la methode .test()
  } else {
    emailError.innerHTML = "";
    isValid = true;
  }
  return isValid;
}
emailField.addEventListener("blur", validateEmail);

function validateBirthdate() {
  let isValid = false;
  const birthDate = birthdateField.value;
  console.log(birthDate);
  const birthDateError = document.getElementById("birthdate-error");
  const birthDateObj = new Date(birthDate); // stockage de la date de l'input dans une variable et j'utilise une nouvelle instance de date
  const currentDate = new Date(); // stockage de la date du jour dans une variable
  const birthDateRegex =
    /^(0?[1-9]|[1-2][0-9]|3[0-1])([\s.-\\/])(0?[1-9]|1[0-2])\2((19|20)\d\d)$/; // regex qui accepte les date de naissances avec les espace, "/", "-" et ".", elle n'accepte que les noombres jusqu'à 31 pour les jours, 12 pour les mois et avvec uniquement les années commençant par 1900 ou 2000.
  if (birthDate.trim() == "") {
    birthDateError.innerHTML = ERROR_MESSAGE.emptyField;
    isValid = false;
  } else if (birthDateObj === currentDate) {
    birthDateError.innerHTML = ERROR_MESSAGE.sameAsCurrentDate;
    isValid = false;
  } else if (!birthDateRegex.test(birthDate)) {
    birthDateError.innerHTML = ERROR_MESSAGE.invalidBirthDate;
    isValid = false;
  } else {
    birthDateError.innerHTML = "";
    isValid = true;
  }
  return isValid;
}
birthdateField.addEventListener("blur", validateBirthdate);

function validateTournamentNumber() {
  isValide = false;
  const tournamentQuantity = tournamentQuantityField.value;
  const tournamentQuantityError = document.getElementById("tournament-error");
  if (tournamentQuantity.trim() == "") {
    tournamentQuantityError.innerHTML = ERROR_MESSAGE.emptyField;
  } else if (isNaN(tournamentQuantity)) {
    // iNaN() vérifie si la variable n'est pas un chiffre et renvoie un booléen;
    tournamentQuantityError.innerHTML = ERROR_MESSAGE.onlyIntegers;
  } else {
    isValide = true;
    tournamentQuantityError.innerHTML = "";
  }
  return isValide;
}
tournamentQuantityField.addEventListener("blur", validateTournamentNumber);

function validateOptions() {
  let isValid = false;
  const location1 = locationField1.checked; // .checked renvoie un booléen si la case est cochée ou non
  const location2 = locationField2.checked;
  const location3 = locationField3.checked;
  const location4 = locationField4.checked;
  const location5 = locationField5.checked;
  const location6 = locationField6.checked;
  const optionError = document.getElementById("option-error");
  if (
    location1 ||
    location2 ||
    location3 ||
    location4 ||
    location5 ||
    location6
  ) {
    optionError.innerHTML = "";
    isValid = true;
  } else {
    optionError.innerHTML = ERROR_MESSAGE.option;
    isValid = false;
  }
  return isValid;
}

function validateTermsOfUse() {
  let isValid = false;
  const termsOfUse = termsOfUseField.checked;
  const termsOfUseError = document.getElementById("terms-of-use-error");
  if (!termsOfUse) {
    termsOfUseError.innerHTML = ERROR_MESSAGE.termsOfUse;
    isValid = false;
  } else {
    termsOfUseError.innerHTML = "";
    isValid = true;
  }
  return isValid;
}

function validate(e) {
  let isValid = false;
  const form = document.getElementById("form");
  const firstName = validateFirstName();
  const lastName = validateLastName();
  const email = validateEmail();
  const birthdate = validateBirthdate();
  const tournamentNumber = validateTournamentNumber();
  const options = validateOptions();
  const termsOfUse = validateTermsOfUse();
  if (
    firstName &&
    lastName &&
    email &&
    birthdate &&
    tournamentNumber &&
    options &&
    termsOfUse
  ) {
    form.style.display = "none";
    thankYou.innerHTML = "Inscription envoyée !";
    form.reset(); // "reset()" permet de vider tous les champs d'un formulaire.
    isValid = true;
  } else {
    isValid = false;
  }
  e.preventDefault();
  return isValid;
}
