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
const form = document.getElementById("form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close-btn");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
const birth = document.getElementById("birthdate");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const confirmation = document.getElementById("confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
form.addEventListener("submit", (e) => errorMessage(e));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";

function validEmail(email) {
  var reg = /\S+@\S+\.\S+/;
  var result = reg.test(email);
  return result;
}

// show error message under fields
function errorMessage(e) {
  e.preventDefault();
  let numberOfValidFields = 0;

  var nameError = document.getElementById("name_error")
  // validate name
  if (firstName.value.length < 2) {

    // Changing content and color of content
    nameError.textContent = "Veuillez entrer 2 caractères ou plus pour"
    firstName.className += " error_field ";

  } else {
    numberOfValidFields++;
    nameError.textContent = ""
    firstName.className = "text-control";
  }

  var lastNameError = document.getElementById("lastName_error")
  // validate last name
  if (lastName.value.length < 2) {

    // Changing content and color of content
    lastNameError.textContent = "Veuillez entrer 2 caractères ou plus"
    lastName.className += " error_field ";

  } else {
    numberOfValidFields++;
    lastNameError.textContent = ""
    lastName.className = "text-control";
  }

  var emailError = document.getElementById("email_error")

  // validate email
  if (email.value == "") {

    // Changing content and color of content
    emailError.textContent = "Veuillez saisir votre adresse email";
    email.className += " error_field ";

  } else {
    if (!validEmail(email.value)) {
      emailError.textContent = "Veuillez saisir une adresse email valid !";
    } else {
      numberOfValidFields++;
      emailError.textContent = ""
      email.className = "text-control";
    }


}


  var quantityError = document.getElementById("quantity_error")
  // validate email
  if (quantity.value == "") {

    // Changing content and color of content
    quantityError.textContent = "Veuillez saisir une valeur"
    quantity.className += " error_field ";

  } else {
    numberOfValidFields++;
    quantityError.textContent = ""
    quantity.className = "text-control";
  }

  var dateError = document.getElementById("date_error")
  // validate birth date
  if (birth.value == "") {

    // Changing content and color of content
    dateError.textContent = "Vous devez entrer votre date de naissance"
    birth.className += " error_field ";

  } else {
    numberOfValidFields++;
    dateError.textContent = ""
    birth.className = "text-control";
  }

  var radioboxError = document.getElementById("radiobox_error")
  // validate radio box
  if (!loc1.checked && !loc2.checked && !loc3.checked
    && !loc4.checked && !loc5.checked && !loc6.checked) {

    // Changing content and color of content
    radioboxError.textContent = "Vous devez choisir une option"

  } else {
    numberOfValidFields++;
    radioboxError.textContent = ""
  }

  var termError = document.getElementById("term_error")
  // validate radio box
  if (!checkBox.checked) {

    // Changing content and color of content
    termError.textContent = "Vous devez vérifier que vous acceptez les termes"

  } else {
    numberOfValidFields++;
    termError.textContent = ""
  }


}
