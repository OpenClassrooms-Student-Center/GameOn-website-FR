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
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//close modal
close.addEventListener("click", function closingModal() {
  modalbg.style.display = "none";
});

// valid imput form

const formValidate = {
  first: {
    name: "first",
    regex: /^[a-zA-Z]{2,}$/,

    required: true,
    errorCustom: "Veuillez entrer 2 caractères ou plus pour ce champ."
  },
  last: {
    name: "last",

    regex: /^[a-zA-Z]{2,}$/,
    required: true,
    errorCustom: "Veuillez entrer 2 caractères ou plus pour ce champ."
  },
  email: {
    name: "email",

    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    required: true,
    errorCustom: "Veuillez entrer une adresse mail valide."
  },
  birthdate: {
    name: "birthdate",
    regex: /^[0-9]{4}(-[0-9]{2}){2}$/,
    required: true,
    errorCustom: "Vous devez entrer votre date de naissance."
  },
  quantity: {
    name: "quantity",
    regex: /^[0-9]{1,2}$/,
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
const validCheckbox = {
  localisation: {
    name: "location",
    error: "Vous devez choisir une option.",
    required: true
  },
  checkbox1: {
    name: "checkbox1",
    error: "Vous devez vérifier que vous acceptez les termes et conditions.",
    required: true
  },
  checkbox2: {
    name: "checkbox2",
    required: false,
  }
}

const form = document.getElementById("reverve");
form.addEventListener("submit",function validate(e) {
  
  const inputs = form.getElementsByClassName("text-control");
  let asError = false;
  console.log(inputs);

  for (let i = 0; i< inputs.length; i++) {
  
    for(const item in formValidate){
     
      if (inputs[i].name === formValidate[item].name){
        console.log(inputs[i].value);
        console.log("regex " + formValidate[item].regex.test(inputs[i].value));
        const input = document.getElementById(inputs[i].id);

        if (!formValidate[item].regex.test(inputs[i].value)) {
          console.log("erreur");
          asError = true;
          console.log("asError " + asError);
          if (input.nextElementSibling === null) {
            let p = document.createElement("p");
            input.parentNode.appendChild(p);
            console.log("p créé")
          }
          let pError = input.nextElementSibling;
          console.log(pError);
          console.log(formValidate[item].errorCustom)
          pError.innerHTML = formValidate[item].errorCustom;

        } else {
          console.log("regex ok");
          if (input.nextElementSibling === null) {
            console.log("tout est ok");
          } else if (input.nextElementSibling.tagName === "P"){
            let pError = input.nextElementSibling;
            input.parentNode.removeChild(pError);
            console.log("effacement message erreur");
          }
          
        }
      }
    };
  };
  validateRadios();
  if (asError || !validateRadios ) {

    e.preventDefault();
    return false
  };

  alert('Formulaire envoyé !');
});

function validateRadios() {
  let formValid = true;
  let inputwarps = document.getElementsByClassName("inputWarp");
  console.log("validateRadios");

  for (let i = 0; i< inputwarps.length; i++) {
    const checkbox = inputwarps[i].getElementsByClassName("checkbox-input");
    let hasInputWarpsValid = false
    if (inputwarps[i].lastElementChild.tagName === "P") {
      inputwarps[i].removeChild(inputwarps[i].lastElementChild);
    }

    for (let b = 0; b < checkbox.length; b++) {
      for (const item in validCheckbox) {
        console.log(checkbox[b].name + " verification")
        if (validCheckbox[item].name === checkbox[b].name && validCheckbox[item].required){
          console.log(checkbox[b].name + " requise trouvé")
          if (checkbox[b].checked) {
            hasInputWarpsValid = true;
            console.log('checkbox checked')
          
          }
          if (!hasInputWarpsValid && inputwarps[i].lastElementChild.tagName !== "P") {
            let htmlContent = `<p> ${validCheckbox[item].error}</p>`;
            inputwarps[i].insertAdjacentHTML('beforeend', htmlContent);
          }

        } if (validCheckbox[item].name === checkbox[b].name && !validCheckbox[item].required ){
          hasInputWarpsValid = true;
          console.log(checkbox[b].name + " pas requise")
        }

      }
    }
    
    console.log('hasInputWarpValid = ' + hasInputWarpsValid)
    if (!hasInputWarpsValid) {formValid = false};
    console.log("formValid = " + formValid)
  }
  if (!formValid)return false;
}

