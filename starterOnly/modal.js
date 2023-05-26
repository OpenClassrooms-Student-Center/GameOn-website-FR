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
  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const checkbox1 = document.getElementById("checkbox1").checked;

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

  return true;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
