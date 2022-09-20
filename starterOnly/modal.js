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
const closeBtn = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  //block = view
  modalbg.style.display = "block";
}
// close modal form
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  //none = close
  modalbg.style.display = "none";
}


// Implement from entries

// Values for the DOM

const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");


// Error message

const checkbox = document.getElementById("checkbox1")
const firstError = document.getElementById("firstNameErrorMsg")
const lastError = document.getElementById("lastNameErrorMsg")
const emailError = document.getElementById("emailErrorMsg")
const birthError = document.getElementById("birthErrorMsg")
const quantityError = document.getElementById("quantityErrorMsg")
const locationError = document.getElementById("locationErrorMsg")
const validationError = document.getElementById("validationErrorMsg")



form.addEventListener('submit', (e) => {
  e.preventDefault();
})


// Checking the values of the form

function validate(){
  // boolean default value = false
  let isFirst;
  let isLast;
  let isEmail;
  let isBirth;
  let isQuantity;
  let isRadio;
  let isCheckbox;


  if(firstName.value == "" || firstName.value == null ||  firstName.value.length <2) {
    firstError.innerText = "Le champ prénom doit avoir un minimum de 2 caractères"
  } else {
    isFirst = true
  }

  if(lastName.value == "" || lastName.value == null ||  lastName.value.length <2) {
    lastError.innerText = "Le champ nom doit avoir un minimum de 2 caractères"
  } else {
    isLast = true
  }

  if(email.value == "" || email.value == null) {
    emailError.innerText = "Le champ email doit être valide"
  } else {
    isEmail = true
  }

  if(birthDate.value == null) {
    birthError.innerText = "Veuillez renseigner votre date de naissance"
  } else {
    isBirth = true
  }

  // if(quantity.value == numbers) {
  //   quantityError.innerText = "Un nombre doit être saisi"
  // } else {
  //   isQuantity = true
  // }
  
  if(loc1.checked || loc2.checked || loc3.checked || loc4.checked || loc5.checked || loc6.checked) {
    isRadio = true
  } else {
    locationError.innerText = "Veuillez sélectionner une ville"
  }

  if(checkbox.checked) {
    isCheckbox = true
  } else {
    validationError.innerText = "Vous devez lire et accepter les conditions d'utilisation"
  }


  // check that all values are correct

  if((isFirst && isLast && isEmail && isBirth && isQuantity && isRadio && isCheckbox) == true) {
    console.log("ok")
  } else {
    console.log("error")
  }













}