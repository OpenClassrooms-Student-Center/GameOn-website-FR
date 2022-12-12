/************************ DOM ELEMENTS ************************/
const form = document.getElementById("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationCity = document.querySelector(".location-city");
const locations = Array.from(document.querySelectorAll(".location-input"));
const terms = document.querySelector("#checkbox1");
const newsletter = document.querySelector("#checkbox2");

const successConfirmation = document.querySelector(".success-confirmation");

/********************* REGEX **********************/
const nameRegex = /^[a-zéèôöîïûùü' -]{2,50}$/i;
const emailRegex = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i;

/********************* EVENTLISTENER **********************/
firstName.addEventListener("change", () => {
  verifyInput(firstName, nameRegex);
});

lastName.addEventListener("change", () => {
  verifyInput(lastName, nameRegex);
});

email.addEventListener("change", () => {
  verifyInput(email, emailRegex);
});

//"blur": Supprime le focus d'une saisie de texte
birthDate.addEventListener("blur", () => {
  verifyDate(birthDate);
});

quantity.addEventListener("change", () => {
  verifyQuantity(quantity);
});

// FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

/********************** FUNCTIONS ********************/

//Fonction des champs et des regex
function verifyInput(input, regex) {
  if (regex.test(input.value)) {
    input.parentNode.removeAttribute("data-error-visible");
    return true;
  }
  input.parentNode.setAttribute("data-error-visible", true);
  return false;
}

//Fonction pour la date
function verifyDate(input) {
  const currentDate = new Date(Date.now());
  const dateIndicated = new Date(input.value);
  if (
    !input.value ||
    dateIndicated.getFullYear() > currentDate.getFullYear() - 15
  ) {
    input.parentNode.setAttribute("data-error-visible", true);
    return false;
  }
  input.parentNode.setAttribute("data-error-visible", false);
  return true;
}

//Fonction pour la quantité
function verifyQuantity(input) {
  if (!input.value || input.value < 0 || input.value > 100) {
    input.parentNode.setAttribute("data-error-visible", true);
    return false;
  }
  input.parentNode.setAttribute("data-error-visible", false);
  return true;
}

//Fonction pour la localisation
function verifyLocation(arrayInputs) {
  let selectedLocation = "";
  const selectedLocationInput = arrayInputs.find(
    (input) => input.checked === true
  );
  if (!selectedLocationInput) {
    locationCity.setAttribute("data-error-visible", true);
    return false;
  }
  selectedLocation = selectedLocationInput.value;
  locationCity.setAttribute("data-error-visible", false);
  return true;
}

//Fonction des conditions générales d'utiisation
function verifyTerms() {
  if (terms.checked === false) {
    terms.parentNode.setAttribute("data-error-visible", true);
    return false;
  }
  terms.parentNode.setAttribute("data-error-visible", false);
  return true;
}

//Fonction pour la newsletter
function verifyNewsletter() {
  return !!newsletter.checked;
}

function clearFormValues() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  quantity.value = 0;
  locations.find((input) => input.checked === true).checked = false;
  newsletter.checked = false;

  form.style.opacity = "0";
  successConfirmation.style.display = "block";
}

function data() {
  return {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    birthdate: birthDate.value,
    quantity: quantity.value,
    location: locations.find((input) => input.checked === true).value,
    newsletter: verifyNewsletter(),
  }
}

//Fonction pour la validation de tous les champs du formulaire
function validate() {
  verifyInput(firstName, nameRegex);
  verifyInput(lastName, nameRegex);
  verifyInput(email, emailRegex);
  verifyDate(birthDate);
  verifyLocation(locations);
  verifyTerms();
  if (
    verifyInput(firstName, nameRegex) &&
    verifyInput(lastName, nameRegex) &&
    verifyInput(email, emailRegex) &&
    verifyDate(birthDate) &&
    verifyLocation(locations) &&
    verifyTerms()
  ) {
    let dataSent = data(); // Création d'un objet pour contenir les valeurs des inputs
    console.log(dataSent, "formulaire OK");
    clearFormValues(); // Effacement des valeurs des inputs
  }
  else {
    console.log("formulaire KO");
  }
}
