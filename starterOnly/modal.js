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
const crossCloseModalBtn = document.querySelector(".close");
const endModalBtn = document.querySelector(".btn-close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const errorMessage = document.querySelectorAll(".error");
const validate = document.querySelector(".validate");
let isModalOpen = false;

// Regex

const emailRegex = new RegExp(
  "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
);
const numRegex = new RegExp("^[0-9]+$");

////////////////////////////////////////////

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  form.style.display = "block";
  validate.style.display = "none";
  isModalOpen = true;
  handleListernerOnClick(isModalOpen);
}

////////////////////////////////////////////

// Handle close modal

const closeModal = () => {
  modalbg.style.display = "none";
  validate.style.display = "none";
  isModalOpen = false;
  handleListernerOnClick(isModalOpen);
};

// click out of the box

const clickTarget = (e) => {
  if (e.target.getAttribute("class") == "bground") {
    closeModal();
  }
};

const handleListernerOnClick = (isModalOpen) => {
  if (isModalOpen) {
    window.addEventListener("click", clickTarget);
  } else if (!isModalOpen) {
    window.removeEventListener("click", clickTarget);
  }
};

// click on cross

crossCloseModalBtn.addEventListener("click", closeModal);

// click on end button

endModalBtn.addEventListener("click", closeModal);

////////////////////////////////////////////

//Handle submit form

const handleData = (e) => {
  e.preventDefault();

  // Collect forms values
  let first = document.forms["reserve"]["first"].value;
  let last = document.forms["reserve"]["last"].value;
  let email = document.forms["reserve"]["email"].value;
  let birthdate = document.forms["reserve"]["birthdate"].value;
  let numberTournament = document.forms["reserve"]["quantity"].value;
  let selectedTournament = isChecked("radio", "reserve", "location");
  let isTermsCheck = document.forms["reserve"]["terms"].checked;

  checkValidity(
    first,
    last,
    email,
    birthdate,
    numberTournament,
    selectedTournament,
    isTermsCheck
  );
};

// Check which radio is checked

const isChecked = (type, form, input) => {
  if (type === "radio") {
    let radios = document.forms[form][input];
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
  }
};

// Control all form values to display or not the error message

const checkValidity = (
  first,
  last,
  email,
  birthdate,
  numberTournament,
  selectedTournament,
  isTermsCheck
) => {
  let checkPass = true;

  // Check 2 or more character on first and last name

  if (first.length < 2) {
    checkPass = false;
    errorMessage[0].style.display = "block";
  } else {
    errorMessage[0].style.display = "none";
  }

  if (last.length < 2) {
    checkPass = false;
    errorMessage[1].style.display = "block";
  } else {
    errorMessage[1].style.display = "none";
  }

  // Check email can exist

  if (!emailRegex.test(email)) {
    checkPass = false;
    errorMessage[2].style.display = "block";
  } else {
    errorMessage[2].style.display = "none";
  }

  // Check birthdate exist and is between 1900 and 2023

  if (
    !birthdate ||
    parseInt(birthdate.split("-")[0]) < 1900 ||
    parseInt(birthdate.split("-")[0]) > 2023
  ) {
    checkPass = false;
    errorMessage[3].style.display = "block";
  } else {
    errorMessage[3].style.display = "none";
  }

  // Check if numberTournament is a number

  if (numberTournament && numRegex.test(numberTournament)) {
    errorMessage[4].style.display = "none";
  } else {
    checkPass = false;
    errorMessage[4].style.display = "block";
  }

  // Check selectedTournament exist

  if (!selectedTournament) {
    checkPass = false;
    errorMessage[5].style.display = "block";
  } else {
    errorMessage[5].style.display = "none";
  }

  // Check if terms is checked
  if (!isTermsCheck) {
    checkPass = false;
    errorMessage[6].style.display = "block";
  } else {
    errorMessage[6].style.display = "none";
  }

  validation(checkPass);
};

// if valid send form and display thanks on modal

const validation = (checkPass) => {
  if (!checkPass) {
    return;
  }

  form.style.display = "none";
  validate.style.display = "block";
};

form.addEventListener("submit", (e) => {
  handleData(e);
});

///////////////////////////////////////////
