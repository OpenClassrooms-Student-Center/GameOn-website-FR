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
const formDataRadios = document.querySelector(".formData--radios");
const radios = formDataRadios.querySelectorAll("input");
const emailInput = document.getElementById("email");
const regexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9-_]+\\.[a-z]{2,}$");
const checkBoxRequired = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submit modal event
function validate(){
  const email = emailInput.value;
  return (regexEmail.test(email) && radioChecked() && checkBoxRequired.checked);
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Verify that a radio has been checked
function radioChecked(){
  for (radio of radios){
    if(radio.checked){
      return true;
    }
  }
  return false;
}
