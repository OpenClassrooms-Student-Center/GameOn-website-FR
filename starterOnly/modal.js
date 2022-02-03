import Inputs from './javaScript/Input.js';

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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const form = document.getElementById("reverve");
form.addEventListener("submit",function validate(e) {
  const inputs = form.getElementsByTagName("input");
  let asError = false;
  for ( let i = 0; i< inputs.length; i++) {
    console.log(inputs[i].value);
    console.log(inputs[i]);
    let error ;
    
    if (inputs[i].value == "") {
    
      error = "veuillez renseigner le champ"
      const input = document.getElementById(inputs[i].id);
      console.log(input);
      input.after(error);
      asError = true;
      
    } 
    
  }
  if (asError == true) {
    e.preventDefault();
    return false
  }

  alert('Formulaire envoyé !');
});

