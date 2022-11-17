/************************ DOM ELEMENTS ************************/
const form = document.getElementById("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const locationChoice = document.querySelector("#location-choice");
const locations = Array.from(document.querySelectorAll(".location"));
const terms = document.querySelector("#checkbox1");
const newsletter = document.querySelector("#checkbox2");

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
  verifyInput(email, nameRegex);
});

//"blur": Supprime le focus d'une saisie de texte
birthDate.addEventListener("blur", () => {
  verifyInput(birthDate);
});

quantity.addEventListener("change", () => {
  verifyInput(quantity);
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
    input.parentNode.removeAttribute("data-error");
    return true;
  }
  input.parentNode.setAttribute("data-error", true);
  return false;
}

//Fonction pour la date
function verifyDate(input) {
  const currentDate = Date.parse(new Date());
  const dateIndicated = Date.parse(input.value);
  if (isNaN(dateIndicated) || dateIndicated > currentDate) {
    input.parentNode.setAttribute("data-error", true);
    return false;
  } else {
    input.parentNode.setAttribute("data-error", false);
    return true;
  }
}

//Fonction pour la quantité
function verifyQuantity(input) {
  if (input.value < 0 || input.value > 100) {
    input.parentNode.setAttribute("data-error", true);
    return false;
  } else {
    input.parentNode.setAttribute("data-error", false);
    return true;
  }
}

//Fonction pour la localisation
function verifyLocation(arrayInputs) {
  let locationIndicated = "";
  const locationIndicatedInput = arrayInputs.find(
    (input) => input.checked === true
  );
  if (!locationIndicatedInput) {
    console.log("choisir une ville svp");
    return false;
  } else {
    locationIndicated = locationIndicatedInput.value;
    console.log(`La ville séléctionnée est ${locationIndicated}`);
    return true;
  }
}

//Fonction des conditions générales d'utiisation
function verifyTerms() {
  if (terms.checked === false) {
    terms.parentNode.setAttribute("data-error", true);
    return false;
  } else {
    terms.parentNode.setAttribute("data-error", false);
    return true;
  }
}

//Fonction pour la newsletter
function verifyNewsletter() {
  if (newsletter.checked === true) {
    return true;
  } else {
    return false;
  }
}

//Fonction pour la validation de tous les champs du formulaire
function validate() {
  if (
    verifyInput(firstName, nameRegex) &&
    verifyInput(lastName, nameRegex) &&
    verifyInput(email, emailRegex) &&
    verifyDate(birthDate) &&
    verifyLocation(locations) &&
    verifyTerms()
  ) {
    // Création d'un objet pour contenir les valeurs des inputs
    let submittedData = {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      birthdate: birthDate.value,
      quantity: quantity.value,
      location: locations.find((input) => input.checked === true).value,
      newsletter: verifyNewsletter(),
    };
    console.log(submittedData, "formulaire OK");

    // Effacement des valeurs des inputs
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    birthDate.value = "";
    quantity.value = 0;
    locations.find((input) => input.checked === true).checked = false;
    newsletter.checked = false;
  } else {
    console.log("formulaire KO");
  }
}
