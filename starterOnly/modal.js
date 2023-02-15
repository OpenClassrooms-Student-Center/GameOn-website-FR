function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")

/******
*
  MODAL
*
******/

// launch modal event
const modalBtn = document.querySelectorAll(".modal-btn")
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// close modal event
const closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click", closeModal)

// close modal form
function closeModal() {
  modalbg.style.display = "none"
}

/******
*
  FORM VALIDATION
*
******/

// DOM
const form = document.getElementById("form")
const formData = document.querySelectorAll(".formData")
const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")
const tournamentLocation = document.getElementsByName("location")
const checkboxCondition = document.getElementById("checkbox1")

/***********
 * 
 * ADD / REMOVE DATA-ATTRIBUTE
 * 
************/

// set error message to "true"
function displayError(element, message) {
  element.setAttribute('data-error', message)
  element.setAttribute('data-error-visible', true)
}

// Function for remove one error msg
function removeError(element) {
  element.removeAttribute('data-error')
  element.removeAttribute('data-error-visible')
}

/***********
 * 
 * CHECK FUNCTION VALIDATION
 * 
************/

// regex
const emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/

function isValid() {
  // first name validation 
  if (firstName.value === "" || firstName.value.length < 2) {
    displayError(formData[0], 'Veuillez renseigner votre prénom')
  } else {
    removeError(formData[0])
  }
  // last name validation 
  if (lastName.value === "") {
    displayError(formData[1], 'Veuillez renseigner votre nom')
  } else {
    removeError(formData[1])
  }
  // email validation 
  if (email.value === "" || !email.value.match(emailRegex)) {
    displayError(formData[2], 'Veuillez renseigner un email valide')
  } else {
    removeError(formData[2])
  }
  // birthdate validation 
  if (birthdate.value === "") {
    displayError(formData[3], 'Veuillez renseigner votre date de naissance')
  } else {
    removeError(formData[3])
  }
  // quantity of tournament(s) validation 
  if (quantity.value === "") {
    displayError(formData[4], 'Veuillez renseigner ce champs par un chiffre')
  } else {
    removeError(formData[4])
  }
  // radio buttons 
  // define radioIsChecked variable
  let radioIsChecked
  // check for each radio button if checked, 
  // then define the condition for radioIsChecked = true
  tournamentLocation.forEach((radio) => {
    if(radio.checked) {
      radioIsChecked = true;
    }
  });
  // let's check if radioIsChecked is different of true 
  if(!radioIsChecked) {
    displayError(formData[5], 'Veuillez renseigner ce champs par un chiffre')
  }
  else {
    removeError(formData[5])
  } 
  // declare conditionIsChecked variable
  let conditionIsChecked
  // check if checkboxCondition is checked,
  // if checked, conditionIsChecked = true
  if(checkboxCondition.checked) {
    conditionIsChecked = true;
  }
  // check if conditionIsChecked is different of true
  if(!conditionIsChecked) {
    displayError(formData[6], `Veuillez accepter les conditions d'utilisations`)
  }
  else{
    removeError(formData[6])
  }
} 

// check function isValid onClick
form.addEventListener("click", isValid);

// form preventDefault
form.addEventListener('submit', e => {
	e.preventDefault()
});


