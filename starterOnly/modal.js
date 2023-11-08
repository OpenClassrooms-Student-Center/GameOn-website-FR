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
//const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form");
const formBtn = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // use formData to get form values
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());

  // firstname required and min length validation
  if (!values.first) {
    console.log("Please enter a firstname.");
    return false;
  }

  if (values.first.length < 2) {
    console.log("Firstname min length is 2");
    return false;
  }

  // lastname required and min length validation
  if (!values.last) {
    console.log("Please enter a lastname.");
    return false;
  }

  if (values.last.length < 2) {
    console.log("Lastname min length is 2");
    return false;
  }

  // email pattern validation
  var emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!emailRegex.test(values.email)) {
    console.log("Please enter valid email.");
    return false;
  }

  // quantity validation
  if (
    !Number.isInteger(Number(values.quantity)) ||
    Number(values.quantity) > 99 ||
    Number(values.quantity) < 0
  ) {
    console.log("Please enter a number between 0 and 99");
    return false;
  }

  // location selected validation
  if (!values.location) {
    console.log("Please select location.");
    return false;
  }

  // conditions checked validation
  if (!values.conditions) {
    console.log("Please accept conditons.");
    return false;
  }

  console.log("Success");
});
