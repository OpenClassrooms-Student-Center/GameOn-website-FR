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

// function validate() {
//   // Get the values of the form fields
//   var first = document.forms["reserve"]["first"].value;
//   var last = document.forms["reserve"]["last"].value;
//   var Email = document.forms["reserve"]["email"].value;

// // Sélectionnez l'élément avec la classe "formData"
// var formDataElement = document.querySelector('.formData');

//   // Perform the validations
//   if (first === "" || first.length < 2) {
//   // Ajoutez l'attribut "data-error" à l'élément
// formDataElement.setAttribute('data-error', 'valeur-de-lattribut');

// // Ajoutez l'attribut "data-error-visible" à l'élément
// formDataElement.setAttribute('data-error-visible', 'true');
//     return false; // Prevent form submission
//   }

//   if (last === "" || last.length < 2) {
// // Ajoutez l'attribut "data-error" à l'élément
// formDataElement.setAttribute('data-error', 'valeur-de-lattribut');

// // Ajoutez l'attribut "data-error-visible" à l'élément
// formDataElement.setAttribute('data-error-visible', 'true');
//     return false; // Prevent form submission
//   }
//   if (Email === "") {
// // Ajoutez l'attribut "data-error" à l'élément
// formDataElement.setAttribute('data-error', 'valeur-de-lattribut');

// // Ajoutez l'attribut "data-error-visible" à l'élément
// formDataElement.setAttribute('data-error-visible', 'true');
//     return false; // Prevent form submission
//   }
//   // the other validation

//   // if all its ok the form will be submitted
//   return true;
// }
// var form = document.forms["reserve"];

// Ajoutez un écouteur d'événements pour l'événement "submit"
// form.addEventListener("submit", function(e) {
//   // Empêchez l'envoi du formulaire si la validation échoue
//   if (!validate()) {
//     e.preventDefault();
//   }
// });

function validate() {
  var form = document.forms["reserve"];
  var formDataElement = document.querySelector(".formData");
  var validateFirst = document.querySelector(".first");
  var validateLast = document.querySelector(".last");
  var validateEmail = document.querySelector(".email");
  var validateBirthdate = document.querySelector(".birthdate");
  var validateQuantity = document.querySelector(".quantity");

  var first = form["first"].value;
  var last = form["last"].value;
  var Email = form["email"].value;
  var birthdate = form["birthdate"].value;
  var quantity = form["quantity"].value;
  if (first === "" || first.length < 2) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute("data-error", "Veuillez saisir votre prénom.");

    return false;
  } else {
    validateFirst.setAttribute("data-error-visible", "false");
    validateFirst.removeAttribute(
      "data-error",
      "Veuillez saisir votre prénom."
    );
  }

  if (last === "" || last.length < 2) {
    validateLast.setAttribute("data-error-visible", "true");
    validateLast.setAttribute("data-error", "Veuillez saisir votre nom.");

    return false;
  } else {
    validateLast.setAttribute("data-error-visible", "false");
    validateLast.removeAttribute("data-error", "Veuillez saisir votre nom.");
  }

  if (Email === "") {
    validateEmail.setAttribute("data-error-visible", "true");
    validateEmail.setAttribute("data-error", "Veuillez saisir votre email");

    return false;
  } else {
    validateEmail.setAttribute("data-error-visible", "false");
    validateEmail.removeAttribute("data-error", "Veuillez saisir votre email.");
  }
  if (birthdate === "") {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Veuillez saisir votre date de naissance "
    );

    return false;
  } else {
    validateBirthdate.setAttribute("data-error-visible", "false");
    validateBirthdate.removeAttribute(
      "data-error",
      "Veuillez saisir votre date de naissance."
    );
  }

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

  formDataElement.setAttribute("data-error-visible", "false");
  return true;
}
