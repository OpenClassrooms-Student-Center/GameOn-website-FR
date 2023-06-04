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

function validate() {
  //Mettre en var à l'extérieur de la fonction avec un scope plus large
  //GetDataFromForm() pour tout récupérer
  //Factoriser chaque validation de champ function(nomduchamp, fonction validation)
  //validateField(input, fonction de validation)
  //fichier validationfunctions, ou faire en fonction fléchée directement
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const checkbox1 = document.getElementById("checkbox1").checked;

  var isValid = true;

  // Validation du champ Prénom
  //Faire une fonction générique, retourner un object avec le message d'erreur, et la var isValid boolean
  //(field, function fléchée) pour retourner le champ entier avec ou non le message d'erreur (pourquoi pas dans un autre fichier)
  //Mettre le curseur à l'intérieur du premier champ où il y a une erreur
  if (firstName.value.length < 2) {
    isValid = false;
    showError(
      firstName,
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  } else {
    hideError(firstName);
  }
  
  if (firstName.length < 2 || lastName.length < 2) {
    alert("Le prénom et le nom doivent comporter au moins 2 caractères.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return false;
  }

  if (isNaN(quantity) || quantity < 0) {
    alert(
      "Veuillez saisir une valeur numérique positive pour le nombre de tournois."
    );
    return false;
  }

  let locationSelected = false;
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if (!locationSelected) {
    alert("Veuillez sélectionner une option de tournoi.");
    return false;
  }

  if (!checkbox1) {
    alert("Veuillez accepter les conditions d'utilisation.");
    return false;
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(inputElement, errorMessage) {
  var errorSpan = inputElement.nextElementSibling;
  errorSpan.textContent = errorMessage;
  inputElement.setAttribute("data-error-visible", "true");
  inputElement.setAttribute("data-error", errorMessage);
}

function hideError(inputElement) {
  var errorSpan = inputElement.nextElementSibling;
  errorSpan.textContent = "";
  inputElement.setAttribute("data-error-visible", "false");
  inputElement.setAttribute("data-error", "");
}
