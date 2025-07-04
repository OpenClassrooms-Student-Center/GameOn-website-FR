// CODE DU BURGER PRECEDENT

// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// ============================================
//  MENU BURGER RESPONSIVE
// ============================================

function editNav() {
  const nav = document.getElementById("myTopnav");
  const icon = document.querySelector("#burgerIcon i");

  if (nav.className === "topnav") {
    nav.className += " responsive";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    nav.className = "topnav";
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// ============================================
//  MODALE - AFFICHAGE & FERMETURE
// ============================================

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

function launchModal() {
  modalbg.style.display = "flex";
  modalbg.style.alignItems = "center";
  modalbg.style.justifyContent = "center";
}

function closeModal() {
  const form = document.querySelector("form");
  const confirmationMessage = document.getElementById("confirmation-message");

  modalbg.style.display = "none";
  form.style.display = "block";
  confirmationMessage.classList.remove("active");
}

// ============================================
//  FORMULAIRE - VALIDATION
// ============================================

function validate() {
  let isValid = true;

  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const locationRadios = document.getElementsByName("location");
  const termsAccepted = document.getElementById("checkbox1");

  // Supprimer anciens messages d'erreur
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  //  Affiche une erreur sur un champ
  function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "#fe142f";
    error.style.fontSize = "0.7em";
    error.textContent = message;
    element.parentElement.appendChild(error);
    isValid = false;
  }

  // Validation de chaque champ

  // Prénom
  if (!firstName.value.trim() || firstName.value.trim().length < 2) {
    showError(
      firstName,
      "Veuillez entrer au moins 2 caractères pour le prénom."
    );
  }

  // Nom
  if (!lastName.value.trim() || lastName.value.trim().length < 2) {
    showError(lastName, "Veuillez entrer au moins 2 caractères pour le nom.");
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Veuillez entrer une adresse e-mail valide.");
  }

  // Date de naissance
  if (!birthdate.value) {
    showError(birthdate, "Veuillez entrer votre date de naissance.");
  }

  // Quantité
  if (quantity.value === "" || isNaN(quantity.value) || quantity.value < 0) {
    showError(quantity, "Veuillez entrer un nombre valide.");
  }

  // Lieu sélectionné
  let locationSelected = false;
  for (let radio of locationRadios) {
    if (radio.checked) {
      locationSelected = true;
      break;
    }
  }
  if (!locationSelected) {
    showError(locationRadios[0], "Veuillez sélectionner une ville.");
  }

  // Conditions générales
  if (!termsAccepted.checked) {
    showError(
      termsAccepted,
      "Vous devez accepter les conditions d'utilisation."
    );
  }

  if (isValid) {
    showConfirmationMessage();
  }

  return false;
}

// ============================================
//  AFFICHAGE DU MESSAGE DE CONFIRMATION
// ============================================

function showConfirmationMessage() {
  const form = document.querySelector("form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.reset(); // Réinitialiser le formulaire après validation
  form.style.display = "none";
  confirmationMessage.classList.add("active");
}
