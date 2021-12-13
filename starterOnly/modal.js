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

// *** Issue 1
// Select the element with the calsse .close - Sélectonne l'élément qui à la calsse .close  
const modalClose = document.querySelector(".close"); 

// close modal event
// Listen to the mouse click on the .close element. On click call the 'closeModal' method - Ecoute le click de la sourie sur l'élément .close. Au click appel la fonction (méthode) 'closeModal'
modalClose.addEventListener("click", closeModal); 

// close modal form
// Apply the "none" style on modalbd, which has the .bground class - Applique le syle "none" sur modalbd, qui corespont à l'élement qui à la classe .bground 
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
const button = document.querySelector("#btn-submit");
const form = document.getElementById('form');

// function valdate

function validate() {
  if (first.checkValidity() &&   // PM - checkValidity = Méthodes de l'API de validation des contraintes
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

function alert() {
  first.addEventListener('change', function(event) {
    if(event.target.validity.valid){
      document.getElementById("formFirst").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formFirst").setAttribute('data-error-visible', true);
      document.getElementById("formFirst").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );

  last.addEventListener('change', function(event) {
    if(event.target.validity.valid){
      document.getElementById("formLast").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formLast").setAttribute('data-error-visible', true);
      document.getElementById("formLast").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );

  email.addEventListener('change', function(event) {
    if(event.target.validity.valid){
      document.getElementById("formEmail").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formEmail").setAttribute('data-error-visible', true);
      document.getElementById("formEmail").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );

  birthdate.addEventListener('change', function(event) {
    if(event.target.validity.valid){
      document.getElementById("formBirth").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formBirth").setAttribute('data-error-visible', true);
      document.getElementById("formBirth").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );
  
  quantity.addEventListener('change', function(event) {
    if(event.target.validity.valid){
      document.getElementById("formQuantity").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formQuantity").setAttribute('data-error-visible', true);
      document.getElementById("formQuantity").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );

  checkbox1.addEventListener('change', function(event) {
    if(event.target.checked){
      document.getElementById("formCheckbox1").setAttribute('data-error-visible', false);
    } else
      document.getElementById("formCheckbox1").setAttribute('data-error-visible', true);
      document.getElementById("formCheckbox1").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
    }
  );

  if (validateLocation()) {
    document.getElementById("formLocation").setAttribute('data-error-visible', false);
  } else {
    document.getElementById("formLocation").setAttribute('data-error-visible', true);
    document.getElementById("formLocation").setAttribute('data-error', "Veuillez sélectionner une ville.");
  };
}

form.addEventListener('bubmit' , alert());



first.addEventListener('invalid', () => {
  document.getElementById("formFirst").setAttribute('data-error-visible', true);
  document.getElementById("formFirst").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le prénom.");
});

last.addEventListener('invalid', () => {
  document.getElementById("formLast").setAttribute('data-error-visible', true);
  document.getElementById("formLast").setAttribute('data-error',"Veuillez entrer 2 caractères ou plus pour le nom.");
});


email.addEventListener('invalid', () => {
  document.getElementById("formEmail").setAttribute('data-error-visible', true);
  document.getElementById("formEmail").setAttribute('data-error',"Veuillez entrer une adresse email valide.");
});

birthdate.addEventListener('invalid', () => {
  document.getElementById("formBirth").setAttribute('data-error-visible', true);
  document.getElementById("formBirth").setAttribute('data-error',"Vous devez avoir 1 an minimum pour participer.");
});

quantity.addEventListener('invalid', () => {
  document.getElementById("formQuantity").setAttribute('data-error-visible', true);
  document.getElementById("formQuantity").setAttribute('data-error', "Veuillez entrer une valeur comprise entre 0 et 99.");
});


if (validateLocation() == false) {
  document.getElementById("formLocation").setAttribute('data-error-visible', true);
  document.getElementById("formLocation").setAttribute('data-error', "Veuillez sélectionner une ville.");
};

if (checkbox1.checked == false) {
  document.getElementById("formCheckbox1").setAttribute('data-error-visible', true);
  document.getElementById("formCheckbox1").setAttribute('data-error', "Veuillez accepter les conditions d'utilisation.");
};
