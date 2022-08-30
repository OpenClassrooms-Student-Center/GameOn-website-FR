function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const form = document.getElementById("reserve");
const submit = document.getElementById("submit");


/* FUNCTION */

// launch modal form.
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form.
function closeModal() {
  modalbg.style.display = "none";
}

// Create an error message
function errorMessage(element, message) {
  const newP = document.createElement("p");
  newP.classList.add("error");
  newP.textContent = message;
  element.style.background = "indianred";

  //element.parentNode.appendChild(newP);
  element.parentNode.insertBefore(newP, element);

}


function validate() {

  // Delete all error message
  document.querySelectorAll(".error").forEach(e => e.remove());


  // Check the first name.
  if (firstName.value.length < 2) {

    errorMessage(firstName, "Ce champ doit contenir au minimum 2 caractères !");
    return false;

  }

  // Check the last name.
  if (lastName.value.length < 2) {

    errorMessage(lastName, "Ce champ doit contenir au minimum 2 caractères !");
    return false;

  }

  // Check the email validation.
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!pattern.test(email.value)) {

    errorMessage(email, "Ce champ doit contenir une adresse email valide !");
    return false;

  }

  // Check the date of birth.
  const date_regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!date_regex.test(birthdate.value)) {

    errorMessage(birthdate, "Entrez vôtre date de naissance !");
    return false;

  }

  // Check that there is a numeric value for <<tournament number>>
  if (!Number.isInteger(parseFloat(quantity.value)) || quantity.value < 0) {

    errorMessage(quantity, "Ce champ doit être une valeur numérique entier !");
    return false;

  }

  // Check that a radio button for <<location>> is selected.
  let checked = false;

  for (let i = 0; i < locations.length; i++) {

    if (locations[i].checked) {
      checked = true
      break
    }

  }

  if (!checked) {

    errorMessage(document.getElementById("location1"), "Une localisation doit être sélectionner !");
    return false;

  }

  // Check that the Terms and Conditions box is checked.
  if (!condition.checked) {

    errorMessage(condition, "Vous devez accepté les conditions d'utilisation !")
    return false;

  }

  event.preventDefault();

  formData.forEach(e => e.style.transform = "translateX(-9999px)");

  const elemValidation = document.createElement("p");
  elemValidation.classList.add("valide");
  elemValidation.textContent = "Merci pour votre inscription";

  form.appendChild(elemValidation);
  submit.value = "Fermer";
  submit.addEventListener("click", closeModal);

}


/* Event */

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));