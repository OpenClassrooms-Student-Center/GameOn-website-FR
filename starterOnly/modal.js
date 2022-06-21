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
const modalBtnClose = document.querySelectorAll(".close"); // Ajout d'un sélecteur sur tous les élements de la classe "close"

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ajout évenement sur la classe close
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal))

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}

