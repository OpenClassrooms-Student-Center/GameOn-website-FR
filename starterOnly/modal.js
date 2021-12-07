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
const modalClose = document.querySelector(".close");      /* Issue 1 - Select the element that has the calsse .close - Sélectonne l'élément qui à la calsse .close */ 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal); /* Issue 1 - Listen to the mouse click on the .close element. On click call the 'closeModal' method - Ecoute le click de la sourie sur l'élément .close. Au click appel la fonction (méthode) 'closeModal'   */

// close modal form
function closeModal() {                            
  modalbg.style.display = "none";   /* Issue 1 - Apply the "none" style on modalbd, which has the .bground class - Applique le syle "none" sur modalbd, qui corespont à l'élement qui à la classe .bground */
}
