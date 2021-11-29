const signUpBtn = document.querySelector(".btn-signup");
const closeBtn = document.querySelector(".close");
const modalbg = document.querySelector(".bground");
const form = document.querySelector(".form");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthday = document.querySelector("#birthday");
const quantity = document.querySelector("#quantity");
const locations = document.querySelectorAll("input[name=location]");
const locationMessage = document.getElementById("locationMessage");
const checkbox1 = document.getElementById("checkbox-1");
const conditionMessage = document.getElementById("conditionMessage");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const submitButton = document.getElementById("submitButton");

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

// Setup 2 classes = Error & Success:
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

// Function for Text input part : isInput():
function isInput() {
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
    // show success green icon
    setSuccess(firstName);
  }

  if (lastNameValue.length < 2) {
    // show error message
    setError(
      lastName,
      "Please enter 2 or more characters for the last name field"
    );
  } else {
    // show success green icon
    setSuccess(lastName);
  }

  if (emailValue === "") {
    // show error message
    setError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    // show success green icon
    setSuccess(email);
  }

  if (birthdayValue === "") {
    // show error message
    setError(birthday, "Birthday cannot be empty");
  } else {
    // show success green icon
    setSuccess(birthday);
  }

  if (quantityValue === "") {
    // show error message
    setError(quantity, "Tournament cannot be empty");
  } else {
    // show success green icon
    setSuccess(quantity);
  }
}

//Function for Radio checkbox part : isLocation():
function isLocation() {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      setSuccess(locationMessage);
      return true;
    } else {
      setError(locationMessage, "You have to choose a city");
    }
  }
}

//Function for checkbox part : isCondition():
function isCondition() {
  if (checkbox1.checked === true) {
    setSuccess(conditionMessage);
    return true;
  } else {
    setError(conditionMessage, "You have to accept the terms and conditions");
  }
}
/*
const isSuccess = function () {
  console.log("success");
  form.style.opacity = "0";
};
*/

//Validation & sumbit the form :
function validation() {
  if (locations.checked === true && checkbox1.checked === true) {
    //console.log("OK");
  } else {
    //console.log("Not validated");
  }
}

const onSubmit = function () {
  isInput();
  isLocation();
  isCondition();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isInput();
  isLocation();
  isCondition();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  onSubmit();
  validation();
  //isSuccess();
  //console.log("Send Form");
});
