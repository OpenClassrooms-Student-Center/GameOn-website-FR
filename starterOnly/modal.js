function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalButton = document.querySelectorAll(".modal-btn");
const closeButton = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalButton.forEach((btn) => btn.addEventListener("click", launchModal));
closeButton.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalBackground.style.display = "block";
  modalBackground.style.opacity = 1;
  modalBackground.style.transition = "0.5s";
  modalBackground.style.zIndex = "1";
}

// Close modal form
function closeModal() {
  modalBackground.style.opacity = 0;
  modalBackground.style.transition = "0.5s";
  modalBackground.style.zIndex = "-1";
  //modalBackground.style.display = "none";
}

const displayError = (element) => {
  element.style.display = "block";
  element.style.color = "red";
  element.style.fontSize = "1rem";
};

const hideError = (element) => {
  element.style.display = "none";
};

// Validate form
function validate() {
  let isValid = true;
  const firstname = document.getElementById("first").value;
  const lastname = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const numbersparticipation = document.getElementById("quantity").value;
  const birthdate = document.getElementById("birthdate").value;
  const locations = Array.from(document.getElementsByName("location"));
  const isCguAccepted = document.getElementById("checkbox1");
  const errorFirstname = document.getElementById("Errorfirstname");
  const errorLastname = document.getElementById("Errorlastname");
  const errorbirthdate = document.getElementById("Errorbirthdate");
  const errorcgu = document.getElementById("Errorcgu");
  const errormail = document.getElementById("error-mail");
  const errorlocations = document.getElementById("error-locations");
  const errorquantity = document.getElementById("error-quantity");

  if (firstname == "" || firstname.length < 2) {
    displayError(errorFirstname);
    isValid = false;
  } else {
    hideError(errorFirstname);
  }

  if (lastname == "" || lastname.length < 2) {
    displayError(errorLastname);
    isValid = false;
  } else {
    hideError(errorLastname);
  }

  if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(email) == false) {
    displayError(errormail);
    isValid = false;
  } else {
    hideError(errormail);
  }

  if (birthdate == "") {
    displayError(errorbirthdate);
    isValid = false;
  } else {
    hideError(errorbirthdate);
  }
  if (/^([0-9])$/.test(numbersparticipation) == false) {
    displayError(errorquantity);
    isValid = false;
  } else {
    hideError(errorquantity);
  }

  if (!locations.some(({ checked }) => checked)) {
    displayError(errorlocations);
    isValid = false;
  } else {
    hideError(errorlocations);
  }

  if (!isCguAccepted.checked) {
    displayError(errorcgu);
    isValid = false;
  } else {
    hideError(errorcgu);
  }
  if (isValid){
    alert ("Merci ! Votre réservation a été reçue.");
  }
  return isValid;
}
