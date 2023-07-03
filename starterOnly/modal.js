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

//close modal
function close_modal(e) {
  e.preventDefault;
  modalbg.style.display = "none";
}
document.getElementById("closeModal").addEventListener("click", close_modal);


///validate 
function validate() {
  var form = document.forms["reserve"];
  var formDataElement = document.querySelector(".formData");
  var validateFirst = document.querySelector(".first");
  var validateLast = document.querySelector(".last");
  var validateEmail = document.querySelector(".email");
  var validateBirthdate = document.querySelector(".birthdate");
  var validateQuantity = document.querySelector(".quantity");
  var validateRadioButtons = document.querySelector(".location");
  var radioButtons = document.getElementsByName("location");
  var isChecked = false;
  var validateRadioConditions = document.querySelector(".checkboxCondition");
  var Conditions = document.getElementById("checkbox1");
  var isCheckedConditions = false;
  var first = form["first"].value;
  var last = form["last"].value;
  var Email = form["email"].value;
  var birthdate = form["birthdate"].value;
  var quantity = form["quantity"].value;

//for first
  if (first === "" || first.length < 2) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
    );

    return false;
  } else {
    validateFirst.setAttribute("data-error-visible", "false");
    validateFirst.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
    );
  }
//for last 
  if (last === "" || last.length < 2) {
    validateLast.setAttribute("data-error-visible", "true");
    validateLast.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );

    return false;
  } else {
    validateLast.setAttribute("data-error-visible", "false");
    validateLast.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );
  }
//for email
  if (Email === "") {
    validateEmail.setAttribute("data-error-visible", "true");
    validateEmail.setAttribute("data-error", "Veuillez saisir votre email");

    return false;
  } else {
    validateEmail.setAttribute("data-error-visible", "false");
    validateEmail.removeAttribute("data-error", "Veuillez saisir votre email.");
  }
  //for birthdate
  if (birthdate === "") {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance"
    );

    return false;
  } else {
    validateBirthdate.setAttribute("data-error-visible", "false");
    validateBirthdate.removeAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance"
    );
  }
//for quantity
  if (isNaN(quantity) || quantity === "") {
    validateQuantity.setAttribute("data-error-visible", "true");
    validateQuantity.setAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );

    return false;
  } else {
    validateQuantity.setAttribute("data-error-visible", "false");
    validateQuantity.removeAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );
  }
//for radioButtons
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (!isChecked) {
    validateRadioButtons.setAttribute("data-error-visible", "true");
    validateRadioButtons.setAttribute(
      "data-error",
      "Vous devez choisir une option."
    );
    return false;
  } else {
    validateRadioButtons.setAttribute("data-error-visible", "false");
    validateRadioButtons.removeAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );
  }

  //check Conditions
  if (Conditions.checked) {
    isCheckedConditions = true;
    validateRadioConditions.setAttribute("data-error-visible", "false");
    validateRadioConditions.removeAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
  } else {
    validateRadioConditions.setAttribute("data-error-visible", "true");
    validateRadioConditions.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
    return false;
  }
//if all its ok return true
  formDataElement.setAttribute("data-error-visible", "false");
  return true;
}


