function editNav() {
  var x = document.querySelector("#myTopnav");
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

// *** Issue 1
// Select the element with the calsse .close - Sélectonne l"élément qui à la calsse .close  
const modalClose = document.querySelector(".close"); 

// close modal event
// Listen to the mouse click on the .close element. On click call the "closeModal" method - Ecoute le click de la sourie sur l"élément .close. Au click appel la fonction (méthode) "closeModal"
modalClose.addEventListener("click", closeModal); 

// close modal form
// Apply the "none" style on modalbd, which has the .bground class - Applique le syle "none" sur modalbd, qui corespont à l"élement qui à la classe .bground 
function closeModal() {                            
  modalbg.style.display = "none";   
}

// *** Issue 2
const first = document.querySelector("#first"); 
const last = document.querySelector("#last"); 
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const checkbox1 = document.querySelector("#checkbox1");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");

// function valdate

function validate() {
  if (first.checkValidity() &&   // PM - checkValidity = Méthodes de l"API de validation des contraintes
      last.checkValidity() && 
      email.checkValidity() && 
      birthdate.checkValidity() &&
      quantity.checkValidity() &&
      (validateLocation()) &&
      checkbox1.checked) {
    return true;
  } else {
    return false; 
  }
}

function validateLocation() {
  if (location1.checked || 
       location2.checked ||
       location3.checked ||
       location4.checked ||
       location5.checked ||
       location6.checked) {
    return true;
  } else {
    return false; 
  }
}

// *** Issue 3


let inputIds = document.querySelectorAll("div.formData");

for(let i = 0; i < inputIds.length; i++) {
  let errors = [
    "Veuillez entrer 2 caractères ou plus pour le prénom.",
    "Veuillez entrer 2 caractères ou plus pour le prénom.",
    "Veuillez entrer une adresse email valide.",
    "Veuillez indiquez une date.",
    "Veuillez un nombre."
  ];

  inputIds[i].addEventListener("input", function noneValide(event ) {
    inputIds[i].setAttribute("data-error-visible", !event.target.validity.valid);
    inputIds[i].setAttribute("data-error", errors[i]);
  });
};




/*
  targetInputId.addEventListener("input", (e) => noneValide(e, "Veuillez entrer 2 caractères ou plus pour le prénom.")); 
  
  targetInputId.addEventListener("input", (e) => noneValide(e, "Veuillez entrer 2 caractères ou plus pour le prénom.")); 
  targetInputId.addEventListener("input", (e) => noneValide(e, "targetInputId",  "Veuillez entrer une adresse email valide.")); 
  targetInputId.addEventListener("input", (e) => noneValide(e, "targetInputId",  "Veuillez indiquez une date.")); 
  targetInputId.addEventListener("input", (e) => noneValide(e, "targetInputId",  "Veuillez un nombre.")); 
  
  function noneValide(event , errorMessage ) {
    targetInputId.setAttribute("data-error-visible", !event.target.validity.valid);
    targetInputId.setAttribute("data-error", errorMessage);
  }
*/

/*
// alert message
document.querySelector("#formFirst").addEventListener("input", (e) => noneValide(e, "#formFirst",  "Veuillez entrer 2 caractères ou plus pour le prénom.")); 
document.querySelector("#formLast").addEventListener("input", (e) => noneValide(e, "#formLast",  "Veuillez entrer 2 caractères ou plus pour le prénom.")); 
document.querySelector("#formEmail").addEventListener("input", (e) => noneValide(e, "#formEmail",  "Veuillez entrer une adresse email valide.")); 
document.querySelector("#formBirth").addEventListener("input", (e) => noneValide(e, "#formBirth",  "Veuillez indiquez une date.")); 
document.querySelector("#formQuantity").addEventListener("input", (e) => noneValide(e, "#formQuantity",  "Veuillez un nombre.")); 
function noneValide(event , id, errorMessage ) {
  document.querySelector(id).setAttribute("data-error-visible", !event.target.validity.valid);
  document.querySelector(id).setAttribute("data-error", errorMessage);
}
*/

document.querySelector("#formCheckbox1").addEventListener("change", (e) => noneCheck(e, "#formCheckbox1", "Veuillez accepter les conditions d'utilisation.")); 
document.querySelector("#formLocation").addEventListener("change", (e) => noneCheck(e, "#formLocation",  "Veuillez sélectionner une ville.")); 
  function noneCheck(event , id, errorMessage ) {
    document.querySelector(id).setAttribute("data-error-visible", !event.target.checked);
    document.querySelector(id).setAttribute("data-error", errorMessage);
}
  
  
// alert mesage at click on submit without form completed

document.querySelector("#submit").addEventListener("click", checkFirst )

function checkFirst() {
  document.querySelector("#formFirst").addEventListener("invalid", noneCheckFirst("#formFirst", "Veuillez entrer 2 caractères ou plus pour le prénom."));
  document.querySelector("#formLast").addEventListener("invalid", noneCheckFirst("#formLast", "Veuillez entrer 2 caractères ou plus pour le prénom."));
  document.querySelector("#formEmail").addEventListener("invalid", noneCheckFirst("#formEmail",  "Veuillez entrer une adresse email valide."));
  document.querySelector("#formBirth").addEventListener("invalid", noneCheckFirst("#formBirth",  "Veuillez indiquez une date.")); 
  document.querySelector("#formQuantity").addEventListener("invalid", noneCheckFirst("#formQuantity",  "Veuillez un nombre.")); 
    function noneCheckFirst( id, errorMessage ) {
      document.querySelector(id).setAttribute("data-error-visible", true);
      document.querySelector(id).setAttribute("data-error", errorMessage);
    }

  if (validateLocation() == false) {
    document.querySelector("#formLocation").setAttribute("data-error-visible", true);
    document.querySelector("#formLocation").setAttribute("data-error", "Veuillez sélectionner une ville.");
  };

  if (checkbox1.checked == false) {
    document.querySelector("#formCheckbox1").setAttribute("data-error-visible", true);
    document.querySelector("#formCheckbox1").setAttribute("data-error", "Veuillez accepter les conditions d/'utilisation.");
  };
}




// *** Issue 3
/*
form.addEventListener("submit", function(e) {
    e.preventDefault();
 // document.querySelector("#submit").Value="Formulaire Envoyé !";
  alert("Formulaire envoyé !");
 //document.querySelectorAll(".formData").style.display = "none";
 
});
*/
/*

// Create Text element
const validationText = document.createElement("p");
validationText.innerHTML = "Formulaire Envoyé !";
validationText.style.cssText = "text-align: center; padding: 30vh 0.5vw";

// Création de l"élément boutton
const validationButton = document.createElement("button");
validationButton.classList.add("btn-submit");
validationButton.classList.add("final-submit");
validationButton.style.cssText = "margin: 0px 14%; text-align: center;";
validationButton.innerHTML = "Close";


// Ajout dans le DOM

const modalBody = document.querySelector(".modal-body");

modalBody.appendChild(validationText);
modalBody.appendChild(validationButton);
//modalbg.after(newModal);

// Fermeture de la modale sur la croix et le boutton
//validationButton.addEventListener("click", () => newModal.remove());
//closeIcon.addEventListener("click", () => newModal.remove());


// Gestion de l"affichage de la modale de confirmation
const DISPLAY_VALIDATION_POPUP = "DISPLAY_VALIDATION_POPUP";

*/
