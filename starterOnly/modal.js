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
let errMessages = [];

// Check input FirstName and LastName 
// inputId: "first" or "last"
// textLabel: "prénom" or "nom"
function checkName(inputId, textLabel) {
  let nameValue = document.getElementById(inputId).value;
  let regex = new RegExp('^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.-\s]{2,99}$');
  if (nameValue.length < 2 || !regex.test(nameValue)) {
    errMessages.push("Veuillez entrer un " + textLabel + " d'au moins 2 caractères."); 
  }
}

// Check input email adress
function checkEmail() {
  let emailValue = form.email.value;
  let regex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
  if (!regex.test(emailValue)) {
    errMessages.push("Veuillez entrer un email valide."); 
  }
}

// Check input participation
function checkParticipation() {
  let participationValue = form.quantity.value;
  let regex = new RegExp('^[0-9]{1,9999}$');
  if (!regex.test(participationValue)) {
    errMessages.push("Veuillez entrer un nombre entre 0 et 9999."); 
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
    errMessages.push("Veuillez séléctionner une ville."); 
  }
}

// Check checkbox legal conditions
function checkLegal() {
  const checkbox = document.getElementById('checkbox1');
  if (!checkbox.checked) {
    errMessages.push("Vous devez accepter nos conditions d'utilisation."); 
  }
}

// Check all
function checkAllInputs() {
  checkName('first', 'prénom');
  checkName('last', 'nom');
  checkEmail();
  checkParticipation();
  checkLocation();
  checkLegal();
}

// Display error messages
function displayErrorMessages() {
  const ul = document.createElement('ul');
  for (let i = 0; i < errMessages.length; i++) {
    const li = document.createElement('li');
    li.classList.add("validation-messages__error");
    li.textContent = errMessages[i];
    ul.append(li);
  }
  document.querySelector('.validation-messages').append(ul);
}

// Remove error messages
function removeErrorMessages() {
  const parent = document.querySelector('.validation-messages');
    if (parent.childNodes.length > 0) {
      parent.removeChild(parent.firstChild);
    }
  errMessages = [];
}
  

// Display success message
function displaySuccessMessage() {
  setTimeout(closeModal, 5000);
  form.style.display = "none";
  const successMessage = document.createElement('p');
  successMessage.classList.add("validation-messages__success");
  successMessage.textContent = "Votre inscription a bien été envoyée, à très bientôt";
  document.querySelector('.validation-messages').append(successMessage);
}


// Check inputs when submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  removeErrorMessages();
  checkAllInputs();
  if (errMessages.length > 0) {
    displayErrorMessages();
  } else {
    displaySuccessMessage();
  }
})



