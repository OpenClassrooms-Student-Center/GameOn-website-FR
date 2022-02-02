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

document.getElementById("reverve").addEventListener("submit",function validate(e) {
  var inputs = document.getElementsByTagName("input");
  let errorForm = false;
  for ( let i = 0; i< inputs.length; i++) {
    console.log(inputs[i].value);
    console.log(inputs[i]);
    let error ;
    
    if (inputs[i].value == "") {
    
      error = "veuillez renseigner le champ"
      const input = document.getElementById(inputs[i].id);
      console.log(input);
      input.after(error);
      errorForm = true;
      
    } 
    
  }
  if (errorForm == true) {
    e.preventDefault();
    return false
  }

  alert('Formulaire envoyé !');
});

