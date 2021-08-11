const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');

const btnMainOpen = document.querySelector('.main__btn');
const btnModCross = document.querySelector('.modal__close');
const btnCloseRegistration = document.querySelector('.modal__closeregistration');
const blockModal = document.querySelector('.modal');
let modal = false;

const allItemNav = document.querySelectorAll('.navbar__item');

//----------------------------- Menu Header  -----------------------------//

// la cible n'est ni header ni l'un de ses descendants ; fermer le menu
window.addEventListener("click", function (e) {
  if (!e.target.closest("header")) {
    hamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
  }
})

// Toggle du hmaburger et du menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
}

// Empecher le click si l'écran autre que Mobile
const isMobile = !window.matchMedia("(min-width: 768px)").matches;
console.log(isMobile)
if (isMobile) {
  // sur le hamburger
  hamburger.addEventListener("click", mobileMenu);
  // sur tout les liens
  allItemNav.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu();
    });
  });
}

// StopPropagation des menus à la modale True
if (modal === true) {
  navbarMenu.addEventListener("click", function (e) {
    e.stopPropagation;
  });
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation;
  });
}

//----------------------------- Modale -----------------------------//

// Ouverture
function openModal() {
  modal = true;
  blockModal.style.display = "block";
  blockModal.removeAttribute('aria-hidden');
  blockModal.setAttribute('aria-modal', 'true');
}
btnMainOpen.addEventListener("click", openModal);
// Fermeture
function closeModal() {
  modal = false;
  blockModal.style.display = "none";
  blockModal.setAttribute('aria-hidden', 'true');
  blockModal.removeAttribute('aria-modal');
}
btnModCross.addEventListener("click", closeModal);

//----------------------------- Gestion de formulaire -----------------------------//

const firstNameInput = document.querySelector('#first');
const lastNameInput = document.querySelector('#last');
const emailInput = document.querySelector('#email');
const birthdateInput = document.querySelector('#birthdate');
const tournamentsInput = document.querySelector('#tournaments');

const form = document.querySelector('.reservation');

const nameRegex = /^[A-Za-z\s]{3,20}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const birthdateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const tournamentsRegex = /^(0?[0-9]|[0-9][0-9])$/;

// Validation des regex
const nameIsValid = (name) => {
  return nameRegex.test(name)
}
const emailIsValid = (email) => {
  return emailRegex.test(email)
}
const birthdateIsValid = (birthdate) => {
  return birthdateRegex.test(birthdate)
}
const tournamentsIsValid = (tournaments) => {
  return tournamentsRegex.test(tournaments)
}
const nameIsEmpty = (name) => {
  return name.trim() == ""
}

function ifInputValid(input) {
  input.classList.remove('modal__input--error');
  input.classList.add('modal__input--valid');
  input.nextElementSibling.classList.remove('error--invalid');
}

function ifInputInvalid(input) {
  input.classList.add('modal__input--error');
  input.classList.remove('modal__input--valid');
  input.nextElementSibling.classList.add('error--invalid');
}

// On lance au focusOut
const validateName = (name, input) => {
  if (nameIsValid(name)) {
    ifInputValid(input);
    input.nextElementSibling.innerHTML = "";
  } else if (nameIsEmpty(name)) {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ"
  } else {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Le champ accepte les lettres et les tirets maximum 20 caractères";
  }
}
// lancer la fonction pour test de focusout
const validateInputFirstName = (e) => {
  const firstName = e.target.value

  validateName(firstName, firstNameInput)
}
const validateInputLastName = (e) => {
  const lastName = e.target.value

  validateName(lastName, lastNameInput)
}

// Email
const validateEmail = (email, input) => {
  if (emailIsValid(email)) {
    ifInputValid(input);
    input.nextElementSibling.innerHTML = "";
  } else if (email.trim() == "") {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ";
  } else {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Le champ email n'est pas valide";
  }
}
const validateInputEmail = (e) => {
  const email = e.target.value;

  validateEmail(email, emailInput);
}

// Date de naissance
const validateBirthdate = (birthdate, input) => {
  if (birthdateIsValid(birthdate)) {
    ifInputValid(input);
    input.nextElementSibling.innerHTML = "";
  } else if (birthdate == "") {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ";
  } else {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Le champ date de naissance n'est pas valide";
  }
}

const validateInputBirthdate = (e) => {
  const birthdate = e.target.value;

  validateBirthdate(birthdate, birthdateInput);
}

// Gestion de la date pour le maximum d'années
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1 // janvier est 0
let yyyy = today.getUTCFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}
today = `${yyyy}-${mm}-${dd}`;
document.querySelector("#birthdate").setAttribute("max", today);
//console.log(today);

// Quantité de tournois
const validateTournaments = (tournaments, input) => {
  if (tournamentsIsValid(tournaments) && tournaments > 0) {
    ifInputValid(input);
    input.nextElementSibling.innerHTML = "";
    for (let inputs of checkboxElement) {
      inputs.disabled = false;
      let inputCheckIcon = inputs.nextElementSibling.childNodes[1];
      inputCheckIcon.classList.remove('modal__checkicon--disabled');
      //console.log(inputs);
    }
  } else if (parseInt(tournaments) === 0) {
    ifInputValid(input);
    input.nextElementSibling.innerHTML = "";
    for (let inputs of checkboxElement) {
      inputs.checked = false
      inputs.disabled = true;
      let inputCheckIcon = inputs.nextElementSibling.childNodes[1];
      inputCheckIcon.classList.add('modal__checkicon--disabled');
    }
  } else if (tournaments == "") {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ";
    for (let inputs of checkboxElement) {
      inputs.checked = false
      inputs.disabled = true;
      let inputCheckIcon = inputs.nextElementSibling.childNodes[1];
      inputCheckIcon.classList.add('modal__checkicon--disabled');
    }
  } else {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ";
  }
}
const validateInputTournaments = (e) => {
  const tournaments = e.target.value;

  validateTournaments(tournaments, tournamentsInput);
}

// Checkbox
const checkboxElement = document.querySelectorAll("input[name='location']");
let count = 0;

for (let inputs of checkboxElement) {
  inputs.checked = false
  inputs.disabled = true;
  let inputCheckIcon = inputs.nextElementSibling.childNodes[1];
  inputCheckIcon.classList.add('modal__checkicon--disabled');
}

for (let i = 0; i < checkboxElement.length; i++) {
  checkboxElement[i].addEventListener("click", verifyNumberCheck);
}

function verifyNumberCheck(e) {
  if (e.target.checked) {
    //const nameCheckBox = e.target.id;
    count++;
    //console.log(nameCheckBox);
  } else {
    count--;
  }
  console.log(count)
  return count;
}

function checkBoxIsValid(value) {
  let errorTown = document.querySelector('#error-town');
  if (value > 0) {
    errorTown.innerHTML = "";
    return true;
  } else {
    errorTown.innerHTML = "Merci de valider au moins une ville";
    return false;
  }
  //return value > 1 ? true : false;
}
function checkRequiredIsValid() {
  if (document.querySelector("#checkbox1").checked) {
    return document.querySelector("#checkbox1").checked;
  } else {
    document.querySelector('#error-quantity').innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
  //return document.querySelector("#checkbox1").checked ? true : false;
}

// Compilation des retour true/false de chaque value
const firstNameFormValid = () => {
  return nameIsValid(firstNameInput.value);
}
const lastNameFormValid = () => {
  return nameIsValid(lastNameInput.value);
}
const emailFormValid = () => {
  return emailIsValid(emailInput.value);
}
const birthdateFormValid = () => {
  return birthdateIsValid(birthdateInput.value);
}
const tournamentsFormValid = () => {
  return tournamentsIsValid(tournamentsInput.value);
}
const checkboxFormValid = () => {
  return checkBoxIsValid(count);
}
const formIsValid = () => {
  return firstNameFormValid() && lastNameFormValid() && emailFormValid() && birthdateFormValid() && tournamentsFormValid() && checkboxFormValid() && checkRequiredIsValid()
}

// Values "" au submit
function ifInputNotFill(input) {
  if (input.value == "") {
    ifInputInvalid(input);
    input.nextElementSibling.innerHTML = "Veuillez remplir ce champ";
  }
}
// Reset au submit
function ifsubmitReset(input) {
  input.value = "";
}

const submit = (e) => {
  if (formIsValid()) {
    // submit the form
    e.preventDefault();
    modifyModal();
    ifsubmitReset(firstNameInput);
    ifsubmitReset(lastNameInput);
    ifsubmitReset(emailInput);
    ifsubmitReset(birthdateInput);
    ifsubmitReset(tournamentsInput);
    //
    alert('formulaire validé');
  } else {
    // do not submit form
    e.preventDefault();
    ifInputNotFill(firstNameInput);
    ifInputNotFill(lastNameInput);
    ifInputNotFill(emailInput);
    ifInputNotFill(birthdateInput);
    ifInputNotFill(tournamentsInput);
    // console.log(nameIsValid(firstNameInput.value))
    // console.log(nameIsValid(lastNameInput.value))
    // console.log(emailIsValid(emailInput.value))
    // console.log(birthdateIsValid(birthdateInput.value))
    // console.log(tournamentsIsValid(tournamentsInput.value))
    // console.log(checkBoxIsValid(count))
    // console.log(checkRequiredIsValid())
  }
}

firstNameInput.addEventListener('focusout', validateInputFirstName);
lastNameInput.addEventListener('focusout', validateInputLastName);
emailInput.addEventListener('focusout', validateInputEmail);
birthdateInput.addEventListener('focusout', validateInputBirthdate);
tournamentsInput.addEventListener('focusout', validateInputTournaments);
form.addEventListener('submit', submit);

//----------------------------- Fin de gestion du formulaire début de la modale de remerciement -----------------------------//

function createModalRegistration() {
  const modalBody = document.querySelector('.modal__body');
  const newElt = document.createElement("div");
  modalBody.appendChild(newElt);
  modalBody.classList.add('modal__registration')
  const newP = document.createElement("p");
  const newBtn = document.createElement("button");
  newElt.appendChild(newP);
  newElt.appendChild(newBtn);
  newP.classList.add("modal__greetings");
  newBtn.classList.add("modal__closeregistration");
  document.querySelector(".modal__greetings").innerHTML = "Merci ! <br>Votre réservation a été reçue."
  document.querySelector(".modal__closeregistration").innerHTML = "Fermer";
  newBtn.addEventListener("click", () => {
    //on supprime la div attachée
    modalBody.removeChild(newElt);
    // on masque la modale et on remet le form
    form.style.display = "block";
    closeModal()
  });
}

function modifyModal() {
  form.style.display = "none";
  createModalRegistration();
}