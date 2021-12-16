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
// alert message

let divFormData = document.querySelectorAll("div.formData");

let messagesErrors = [
  "Veuillez entrer 2 caractères ou plus pour le prénom.",
  "Veuillez entrer 2 caractères ou plus pour le prénom.",
  "Veuillez entrer une adresse email valide.",
  "Veuillez indiquez une date.",
  "Veuillez un nombre.",
  "Veuillez sélectionner une ville.",
  "Veuillez accepter les conditions d'utilisation.",
];

for(let i = 0; i<divFormData.length; i++) {
  
  let messageErrors = messagesErrors;

  if (i < 5) {
    divFormData[i].addEventListener("input", (e) => {
      divFormData[i].setAttribute("data-error-visible", !e.target.validity.valid);
      divFormData[i].setAttribute("data-error", messageErrors[i]);
    });

  } else {
  divFormData[i].addEventListener("change", (e) => {
    divFormData[i].setAttribute("data-error-visible", !e.target.checked);
    divFormData[i].setAttribute("data-error", messageErrors[i]);
  });
  }

};
  
// alert mesage at click on submit without form completed


/*
NE FONCTIONNE PAS ENCORE :

document.querySelector("#submit").addEventListener("click", checkFirst )

function checkFirst() {

  let inputId = document.querySelectorAll("input.text-control");

  for(let i = 0; i<inputId.length; i++) {
  
    let messageErrors = messagesErrors;

    inputId[i].addEventListener("invalid", () => {
      inputId[i].setAttribute("data-error-visible", true);
      inputId[i].setAttribute("data-error",  messageErrors[i]);
    });

};


  if (validateLocation() == false) {
    document.querySelector("#formLocation").setAttribute("data-error-visible", true);
    document.querySelector("#formLocation").setAttribute("data-error", "Veuillez sélectionner une ville.");
  };

  if (checkbox1.checked == false) {
    document.querySelector("#formCheckbox1").setAttribute("data-error-visible", true);
    document.querySelector("#formCheckbox1").setAttribute("data-error", "Veuillez accepter les conditions d/'utilisation.");
  };
}
*/



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
};
