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
const closeBtn = document.getElementsByClassName("close")[0];
const form = document.querySelectorAll("form")[0];
let fields = document.querySelectorAll("form input[required]");
let locations = document.querySelectorAll("input[type=radio]");
const buttonSubmit = document.getElementById("btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

locations.forEach((location) =>
  location.addEventListener("change", udapteAttribute)
);

function udapteAttribute(e) {
  if (e.target.matches("input[required]")) e.target.removeAttribute("required");
}

buttonSubmit.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  e.stopPropagation();

  if (checkFields()) {
    closeModal();
    form.reset();
  }
}

function checkFields() {
  let valid = true;

  for (let field of fields) {
    if (!field.checkValidity()) {
      valid = false;
    }
  }

  console.log(valid);
  return valid;
}
