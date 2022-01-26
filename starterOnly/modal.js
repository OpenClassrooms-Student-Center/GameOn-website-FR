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

document.getElementById("reverve").addEventListener("submit", validate);

function validate(){
const name = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const bithdate = document.getElementById("bithdate");
const quantity = document.getElementById("quantity");

if (last.value == "") {
  console.log('erreur');
  erreur = "Veuillez renseigner le champ"
  console.log(erreur);
}
if (erreur) {

  document.getElementById("erreur").innerHTML = erreur;
  return false
}

alert('Formulaire envoyé !');
};