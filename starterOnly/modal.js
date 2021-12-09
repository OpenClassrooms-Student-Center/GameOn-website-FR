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


function validate() {
  if (first.checkValidity() &&
      last.checkValidity() && 
      email.checkValidity() && 
      birthdate.checkValidity() &&
      quantity.checkValidity() &&
      (location1.checked || 
       location2.checked ||
       location3.checked ||
       location4.checked ||
       location5.checked ||
       location6.checked) &&
      checkbox1.checked) 
        return true;

  else
      return false; 
  
}

