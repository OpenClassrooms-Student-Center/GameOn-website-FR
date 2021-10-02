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

const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll("[name='location']");
const checkboxInput = document.getElementById("checkbox1");
const formLocation = document.getElementById("locationError");
const cgvInput = document.getElementById("cgvError");
const formInput = document.getElementById("reserve-form");

//Aucune coché par defaut
const BtnLocationDefault = (locationInput.checked = false);
console.log("STATUT LOCATION DEFAULT " + BtnLocationDefault + "");

//Condition coché par defaut
const ConditionDefaultchecked = (checkboxInput.checked = true);
console.log("STATUT C.G.V DEFAULT " + ConditionDefaultchecked + "");

//ouvre la modale et la ferme en cliquant
launchCloseModale = () => {
  const getBground = document.querySelector(".bground");
  const isClose = document.querySelector(".close");  //Fermer la modale #1 

  launchModal = () => {
    getBground.style.display = "block";
  };

  window.onclick = (event) => {
    if (event.target == getBground || event.target == isClose) {
      getBground.style.display = "none";
    }
  };
};
launchCloseModale();

//Fonction submit : soumettre le formulaire, formulaire est vérifié
formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//Vérification modale
function checkInputs() {
  //const firstValue = firstNameInput.value.trim(); // trim permet de retirer les blancs en début et fin de chaîne
  //const nomValue = lastNameInput.value.trim();
  //const emailValue = emailInput.value.trim();
  //const birthValue = birthdateInput.value.trim();
  //const quantityValue = quantityInput.value.trim();
}

//Fonction success et error
setErrorFor = (input, message) => {
  const formData = input.parentElement;
  const p = formData.querySelector("p");
  formData.className = "formData error";
  p.innerText = message;
};

setSuccessFor = (input, message) => {
  const formData = input.parentElement;
  formData.className = "formData success";
};

//forme regex
/*Name = (name) => {
  return new RegExp(/^[A-Za-z]{2,20}$/).test(name); //vérifie s'il y a une correspondance entre le texte et le regex
};
Mail = (mail) => {
  return new RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/).test(mail);
};
Birth = (birthdate) => {
  return new RegExp(/^\d{4}\-\d{2}\-\d{2}$/).test(birthdate);
};
Quantity = (quantity) => {
  return new RegExp(/^[0-9]+$/).test(quantity);
};

//Validation anniversaire
const birthValue = birthdateInput.value.trim();
validBirthDate = () => {
  if (birthValue === "") {
    setErrorFor(birthdateInput, "le champ est vide");
    return false;
  } else if (Birth(birthValue)) {
    setSuccessFor(birthdateInput);
    return true;
  } else {
    setErrorFor(birthdateInput, "Veuillez entrer une date de naissance valide.");
    return false;
  }
};
validBirthDate();
console.log("statut BIRTHDATE", validBirthDate());

// Pour écouter des événements sur cet élément.
birthdateInput.addEventListener("change", checkingForValidDate);
function checkingForValidDate() {
  console.log(this.value, Birth(this.value));
  Birth(this.value, "addeventlistener")
    ? setSuccessFor(birthdateInput)
    : setErrorFor(birthdateInput, "Veuillez entrer une date de naissance valide.");
}

//Validation prénom first
const firstValue = firstNameInput.value.trim();
ValidFirstName = () => {
  if (firstValue === "") {
    setErrorFor(firstNameInput, "le champ est vide");
    return false;
  } else if (!Name(firstValue)) {
    setErrorFor(
      firstNameInput,
      "Veuillez entrer un prénom comportant 2 caractères ou plus."
    );
    return false;
  } else {
    setSuccessFor(firstNameInput);
    return true;
  }
};
ValidFirstName();
console.log("statut FIRSTNAME", ValidFirstName());

// pour écouter les événements sur cet élément.
firstNameInput.addEventListener("input", (e) => {
  let etv = e.target.value;
  Name(etv)
    ? setSuccessFor(firstNameInput)
    : setErrorFor(
      firstNameInput,
        "Veuillez entrer un prénom comportant 2 caractères ou plus."
      );
});

//Validation nom
const nomValue = lastNameInput.value.trim();
ValidLastName = () => {
  if (nomValue === "") {
    setErrorFor(lastNameInput, "le champ est vide");
    return false;
  } else if (!Name(nomValue)) {
    setErrorFor(
      lastNameInput,
      "Veuillez entrer un nom comportant 2 caractères ou plus."
    );
    return false;
  } else {
    setSuccessFor(lastNameInput);
    return true;
  }
};
ValidLastName();
console.log("statut NAME", ValidLastName());

// Pour écoute des événements sur cet élément.
lastNameInput.addEventListener("input", (e) => {
  let etv = e.target.value;
  Name(etv)
    ? setSuccessFor(lastNameInput)
    : setErrorFor(
      lastNameInput,
        "Veuillez entrer un nom comportant 2 caractères ou plus."
      );
});

//Validation mail
const emailValue = emailInput.value.trim();
ValidMail = () => {
  if (emailValue === "") {
    setErrorFor(emailInput, 
      "le champ est vide"
      );
    return false;
  } else if (!Mail(emailValue)) {
    setErrorFor(emailInput, 
      "Veuillez entrer une adresse email valide."
      );
    return false;
  } else {
    setSuccessFor(emailInput);
    return true;
  }
};
ValidMail();
console.log("statut MAIL", ValidMail());

// Pour écouter des événements sur cet élément.
emailInput.addEventListener("input", (e) => {
  let etv = e.target.value;
  Mail(etv)
    ? setSuccessFor(emailInput)
    : setErrorFor(emailInput, "Veuillez entrer une adresse email valide.");
});

//Validation quantité
const quantityValue = quantityInput.value.trim();
ValidQuantity = () => {
  if (quantityValue === "") {
    setErrorFor(quantityInput, "le champ est vide");
    return false;
  } else if (!Quantity(quantityValue)) {
    setErrorFor(quantityInput, 
      "Veuillez entrer un nombre valide."
      );
    return false;
  } else {
    setSuccessFor(quantityInput);
    return true;
  }
};
ValidQuantity();
console.log("statut QUANTITY", ValidQuantity());

// pour écouter les événements sur cet élément.
quantityInput.addEventListener("input", (e) => {
  let etv = e.target.value;
  Quantity(etv, "addeventlistener")
    ? setSuccessFor(quantityInput)
    : setErrorFor(quantityInput, 
      "Veuillez entrer un nombre valide."
      );
});

//Validation location
ValidLocation = () => {
  let oneIsChecked = false;
  for (let i = 0; i < locationInput.length; i++) {
    if (locationInput[i].checked) {
      oneIsChecked = true;
      break;
    }
  }

  if (!oneIsChecked) {
    setErrorFor(formLocation, 
      "Veuillez choisir une ville."
      );
    return false;
  } else {
    setSuccessFor(formLocation);
    return true;
  }
};
ValidLocation();
console.log("statut LOCATION", ValidLocation());

//Pour écouter les événements sur cet élément.
locationInput.forEach((locationInputs, index, locationInput) => {
  locationInputs.addEventListener("input", (e) => {
    let etc = e.target.checked;
    console.log(etc, "Voici");
    etc
      ? setSuccessFor(locationInputs)
      : setErrorFor(locationInputs, 
        "Veuillez choisir une ville."
        );
  });
});

//Validation condition: J'ai lu et accepté les conditions d'utilisation
ValidCondition = () => {
  if (checkboxInput.checked === true) {
    setSuccessFor(checkboxInput);
    return true;
  } else {
    setErrorFor(
      checkboxInput,
      "Veuillez accepter les conditions d'utilisations."
    );
    return false;
  }
};
ValidCondition();
console.log("statut CGV", ValidCondition());

//Pour écouter les événements sur cet élément.
checkboxInput.addEventListener("input", (e) => {
  let etc = e.target.checked;
  etc
    ? setSuccessFor(checkboxInput)
    : setErrorFor(
      checkboxInput,
        "Veuillez accepter les conditions d'utilisations."
      );
});

//Pour vérifier si les conditions sont remplis et bouton valider 
Valid = () => {
  if (
    ValidFirstName() &&
    ValidLastName() &&
    ValidMail() &&
    validBirthDate() &&
    ValidLocation() &&
    ValidQuantity() &&
    ValidCondition()
  ) {
    return true;
  } else {
    return false;
  }
};
Valid();
console.log("statut is form VALID ?", Valid());

//close modal Validation form : Validation et message de retour
success = () => {
  //  reset de la modale
  const getModalBg = document.querySelector(".modal-body");
  getModalBg.innerHTML = "";
  getModalBg.classList.add("modalValidate");

  //  message de CONFIRMATION
  let divValidate = document.createElement("div");
  divValidate.textContent = "Merci ! Votre réservation a été reçue.";
  divValidate.classList.add("divValidate");
  getModalBg.appendChild(divValidate);

  //  bouton MERCI
  let btnValidate = document.createElement("button");
  btnValidate.textContent = "Merci";
  btnValidate.classList.add("btnValidate");
  getModalBg.appendChild(btnValidate);

  closeValidate = () => {
    boutonClose = document.querySelector(".btnValidate");
    boutonClose.onclick = (event) => {
      document.querySelector(".bground").style.display = "none";
      // window.location.reload();
    };
  };
  closeValidate();

  //  actualiser la page du navigateur
setTimeout(
  (windowOff = () => {
    window.location.reload();
  }),
  2000
);

// le formulaire est - il "valide" ?
  //    REPONSE SI VRAI "display success"
  //    REPONSE SI FAUX "reset"
  Valid() ? success() : formInput.reset();

  console.log("c'est parfait");
}
*/
const errorMessages = {
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};


// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation modal: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

const firstNameError = document.getElementById('firstError');
firstNameError.style.display = "none";
//fonction validate des champs de saisie
function validate () {
  //alert ("hello");
  let firstNameInput = document.getElementById('first').value;
  //let firstNameErrors = document.getElementById('firstError').value;
  //prénom
  alert (firstNameInput.trim().length);
  if (firstNameInput.trim().length<2){
    //alert ("prénom trop court");
    firstNameError.style.display = "inline";
  } 
  /*else {
    alert ("prénom ok")
  }*/
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate: ouvre la modale et la ferme en cliquant
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
}

// close modal Validation form 
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

function isInvalid(element, message) {
  let target;
  if (NodeList.prototype.isPrototypeOf(element)) target = element[0].parentNode;
  else target = element.parentNode;
  target.setAttribute("data-error-visible", true);
  target.setAttribute("data-error", message);
}

//remove previous alerts
function removeAlerts() {
  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );
  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }
}

// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 / Test localisation
//Validate location
function validateLocation() {
  const input = locationInput;
  for (var i = 0; i < input.length; i++) {
    const validityState = input[i].checked;
    if (validityState) {
      return true;
    }
  }
  return false;
}

//validate first name
/*function firstValidation() {
  let inputValue = firstNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}*/

//validate last name
function lastValidation() {
  let inputValue = lastNameInput.value;
  if (inputValue !== null && inputValue.length >= 2) return true;
  else return false;
}

//validate email
function emailValidation() {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  return regex.test(emailInput.value);
}

//validate birthday
function birthdateValidation() {
  let birthdate = new Date(birthdateInput.value);
  let today = new Date();
  if (birthdate.toString() !== "Invalid Date") {
    if (
      birthdate.getDate() >= today.getDate() &&
      birthdate.getMonth() == today.getMonth() &&
      birthdate.getFullYear() == today.getFullYear()
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

//validate quantity
function quantityValidation() {
  let regex = /^[0-9]+$/;
  return regex.test(quantityInput.value);
}

//Validate condition générale
function validateRules() {
  const input = checkboxInput;
  const validityState = input.checked;
  if (validityState == false) {
    return false;
  } else {
    return true;
  }
}


// Fonction principal du formulaire on test si location et rules son ok avant de fermer la modale , les autres inputs sont testé avant par required
function validate(ev) {
  ev.preventDefault();

  let isValidInput = true;
  removeAlerts();
  if (!firstValidation()) {
    isValidInput = false;
    isInvalid(firstNameInput, errorMessages.firstName);
  }
  if (!lastValidation()) {
    isValidInput = false;
    isInvalid(lastNameInput, errorMessages.lastName);
  }
  if (!emailValidation()) {
    isValidInput = false;
    isInvalid(emailInput, errorMessages.email);
  }
  if (!birthdateValidation()) {
    isValidInput = false;
    isInvalid(birthdateInput, errorMessages.birthdate);
  }
  if (!quantityValidation()) {
    isValidInput = false;
    isInvalid(quantityInput, errorMessages.quantity);
  }
  if (!validateLocation()) {
    isValidInput = false;
    isInvalid(locationInput, errorMessages.location);
  }
  if (!validateRules()) {
    isValidInput = false;
    isInvalid(checkboxInput, errorMessages.checkbox);
  }
  if (isValidInput) {
    validateModal();
  }
}