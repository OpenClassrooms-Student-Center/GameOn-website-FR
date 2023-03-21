function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function isEmailValid(email) {
  // Expression régulière pour vérifier l'adresse e-mail
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validate(){
  
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtn2 = document.querySelectorAll(".close-modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalBtn2.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//Verification de la validité du formulaire

let firstInput = document.getElementById("first");
let lastInput = document.getElementById("last");
let emailInput = document.getElementById("email");
let dateInput = document.getElementById("birthdate");
let quantityInput = document.getElementById("quantity");
let checkInput = document.getElementById("checkbox1");
let locationInput1 = document.getElementById("location1");
let locationInput2 = document.getElementById("location2");
let locationInput3 = document.getElementById("location3");
let locationInput4 = document.getElementById("location4");
let locationInput5 = document.getElementById("location5");
let locationInput6 = document.getElementById("location6");
let formPageValidate = document.getElementsByClassName("formValidate");
let formPageContainer = document.getElementsByClassName("formContainer");
let erreurFirstInput = document.getElementById("erreurFirst");
let erreurLastInput = document.getElementById("erreurLast");
let erreurEmailInput = document.getElementById("erreurEmail");
let erreurDateInput = document.getElementById("erreurDate");
let erreurQuantityInput = document.getElementById("erreurQuantity");
let erreurCheckboxInput = document.getElementById("erreurCheckbox");
let erreurRadioInput = document.getElementById("erreurRadio");
const formSubmit = document.getElementById('formModal');
// const confirmation = confirm('Votre formulaire a été soumis avec succès!');
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let erreurForm = false;
  
  if (firstInput.value == "" || firstInput.value.length <2){
    erreurFirstInput.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    erreurForm = true;
  }else{
    erreurFirstInput.innerHTML='';
  }
  
  if (lastInput.value == "" || lastInput.value.length <2){
    erreurLastInput.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    erreurForm = true;
  }else{
    erreurLastInput.innerHTML='';
  }

  if (!isEmailValid(emailInput.value)){
    erreurEmailInput.innerHTML = 'Veuillez entrer une email valide';
    erreurForm = true;
  }else{
    erreurEmailInput.innerHTML ='';
  }

  if (dateInput.value == ""){
    erreurDate.innerHTML = 'Vous devez entrer votre date de naissance.';
    erreurForm = true;
  }else if (dateInput.value != ""){
    let birthdate = new Date(dateInput.value);
    let year = birthdate.getFullYear();
    let todayYear = new Date().getFullYear();
    let age = todayYear - year;
    if(age < 16){
      erreurDate.innerHTML = 'Vous n\'avez pas l\'âge minimum requis';
      erreurForm = true;
    }else{
      erreurDateInput.innerHTML='';
    }
  }
  
  if(quantityInput.value == ""){ 
    erreurQuantityInput.innerHTML = 'Veuillez entrer un nombre';
    erreurForm = true;
  }else{
    erreurQuantityInput.innerHTML = '';
  }

  if(!checkInput.checked){
    erreurCheckboxInput.innerHTML = 'Veuillez cocher une case';
    erreurForm = true;
  }else{
    erreurCheckboxInput.innerHTML = '';
  }

  if (!locationInput1.checked && !locationInput2.checked && !locationInput3.checked && !locationInput4.checked && !locationInput5.checked && !locationInput6.checked){
    erreurRadioInput.innerHTML = 'Veuillez cocher une case';
    erreurForm = true;
  }else{
    erreurRadioInput.innerHTML = '';
  }

  // Si les données sont valides, soumettre le formulaire
  if (!erreurForm){
    form.submit();
    formPageContainer.display = none;
    formPageValidate.display =block;
    formModal.submit();
  }
});



