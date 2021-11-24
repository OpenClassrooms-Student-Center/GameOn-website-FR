// Data-errors values
const dataErrors = {
  first : "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.",
  last : "Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.",
  email : "L'adresse électronique est invalide.",
  quantity : "Pour le nombre de concours, une valeur numérique et positive doit être saisie.",
  location1 : "Sélectionner une ville.",
  checkbox1 : "Vous devez accepter les conditions générales d'utilisation.",
}

// array of obj : {id: 'str', status : 'default' or 'valid' or 'error', message : dataErrors[id] }
const dataInputs = [];

// push all infos inputs
function pushData() {
  const inputs = document.querySelectorAll(".formData input");

  for(let input of inputs) {
    dataInputs.push({id: input.id, status: "default", message: dataErrors[input.id]});  
  }
  updateDataStatus('checkbox1', 'valid'); 
}
pushData();

// get Obj DataInputs
function getObjDataInputs(id){
  return dataInputs.filter(obj => obj.id === id)[0];
}

// update status obj DataInputs
function updateDataStatus(id, newStatus) {
  getObjDataInputs(id).status = newStatus;
}

// validate firstName
function validateFirstName(event) {
  const value = event.target.value;
  const re = /^[A-Za-z]{2,}$/;

  if (!re.test(value)) {
    updateDataStatus('first', 'error');
  }
  else {
    updateDataStatus('first', 'valid');
  }
  updateDataVisibility(firstName);
}

// validate lastName
function validateLastName(event) {
  const value = event.target.value;
  const re = /^[A-Za-z]{2,}$/;

  if (!re.test(value)) {
    updateDataStatus('last', 'error');
  }
  else {
    updateDataStatus('last', 'valid');
  }
  updateDataVisibility(lastName);
}

// validate email
function validateEmail(event) {
  value = event.target.value;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!re.test(value)) {
    updateDataStatus('email', 'error');
  }
  else {
    updateDataStatus('email', 'valid');
  }
  updateDataVisibility(email);
}

// validate quantity
function validateQuantity(event) {
  value = parseInt(event.target.value);
  if (value < 0 || isNaN(value)) {
    updateDataStatus('quantity', 'error');
  }
  else {
    updateDataStatus('quantity', 'valid');
  }
  updateDataVisibility(quantity);
}

// validate location
function validateCity(event) {
  if (event.target.checked) {
    updateDataStatus('location1', 'valid');
  }
  updateDataVisibility(location1);
}

// validate checkbox1
function validateCheckbox(event) {
  if (event.target.checked) {
    updateDataStatus('checkbox1', 'valid'); 
  }
  else {
    updateDataStatus('checkbox1', 'error');
  }
  updateDataVisibility(checkbox1);
}


// update data-error attribute of one element
function updateDataVisibility(element) {
  const status = getObjDataInputs(element.id).status;
  const error = getObjDataInputs(element.id).message;
  if (status === 'error' || status === 'default') {
    element.parentElement.setAttribute("data-error-visible", true);
    element.parentElement.setAttribute("data-error", error);
  }
  else if (element.parentElement.hasAttribute("data-error")) {
    element.parentElement.removeAttribute("data-error-visible");
    element.parentElement.removeAttribute("data-error");
  }
}

// update data-error attribute of all elements
function updateAllDataVibility() {
  const requiredInput = dataInputs.filter(obj => obj.message);
  for (let obj of requiredInput) {
    updateDataVisibility(document.getElementById(obj.id));
  }
}

// check if form is valid
function formIsValid() {
  const requiredInput = dataInputs.filter(obj => obj.message);
  for(let obj of requiredInput) {
    if (obj.status != 'valid') {
      return false;
    }
  }
  return true;
}

// edit navbar
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
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('.modal-body form');
const modalClose = document.querySelector(".close");
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const city = document.getElementsByName('location');
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// validate form
function validate(event) {
  if (formIsValid()) {
    // Redirection
    alert("GOOOOOOOOD");
  }
  else {
    event.preventDefault();
    updateAllDataVibility();
  }
  console.log(dataInputs);
  console.log(formIsValid());
}

firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
email.addEventListener('input', validateEmail);
quantity.addEventListener('input', validateQuantity);
city.forEach((radio) => radio.addEventListener('input', validateCity));
checkbox1.addEventListener('input', validateCheckbox);