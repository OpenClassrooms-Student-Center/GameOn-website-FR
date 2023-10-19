function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//REGEX
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const nameRegex = /^[a-zA-Z]+$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationCheckbox = document.querySelectorAll('input[name="location"]');
const conditionCheckbox1 = document.querySelector("#checkbox1");
const conditionCheckbox2 = document.querySelector("#checkbox2");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
formData.forEach((form) => form.addEventListener("submit", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
const submit = document.querySelector(".btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (checkForm()) {
    closeModal();
  }
});

function checkForm() {
  // check firstname
  let firstNameValid =
    firstName.value.length >= 2 && nameRegex.test(firstName.value);
  formData[0].setAttribute(
    "data-error-visible",
    firstNameValid ? "false" : "true"
  );

  // check lastname
  let lastNameValid =
    lastName.value.length >= 2 && nameRegex.test(lastName.value);
  formData[1].setAttribute(
    "data-error-visible",
    lastNameValid ? "false" : "true"
  );

  // check email
  let emailValid = email.value !== "" && emailRegex.test(email.value);
  formData[2].setAttribute("data-error-visible", emailValid ? "false" : "true");

  // check birthdate
  let birthDateValid =
    birthDate.value !== "" && dateRegex.test(birthDate.value);
  formData[3].setAttribute(
    "data-error-visible",
    birthDateValid ? "false" : "true"
  );

  // check quantity
  let numberValid = !quantity.value;
  formData[4].setAttribute(
    "data-error-visible",
    numberValid ? "false" : "true"
  );

  // check location

  let locationValid =
    locationCheckbox.filter((x) => x.checked === true).length === 1;
  formData[5].setAttribute(
    "data-error-visible",
    locationValid ? "false" : "true"
  );

  // check conditions
  let conditionValid =
    conditionCheckbox1.checked || conditionCheckbox2.checked;
    formData[6].setAttribute(
    "data-error-visible",
    conditionValid ? "false" : "true"
  );


  return !!(
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    birthDateValid &&
    numberValid &&
    locationValid &&
    conditionValid
  );
}
