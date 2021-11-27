function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//not possible to select birthdate in future
const date = new Date().toISOString().split("T")[0];
document.getElementsByName("birthdate")[0].setAttribute("max", date);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const dataSendCloseBtn = document.querySelector(".btn-close");
//const formData = document.querySelectorAll(".formData");
const copyright = document.querySelector(".copyrights");
const form = document.getElementById("form");
const formTransmitted = document.getElementById("confirmation");
const locationInputData = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalCloseBtn.addEventListener("click", closeModal);
dataSendCloseBtn.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  //reset modal when closing after data sended
  if (formTransmitted.style.display === "flex") {
    form.reset();
    modalBody.style.display = "block";
    dataSendCloseBtn.style.display = "none";
    formTransmitted.style.display = "none";
  }
}

//insert copyright with automatically good actual year
const year = new Date().getFullYear();
copyright.textContent = "Copyright 2014 - " + year + ", GameOn Inc.";

//verify if a field is missing to secure website, alert message to user, and refresh page
function fieldIsMissing() {
  const allFields = [
    "first",
    "last",
    "email",
    "birthdate",
    "quantity",
    "location1",
    "location2",
    "location3",
    "location4",
    "location5",
    "location6",
    "checkbox1",
    "checkbox2",
  ];
  //verify if a field is missing from data into array allFields
  allFields.forEach((field) => {
    const input = document.querySelector(`#${field}`);
    if (!input) {
      alert(
        `Merci de ne pas effacer les champs du formulaire ! La page va se rafraîchir !`
      );
      //refresh page
      document.location.reload();
    }
  });
}
/***** endof  fieldIsMissing function     **********/

/***** function to control minLength of inputs ******/
function minLengthIsOK(field, data, size) {
  if (data.length < size) {
    setStatus(
      field,
      `Merci de renseigner au minimum ${size} charactères.`,
      "error"
    );
  } else {
    setStatus(field, null, "success");
  }
}

//function verify is data inputs validate the conditions required
function validateFields(field) {
  // check for a checked radio input
  if (field.type === "radio") {
    if (field.checked) {
      setStatus(field, null, "success");
    }
  }

  // Check presence of values
  if (field.value.trim() === "") {
    setStatus(
      field,
      `Le Champ ${
        field.parentElement.querySelector("label").innerText
      } ne peut être vide.`,
      "error"
    );
  }
  // check for a valid email address
  else if (field.type === "email") {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(field.value)) {
      setStatus(field, null, "success");
    } else {
      setStatus(
        field,
        "Merci de renseigner une adresse email valide.",
        "error"
      );
    }
  }
  //check minLength of first and last field
  else if (field.id === "first" || field.id === "last") {
    minLengthIsOK(field, field.value, 2);
  } //everything is good
  else {
    setStatus(field, null, "success");
  }
}
/*****endfo ValidateFields function*******/

function setStatus(field, message, status) {
  //create new div element with error class
  const newDivError = document.createElement("div");
  newDivError.className = "error";
  //DOM element type radio
  const radioIcon = document.querySelectorAll(
    "label.checkbox-label > span.checkbox-icon"
  );
  //DOM element type checkbox
  const checkboxIcon = document.querySelector(
    "label.checkbox2-label > span.checkbox-icon"
  );

  //success status => remove all CSS styling for error
  if (status === "success") {
    if (field.name === "location") {
      //change borderColor to red when no radio selected
      radioIcon.forEach((item) => {
        item.style.borderColor = "#279e7a";
      });
    } else if (field.id === "checkbox1") {
      //remove border to checkbox
      checkboxIcon.style.border = "";
    } else {
      //normal color for Bordercolor with no error
      field.style.borderColor = "#ccc";
    }
    //remove div with error message
    const elt = field.parentElement.querySelector("div.error");
    if (elt) {
      elt.remove();
    }
  }

  //error status => indicate visually error to user
  if (status === "error") {
    if (field.name === "location") {
      //change borderColor to red when no radio selected
      radioIcon.forEach((item) => {
        item.style.borderColor = "red";
      });
    } else if (field.id === "checkbox1") {
      //add red border to checkbox
      checkboxIcon.style.border = "2px solid red";
    } else {
      //Red color for borderColor to indicate an error to user
      field.style.borderColor = "red";
    }
    //adding new div element with error message
    field.parentElement.appendChild(newDivError);
    field.parentElement.querySelector(".error").innerText = message;
  }
}
/***endof setstatus function *****/

//checking inputs
function checkInputs() {
  //create data Object to receive all entries from form and permit to send data with easy way to back end
  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  //get all fields of form to check if nothing is missing
  const fields = Object.keys(data);
  //console.log(data, fields);

  //verify if someone modify input form before sending data
  fieldIsMissing();

  /*analyze inputs data to alert users by error message if something is wrong
  if a city is not selected and terms of usage not accepted
  fields will be an array without inputs from radio element and checkbox element
  and fields.length === 5 (5 inputs: first, last, email, birthdate, and quantity)
  minimum required is 7 inputs 
  */

  //if a city is not selected => error message to user
  if (fields.indexOf(location) === -1) {
    const field = document.querySelector("div.formData input[type='radio']");
    setStatus(field, "Merci de bien vouloir sélectionner une ville.", "error");
  }

  //if terms and conditions not accepted => error message to user
  if (fields.indexOf(checkbox1) === -1) {
    const field = document.querySelector("div.formData input[type='checkbox']");
    setStatus(field, "Merci d'accepter les conditions d'utilisation.", "error");
  }

  fields.forEach((field) => {
    if (field === "location") {
      const input = document.querySelector(
        `div.formData input[value="${data.location}"]`
      );
      validateFields(input);
    } else {
      const input = document.querySelector(`#${field}`);
      validateFields(input);
    }
  });

  /* end of analyse inputs data */

  if (
    data.first &&
    data.last &&
    data.email &&
    data.birthdate &&
    data.quantity &&
    data.location &&
    data.checkbox1
  ) {
    modalBody.style.display = "none";
    dataSendCloseBtn.style.display = "block";
    formTransmitted.style.display = "flex"; ///
    /*****here send information to backend data format Json ***/
    /***console.log(JSON.stringify(data));*/ return true;
  } else {
    return false;
  }
}

/**** endof checkInputs function */

function validate(e) {
  e.preventDefault();
  checkInputs();
}
