// Data-errors values
const dataErrors = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  email: "Veuillez entrer une addresse mail valide.",
  birthdate: "Vous devez entrer votre date de naissance valide.",
  quantity:
    "Pour le nombre de concours, une valeur numérique doit être saisie.",
  location1: "Vous devez choisir une option.",
  checkbox1: "Vous devez vérifier que vous acceptez les termes et conditions.",
};

// array of obj : {id: 'str', status : 'default' or 'valid' or 'error', message : dataErrors[id] }
const dataInputs = [];

// push all infos inputs
function pushData() {
  const inputs = document.querySelectorAll(".formData input");

  for (let input of inputs) {
    dataInputs.push({
      id: input.id,
      status: "default",
      message: dataErrors[input.id],
    });
  }

  updateDataStatus("checkbox1", "valid");
}

// get Obj DataInputs
function getObjDataInputs(id) {
  return dataInputs.filter((obj) => obj.id === id)[0];
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
    updateDataStatus("first", "error");
  } else {
    updateDataStatus("first", "valid");
  }

  updateDataVisibility(firstName);
}

// validate lastName
function validateLastName(event) {
  const value = event.target.value;
  const re = /^[A-Za-z]{2,}$/;

  if (!re.test(value)) {
    updateDataStatus("last", "error");
  } else {
    updateDataStatus("last", "valid");
  }

  updateDataVisibility(lastName);
}

// validate email
function validateEmail(event) {
  const value = event.target.value;
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(value)) {
    updateDataStatus("email", "error");
  } else {
    updateDataStatus("email", "valid");
  }

  updateDataVisibility(email);
}

// validate birthdate
function validateBirthdate(event) {
  const value = event.target.value;
  // yyyy-MM-dd
  const re = /^(19|20)\d{2}\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;

  if (!re.test(value)) {
    updateDataStatus("birthdate", "error");
  } else {
    updateDataStatus("birthdate", "valid");
  }

  updateDataVisibility(birthdate);
}

// validate quantity
function validateQuantity(event) {
  const value = parseInt(event.target.value);

  if (value < 0 || isNaN(value)) {
    updateDataStatus("quantity", "error");
  } else {
    updateDataStatus("quantity", "valid");
  }

  updateDataVisibility(quantity);
}

// validate location
function validateCity(event) {
  if (event.target.checked) {
    updateDataStatus("location1", "valid");
  }
  updateDataVisibility(location1);
}

// validate checkbox1
function validateCheckbox(event) {
  if (event.target.checked) {
    updateDataStatus("checkbox1", "valid");
  } else {
    updateDataStatus("checkbox1", "error");
  }

  updateDataVisibility(checkbox1);
}

// update data-error attribute of one element
function updateDataVisibility(element) {
  const status = getObjDataInputs(element.id).status;
  const error = getObjDataInputs(element.id).message;

  if (status === "error" || status === "default") {
    element.parentElement.setAttribute("data-error-visible", true);
    element.parentElement.setAttribute("data-error", error);
  } else if (element.parentElement.hasAttribute("data-error")) {
    element.parentElement.removeAttribute("data-error-visible");
    element.parentElement.removeAttribute("data-error");
  }
}

// update data-error attribute of all elements
function updateAllDataVibility() {
  const requiredInput = dataInputs.filter((obj) => obj.message);

  for (let obj of requiredInput) {
    updateDataVisibility(document.getElementById(obj.id));
  }
}

// check if form is valid
function formIsValid() {
  const requiredInput = dataInputs.filter((obj) => obj.message);

  for (let obj of requiredInput) {
    if (obj.status != "valid") {
      return false;
    }
  }
  return true;
}

// validate form
function validate(event) {
  event.preventDefault();

  if (formIsValid()) {
    form.style.display = "none";
    thanks.style.display = "block";
  } else {
    updateAllDataVibility();
  }
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
  document.documentElement.scrollTop = 0;
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const thanks = document.querySelector(".thanks");
const thanksClose = document.querySelector(".btn-close");
const form = document.querySelector(".modal-body form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

pushData();
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
birthdate.addEventListener("input", validateBirthdate);
quantity.addEventListener("input", validateQuantity);
city.forEach((radio) => radio.addEventListener("input", validateCity));
checkbox1.addEventListener("input", validateCheckbox);
thanksClose.addEventListener("click", closeModal);