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

let firstInput = document.querySelectorAll("#first");
let lastInput = document.querySelectorAll("#last");
let emailInput = document.querySelectorAll("#email");
let dateInput = document.querySelectorAll("#date");
let quantityInput = document.querySelectorAll("#quantity");
const formSubmit = document.getElementById('formModal');
const confirmation = confirm('Votre formulaire a été soumis avec succès!');

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (firstInput.value = "" || firstInput.value.length <2 ){
    firstInput.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    return false;
  }
  
  if (lastInput.value = "" || lastInput.value.length <2){
    firstInput.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    return false;
  }

  if (emailInput.value = ""){
    return false;
  }

  if (dateInput.value = ""){
    dateInput.textContent = 'Vous devez entrer votre date de naissance.';
    return false;
  }


  if (!quantityInput.isInteger()){
    quantityInput.value = "";
    return false;
  }

  // Si les données sont valides, soumettre le formulaire
  form.submit();
  if (confirmation) {
    formModal.submit();
  }
});



