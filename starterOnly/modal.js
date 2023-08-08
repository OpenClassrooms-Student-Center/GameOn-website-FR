function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////// les Elements de DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.forms["reserve"];

////////// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

///// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/////////////validation pour le prenom
function validateFirst(form) {
  const validateFirst = document.querySelector(".first");
  const first = form["first"].value;
  //Si le prénom est vide ou contient moins de 2 lettres
  if (first === "" || first.length < 2) {
    validateFirst.setAttribute("data-error-visible", "true");
    validateFirst.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
    );

    return false;
    //Si le prénom est correctement rempli
  } else {
    validateFirst.setAttribute("data-error-visible", "false");
    validateFirst.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom"
    );
    return true;
  }
}

///////////////validation pour le nom
function validateLast(form) {
  const validateLast = document.querySelector(".last");
  const last = form["last"].value;
  //Si le nom est vide ou contient moins de 2 lettres
  if (last === "" || last.length < 2) {
    validateLast.setAttribute("data-error-visible", "true");
    validateLast.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );

    return false;
    //Si le prénom est correctement rempli
  } else {
    validateLast.setAttribute("data-error-visible", "false");
    validateLast.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom"
    );
    return true;
  }
}
///////////////validation pour l'email
function validateEmail(form) {
  const validateEmailField = document.querySelector(".email");
  const email = form["email"].value;

  // Utilisation d'une expression régulière pour valider le format de l'email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //si l'email est vide
  if (email === "") {
    validateEmailField.setAttribute("data-error-visible", "true");
    validateEmailField.setAttribute(
      "data-error",
      "Veuillez saisir votre email"
    );
    return false;
    // si l'email nai pas valide
  } else if (!emailRegex.test(email)) {
    validateEmailField.setAttribute("data-error-visible", "true");
    validateEmailField.setAttribute(
      "data-error",
      "Veuillez saisir une adresse email valide"
    );
    return false;
  } else {
    validateEmailField.setAttribute("data-error-visible", "false");
    validateEmailField.removeAttribute("data-error");
    return true;
  }
}
///////////////validation pour la date de naissance
function validateBirthdate(form) {
  const validateBirthdate = document.querySelector(".birthdate");
  const birthdate = form["birthdate"].value;
  const birthdateForAge = new Date(birthdate);
  //verifier l'age
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdateForAge.getFullYear();

  if (birthdate === "") {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance"
    );

    return false;
  }
  //l'age min 18ans
  else if (age < 18) {
    validateBirthdate.setAttribute("data-error-visible", "true");
    validateBirthdate.setAttribute(
      "data-error",
      "Vous devez avoir au moins 18 ans"
    );

    return false;
  } else {
    validateBirthdate.setAttribute("data-error-visible", "false");
    validateBirthdate.removeAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance"
    );
    return true;
  }
}
/////////////validate la quantité
function validateQuantity(form) {
  const validateQuantity = document.querySelector(".quantity");
  const quantity = form["quantity"].value;
  if (isNaN(quantity) || quantity === "") {
    validateQuantity.setAttribute("data-error-visible", "true");
    validateQuantity.setAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );

    return false;
    
  } 
  else if   (quantity > 99) {
 
   validateQuantity.setAttribute("data-error-visible", "true");
   validateQuantity.setAttribute(
     "data-error",
     "le  maximum est 99"
   );
   return false;
}else {
    validateQuantity.setAttribute("data-error-visible", "false");
    validateQuantity.removeAttribute(
      "data-error",
      "Veuillez saisir une valeur numérique"
    );
    return true;
  }
}

///////////////validate pour les option
function validateRadioButtons(form) {
  const validateRadioButtons = document.querySelector(".location");
  const radioButtons = document.getElementsByName("location");
  var isChecked = false;
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
    return true;
  }
}
///////////////validate pour les  Conditions
function validateConditions(form) {
  const validateRadioConditions = document.querySelector(".checkboxCondition");
  const Conditions = document.getElementById("checkbox1");
  var isCheckedConditions = false;
  if (Conditions.checked) {
    isCheckedConditions = true;
    validateRadioConditions.setAttribute("data-error-visible", "false");
    validateRadioConditions.removeAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
    return true;
  } else {
    validateRadioConditions.setAttribute("data-error-visible", "true");
    validateRadioConditions.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
    return false;
  }
}

/////////////// Form validation
function validate() {
  const isFirstNameValid = validateFirst(form);
  const isLastNameValid = validateLast(form);
  const isEmailValid = validateEmail(form);
  const isBirthdateValid = validateBirthdate(form);
  const isQuantityValid = validateQuantity(form);
  const isRadioButtonsValid = validateRadioButtons(form);
  const isConditionsValid = validateConditions(form);

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isRadioButtonsValid &&
    isConditionsValid
  );
}
////////  modal
function modal() {
  //cree le 2 modal
  const modal = `
    <div class="modal-body">
    <div class="modal_text">
      <p>Merci pour </p>
      <p>votre inscription</p>
      </div>
      <input id="closeModal2" class="btn-submit" type="submit"   value="Fermer" />
    </div>`;
  document.querySelector(".modal-body").innerHTML = modal;
  document
    .getElementById("closeModal2")
    .addEventListener("click", close_modal2);
}

////////// Fonction pour gérer  le bouton de soumission "cest parti"
function handleFormSubmit(e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  ////////// Appeler la fonction validate() si elle retourne true
  if (validate()) {
    // Si elle est true , appeler la fonction modal()
    modal();
  }
}

//ecoute  le click de submit
document
  .getElementById("btn-submit")
  .addEventListener("click", handleFormSubmit);

//ferme le modal
function close_modal(e) {
  e.preventDefault();
  modalbg.style.display = "none";
}
//close modal 2 avec le rafraîchissement de la page 
function close_modal2() {
  modalbg.style.display = "none";
  location.reload(false);
}
////ecoute  le click de closeModal
document.getElementById("closeModal").addEventListener("click", close_modal);
