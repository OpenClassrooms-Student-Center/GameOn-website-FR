// liste des variables dont on aura besoin pour manipuler les événements.
const firstnameField = document.getElementById("first-name");
const formDataFirstname = document.getElementById("form-data-firstname");
const lastnameField = document.getElementById("last-name");
const formDataLastname = document.getElementById("form-data-lastname");
const emailField = document.getElementById("email");
const formDataEmail = document.getElementById("form-data-email");
const birthdateField = document.getElementById("birthdate");
const formDataBirthdate = document.getElementById("form-data-birthdate");
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
  tooShortFirstname:
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  tooShortLastname:
    "Veuillez entrer 2 caractères ou plus pour le champ du nom.", // divers messages d'erreur a afficher selon l'erreur saisie dans le champ correspondant
  invalidEmail:
    "votre email n'est pas valide, essayez ce format : 'exemple@exemple.fr'",
  invalidBirthDate: "Veuillez entrer une date valide comme : jj/mm/aaaa",
  sameAsCurrentDate: "Vous êtez trop jeune pour pouvoir vous inscrire !",
  notAString: "Ce champ n'accepte que des lettres",
  onlyIntegers: "veuillez entrer uniquement des chiffres",
  onlyChars: "veuillez saisir uniquement des lettres",
  option: "Veuillez cocher un lieu s'il vous plait",
  termsOfUse: "Veuillez accepter les termes et conditions"
};

function validateFirstName() {
  let isValid = false; // rend la fonction fausse par défaut en attendant la bonne valeur
  const firstname = firstnameField.value; // récupération du champ correspondant dans le html en l'occurence ici, l'id first-name
  const firstNameError = document.getElementById("firstname-error"); //champ qui permet d'afficher les messages d'erreur si besoin.
  const stringRegex = /^[a-zA-Z\s-]+$/; // regex qui accepte les lettres majuscules et minuscules répétables, espaces et traits d'union
  if (firstname.trim() == "") {
    // .trim() permet de supprimer les espaces en trop qund on récupère la valeur du champ.
    // firstNameError.innerHTML = ERROR_MESSAGE.emptyField; // message d'erreur pour un champ vide.
    formDataFirstname.setAttribute("data-error-visible", true);
    formDataFirstname.setAttribute("data-accepted-visible", false);
    formDataFirstname.setAttribute("data-error", `${ERROR_MESSAGE.emptyField}`);
    isValid = false; // la condition reste fausse
  } else if (/[\d]/.test(firstname)) {
    // regex qui permet de détecter s'il y a des chiffres.
    // .test() permet de comparer si la variable donnée est identique à la regex
    // firstNameError.innerHTML = ERROR_MESSAGE.onlyChars; // message d'erreur qui demande a insérer des lettres uniqueemnt
    formDataFirstname.setAttribute("data-error-visible", true);
    formDataFirstname.setAttribute("data-accepted-visible", false);
    formDataFirstname.setAttribute("data-error", `${ERROR_MESSAGE.onlyChars}`);
    isValid = false;
  } else if (firstname.length < 2) {
    // vérifie si le champ inséré n'est pas inférieur à une chaine de caractère inférieure à 2
    // firstNameError.innerHTML = ERROR_MESSAGE.tooShortFirstName; // message d'erreur qui annonce une chaine de caracte1re trop courte pour être acceptée
    formDataFirstname.setAttribute("data-error-visible", true);
    formDataFirstname.setAttribute("data-accepted-visible", false);
    formDataFirstname.setAttribute(
      "data-error",
      `${ERROR_MESSAGE.tooShortFirstname}`
    );
    isValid = false;
  } else {
    formDataFirstname.setAttribute("data-error-visible", false);
    formDataFirstname.setAttribute("data-error", "");
    formDataFirstname.setAttribute("data-accepted-visible", true);
    // firstNameError.innerHTML = ""; // vide le champ des message d'erreur
    isValid = true; // la condition est bonne, on passe donc la valeur a vrai.
  }
  return isValid; // on retourne la valeur vrai à la sortie de la fonction.
}
firstnameField.addEventListener("blur", validateFirstName); // "blur" permet de récupérer un événement lorsque l'on sort d'un champ.

function validateLastName() {
  let isValid = false;
  const lastname = lastnameField.value;
  // const lastNameError = document.getElementById("lastname-error");
  const lastnameRegex = /^[a-zA-Z]+$/;
  if (lastname.trim() == "") {
    // lastNameError.innerHTML = ERROR_MESSAGE.emptyField;
    formDataLastname.setAttribute("data-error-visible", true);
    formDataLastname.setAttribute(
      "data-error",
      `${ERROR_MESSAGE.tooShortLastname}`
    );
    formDataLastname.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else if (/[\d]/.test(lastname)) {
    // lastNameError.innerHTML = ERROR_MESSAGE.onlyChars;
    formDataLastname.setAttribute("data-error-visible", true);
    formDataLastname.setAttribute("data-error", `${ERROR_MESSAGE.onlyChars}`);
    formDataLastname.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else if (lastname.length < 2) {
    // lastNameError.innerHTML = ERROR_MESSAGE.tooShortLastName;
    formDataLastname.setAttribute("data-error-visible", true);
    formDataLastname.setAttribute(
      "data-error",
      `${ERROR_MESSAGE.tooShortLastname}`
    );
    formDataLastname.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else if (!lastnameRegex.test(lastname)) {
    // lastNameError.innerHTML = ERROR_MESSAGE.notAString;
    formDataLastname.setAttribute("data-error-visible", true);
    formDataLastname.setAttribute("data-error", `${ERROR_MESSAGE.notAString}`);
    formDataLastname.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else {
    // lastNameError.innerHTML = "";
    formDataLastname.setAttribute("data-error-visible", false);
    formDataLastname.setAttribute("data-error", "");
    formDataLastname.setAttribute("data-accepted-visible", true);
    isValid = true;
  }
  return isValid;
}
lastnameField.addEventListener("blur", validateLastName);

function validateEmail() {
  let isValid = false;
  const email = emailField.value;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/; // Regex qui valide les adresses mail
  // const emailError = document.getElementById("email-error");
  if (email.trim() == "") {
    // emailError.innerHTML = ERROR_MESSAGE.emptyField; // renvoi un message d'erreur si le champ est vide
    formDataEmail.setAttribute("data-error-visible", true);
    formDataEmail.setAttribute("data-error", `${ERROR_MESSAGE.emptyField}`);
    formDataEmail.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else if (!emailRegex.test(email)) {
    // emailError.innerHTML = ERROR_MESSAGE.invalidEmail; // renvoi un message d'email invalide après avoir testé la valeur du champ avec la methode .test()
    formDataEmail.setAttribute("data-error-visible", true);
    formDataEmail.setAttribute("data-error", `${ERROR_MESSAGE.invalidEmail}`);
    formDataEmail.setAttribute("data-accepted-visible", false);
    isValid = false;
  } else {
    // emailError.innerHTML = "";
    formDataEmail.setAttribute("data-error-visible", false);
    formDataEmail.setAttribute("data-error", "");
    formDataEmail.setAttribute("data-accepted-visible", true);
    isValid = true;
  }
  return isValid;
}
emailField.addEventListener("blur", validateEmail);

function validateBirthdate() {
  let isValid = false;
  const birthdate = birthdateField.value;
  // const birthDateError = document.getElementById("birthdate-error");
  const birthDateRegex =
    /^(0?[1-9]|[1-2][0-9]|3[0-1])([\s.-\\/])(0?[1-9]|1[0-2])\2((19|20)\d\d)$/; // regex qui accepte les date de naissances avec les espace, "/", "-" et ".", elle n'accepte que les noombres jusqu'à 31 pour les jours, 12 pour les mois et avvec uniquement les années commençant par 1900 ou 2000.
  if (birthdate.trim() == "") {
    // birthDateError.innerHTML = ERROR_MESSAGE.emptyField;
    formDataBirthdate.setAttribute("data-error-visible", true);
    formDataBirthdate.setAttribute("data-error", `${ERROR_MESSAGE.emptyField}`);
    isValid = false;
  } else if (!birthDateRegex.test(birthdate)) {
    // birthDateError.innerHTML = ERROR_MESSAGE.invalidBirthDate;
    formDataBirthdate.setAttribute("data-error-visible", true);
    isValid = false;
  } else {
    // birthDateError.innerHTML = "";
    formDataBirthdate.setAttribute("data-error-visible", false);
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
    tournamentQuantityError.innerHTML = "";
    isValide = true;
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
  e.preventDefault(); // prevnetDefault permet de ne pas recharger la page après une action.
  return isValid;
}
