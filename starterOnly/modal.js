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
const modalClose = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");

// user inputs 
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const touInput = document.getElementById("checkbox1");
const radioInput = document.querySelectorAll(".radio-input");


/**
 * reset form data
 */
const resetFormData = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  birthdateInput.value = "";
  quantityInput.value = "";
};

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
}


 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * The function `closeModal` is used to reset data form 
 * and  close the modal window
 */
 modalClose.addEventListener("click", () => {
  resetFormData();
  modalbg.style.display = "none";
});

// form contain user input 
const form = document.getElementById("reserveForm");

form.addEventListener("submit", (event) => validateForm(event));

/**
 * Check if one of city is selected 
 * @returns boolean 
 */
const isCitySelected = () =>{
  // return true if one of radioInput is checked
 return Array.from(radioInput).filter(
    (radioBtn) => radioBtn.checked
  );
}

/**
 * Get user data
 * @returns data for user input form
 */
const userInput =()=>{
 let data = {};

  data = 
  {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    quantity: quantityInput.value.trim(),
    birthdate: birthdateInput.value.trim(),

   };
return data
}

/**Display errors message 
 * @param [] errors 
 */
const displayErrorMessage = errors =>{
  console.log("errors length => ", errors.length)
  if(errors.length != null)
  errors.map((error) => {
    const element = error[0];
    const errorMessage = error[1];
    element.parentNode.setAttribute("data-error-visible", true);
    element.parentNode.setAttribute("data-error", errorMessage);
  });
}


/**
 * Check user inputs 
 * @param {*} data 
 * @returns []:errors || null
 */
 const checkInputValues = ( data)=>{

   let errors = [];

   const regexText = /^[a-z ,.'-]+$/i;
   
  // firstName
  !regexText.test(data.firstName) || data.firstName?.length < 2 
  ? errors.push([firstNameInput, "Vous devez renseigner un prénom valide (2 caractères ou plus)." ]) 
  : null

  // lastname
  !regexText.test(data.lastName) || data.lastName.length < 2
    ? errors.push([
        lastNameInput,
        "Vous devez renseigner un nom valide (2 caractères ou plus).",
      ])
    : null;

  // Email
  const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  !data.email.match(emailRegex)
    ? errors.push([emailInput, "Veuillez entrer une adresse mail valide."])
    : null;

    
  // birthDate
  const currentDate = new Date(Date.now());
  const selectedDate = new Date(data.birthdate);

  !data.birthdate || selectedDate.getFullYear() > currentDate.getFullYear() - 18
    ? errors.push([birthdateInput, "La date n'est pas valide."])
    : null;

  // Number
  const numberRegex = /\d+/;

  !data.quantity.match(numberRegex) || data.quantity < 0 || data.quantity > 100
    ? errors.push([
        quantityInput,
        "Veuillez rentrer un nombre valide entre 0 et 100.",
      ])
    : null;

  // terms of use
  !checkbox1.checked
  ? errors.push([touInput, "Veuillez accepter les conditions d'utilisation."])
  : null;

  

/* Radios */
!isCitySelected() || isCitySelected().length <= 0
  ? errors.push([radioInput[0], "Veuillez séléctionner une ville."])
  : null;


  return errors

 }

  
/**
 * check if form valid and display error message if exist 
 * @param {*} event 
 */
const validateForm = (event) => {

  //stop event propagation
  event.preventDefault();

 
  const data = userInput();
 
 const errors =  checkInputValues (data)

  formData.forEach((element) => {
    element.setAttribute("data-error-visible", false);
    element.setAttribute("data-error", "");
  
  });

 displayErrorMessage(errors);

  // if no error we confirm the form
  if (!errors.length ) {
    confirmForm(event);
  }
};

/**
 * Confirm user data and cose modal form and display end modal thanks
 * @param {*} event 
 */
const confirmForm = (event) => {

  //stop event propagation
  event.preventDefault();
  form.style.display = "none";
  const endModal = document.getElementById("end-modal");
  const confirmButton = document.getElementById("mess-end");
  const thanksMessage = document.querySelector('.end-modal>p')
  console.log("thanks => :", thanksMessage)

  console.log("fermer button style: ", confirmButton)

  endModal.style.display = "block";
  endModal.style.paddingBottom = "32px";
  thanksMessage.style.display="flex"
  thanksMessage.style.justifyContent="center"



  confirmButton.addEventListener("click", () => form.submit());
  modalClose.addEventListener("close", () => form.submit());
};
