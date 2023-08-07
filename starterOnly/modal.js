function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//DOM elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formBod = document.querySelector(".form-body");
const validationMessage = document.getElementById("validation-message");
const listRadioInputs = document.querySelectorAll('input[name="location"]');
const validationConditions = document.querySelector('input[name="checkbox"]');
const errorElementRadio = document.getElementById("error-location");
errorElementRadio.textContent = "";

//launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("validationConditions", validationConditions.checked);
}
//hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

//hide modal form content
function hideContent() {
  formBod.style.display = "none";
}

//display validation message
function displayValidationMessage() {
  validationMessage.style.display = "flex";
  validationMessage.textContent = "Merci! Votre réservation a été reçue.";
}


function validate(event) {
  try {
    event.preventDefault(); //prevents page refreshing when form is filled
    isValid = true; 
    isCheckboxChecked = false; //reset to false at the beginning of validation if checkbox is not checked
    isRadioChecked = false; //reset to false at the beginning of validation if checkbox is not checked

    const fields = [ //array of objects with form fields to be validated
      { id: "first", name: "prénom" },
      { id: "last", name: "nom" },
      { id: "email", name: "e-mail" },
      { id: "birthdate", name: "date de naissance" },
      { id: "quantity", name: "quantité" },
    ];

    fields.forEach((field) => { //loop through each field id, trimmed spaces and error message
      const baliseField = document.getElementById(field.id);
      const valeurField = baliseField.value.trim();
      const errorElement = document.getElementById("error-" + field.id);
      errorElement.textContent = "";

      if (valeurField === "") { //condition and outcome message
        console.log(`Le champ ${field.name} est vide`);
        isValid = false;
        errorElement.textContent = `Le champ ${field.name} est vide`;
      }
    });

    // --------------------------------------------------------------------------

    //loop through each radio input, condition if checked
    listRadioInputs.forEach((radioInput) => {
      if (radioInput.checked) {
        isRadioChecked = true;
        return;
      }
    });

    if (!isRadioChecked) { // if not checked
      document.getElementById("error-location").innerHTML =
        "Veuillez sélectionner un tournoi";
      isValid = false;
    } else { //if checked
      console.log("RadioChecked");
      document.getElementById("error-location").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    if (validationConditions.checked) {
      isCheckboxChecked = true;
    } else {
      isCheckboxChecked = false;
    }

    if (!isCheckboxChecked) {
      document.getElementById("error-checkbox").innerHTML =
        "Veuillez accepter les conditions d'utilisation.";
      isValid = false;
    } else {
      console.log("CheckboxChecked");
      document.getElementById("error-checkbox").innerHTML = "";
    }

    // --------------------------------------------------------------------------

    //query selector to initiate the "error-message" class
    const errorMessageSpans = document.querySelectorAll(".error-message");

    //apply red text color to all error message spans and hide if no error
    let hasError = false;
    errorMessageSpans.forEach((span) => {
      if (span.innerHTML.trim() !== "") {
        span.style.color = "red";
        hasError = true;
      } else {
        span.style.backgroundColor = "";
      }
    });
    // --------------------------------------------------------------------------

    //if all validation conditions are met then logic is applied
    if (isValid && isCheckboxChecked && isRadioChecked) {
      fields.forEach((field) => {
        const errorElement = document.getElementById("error-" + field.id);
        errorElement.textContent = ""; //no error message is displayed 
      });
      console.log("All fields are filled");
      hideContent(); // content is hidden
      displayValidationMessage(); //validation message is displayed
      setTimeout(() => {
        form.submit(); //form is submit after 5s
      }, 5000);
    }
  } catch (error) { //else error messages are displayed
    console.error(error.message);
  }
}

const form = document.querySelector("form"); //initialize form
form.addEventListener("submit", validate); //sumbit form
