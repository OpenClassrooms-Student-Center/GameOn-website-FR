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
const firstName = document.querySelector('.formData #first');
const lastName = document.querySelector('.formData #last');
const email = document.querySelector('.formData #email');
const birthdate = document.querySelector('.formData #birthdate');
const quantity = document.querySelector('.formData #quantity');
const conditions = document.querySelector('.formData #checkbox1');
const locationRadio = document.getElementsByName('location');
const buttonSubmit = document.getElementById('buttonSubmit');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";  
}

// close modal event
closeBtn.addEventListener('click', closeModal);

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

//firstname validation event
firstName.addEventListener('change', validateFirstName);

//firstname validation function
function validateFirstName() {
  let validationFirstBool = true;
  if(firstName.value.length <= 2 || firstName.value.match(/^\s*$/g) || firstName.value.match('[0-9]')) {
    validationFirstBool = false;
    document.querySelector('.firstname').setAttribute('data-error-visible', true);
  } else {
    validationFirstBool = true;
    document.querySelector('.firstname').setAttribute('data-error-visible', false);
  }

  return validationFirstBool;
}

//lastname validation event
lastName.addEventListener('change', validateLastName);

//lastname validation function
function validateLastName(){
  let validationLastNameBool = true;
  if(lastName.value.length <= 2 || lastName.value.match(/^\s*$/g) || lastName.value.match('[0-9]')) {
    validationLastNameBool = false;
    document.querySelector('.lastname').setAttribute('data-error-visible', true);
  } else {
    validationLastNameBool = true;
    document.querySelector('.lastname').setAttribute('data-error-visible', false);
  }

  return validationLastNameBool;
}

//email validation event
email.addEventListener('change', validateEmail);

//email validation function
function validateEmail(){
  let validationEmailBool = true;
  if(!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email.value.match(/^\s*$/g)) {
    validationEmailBool = false;
    document.querySelector('.email').setAttribute('data-error-visible', true);
  } else {
    validationEmailBool = true;
    document.querySelector('.email').setAttribute('data-error-visible', false);
  }

  return validationEmailBool;
}

//birthdate validation event
birthdate.addEventListener('change', validateBirthdate);

//birthdate validation function
function validateBirthdate() {
  let enterDate = birthdate.value.split('-').reverse().join('')
  let today = new Date().toLocaleDateString().split('/').join('');
  let validationBirthdateBool = true;

  if(enterDate === today || birthdate.value === ""){
    validationBirthdateBool = false;
    document.querySelector('.birthdate').setAttribute('data-error-visible', true);
  } else {
    validationBirthdateBool = true;
    document.querySelector('.birthdate').setAttribute('data-error-visible', false);
  }

  return validationBirthdateBool;  
}

//quantity validation event
quantity.addEventListener('change', validateQuantity);

//quantity validation function
function validateQuantity(){
  let validationQuantity = true;

  if(quantity.value === ""){
    validationQuantity = false;
    document.querySelector('.formData.quantity').setAttribute('data-error-visible', true);
  } else {
    validationQuantity = true;
    document.querySelector('.formData.quantity').setAttribute('data-error-visible', false);
  }

  return validationQuantity;
}

//conditions checkbox validation event
conditions.addEventListener('change', validateConditions);

//conditions checkbox validation function
function validateConditions() {
  let validationConditionsBool = true;

  if(!conditions.checked){
    validationConditionsBool = false;
    document.querySelector('.conditions').setAttribute('data-error-visible', true);
  } else {
    validationConditionsBool = true;
    document.querySelector('.conditions').setAttribute('data-error-visible', false);
  }

  return validationConditionsBool;
}

//location radio validation function
function validateLocation() {
  let oneIsCheck = false;
  for(let i = 0 ; i < locationRadio.length ; i++){
    if(locationRadio[i].checked === true) {
      oneIsCheck = true;
    }

    if(oneIsCheck) {
      document.querySelector('.location').setAttribute('data-error-visible', false);
    } else {
      document.querySelector('.location').setAttribute('data-error-visible', true);
    }
  }

  return oneIsCheck;
}

//function that will check all infos when the submit button is clicked
function validate(){
  let verifyFirst = validateFirstName();
  let verifyLast = validateLastName();
  let verifyEmail = validateEmail();
  let verifyBirthdate = validateBirthdate();
  let verifyQuantity = validateQuantity();
  let verifyConditions = validateConditions();
  let verifyLocation = validateLocation();

  let verifyAll = verifyFirst && verifyLast && verifyEmail && verifyBirthdate && verifyQuantity && verifyConditions && verifyLocation;

  return verifyAll;
}

//show confirmation message function
function validationMessage(){
  launchModal();
  document.querySelector('form').style.display = 'none';

  let confirmationMessageBloc = document.createElement('div');
  confirmationMessageBloc.classList.add('confimationMessageBloc')
  confirmationMessageBloc.innerHTML = `
    <p class=""> Merci pour<br>votre inscription </p>
    <button class="btn-signup modal-btn close-confirmation-btn">
      Fermer
    </button>
  `;

  document.querySelector('.modal-body').append(confirmationMessageBloc);
  var closeBtnConfirmation = () => {
    modalbg.style.display = 'none';
    window.location.href="./index.html";
  }

  document.querySelector('.close-confirmation-btn').addEventListener('click', closeBtnConfirmation);
  document.querySelector('.close').addEventListener('click', closeBtnConfirmation);
}

let url_active = window.location.search;
if(url_active !== ""){
  validationMessage();
}