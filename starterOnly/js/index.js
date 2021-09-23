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
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

// afficher message d'erreur
let firstname = document.querySelector("#firstname"),
    lastname = document.querySelector("#lastname"),
    email = document.querySelector("#email"),
    birthdate = document.querySelector("#birthdate"),
    quantity = document.querySelector("#quantity"),
    terms = document.querySelector("#terms");

let errorMsg = document.querySelectorAll(".errorMsg"),
    option = document.querySelectorAll(".checkbox-input");

const inputs = [firstname, lastname, email, birthdate, quantity, terms];
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", ()=> {
    if(!inputs[i].validity.valid) {
      errorMsg[i].classList.remove("hidden");
      inputs[i].classList.remove("valid");
      inputs[i].classList.add("invalid");
    } else {
      inputs[i].classList.remove("invalid");
      inputs[i].classList.add("valid");
      errorMsg[i].classList.add("hidden");
    } 
  });
}


