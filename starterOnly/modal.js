

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// const form= document.querySelector('form');

//Variables
let checkString = /^[a-zA-Z]{2}/;
let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkDate= /^\d{4}-\d{2}-\d{2}$/;
let checkNumber= /^[0-9]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

//Functions

// Navbar
function editNav() {
  const navBar = document.getElementById("myTopnav");
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
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

const inputs= document.querySelector('form').elements;

//firstname validation
function firstNameValidation(e){ 
  const input= inputs['first'];
  
  const error= document.getElementById('error-first');
  if(!checkString.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

function lastNameValidation(e){
  const input= inputs['last'];
  const error= document.getElementById('error-last');
  if(!checkString.test(input.value.trim())){
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

function emailValidation(e){
  const input= inputs['email'];
  const error= document.getElementById('error-email');
  if(!checkMail.test(input.value.trim())){
    error.innerText= "Vous devez entrer une adresse email valide.";
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//birthdate validation
function birthdateValidation(e){ 
  const input= inputs['birthdate'];
  const error= document.getElementById('error-birthdate');
  if(!checkDate.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez entrer votre date de naissance.";
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//quantity validation
function quantityValidation(e){ 
  const input= inputs['quantity'];
  const error= document.getElementById('error-quantity');
  if(!checkNumber.test(input.value.trim())){
    input.classList.remove('valid');
    input.classList.add('invalid');
    error.innerText= "Veuillez saisir une valeur numérique.";
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    input.classList.remove('invalid');
    input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

// location Validation
function locationValidation(e){
  const checkBoxes= document.querySelectorAll('.checkbox-input[type=radio]');
  const error= document.getElementById('error-location');
  for(let i= 0; i< checkBoxes.length; i++){
    if(checkBoxes[i].checked){
      //checkBoxes.classList.remove('invalid');
      //checkBoxes.classList.add('valid');
      error.classList.remove('span-error');
      error.innerText= "";
      return true;
    }
  }
  //checkBoxes.classList.remove('valid');
  //checkBoxes.classList.add('invalid');
  error.innerText= "Veuillez choisir une ville.";
  error.classList.add('span-error');
  e.preventDefault();
  return false;
}

// cgu validation
function cguValidation(e){
  const input= inputs['cgu'];
  const error= document.getElementById('error-cgu');
  if(!input.checked){
    //input.classList.remove('valid');
    //input.classList.add('invalid');
    error.innerText= "Veuillez accepter les CGU.";
    error.classList.add('span-error');
    e.preventDefault();
    return false;
  }
  else{
    //input.classList.remove('invalid');
    //input.classList.add('valid');
    error.classList.remove('span-error');
    error.innerText= "";
    return true;
  }
}

//form submit function
function validate(e){
  firstNameValidation(e);
  lastNameValidation(e);
  emailValidation(e);
  birthdateValidation(e);
  quantityValidation(e);
  locationValidation(e);
  cguValidation(e);
}