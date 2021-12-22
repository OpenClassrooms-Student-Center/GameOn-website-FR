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
const bouton = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du modal
bouton.addEventListener("click", () => (modalbg.style.display = "none"));

// //Validation du formulaire
// function valider() {
//   // si la valeur du champ prenom est non vide
//   if (document.formData.prenom.value != "") {
//     // alors on envoie le formulaire
//     document.formData.submit();
//   } else {
//     // sinon on affiche un message
//     alert("Saisissez le prénom");
//   }
// }
// console.log(".formData");
