function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onload = function () {
  checkSignupConfirmation();
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeConfirmationBtn = document.querySelector(".closeConfirmation");
const errorMessage = document.querySelector(".errorMessage");
const form = document.getElementsByName("reserve")[0];
const modalConfirmation = document.querySelector(".modalConfirmation");

function checkSignupConfirmation() {
  // get in the url the parameter signup
  const urlParams = new URLSearchParams(window.location.search);
  const signup = urlParams.get("signup");
  if (signup === "confirmed") {
    openConfirmation();
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);
closeConfirmationBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  switchModalContent("form"); // default content
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate()) {
    const hiddenInput = document.createElement("input");
    hiddenInput.setAttribute("type", "hidden");
    hiddenInput.setAttribute("name", "signup");
    hiddenInput.setAttribute("value", "confirmed");
    form.appendChild(hiddenInput);
    form.submit();
  }
});
function openConfirmation() {
  switchModalContent("confirmation");
  launchModal();
}
function closeConfirmation() {}
function switchModalContent(contentName) {
  if (contentName === "form") {
    modalConfirmation.style.display = "none";
    form.style.display = "block";
  } else {
    form.style.display = "none";
    modalConfirmation.style.display = "block";
  }
}
/**
 * @description validate the form data
 * @returns {Boolean} true if all is good, false if not.
 */
function validate() {
  var firstNameField = document.getElementById("first");
  var lastNameField = document.getElementById("last");
  var emailField = document.getElementById("email");
  var quantityField = document.getElementById("quantity");
  var location = document.getElementsByName("location");
  var birthdateField = document.getElementById("birthdate");

  if (
    !validateName(firstNameField, "first") ||
    !validateName(lastNameField, "last") ||
    !validateEmail(emailField) ||
    !validateBirthdate(birthdateField) ||
    !validateQuantity(quantityField) ||
    !validateLocation(location) ||
    !validateConditionsTerms()
  ) {
    return false;
  }

  // if all is good, authorize submission.
  return true;
}
/**
 * @description check if the name is valid
 * @param {HTMLAnchorElement}
 * @returns {Boolean}
 */
function validateName(anchor, anchorName) {
  const nameValidation = new RegExp(/^[a-zA-Z]+$/);
  if (anchor.value.trim() == "" || anchor.value.trim().length < 2) {
    sendErrorMessage(
      "Ce champ doit contenir au moins 2 caractères",
      anchorName
    );
    anchor.focus();
    return false;
  }
  if (!anchor.value.match(nameValidation)) {
    sendErrorMessage(
      "Ce champ doit contenir uniquement des lettres",
      anchorName
    );
    anchor.focus();
    return false;
  }
  sendErrorMessage("", anchorName);
  return true;
}
/**
 * @description check if the email is valid
 * @param {HTMLAnchorElement}
 * @returns {Boolean}
 */
function validateEmail(anchor) {
  const emailIsValid = anchor.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  if (!emailIsValid) {
    sendErrorMessage("Veuillez entrer une adresse e-mail valide", "email");
    anchor.focus();
    return false;
  }
  sendErrorMessage("", "email");
  return emailIsValid;
}
/**
 * @description check if the birthdate is valid
 * @param {HTMLAnchorElement} birthdate
 * @returns {Boolean}
 */
function validateBirthdate(birthdate) {
  if (
    birthdate.value.trim() == "" ||
    birthdate.value.trim().length < 2 ||
    birthdate.value.trim().value === "JJ/MM/AAAA"
  ) {
    sendErrorMessage("Veuillez entrer votre date de naissance", "birthdate");
    birthdate.focus();
    return false;
  }
  sendErrorMessage("", "birthdate");
  return true;
}
/**
 * @description check if the quantity is valid
 * @param {HTMLAnchorElement} quantity
 * @returns {Boolean}
 */
function validateQuantity(anchor) {
  if (isNaN(anchor.value) || anchor.value.trim() == "") {
    sendErrorMessage("Le champ doit être un nombre", "quantity");
    anchor.focus();
    return false;
  }
  sendErrorMessage("", "quantity");
  return true;
}
/**
 * @description check if the location is valid
 * @param {HTML anchor} location
 * @returns {Boolean}
 */
function validateLocation(location) {
  if (
    !location[0].checked &&
    !location[1].checked &&
    !location[2].checked &&
    !location[3].checked &&
    !location[4].checked &&
    !location[5].checked
  ) {
    sendErrorMessage(
      "Veuillez sélectionner une ville pour le tournoi",
      "location"
    );
    return false;
  }
  sendErrorMessage("", "location");
  return true;
}
/**
 * @description check if the conditions are checked
 * @returns {Boolean}
 */
function validateConditionsTerms() {
  const checkbox = document.getElementById("conditions");
  if (!checkbox || !checkbox.checked) {
    sendErrorMessage(
      "Veuillez accepter les conditions d'utilisation",
      "conditions"
    );
    console.log("conditions");
    return false;
  }
  sendErrorMessage("", "conditions");
  return true;
}
/**
 * @description send error message to the right anchor
 * @param {string} message
 */
function sendErrorMessage(message, type) {
  // Dispatch error message to the right anchor
  switch (type) {
    case "first":
      document.querySelector(".errorFirstNameMessage").textContent = message;
      break;
    case "last":
      document.querySelector(".errorLastNameMessage").textContent = message;
      break;
    case "email":
      document.querySelector(".errorEmailMessage").textContent = message;
      break;
    case "birthdate":
      document.querySelector(".errorBirthdateMessage").textContent = message;
      break;
    case "quantity":
      document.querySelector(".errorQuantityMessage").textContent = message;
      break;
    case "location":
      document.querySelector(".errorLocationMessage").textContent = message;
      break;
    case "conditions":
      document.querySelector(".errorConditionsMessage").textContent = message;
      break;
    default:
      document.querySelector(".errorMessage").textContent = message;
      break;
  }
}
function clearErrorMessage() {
  document.querySelector(".errorMessage").textContent = "";
}
