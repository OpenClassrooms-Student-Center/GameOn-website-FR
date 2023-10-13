const modalBody = document.querySelector(".modal-body");
const modalValidate = document.querySelector(".modal-validate");
modalValidate.style.display = "none";

function displayValidationMessage() {
  modalBody.style.display = "none";
  modalValidate.style.display = "flex";
}

function validate() {
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const integer = document.getElementById("quantity");
  const termsCheckbox = document.getElementById("checkbox1");
  const location = document.getElementsByName("location");

  let errors = [];

  if (firstName.value.length < 2) {
    errors.push("Le champ Prénom doit contenir au moins 2 caractères.");
  }
  if (lastName.value.length < 2) {
    errors.push("Le champ Nom doit contenir au moins 2 caractères.");
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    errors.push("L'adresse électronique n'est pas valide.");
  }
  if (isNaN(integer.value)) {
    errors.push("Le nombre de concours doit être une valeur numérique.");
  }
  let radioSelected = false;
  for (const radio of location) {
    if (radio.checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    errors.push("Sélectionnez un emplacement.");
  }
  if (!termsCheckbox.checked) {
    errors.push("Vous devez accepter les conditions générales.");
  }
  if (errors.length > 0) {
    alert("Le formulaire contient des erreurs :\n" + errors.join("\n"));
    return false;
  }
  displayValidationMessage();

  return false;
}
