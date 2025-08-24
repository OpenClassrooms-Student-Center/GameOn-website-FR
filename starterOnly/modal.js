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

//function close Modal
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
function validate(event) {
  if (event) {
    event.preventDefault(); // empêche le reload de la page
  }
  let formIsValid = true;

  const form = document.forms["reserve"];
  const first = document.querySelector("#first").value.trim();
  const last = document.querySelector("#last").value.trim();
  const email = document.querySelector("#email").value.trim();
  const birthdate = document.querySelector("#birthdate").value.trim();
  const quantity = document.querySelector("#quantity").value.trim();
  const location = document.querySelector('input[name="location"]:checked');
  const conditions = document.querySelector("#checkbox1").checked;

  clearErrors(form);

  if (first === null || first.length < 2) {
    formIsValid = false;
    showError(
      "#first",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  }

  if (last === null || last.length < 2) {
    formIsValid = false;
    showError(
      "#last",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formIsValid = false;
    showError("#email", "Veuillez entrer une adresse email valide.");
  }

  if (!birthdate) {
    formIsValid = false;
    showError("#birthdate", "Vous devez entrer votre date de naissance.");
  }

  if (quantity === "" || isNaN(quantity) || Number(quantity) < 0) {
    formIsValid = false;
    showError("#quantity", "Veuillez entrer un nombre valide.");
  }

  if (!location) {
    formIsValid = false;
    showError('input[name="location"]', "Vous devez choisir une option.");
  }

  if (!conditions) {
    formIsValid = false;
    showError(
      "#checkbox1",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  }

  if (formIsValid) {
    form.submit();
    alert("Merci ! Votre réservation a été reçue.");
  }
}

//error message function
function showError(selector, message) {
  const input = document.querySelector(selector);
  const error = document.createElement("span");
  error.classList.add("error");
  error.innerText = message;
  error.style.color = "red";
  error.style.fontSize = "14px";
  error.style.marginTop = "4px";
  error.style.display = "block";
  input.insertAdjacentElement("afterend", error);
}

// clear errors function
function clearErrors(form) {
  // Supprime tous les spans d'erreur
  form.querySelectorAll(".error").forEach((el) => el.remove());
}
