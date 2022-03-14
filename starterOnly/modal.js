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
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton j'imscrit
const formData = document.querySelectorAll(".formData");
const formBtn = document.querySelector(".inscription");
const thankBtn = document.querySelectorAll(".thank-btn"); //bouton du modal merci "fermer"
const thankBg = document.querySelector(".bground-thank"); //modal merci

// launch modal event, je m'inscrit
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form (transform en block )
function launchModal() {
  modalbg.style.display = "block";
  thankBg.style.display = "none";
}

//fermer la croix de la fenetre du formulaire
document
  .getElementById("closeform")
  .addEventListener("click", function (closeModal) {
    modalbg.style.display = "none";
  });

// submit "c'est parti"
document
  .querySelector(".inscription")
  .addEventListener("click", function (closeModal) {
    //modalbg.style.display = "none";
    //thankBg.style.display = "block";
  });

// fermer thanks via "fermer"
document
  .querySelector(".button-thank")
  .addEventListener("click", function (closeThank) {
    thankBg.style.display = "none";
    modalbg.style.display = "none";
  });

// fermer thanks via croix
document
  .getElementById("closethanks")
  .addEventListener("click", function (closeThank) {
    thankBg.style.display = "none";
    modalbg.style.display = "none";
  });

// validation de la form
function validateForm() {
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let emailValid = document.getElementById("email");
  let birthValid = document.getElementById("birthdate");
  let quantityCity = document.getElementById("quantity");
  let checkBox = document.getElementById("checkbox1");
}
