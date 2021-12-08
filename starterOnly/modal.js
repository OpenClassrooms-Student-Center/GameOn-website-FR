// Data-errors values { input.id: errorMsg }
const DATA_ERRORS = {
  first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  last: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  email: "Veuillez entrer une addresse mail valide.",
  birthdate: "Vous devez entrer votre date de naissance valide.",
  quantity:
    "Pour le nombre de concours, une valeur numérique doit être saisie.",
  location1: "Vous devez choisir une option.",
  checkbox1: "Vous devez vérifier que vous acceptez les termes et conditions.",
  unknown: "Le message d'erreur n'est pas connu.",
};

// array of obj : {id: 'str', status : 'default' or 'valid' or 'error', message : dataErrors[id] }
const DATA_INPUTS = [];

// push all infos inputs in the array DATA_INPUTS
function pushData() {
  // get an array with all input inside the tag with the formData class
  const inputs = document.querySelectorAll(".formData input");

  for (const input of inputs) {
    const status = "default";

    // get error message from DATA_ERRORS if it exists
    const errorMsg = DATA_ERRORS[input.id]
      ? DATA_ERRORS[input.id]
      : status === "error"
      ? DATA_ERRORS["unknown"]
      : null;

    // push infos in array DATA_INPUTS
    DATA_INPUTS.push({
      id: input.id,
      status,
      message: errorMsg,
    });
  }

  // condition of use checked
  updateDataStatus("checkbox1", "valid");
}

// function to reset the form
function resetStatus() {
  for (const data of DATA_INPUTS) {
    data.status = "default";
  }

  updateDataStatus("checkbox1", "valid");
}

// get Obj DataInputs
function getObjDataInputs(id) {
  return DATA_INPUTS.filter((obj) => obj.id === id)[0];
}

// update status obj DataInputs
function updateDataStatus(id, newStatus) {
  const newObj = getObjDataInputs(id);

  newObj.status = newStatus;
}

// validate firstName
function validateFirstName(event) {
  const value = event.target.value;
  const re = /^[A-zÀ-ú -]{2,}$/;

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
  const re = /^[A-zÀ-ú -]{2,}$/;

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
  // date format yyyy-MM-dd
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
  // convert a string to an integer
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
  // get the status, message of the id element
  const status = getObjDataInputs(element.id).status;
  const error = getObjDataInputs(element.id).message;
  const hasError = element.parentElement.hasAttribute("data-error");

  if (status === "error" || status === "default") {
    // set the attributes of the parent element
    element.parentElement.setAttribute("data-error-visible", true);
    element.parentElement.setAttribute("data-error", error);
  } else {
    if (hasError) {
      // remove the attributes of the parent element
      element.parentElement.removeAttribute("data-error-visible");
      element.parentElement.removeAttribute("data-error");
    }
  }
}

// update data-error attribute of all elements
function updateAllDataVibility() {
  // get the objects with an error message
  const requiredInput = DATA_INPUTS.filter((obj) => obj.message);

  for (const obj of requiredInput) {
    const id = document.getElementById(obj.id);

    updateDataVisibility(id);
  }
}

// check if form is valid
function formIsValid() {
  // get the objects with an error message
  const requiredInput = DATA_INPUTS.filter((obj) => obj.message);

  // check if all objects are valid
  for (const obj of requiredInput) {
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
    // close the form & open the thanks message
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
  if (formIsValid()) {
    // when form is valid, reset all the input valures, close the thanks messsage & open form
    resetStatus();
    form.reset();
    form.style.display = "block";
    thanks.style.display = "none";
  }
  // reset the page to the top, open the form & hide the body overflow
  document.documentElement.scrollTop = 0;
  body.classList.add("noscroll");
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  body.classList.remove("noscroll");
}

// DOM Elements
const body = document.body;
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
// listen all inputs of the form
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
birthdate.addEventListener("input", validateBirthdate);
quantity.addEventListener("input", validateQuantity);
city.forEach((radio) => radio.addEventListener("input", validateCity));
checkbox1.addEventListener("input", validateCheckbox);
thanksClose.addEventListener("click", closeModal);
