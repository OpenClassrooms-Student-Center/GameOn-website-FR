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


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//TODO #1 Fermer la modale
const modalCloseBtn = document.querySelectorAll(".close");

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

//TODO #2 Implémenter entrées du formulaire

function checkFirstName() {
  const firstName = document.getElementById("first").value;

  if (firstName.length < 2) {

    document.getElementById("errorFirstName").classList.remove("hidden")
  }
}

function checkLastName() {
  const lastName = document.getElementById("last").value;

  if (lastName.length < 2) {

    document.getElementById("errorLastName").classList.remove("hidden")
  }
}

function checkEmailName() {
  const email = document.getElementById("email").value;

  var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;

  if (regex.test(email.value)) {
    return true;
  }

  else {
    document.getElementById("errorEmail").classList.remove("hidden")
  }
}

function checkBirthdate() {
  const birthdate = document.getElementById("birthdate").value;

  if (!birthdate)

  document.getElementById("errorBirthdate").classList.remove("hidden")
}

function checkQuantity() {
  var x = document.getElementById("quantity").value;

  if ((x < 0 || x > 99 || !x)) {
    document.getElementById("errorQuantity").classList.remove("hidden")
  }

  else {
    return false;
  }
}

function checkLocation() {
  var getSelectedValue = document.querySelector('input[name="location"]:checked');

  if (getSelectedValue !=null) {
    return true;
  }

  else {
    document.getElementById("errorLocations").classList.remove("hidden")
  }
}
 
function checkPolicy() {
  
  if (document.getElementById("checkbox1").checked) {
    return true;
  }

  else {
    document.getElementById("errorPolicy").classList.remove("hidden")
  }
}

function validate() {
  checkFirstName() & checkLastName() & checkEmailName() & checkBirthdate() & checkQuantity() & checkLocation() & checkPolicy();
}

document.getElementById("submitBtn").addEventListener("click", validate)
