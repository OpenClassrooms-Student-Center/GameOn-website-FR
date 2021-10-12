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
const formsData = document.querySelectorAll(".formData");

const validate = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const closer = document.querySelectorAll(".close");

let stringsNumber = document.querySelectorAll(".text-control");
let allInputs = document.querySelectorAll("input");
let allRadios = document.querySelectorAll('[name=location]');
let quantityParticipation;

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const regexNumber = /[0-9]/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closer.forEach((closer) => closer.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ISSUE 1 Fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}

let firstName = document.querySelector(".formData>#first");
let lastName = document.querySelector(".formData>#last");
let email = document.querySelector(".formData>#email");

// setErrorMessage(firstName, "Vous devez saisir 3 caractères minimum.");
// setErrorMessage(last);
// setErrorMessage(email, "Vous mail");

validate.addEventListener("click", validationInputs);

 allInputs.forEach((input) => input.addEventListener('keyup', validationInputs));


function validationInputs() {
  console.log("yes");
  event.preventDefault();

  allInputs.forEach((input) => {
    let inputName = input.name;
    let inputValue = input.value;
  
    switch (inputName) {
      case "first":
        if (inputValue.length < 2) {
          setErrorMessage(input, " prennom ");
        } else {
          setSuccessMessage(input);
        }
        break;
      case "last":
        if (inputValue.length < 2) {
          setErrorMessage(input, " name ");
        } else {
          setSuccessMessage(input);
        }
        break;
      case "email":
        if (!regexEmail.test(inputValue)) {
          setErrorMessage(input, " email ");
        } else {
          setSuccessMessage(input);
        }
        break;
      case "birthdate":
        if (!regexDate.test(inputValue)) {
          setErrorMessage(input, " date ");
        } else {
          setSuccessMessage(input);
        }
        break;
      case "quantity":
        if ( !regexNumber.test(inputValue) || inputValue < 0 || inputValue > 10) {
          setErrorMessage(input, " quantiyty ");

        } else {
          setSuccessMessage(input);
          quantityParticipation = inputValue;
        }
        break;
      case "location":
        let radioCochee = 0;

        allRadios.forEach((radio)=>{
           
            if(radio.checked){
              radioCochee++;
            }
        });
        if (((quantityParticipation > 0) && (radioCochee === 0)) || (quantityParticipation === undefined) || (((!quantityParticipation === 0) && !radioCochee ===0))) {
          setErrorMessage(input, " location ");
        } else {
          setSuccessMessage(input);
        }
        break;
        case "checkbox1":
          if (!input.checked) {
            setErrorMessage(input, " checkerror ");
          } else {
            setSuccessMessage(input);
          }
          break;
    }
  });
}

function setSuccessMessage(input) {
  let container = input.parentNode;
  container.removeAttribute("data-error-visible");
  container.removeAttribute("data-error");
}

function setErrorMessage(input, message) {
  let container = input.parentNode;
  container.setAttribute("data-error-visible", "true");
  container.setAttribute("data-error", message);
}

