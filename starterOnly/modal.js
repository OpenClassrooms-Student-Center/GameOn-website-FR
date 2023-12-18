// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodalBtn = document.querySelector(".close");

// Form elements
const form = document.querySelector("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const inputlocation = document.querySelectorAll('input[name="location"]');
const spanLocation = document.querySelectorAll('.check-icon')
const condition = document.getElementById("checkbox1");

//form thank
const thanks = document.querySelector(".bgThanks");
const message = document.getElementById("message");
const thanksBtn = document.querySelector(".thanksBtn");
const closeModalThanksBtn = document.querySelector(".X");

//regex
const regexText = new RegExp("^[a-zA-ZéèîïÉÈÎÏ]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$")
const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

//error message
const error = {
  text: 'Uniquement les caractères sont autorisés',
  length: 'Trop court - Veuillez entrer au moins 2 caractères',
  nonValide: 'Veuillez entrer une date valide',
  email: 'Veuillez renseigner une adresse Email valide.',
  emailFormat:'Email non valide, veuillez entrer une adresse valide',
  birthdate: 'Non autorisé - interdit aux mineurs',
  quantity: 'Veuillez selectionner un nombre de 0 ou plus',
  location: 'Veuillez selectionner une ville',
  condition: 'Veuillez accepter les conditions',
};

//error visible
const errorVisible = (element, error) => {
  element.parentElement.setAttribute("data-error-visible", "true");
  element.parentElement.setAttribute("data-error", error);
}

//error hidden
const errorHiden = element => {
  element.parentElement.removeAttribute("data-error-visible");
  element.parentElement.removeAttribute("data-error", error);
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form x
closemodalBtn.addEventListener("click", () => closeModal());

// close modal thanks X
closeModalThanksBtn.addEventListener("click", () => closeModalThanks());

// close modal thanks = bnt
thanksBtn.addEventListener("click", () => closeModalThanks());

// close modal form
modalbg.addEventListener("click", (event) => {
  if (event.target === modalbg) {
    modalbg.style.display = "none";
  }
});

function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "flex";
  
}

// launch modal thanks
function modalthanks() {
  modalbg.style.display = "none";
  thanks.style.display = "flex";
  form.reset();
};



//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//close  modal thanks
function closeModalThanks() {
  thanks.style.display = "none";
  form.reset();
};

// check length
function validerInput(element, error) {
  if (element.value.trim().length < 2) {
    errorVisible(element, error);
    return false
  }
  errorHiden(element);
  return true;

};

//check null
function checkInputVide(element, error) {
  if (element.value === null || element.value === "") {
    errorVisible(element, error);
    return false
  }
  errorHiden(element);
  return true;
};

//check input REGEX
function checkInput(regex, element, error) {
  if (!regex.test(element.value.trim())) {
    errorVisible(element, error);
    return false
  }
  errorHiden(element);
  return true;
}

//check input birthdate
function majeur(element, error) {
  const today = new Date();
  const birthdate = new Date(element.value);
  today.setFullYear(today.getFullYear() - 18);

  if (birthdate > today) {
    errorVisible(element, error);
    return false;
  }
  errorHiden(element);
  return true;
};

//Check location => radio
function checkLocation(element, error) {
  const isChecked = Array.from(element).some(radio => radio.checked);
  if (!isChecked) {
    errorVisible(element[0], error);
    return false;
  };
  errorHiden(element[0]);
  return true;
};

//check conditions => checkbox
function checkCondition(element, error) {
  if (!element.checked) {
    errorVisible(element, error);
    return false;
  }
  errorHiden(element);
  return true;
}

// submit modal ==> check validation
form.addEventListener("submit", (e) => validate(e));

// addEventListener ==> change / imput form
first.addEventListener("change", () => (checkInput(regexText, first, error.text) && validerInput(first, error.length)));
last.addEventListener("change", () => (checkInput(regexText, last, error.text) && validerInput(last, error.length)));
email.addEventListener("change", () => (checkInput(regexEmail, email, error.email) && checkInputVide(email, error.email)));
birthdate.addEventListener("change", () => (majeur(birthdate, error.birthdate) && checkInputVide(birthdate, error.nonValide)));
quantity.addEventListener("change", () => checkInputVide(quantity, error.quantity));

inputlocation.forEach(radio => radio.addEventListener("change", () => checkLocation(inputlocation, error.location)));
condition.addEventListener("change", () => checkCondition(condition, error.condition));

//valide form
function validate(e) {
  e.preventDefault();

  //check conditions = valide
  const valideFirst = (checkInput(regexText, first, error.text) && validerInput(first, error.length));
  const valideLast = (checkInput(regexText, last, error.text) && validerInput(last, error.length));
  const valideEmail = (checkInput(regexEmail, email, error.emailFormat) && checkInputVide(email, error.email));
  const valideBirthdate = (majeur(birthdate, error.birthdate) && checkInputVide(birthdate, error.nonValide));
  const valideQuantity = checkInputVide(quantity, error.quantity);
  const valideLocation = checkLocation(inputlocation, error.location);
  const valideCondition = checkCondition(condition, error.condition);

  if (valideFirst && valideLast && valideEmail && valideBirthdate && valideQuantity && valideLocation && valideCondition) {
    modalthanks();
  }
}
