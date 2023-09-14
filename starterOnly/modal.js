// VARIABLES
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const acceptedConditions = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const radioButton1 = document.querySelector("#location1");
const radioButton2 = document.querySelector("#location2");
const radioButton3 = document.querySelector("#location3");
const radioButton4 = document.querySelector("#location4");
const radioButton5 = document.querySelector("#location5");
const radioButton6 = document.querySelector("#location6");
const allBtnRadio = document.querySelectorAll("input[name='location']");
const form = document.querySelector("form");
const modal2 = document.querySelector(".modal2");
const closeButtonModal2 = document.querySelector(".close-modal2");
const closeButtonBottomModal2 = document.querySelector(".button-modal2");

// ouverture de la modale au clic sur le bouton
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function pour ouvrir la modale avec ajout d'une class "opened-modal"
function launchModal() {
  modalForm.classList.add("opened-modal")
}

//fermeture de la modale au clic sur la croix

closeButton.addEventListener("click", closeModal)

// function pour fermer la modale
function closeModal() {
  modalForm.classList.remove("opened-modal")
  
}

// si les conditions ne sont pas acceptées, le formulaire passe en disabled

acceptedConditions.addEventListener("click", disableSubmit)

function disableSubmit(event) {

  const input = event.target;
  const parentElement = input.parentElement;

  const conditionsAreAccepted = event.target.checked;   //On récupère dans l'événément l'attribut checked dans target. Aperçu dans la console
  if(conditionsAreAccepted === false) {                 //Si les conditions ne sont pas acceptées, alors on active l'attribut disabled sur le submitButton
  submitButton.setAttribute("disabled", "true");

  parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");  // Message d'erreur apparaît
  parentElement.setAttribute("data-error-visible", "true");

   } else {
  submitButton.removeAttribute("disabled");       //Si les conditions sont acceptées, alors on retire l'attribut disabled sur le submitButton
  
  parentElement.removeAttribute("data-error");
  parentElement.removeAttribute("data-error-visible"); 
  }
 
}



// MESSAGE D'ERREUR DU PRÉNOM

firstName.addEventListener("invalid", errorOnFirstName);

function errorOnFirstName(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value.trim().length >= 2) {
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DU NOM DE FAMILLE

lastName.addEventListener("invalid", errorOnLastName);
function errorOnLastName(event) {

  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value.trim().length >= 2) {
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DE LA DATE DE NAISSANCE

birthdate.addEventListener("invalid", errorOnBirthdate);

function errorOnBirthdate(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Vous devez entrer votre date de naissance.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value != null) {                          
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DES BOUTONS RADIO

radioButton1.addEventListener("invalid", errorOnLocation);
radioButton2.addEventListener("invalid", errorOnLocation);
radioButton3.addEventListener("invalid", errorOnLocation);
radioButton4.addEventListener("invalid", errorOnLocation);
radioButton5.addEventListener("invalid", errorOnLocation);
radioButton6.addEventListener("invalid", errorOnLocation);

function errorOnLocation(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Vous devez choisir une option.");
  parentElement.setAttribute("data-error-visible", "true");
  
  input.addEventListener("change", function () {
    if (input.checked === true) {                          
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");

    }
  });
};



// MESSAGE D'ERREUR DE L'EMAIL


email.addEventListener("invalid", errorOnEmail);

function errorOnEmail(event) {

  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Veuillez entrer un email valide");
  parentElement.setAttribute("data-error-visible", "true");
  
  input.addEventListener("input", function () {
    if (input.checkValidity()) {                          
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }

  });

}


function openValidationMessage () {

  let validationMessage = document.createElement("p");
  validationMessage.className = "text-modal2";
  validationMessage.innerHTML = "Merci pour <br> votre inscription"

  let closeButtonTop = document.createElement("span");
  closeButtonTop.className = "close-modal2";

  let closeButtonBottom = document.createElement("input");
  closeButtonBottom.className = "button-modal2";
  closeButtonBottom.value = "Fermer";

  let validationnWrapper = document.createElement("div");
  validationnWrapper.className = "content-modal2";

  let modalContainer = document.createElement("div");
  modalContainer.className = "modal2";   //permet de cacher le contenu

  validationnWrapper.appendChild(validationMessage);
  validationnWrapper.appendChild(closeButtonTop);
  validationnWrapper.appendChild(closeButtonBottom);
  modalContainer.appendChild(validationnWrapper);
  document.body.appendChild(modalContainer);


//fermeture de la modale 2 au clic sur la croix ou sur le bouton fermer

  closeButtonTop.addEventListener("click", closeModal2)
  closeButtonBottom.addEventListener("click", closeModal2)
  
  // function pour fermer la modale
  function closeModal2() {
    modalContainer.style.display = "none";
  }
};





function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//GESTION DE L'ENVOI DU FORMULAIRE //




function validate(event) {
  event.preventDefault();

  const firstNameIsValid = firstName.value.trim().length >= 2;
  const lastNameIsValid = lastName.value.trim().length >= 2;
  const emailIsValid = email.checkValidity();
  const birthdateIsValid = birthdate.value !== "";
  const locationIsValid = [...allBtnRadio].some((radio) => radio.checked);
  const conditionsAreAccepted = acceptedConditions.checked;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && birthdateIsValid && locationIsValid && conditionsAreAccepted) {

    modalForm.style.display = 'none';   // FERMETURE DE LA MODAL 1. On aurait pu appeler closeModal()
    openValidationMessage()    // OUVERTURE DE LA MODALE 2
    return true;

  } else {
    throw new Error("Formulaire non valide");
  }
}

form.addEventListener("submit", validate);


