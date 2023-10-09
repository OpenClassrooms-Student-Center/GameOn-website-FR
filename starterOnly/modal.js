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
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}

// Vérification des données du formulaire
const form = document.querySelector("form");

const validators = [
  { name: "first", pattern: /^\S{2}/ },
  { name: "last", pattern: /^\S{2}/ },
  { name: "email", internal: true },
  { name: "quantity", pattern: /^\d+$/ },
  { name: "location", pattern: /^.+$/ },
  { name: "cgu", checked: true },
];

function isValidate(validator) {
  const data = form[validator.name];
  if (!data) {
    console.log(
      `Le champs '${validator.name}' ne semble pas disponible dans ce formulaire !`
    );
  }
  if (validator.pattern) {
    return data.value.match(validator.pattern);
  } else if (validator.internal) {
    return data.validity.valid;
  } else if (validator.checked !== undefined) {
    return data.checked === validator.checked;
  }
  return false;
}

function validate() {
  let errors = 0;
  validators.forEach((validator) => {
    if (isValidate(validator)) {
      // Masquer les messages d'erreurs sur le formulaire
    } else {
      // Afficher les messages d'erreurs sur le formulaire
      errors++;
    }
  });
  return errors === 0;
}
