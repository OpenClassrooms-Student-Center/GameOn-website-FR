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
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const modalForm = document.querySelector("form");
const modalThanks = document.querySelector(".thanks");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //On réinitialise les propriétés qui ont été ajoutée dans closeModal()
  modalbg.style.animationName = "none";
  modalcontent.style.animationName = "modalopen";
}
//Faire une toggle, change entre l'état initiale et l'état finale

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  const closeAnimation = "modalclose 0.8s";

  modalcontent.style.animation = closeAnimation;
  modalbg.style.animation = closeAnimation;

  //L'élément modalbg disparaît seulement à la fin de l'animation
  modalbg.addEventListener("animationend", function () {
    if (modalbg.style.animationName === "modalclose") {
      modalbg.style.display = "none";
    }
  });
}

//Form inputs Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const date = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournamentLocation = document.getElementById("location1");
const locationInputs = document.querySelectorAll('input[name="location"]');
const checkbox1 = document.getElementById("checkbox1");

//Date max input
date.max = new Date().toISOString().split("T")[0];

function validateInput(inputElement, errorMessage, validationFunction) {
  if (validationFunction) {
    showError(inputElement, errorMessage);
  } else {
    hideError(inputElement);
  }
}

function showError(inputElement, errorMessage) {
  inputElement.parentNode.setAttribute("data-error-visible", "true");
  inputElement.parentNode.setAttribute("data-error", errorMessage);
}

function hideError(inputElement) {
  inputElement.parentNode.setAttribute("data-error-visible", "false");
  inputElement.parentNode.setAttribute("data-error", "");
}

function checkLength(inputElement) {
  return inputElement.value.length < 2;
}

function checkValidity(inputElement) {
  return !inputElement.checkValidity();
}

function checkLocationUnselected() {
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      return false;
    }
  }
  return true;
}

function checkCheckboxSelected() {
  return !checkbox1.checked;
}

firstName.addEventListener("input", () =>
  validateInput(
    firstName,
    "Veuillez entrer 2 caractères ou plus.",
    checkLength(firstName)
  )
);
lastName.addEventListener("input", () =>
  validateInput(
    lastName,
    "Veuillez entrer 2 caractères ou plus.",
    checkLength(lastName)
  )
);
email.addEventListener("input", () =>
  validateInput(
    email,
    "Veuillez entrer une adresse e-mail valide.",
    checkValidity(email)
  )
);
date.addEventListener("keyup", () =>
  validateInput(date, "Veuillez entrer une date valide.", checkValidity(date))
);
date.addEventListener("change", () =>
  validateInput(date, "Veuillez entrer une date valide.", checkValidity(date))
);
quantity.addEventListener("input", () =>
  validateInput(
    quantity,
    "Veuillez entrer un nombre entre 0 et 99.",
    checkValidity(quantity)
  )
);

//Form validation
function validate() {
  // Appeler les fonctions de validation individuelles
  validateInput(
    firstName,
    "Veuillez entrer 2 caractères ou plus.",
    checkLength(firstName)
  );
  validateInput(
    lastName,
    "Veuillez entrer 2 caractères ou plus.",
    checkLength(lastName)
  );
  validateInput(
    email,
    "Veuillez entrer une adresse e-mail valide.",
    checkValidity(email)
  );
  validateInput(date, "Veuillez entrer une date valide.", checkValidity(date));
  validateInput(
    quantity,
    "Veuillez entrer un nombre entre 0 et 99.",
    checkValidity(quantity)
  );
  validateInput(
    tournamentLocation,
    "Veuillez sélectionner une ville.",
    checkLocationUnselected()
  );
  validateInput(
    checkbox1,
    "Veuillez accepter les conditions d'utilisation.",
    checkCheckboxSelected()
  );

  // Vérifier s'il y a des erreurs de validation
  var errorElements = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  if (errorElements.length > 0) {
    // Empêcher la soumission du formulaire si des erreurs sont présentes
    //TODO vérifier par quoi remplacer event qui est déprécié
    event.preventDefault();
    // Définir le focus sur le premier champ en erreur
    errorElements[0].querySelector(".text-control").focus();
  } else {
    event.preventDefault();
    // Thanks after validate
    modalForm.style.display = "none";
    modalThanks.style.display = "block";
    // modalbg.style.display = "block";
    // modalcontent.style.display = "block";

    // Clear inputs after validate
    modalForm.reset();
  }
}
