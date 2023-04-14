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

//generic function to display a validation message according to a condition
function validateAttribut(condition, querySelector){
  if(condition) {
    querySelector.setAttribute('data-error-visible', true)
  } else {
    querySelector.setAttribute('data-error-visible', false)
  }

  return !condition
}

//firstname validation event
document.querySelector('#first').addEventListener('change', validateFirstName);

//firstname validation function
function validateFirstName() {
  return validateAttribut(document.querySelector('#first').value.length <= 2 || document.querySelector('#first').value.match(/^\s*$/g) || document.querySelector('#first').value.match('[0-9]'), document.querySelector('.formData.firstname'));
}

//lastname validation event
document.querySelector('#last').addEventListener('change', validateLastName);

//lastname validation function
function validateLastName(){
  return validateAttribut(document.querySelector('#last').value.length <= 2 || document.querySelector('#last').value.match(/^\s*$/g) || document.querySelector('#last').value.match('[0-9]'), document.querySelector('.formData.lastname'));
}

//email validation event
document.querySelector('#email').addEventListener('change', validateEmail);

//email validation function
function validateEmail(){
  return validateAttribut(!document.querySelector('#email').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || document.querySelector('#email').value.match(/^\s*$/g), document.querySelector('.formData.email'));
}

//birthdate validation event
document.querySelector('#birthdate').addEventListener('change', validateBirthdate);

//birthdate validation function
function validateBirthdate() {
  return validateAttribut(document.querySelector('#birthdate').value.split('-').reverse().join('') === new Date().toLocaleDateString().split('/').join('') || document.querySelector('#birthdate').value === "", document.querySelector('.formData.birthdate'));
}

//quantity validation event
document.querySelector('#quantity').addEventListener('change', validateQuantity);

//quantity validation function
function validateQuantity(){
  return validateAttribut(document.querySelector('#quantity').value === "", document.querySelector('.formData.quantity'));
}

//location radio validation function
function validateLocation() {
  const locationRadio = document.getElementsByName('location');
  let oneIsCheck = false;
  for(let i = 0 ; i < locationRadio.length ; i++){
    if(locationRadio[i].checked === true) {
      oneIsCheck = true;
    }
  }

  return validateAttribut(!oneIsCheck, document.querySelector('.formData.location'));
}

//conditions checkbox validation event
document.querySelector('#checkbox1').addEventListener('change', validateConditions);

//conditions checkbox validation function
function validateConditions() {
  return validateAttribut(!document.querySelector('#checkbox1').checked, document.querySelector('.formData.conditions'));
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

  return verifyFirst && verifyLast && verifyEmail && verifyBirthdate && verifyQuantity && verifyConditions && verifyLocation;
}

//show confirmation message function
function validationMessage(){
  launchModal();
  document.querySelector('form').style.display = 'none';

  let confirmationMessageBloc = document.createElement('div');
  confirmationMessageBloc.classList.add('confimationMessageBloc')
  confirmationMessageBloc.innerHTML = `
    <p> Merci pour<br>votre inscription </p>
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