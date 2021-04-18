function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // toute la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton pour ouvrir la modale
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); // bouton X pour fermer la modale
const contentBg = document.querySelector(".content");
const main = document.querySelector("main");
const body = document.querySelector("body");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// -------------------------------------- //
// Fermer la modal #1
closeBtn.addEventListener('click', function(event) {
    // event.preventDefault(); // pas besoin de mettre apparemment...
    modalbg.style.display = "none"; // change le style en display: none;
});

// -------------------------------------- //
//