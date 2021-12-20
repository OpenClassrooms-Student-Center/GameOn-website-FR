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
// Apply the "none" style on modalbd, which has the .bground class - Applique le syle "none" sur modalbd, qui corespont à l"élement qui à la classe .bground 
modalClose.addEventListener("click", (e) => {modalbg.style.display = "none"}); 

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
  if (first.checkValidity() && last.checkValidity() && email.checkValidity() && birthdate.checkValidity() && quantity.checkValidity() &&
      (validateLocation()) && checkbox1.checked) {
      return true;
  } else {
    return false; 
  }
};

function validateLocation() {
  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    return true;
  } else {
    return false; 
  }
};


// *** Issue 3
// alert message

let divFormData = document.querySelectorAll("div.formData");

let messagesErrors = [
  "Veuillez entrer 2 caractères ou plus pour le prénom.", "Veuillez entrer 2 caractères ou plus pour le prénom.",
  "Veuillez entrer une adresse email valide.",
  "Veuillez indiquez une date.",
  "Veuillez un nombre.",
  "Veuillez sélectionner une ville.",
  "Veuillez accepter les conditions d'utilisation.",
];

for(let i = 0; i<divFormData.length; i++) {
  
  let messageErrors = messagesErrors;

  if (i < 6) {
    divFormData[i].addEventListener("input", (e) => {
      divFormData[i].setAttribute("data-error-visible", !e.target.validity.valid);
      divFormData[i].setAttribute("data-error", messageErrors[i]);
    });
    

  } else {
  divFormData[i].firstElementChild.addEventListener("change", (e) => {
    divFormData[i].setAttribute("data-error-visible", !e.target.checked);
    divFormData[i].setAttribute("data-error", messageErrors[i]);
  });

  };
};

//** Issue 4 


form.addEventListener("submit", (e) =>{
  
  e.preventDefault();

  if (validate () == true) {
    
    document.querySelector(".btn-submit").setAttribute("value", "Fermer");
    
    let formDatas = document.querySelectorAll(".formData");
      formDatas.forEach(function(formData) {
      formData.style.display = "none";
    });

    document.querySelector("span.close").style.display = "none";

    let text = document.querySelector("p.text-label");
     text.style.textAlign = "center";
     text.style.marginBottom = "5vw";
     text.innerText = "Merci ! Votre réservation a été reçue."

      btnSubmit = addEventListener ("click", (e) => {
        document.forms["form"].submit();
      });
  } else {
    for(let i = 0; i<divFormData.length; i++)
      
      if (i < 6) {
        let messageErrors = messagesErrors;
          divFormData[i].setAttribute("data-error-visible",  !inputs[i].validity.valid);
          divFormData[i].setAttribute("data-error", messageErrors[i]);
      
      if (!validateLocation()) {
        document.querySelector("#formLocation").setAttribute("data-error-visible", true);
        document.querySelector("#formLocation").setAttribute("data-error", messageErrors[i])
      };
    };
  };
}, false);

let inputs = document.querySelectorAll("input");
