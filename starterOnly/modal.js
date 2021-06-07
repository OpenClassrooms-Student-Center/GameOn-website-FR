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
const modalClose = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("inscription");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/* close modal event */
modalClose.forEach((close) => close.addEventListener("click", closeModal));

/* submit form event */
form.addEventListener("submit", formValidity);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
/* close modal form */
function closeModal() {
  modalbg.style.display = "none";
}
/* verify form validity */
function formValidity(e) {
  let prénom = form.elements["first"];
  let nom = form.elements["last"];
  let email = form.elements["email"];
  let eventsQuantity = form.elements["quantity"];
  let emailregex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  let nameregex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

  if (nameregex.exec(prénom.value) == null) {
    document.getElementById("nom").innerHTML = "Entrez un nom valide!"; 
    e.preventDefault();
  }
  if (nameregex.exec(nom.value) == null) {
    document.getElementById("prénom").innerHTML = "Entrez un prénom valide!";
    e.preventDefault();
  }
  if(emailregex.exec(email.value) == null) {
    document.getElementById("mail").innerHTML = "Entrez un email valide!";
    e.preventDefault();
  }
  if (isCheckboxSelected() == false){
    document.getElementById("cities").innerHTML = "selectionnez au moins une ville!";
    e.preventDefault();
  }
  if (eventsQuantity.value == ""){
    document.getElementById("tournaments").innerHTML = "veuillez insérer un chiffre!";
    e.preventDefault();
  }
}

/* verify checkbox checked */

function isCheckboxSelected(){
  let MaxChoice = 6
  for (i=1; i<MaxChoice+1; i++){
    if(document.getElementById('location'+i).checked) {
      return true;
    }
  }
return false
}

