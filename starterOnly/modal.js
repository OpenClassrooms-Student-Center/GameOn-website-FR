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


// valid imput form

const formValidate = {
  first: {
    name: "first",
    regex: /^[a-zA-Z]{2,}$/g,

    required: true,
    errorCustom: "Veuillez entrer 2 caractères ou plus pour ce champ."
  },
  last: {
    name: "last",

    regex: /^[a-zA-Z]{2,}$/g,
    required: true,
    errorCustom: "Veuillez entrer 2 caractères ou plus pour ce champ."
  },
  email: {
    name: "email",

    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    required: true,
    errorCustom: "Veuillez entrer une adresse mail valide."
  },
  quantity: {
    name: "quantity",
    regex: /^[0-9]{1,2}$/g,
    required: true,
    errorCustom: "Vous devez entrer un nombre."
  },
  checkbox1: {
    name: "checkbox1",
    type: "checkbox",
    required: true,
    errorCustom: "Vous devez vérifier que vous acceptez les termes et conditions."
  },
  checkbox2: {
    name: "checkbox2",
    type: "checkbox",
    required: true
  }
};

const form = document.getElementById("reverve");
form.addEventListener("submit",function validate(e) {
  const inputs = form.getElementsByTagName("input");
  let asError = false;

  for (let i = 0; i< inputs.length; i++) {
    let error;
    for(const item in formValidate){

      if (inputs[i].name == formValidate[item].name){
        console.log(formValidate[item].regex.test(inputs[i].value ));
        if (formValidate[item].regex.test(inputs[i].value === false)){
          console.log("erreur");
          asError = true;
          console.log("asError " + asError)
          const input = document.getElementById(inputs[i].id);
          input.after(formValidate[item].errorCustom);

        }
      }
      
      
    }
    // if (inputs[i].value == "") {
    
    //   error = "veuillez renseigner le champ"
    //   const input = document.getElementById(inputs[i].id);
    //   input.after(error);
    //   asError = true;
      
    // } 
    
  }
  if (asError == true) {
    e.preventDefault();
    return false
  }

  alert('Formulaire envoyé !');
});

