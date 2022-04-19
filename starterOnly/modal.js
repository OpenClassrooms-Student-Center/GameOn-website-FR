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
const closeBtn = document.querySelectorAll(".close");
const btnCloseModal = document.getElementById("btn-close-modal");

// launch modal event - open modal on btn
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form - open modal
function launchModal() {
  modalbg.style.display = "block";
}

// close Modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

// open modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
btnCloseModal.addEventListener("click", closeModal);

// Regex Email
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Var validate message
let isValidate;
const validateBalise = document.getElementById("thank-form");

const validate = () => {
  isValidate = true;
  for (let i = 0; i < formData.length; i++) {
    const inputBalise = formData[i].querySelector("input");
    const labelBalise = formData[i].querySelector("label");
    const errorBalise = formData[i].querySelector(".error-message");
    let errorMessage = "";

    // Switch - give action by type

    switch (inputBalise.type) {
      case "text": //first name last name
        // backend pour gerer
        if (inputBalise.value.length < 2) {
          errorMessage =
            "Veuillez entrer 2 caractères ou plus pour le champ du " +
            labelBalise.textContent;
          isValidate = false;
        }
        break;

      case "email":
        if (emailRegex.test(email.value) == false) {
          errorMessage = "Veuillez entrer une adresse email valide.";
          isValidate = false;
        }
        break;

      case "number": // nr event participated & birth date
        if (
          typeof parseInt(inputBalise.value) !== "number" ||
          inputBalise.value === ""
        ) {
          errorMessage = "Veuillez indiquer un nombre.";
          isValidate = false;
        }
        break;

      case "radio":
        let inputRadio = formData[i].querySelectorAll("input");
        let radioValue;

        for (let v = 0; v < inputRadio.length; v++) {
          if (inputRadio[v].checked) {
            radioValue = inputRadio[v].value;
          }
        }

        if (radioValue === undefined) {
          errorMessage = "Vous devez choisir une option.";
          isValidate = false;
        }
        break;

      case "checkbox":
        if (inputBalise.checked === false) {
          errorMessage =
            "Vous devez vérifier que vous acceptez les termes et conditions.";
          isValidate = false;
        }
        break;
    }

    // If message is empty
    if (inputBalise.value === "") {
      errorMessage = "Vous devez entrer votre " + labelBalise.textContent;
      isValidate = false;
    }

    // Border color for other type than type radio and checkbox
    if (errorMessage !== "") {
      if (inputBalise.type !== "radio" && inputBalise.type !== "checkbox") {
        inputBalise.style.border = "3px red solid";
      }
    } else {
      inputBalise.style.border = "3px #279e7a solid";
    }

    // Show error message
    errorBalise.style.display = "block";
    errorBalise.innerHTML = errorMessage;
  }

  // global message validation
  if (isValidate) {
    validateBalise.style.display = "flex";
  }
}