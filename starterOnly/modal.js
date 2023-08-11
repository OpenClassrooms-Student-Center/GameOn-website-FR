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
const firstnameInput = document.getElementById("first");
const lastnameInput = document.getElementById("last");
const closeModalBtn = document.querySelector('.close');

// launches modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// submits modal event
function validate(){
  event.preventDefault();
  console.log(validateFirstname());
  console.log(validateLastname());
  const email = emailInput.value;
  return (regexEmail.test(email) && radioChecked() && checkBoxRequired.checked);
}

// close modal event
closeModalBtn.addEventListener("click", ()=>{
  closeModal();
});

// launches modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Verifies that a radio has been checked
function radioChecked(){
  for (radio of radios){
    if(radio.checked){
      return true;
    }
  }
  return false;
}

// closes modal form
function closeModal(){
  modalbg.style.display = "none";
}

// Verifies that the firstname input has something and more than 2 characters
function validateFirstname(){
  let firstname=firstnameInput.value;
  return (firstname.length>=2);
}

// Verifies that the lastname input has something and more than 2 characters
function validateLastname(){
  let lastname=lastnameInput.value;
  return (lastname.length>=2);
}