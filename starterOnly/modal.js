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
const modalcontent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //On réinitialise les propriétés qui ont été ajoutée dans closeModal()
  modalbg.style.animationName = "none";
  modalcontent.style.animationName = "modalopen";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  const closeAnimation = "modalclose 0.8s";

  modalcontent.style.animation = closeAnimation;
  modalbg.style.animation = closeAnimation;
  
  //L'élément modalbg disparaît seulement à la fin de l'animation
  modalbg.addEventListener("animationend", function() {
    if (modalbg.style.animationName === "modalclose") {
      modalbg.style.display = "none";
    }
  });
}


