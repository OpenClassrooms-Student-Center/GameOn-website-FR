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
  
  //appearance of modal one, after clicking on "je m'inscrit"
  modalOne.style.display = "block";

  //reactivation of modal hot, after clicking on "close"
  modalHot.style.display = "none";
  // Disappearance of modal hot
}

//  closing the modal
// constant targeting the Close selector of modal one
const modalclose = document.querySelector(".close");

// event closing modal 1 and returning to home
modalclose.addEventListener("click", accueil);

function accueil() {
  // function to make modal one disappear
  modalbg.style.display = "none";
}

// 
let firstName = document.getElementById("first");
// listen to first name change
firstName.addEventListener("focusout", validFirstName);

function validFirstName(inputFirst) { 
  // creation of the regex for first name validation
  const firstNameRegExp = new RegExp('^[a-zA-Z-\s]+$');
  let testFirstName = firstNameRegExp.test(first.value)

  if (!testFirstName) {
    firstName.parentElement.setAttribute
    ("data-error-visible", "true");
    firstName.parentElement.setAttribute
    ("data-error", "Veuillez entrer 2 caractères ou plus dans cette case du prénom.");
    return false;
  } else { 
    firstName.parentElement.setAttribute
    ("data-error-visible", "false");
    firstName.parentElement.setAttribute
    ("data-error", "");
    return true;
  }
}



// name verification
let lastName = document.getElementById("last");

// listen to name change
lastName.addEventListener("focusout", validName);

function validName(inputLast) {
  // creation of the regex for name validation
  let nameRegExp = new RegExp('^[a-zA-Z-\s]+$');
  let testNom = nameRegExp.test(last.value);

  if (!testNom) {
    lastName.parentElement.setAttribute
    ("data-error-visible", "true");
    lastName.parentElement.setAttribute
    ("data-error", "Veuillez entrer 2 caractères ou plus dans cette case du nom.");
  return false;
  } else {
    lastName.parentElement.setAttribute
    ("data-error-visible", "false");
    lastName.parentElement.setAttribute
    ("data-error", "");
  return true;
  }
}


let emailAddress = document.getElementById("email");

// listen to email change
emailAddress.addEventListener("focusout", validEmailAddress);

function validEmailAddress(inputEmail) {
  // creation of the regex for email validation
  let emailAddressRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
  let testEmailAddress = emailAddressRegExp.test(email.value)

  if (!testEmailAddress) {
    emailAddress.parentElement.setAttribute
    ("data-error-visible", "true");
    emailAddress.parentElement.setAttribute
    ("data-error", "Ce que vous avez saisi ne ressemble pas à une adresse e-mail valide");
    return false;
  } else {
    emailAddress.parentElement.setAttribute
    ("data-error-visible", "false");
    emailAddress.parentElement.setAttribute
    ("data-error", "");
    return true;
  }
}


let natalDay = document.getElementById("birthdate");

// listen to birthdate change
natalDay.addEventListener("change", validNatalDay);

function validNatalDay(_inputBirthdate) {
  // creation of the regex for birthdate validation
  let natalDayRegExp = new RegExp('^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$');
  let testnatalDay = natalDayRegExp.test(birthdate.value)

  if ((!testnatalDay) || (birthdate.value == "")) {
    natalDay.parentElement.setAttribute
    ("data-error-visible", "true");
    natalDay.parentElement.setAttribute
    ("data-error", "Veuillez entrer votre date naissance de téléphone au format 'JJ/MM/YYYY");
    return false;
  } else {
    natalDay.parentElement.setAttribute
    ("data-error-visible", "false");
    natalDay.parentElement.setAttribute
    ("data-error", "");
    return true;
  }
}

// quantity
let quantityGame = document.getElementById("quantity");

// listen to quantity change
quantityGame.addEventListener("focusout", validQuantityGame);

function validQuantityGame(inputQuantity) {
  // creation of the regex for quatity validation
  let quantityGameRegExp = new RegExp('^0$|^[1-9][0-9]*$');
  let testQuantityGame = quantityGameRegExp.test(quantity.value);

  if (!testQuantityGame) {
    quantityGame.parentElement.setAttribute
    ("data-error-visible", "true");
    quantityGame.parentElement.setAttribute
    ("data-error", "Veuillez entrer 2 caractères ou plus dans cette case du nom.");
  return false;
  } else {
    quantityGame.parentElement.setAttribute
    ("data-error-visible", "false");
    quantityGame.parentElement.setAttribute
    ("data-error", "");
  return true;
  }
}



// 
function valid_state() {
  let state = document.getElementsByName("location");             
  let state_v = false;
  let i = 0; 
  for (!state_v; i < state.length; i++) { 
    if (state[i].checked) { 
      state_v = true;                                              
      stateError.innerHTML = ""; 
    }
  }
    if (!state_v) {
      stateError.innerHTML = "Veuillez choisir une option.";
      stateError.style.color = "red";
      stateError.style.fontSize = "0.4em";
    }
    return state_v;
}


// CONDITIONS GENERALES

let tickbox = document.getElementById("checkbox1");

function validTickbox() {

  if (!tickbox.checked) {    
    tickbox.parentElement.setAttribute("data-error-visible", "true");
    tickbox.parentElement.setAttribute("data-error", "Cliquez sur 'J'ai lu et accepté les conditions d'utilisation'");
    return false;
  }
  else {  
    tickbox.parentElement.setAttribute("data-error-visible", "false");
    tickbox.parentElement.setAttribute("data-error", "");
    return true;
  }
}


// 
let modalOneBtn = document.getElementById("envoyer"); 
let modalOne = document.getElementById("formulaire"); 
let modalHot = document.querySelector(".modalHot");

modalOneBtn.addEventListener("click", ouverturemodalHot);

function ouverturemodalHot() {
  if (validFirstName() & validName() & validEmailAddress() & validQuantityGame() & validNatalDay() & validTickbox() & valid_state()) {

    modalOne.style.display = "none";       
    modalHot.style.display = "block";
    modalOne.reset();
  }
}


let modalclose2 = document.getElementById("close");

// 
modalclose2.addEventListener("click", accueil);