const signUpBtn = document.querySelector(".btn-signup");
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const submitButton = document.getElementById("submitButton");
const form = document.querySelector(".form");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthday = document.querySelector("#birthday");
const quantity = document.querySelector("#quantity");
const locations = document.querySelectorAll('input[name="location"]');
const locationMessage = document.getElementById("locationMessage");
const checkbox1 = document.getElementById("checkbox-1");
const conditionMessage = document.getElementById("conditionMessage");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const thanksMessage = document.getElementById("thanks-message");

// Launch & close modal:

const launchModal = function () {
  modalbg.style.display = "block";
};
signUpBtn.addEventListener("click", (event) => {
  event.preventDefault();
  launchModal();
});

const closeModal = function () {
  modalbg.style.display = "none";
};

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeModal();
});

//Error message:
// Setup 2 functions = isError() & isSuccess():
function isError(input, message) {
  const formData = input.parentElement;
  const small = formData.querySelector("small");
  //add error message inside small element
  small.innerHTML = message;
  //add error class
  formData.className = "formData error";
}
function isSuccess(input) {
  const formData = input.parentElement;
  //add success class
  formData.className = "formData success";
}

//Email test:
function isEmail(email) {
  return emailFormat.test(email);
}

// Function for Text input part : isInput():
function isInput() {
  //get input value:
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdayValue = birthday.value;
  const quantityValue = quantity.value;
  if (firstNameValue.length < 2) {
    // show error message
    isError(
      firstName,
      "Please enter 2 or more characters for the first name field"
    );
  } else {
    // show success green icon
    isSuccess(firstName);
  }
  if (lastNameValue.length < 2) {
    // show error message
    isError(
      lastName,
      "Please enter 2 or more characters for the last name field"
    );
  } else {
    // show success green icon
    isSuccess(lastName);
  }
  if (emailValue === "") {
    // show error message
    isError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    isError(email, "Please provide a valid email address");
  } else {
    // show success green icon
    isSuccess(email);
  }
  if (birthdayValue === "") {
    // show error message
    isError(birthday, "Birthday cannot be empty");
  } else {
    // show success green icon
    isSuccess(birthday);
  }
  if (quantityValue === "") {
    // show error message
    isError(quantity, "Tournament cannot be empty");
  } else {
    // show success green icon
    isSuccess(quantity);
  }
  //for Radio checkbox part :
  for (const location of locations) {
    if (location.checked) {
      isSuccess(locationMessage);
      break;
    } else {
      isError(locationMessage, "You have to choose a city");
    }
  }
  //for checkbox part :
  if (checkbox1.checked) {
    isSuccess(conditionMessage);
  } else {
    isError(conditionMessage, "You have to accept the terms and conditions");
  }

  //Check all inputs value to show thanks message:
  if (
    firstNameValue.length > 1 &&
    lastNameValue.length > 1 &&
    emailValue.match(emailFormat) &&
    birthdayValue != "" &&
    quantityValue != "" &&
    checkbox1.checked
  ) {
    form.remove();
    thanksMessage.style.display = "block";
    submitButton.innerHTML = submitButton.innerHTML.replace("Go", "Close");
    // add 1st event to submit-button:
    const addCloseEvent = function (event) {
      event.preventDefault();
      closeModal();
    };
    submitButton.addEventListener("click", addCloseEvent, false);
  } else {
    form.style.display = "block";
  }
}

//Validation & sumbit the form :
function onSubmit() {
  isInput();
}
// add 2nd event to submit-button:
const addSubmitEvent = function (event) {
  event.preventDefault();
  onSubmit();
  isInput();
};
submitButton.addEventListener("click", addSubmitEvent, false);

//add event to form:
form.addEventListener("submit", (event) => {
  event.preventDefault();
  isInput();
});
