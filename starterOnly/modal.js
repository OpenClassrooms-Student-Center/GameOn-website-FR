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

//close modal form
const closeBtn = document.querySelector(".close");

function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener('click', closeModal);

// FORM INPUTS VALIDATION

const form = document.forms['reserve'];
let err = 0;

/*
const firstNameProp = [
  "text",
  "first",
  "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.-\s]{2,99}$",
  "Veuillez entrer un prénom d'au moins 2 caractères."
];

const lastNameProp = [
  "text",
  "last",
  "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.-\s]{2,99}$",
  "Veuillez entrer un nom d'au moins 2 caractères."
];

const emailProp = [
  "email",
  "email",
  "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$",
  "Veuillez entrer un email valide."
];

const quantityProp [
  "number",
  "quantity",
  "^[0-9]{1,9999}$",
  "Veuillez entrer un nombre entre 0 et 9999."
];
*/


// Check input type text, number and email
function checkInputText(inputId, regex, errMessage) {
  const elt = document.getElementById(inputId)
  let eltValue = elt.value;
  let regEx = new RegExp(regex);
  if (!regEx.test(eltValue)) {
    const parent = elt.parentNode;
    const p = document.createElement('p');
    p.classList.add("validation-messages", "validation-messages--error");
    p.textContent = errMessage;
    parent.append(p);
    err++;
  }
}

// Check radio btn Location
function checkLocation() {
  let options = document.querySelectorAll('input[name="location"]');
  let x = 0;
  for (const option of options) {
    if (option.checked) {
      break;
    } else {
      x++;
    }   
  }
  if (x === options.length) {
    const parent = document.querySelector(".locations");
    const p = document.createElement('p');
    p.classList.add("validation-messages", "validation-messages--error");
    p.textContent = "Veuillez selectionner une ville.";
    parent.append(p);
    err++;
  }
}

// Check checkbox legal conditions
function checkLegal() {
  const checkbox = document.getElementById('checkbox1');
  if (!checkbox.checked) {
    const parent = document.querySelector(".locations");
    const p = document.createElement('p');
    p.classList.add("validation-messages", "validation-messages--error");
    p.textContent = "Vous devez accepter nos conditions d'utilisation.";
    err++;
  }
}

// Check all
function checkAllInputs() {
  checkInputText("first", "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.-\s]{2,99}$", "Veuillez entrer un prénom d'au moins 2 caractères.");
  checkInputText("last", "^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.-\s]{2,99}$", "Veuillez entrer un nom d'au moins 2 caractères.");
  checkInputText("email", "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$", "Veuillez entrer un email valide.");
  checkInputText("quantity", "^[0-9]{1,9999}$", "Veuillez entrer un nombre entre 0 et 9999.");
  checkLocation();
  checkLegal();
}

// Remove error messages
function removeErrorMessages() {
  const childs = document.querySelectorAll('.validation-messages');
  if (childs.length > 0) {
    for (let child of childs) {
      const parent = child.parentNode;
      parent.removeChild(child);
    }
  }
}
  
// Display success message
function displaySuccessMessage() {
  setTimeout(closeModal, 5000);
  form.style.display = "none";
  const successMessage = document.createElement('p');
  successMessage.classList.add("validation-messages", "validation-messages--success");
  successMessage.textContent = "Votre inscription a bien été envoyée, merci et à très bientôt";
  document.querySelector('.modal-body').append(successMessage);
}


// Check inputs when submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  err = 0;
  removeErrorMessages();
  checkAllInputs();
  if (err === 0) {
    displaySuccessMessage();
  }
})



