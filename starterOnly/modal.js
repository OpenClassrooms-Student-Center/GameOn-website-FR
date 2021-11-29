/** @format */

const signUpBtn = document.querySelector(".btn-signup");
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const form = document.querySelector(".form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthday = document.querySelector("#birthday");
const quantity = document.querySelector("#quantity");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;

// Launch & close modal:
const launchModal = function () {
  modalbg.style.display = "block";
};

const closeModal = function () {
  modalbg.style.display = "none";
};

signUpBtn.addEventListener("click", launchModal);
closeBtn.addEventListener("click", closeModal);

//Error message:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  //get values from inputs
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdayValue = birthday.value;
  const quantityValue = quantity.value;

  if (firstNameValue.length < 2) {
    // show error message
    setError(
      firstName,
      "Please enter 2 or more characters for the first name field"
    );
  } else {
    // show success icon
    setSuccess(firstName);
  }

  if (lastNameValue.length < 2) {
    // show error message
    setError(
      lastName,
      "Please enter 2 or more characters for the last name field"
    );
  } else {
    // show success icon
    setSuccess(lastName);
  }

  if (emailValue === "") {
    // show error message
    setError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    // show success icon
    setSuccess(email);
  }
}

function setError(input, message) {
  const formData = input.parentElement;
  const small = formData.querySelector("small");

  //add error message inside small element
  small.innerHTML = message;

  //add error class
  formData.className = "formData error";
}

function setSuccess(input) {
  const formData = input.parentElement;

  //add error class
  formData.className = "formData success";
}

function isEmail(email) {
  return emailFormat.test(email);
}
