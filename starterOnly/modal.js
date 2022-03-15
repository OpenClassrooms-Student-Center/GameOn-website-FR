function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  // Change animationName and relaunch when closing
  content.style.animationName = "modalclose";
  content.style.animationFillMode = "forwards";
  setTimeout(() => {
    // Remove modal and reset animationName
    modalbg.style.display = "none";
    content.style.animationName = "modalopen"; // Animation is relaunch on invisible modal so not a problem
  }, 700);
}

// Validate data
function validate(e) {
  // Escape the default behavior of form submit
  e.preventDefault();
  let isValidForm = true;

  // Iterate over all specific element
  for (const property in errorMessages) {
    let currentElement = document.getElementById(property);
    let displayErrorMessage = false;
    
    switch (property) {
      case 'first':
      case 'last':
        displayErrorMessage = currentElement.value.length < 2;
        break;
      case 'email':
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        displayErrorMessage = currentElement.value.length === 0 || !emailRegExp.test(currentElement.value);
        break;
        break;
      case 'birthdate':
        const inputDate = new Date(currentElement.value);
        const today = new Date();
        // Check date validity and majority if asked
        let todayMinusMajority = new Date();
        //todayMinusMajority.setFullYear(today.getFullYear() - 18);
        displayErrorMessage = !isValidDate(inputDate) || inputDate.getTime() > todayMinusMajority.getTime();
        break;
      case 'quantity':
        displayErrorMessage = !Number.isInteger(Number(currentElement.value)) || Number(currentElement.value) < 0;
        break;
      case 'location':
        // Change methode to get currentElement
        currentElement = document.getElementsByName(property)[0];
        displayErrorMessage = !document.querySelector('input[name="'+ property +'"]:checked');
        break;
      case 'checkbox1':
        displayErrorMessage = !currentElement.checked;
        break;
      default:
        displayErrorMessage = true;
    }
    
    resetErrorAttributs(currentElement.parentNode);
    if(displayErrorMessage) {
      isValidForm = false;
      setErrorAttributs(currentElement.parentNode, errorMessages[property]);
    }
  }

  // If no error in form proceed
  if(isValidForm) {
    const modalBody = form.parentNode;
    form.remove();
    const divNode = document.createElement("div");
    divNode.classList.add("modal-body-success");
    const textSuccess = document.createTextNode("Merci pour votre inscription");
    const button = document.createElement("input");
    button.classList.add("btn-submit", "button", "button-close");
    button.value = "Fermer";
    divNode.appendChild(textSuccess);
    modalBody.appendChild(divNode);
    divNode.appendChild(button);
    const modalCloseBtnSuccess = document.querySelectorAll(".button-close");
    modalCloseBtnSuccess.forEach((btn) => btn.addEventListener("click", closeModal));
  }
}

// Check if a Date istance is valid
function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

// Display error and message on specific element
function setErrorAttributs(element, message) {
  element.setAttribute("data-error", message);
  element.setAttribute("data-error-visible", "true");
}

// Remove error and message on specific element
function resetErrorAttributs(element) {
  element.removeAttribute("data-error");
  element.removeAttribute("data-error-visible");
}

// Define specific message for each input
const errorMessages = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ du Nom.",
  email: "Veuillez saisir un E-mail valide.",
  birthdate: "Vous devez entrer votre date de naissance.",
  quantity: "Vous devez indiquer le nombre (entier) de tournois auxquels vous avez déjà participé.",
  location: "Vous devez choisir une option.",
  checkbox1: "Vous devez vérifier que vous acceptez les termes et conditions."
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");
const content = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Launch validate on form submit
form.querySelector('input[type="submit"]').addEventListener('click', validate);