

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

// const form= document.querySelector('form');

//Variables
let checkString = /^[a-zA-Z]{2}/;
let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Events

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
  if(checkString.test(input.value.trim()) === false){
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error.style.color= "red";
    e.preventDefault();
    return false;
  }
  else{
    error.innerText= "";
    return true;
  }
}

function lastNameValidation(e){
  const input= inputs['last'];
  const error= document.getElementById('error-last');
  if(checkString.test(input.value.trim()) === false){
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error.style.color= "red";
    e.preventDefault();
    return false;
  }
  else{
    error.innerText= "";
    return true;
  }
}

function emailValidation(e){
  const input= inputs['email'];
  const error= document.getElementById('error-email');
  if(checkMail.test(input.value.trim()) === false){
    error.innerText= "Vous devez entrer une adresse email valide.";
    error.style.color= "red";
    e.preventDefault();
    return false;
  }
  else{
    error.innerText= "";
    return true;
  }
}

//form submit function
function validate(e){
  firstNameValidation(e);
  lastNameValidation(e);
  emailValidation(e);
}