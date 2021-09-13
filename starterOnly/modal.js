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
const closeModal = document.querySelector("#close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal event
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//Regex
let checkfirst,
  checkLast = /^[a-zA-Z-]*$/;
let checkMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let checkQuantity = /^[0-9]*$/;

//Functions Form

function validateFirst() {
  let first = form.elements["first"];
  let error = document.getElementById("error");
  if (checkfirst.test(first.value) === false) {
    first.classlist.add("input-error");
    error.innerText = "Le prénom doit contenir plus de 2 caractères";
    return false;
  } else {
    email.classlist.remove("input-error");
    email.classlist.add("input-validate");
    error.innerText = "";
    return true;
  }
}
function validateLast() {
  let last = form.elements["last"];
  let error = document.getElementById("error");
  if (
    checkLast.test(last.value) === false &&
    (last.value.length > 0 || last.value.length < 2)
  ) {
    last.classlist.add("input-error");
    error.innerText = "Le nom doit contenir plus de 2 caractères";
    return false;
  } else {
    email.classlist.remove("input-error");
    email.classlist.add("input-validate");
    error.innerText = "";
    return true;
  }
}
function validateEmail() {
  let email = form.elements["email"];
  let error = document.getElementById("error");
  if (checkMail.test(email.value) === false) {
    email.classlist.add("input-error");
    error.innerText = "Saississez un email valide";
    return false;
  } else {
    email.classlist.remove("input-error");
    email.classlist.add("input-validate");
    error.innerText = "";
    return true;
  }
}

function validateQuantity() {
  let quantity = form.elements["quantity"];
  let error = document.getElementById("error");
  if (checkQuantity.test(quantity.value) === false) {
    quantity.classlist.add("input-error");
    error.innerText = "Le nombre de tournoi doit être indiqué ";
    return false;
  } else {
    quantity.classlist.remove("input-error");
    quantity.classlist.add("input-validate");
    error.innerText = "";
    return true;
  }
}
