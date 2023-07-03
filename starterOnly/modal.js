function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// les Elements de DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

///validation de formulaire

function validate() {
  // les Elements de DOM
  const form = document.forms["reserve"];
  const formDataElement = document.querySelector(".formData");
  const validateFirst = document.querySelector(".first");
  const validateLast = document.querySelector(".last");
  const validateEmail = document.querySelector(".email");
  const validateBirthdate = document.querySelector(".birthdate");
  const validateQuantity = document.querySelector(".quantity");
  const validateRadioButtons = document.querySelector(".location");
  const radioButtons = document.getElementsByName("location");
  var isChecked = false;
  const validateRadioConditions = document.querySelector(".checkboxCondition");
  const Conditions = document.getElementById("checkbox1");
  var isCheckedConditions = false;
  const first = form["first"].value;
  const last = form["last"].value;
  const Email = form["email"].value;
  const birthdate = form["birthdate"].value;
  const quantity = form["quantity"].value;

  //pour le prenom
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
  // pour le nom
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
  //pour l'email
  if (Email === "") {
    validateEmail.setAttribute("data-error-visible", "true");
    validateEmail.setAttribute("data-error", "Veuillez saisir votre email");

    return false;
  } else {
    validateEmail.setAttribute("data-error-visible", "false");
    validateEmail.removeAttribute("data-error", "Veuillez saisir votre email.");
  }
  //pour la date de naissance
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
  //pour la quantité
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
  //pour les option
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

  //pour les  Conditions
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
  //si tout est validé, retourne true
  formDataElement.setAttribute("data-error-visible", "false");
  return true;
}

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
  document.getElementById("closeModal2").addEventListener("click", close_modal);
}

// Fonction pour gérer  le bouton de soumission "cest parti"
function handleFormSubmit(e) {
  e.preventDefault(); // Empêche la soumission du formulaire

  // Appeler la fonction validate() si elle retourne true
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
  e.preventDefault;
  modalbg.style.display = "none";
}
////ecoute  le click de closeModal
document.getElementById("closeModal").addEventListener("click", close_modal);
