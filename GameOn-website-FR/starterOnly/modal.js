const DATAS = [{
  key: "first",
  status: "default",
  errorMessage: null,
  validateFunction: validateFirstName
}];

const ERRORS = [{
  key: "first",
  errorMessage: "Le prénom doit contenir au moins 2 caractères."
}];

function validateFirstName(value) {
  if (value.length < 2) {
    return false;
  }

  return true;
}

function getObjByKey(key) {
  return DATAS.filter(obj => obj.key === key)[0];
}

function getErrByKey(key) {
  return ERRORS.filter(obj => obj.key === key)[0];
}

function checkValidity(id, value) {
  const obj = getObjByKey(id);
  const isValid = obj.validateFunction(value);

  if (isValid) {
    obj.status = "success";
  } else {
    const error = getErrByKey(id);
    obj.status = "error";
    obj.errorMessage = error.errorMessage;
  } 
}

function onChange(event) {
  checkValidity(event.target.id, event.target.value);
}

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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
