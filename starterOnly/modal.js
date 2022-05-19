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


// Close modal form*
const closeModalForm =()=>{
  modalbg.style.display = "none";
}


 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.addEventListener("click", closeModalForm);



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

  
const validateForm = (event) => {

  // cancels the action of the event
  event.preventDefault();

  // user data
  data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    quantity: quantityInput.value,
    birthdate: birthdateInput.value,
  };


  // return true if one of radioInput is checked
  const isRadioChecked = Array.from(radioInput).filter(
    (radioBtn) => radioBtn.checked
  );


  const errors = [];

  // firstname
  data.firstName.length < 2
    ? errors.push([
        firstNameInput,
        "Vous devez renseigner un prénom valide (2 caractères ou plus).",
      ])
    : null;

  // lastname
  data.lastName.length < 2
    ? errors.push([
        lastNameInput,
        "Vous devez renseigner un nom valide (2 caractères ou plus).",
      ])
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

  // Email
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  !data.email.match(emailRegex)
    ? errors.push([emailInput, "Veuillez entrer une adresse mail valide."])
    : null;

  // terms of use
  !checkbox1.checked
    ? errors.push([touInput, "Veuillez accepter les conditions d'utilisation."])
    : null;

    console.log('is Radio checked ?', isRadioChecked)

  /* Radios */
  !isRadioChecked || isRadioChecked.length <= 0
    ? errors.push([radioInput[0], "Veuillez séléctionner une ville."])
    : null;

  formData.forEach((element) => {
    element.setAttribute("data-error-visible", false);
    element.setAttribute("data-error", "");
  });

  errors.forEach((error) => {
    const element = error[0];
    const errorMessage = error[1];
    element.parentNode.setAttribute("data-error-visible", true);
    element.parentNode.setAttribute("data-error", errorMessage);
  });

  console.log(errors);
  console.log(data);

  if (!errors.length ) {
    confirmForm(event);
  }
};


// confirm user data and cose modal form 
const confirmForm = () => {
  form.style.display = "none";
  const endModal = document.getElementById("end-modal");
  const confirmButton = document.getElementById("mess-end");

  endModal.style.display = "block";
  endModal.style.paddingBottom = "16px";

  confirmButton.addEventListener("click", () => form.submit());
  modalClose.addEventListener("click", () => form.submit());
};
