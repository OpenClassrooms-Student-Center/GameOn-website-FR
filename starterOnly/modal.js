

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
const first= inputs['first'];
const error= document.getElementById('error-first');

//firstname validation
function firstNameValidation(e){
  
  if(checkString.test(first.value) === false){
    // console.log(first);
    // alert(first.value);
    // console.log(error);
    // alert('error');   
    error.innerText= "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    error.style.color= "red";
    e.preventDefault();
    return false;
  }
  else{
    alert('yabon');
    return true;
  }
}

//form submit function
function validate(e){
  firstNameValidation(e);
}