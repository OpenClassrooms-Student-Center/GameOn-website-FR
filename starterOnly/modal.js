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
  let birthdate = form.elements["birthdate"]
  let eventsQuantity = form.elements["quantity"];
  let emailRegex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
  let nameRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  let birthDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  let isValid = true;

  if (nameRegex.exec(prénom.value) == null) {
    document.getElementById("prénom").innerHTML = "Entrez un nom valide!"; 
    isValid = false;
  }
  if (nameRegex.exec(nom.value) == null) {
    document.getElementById("nom").innerHTML = "Entrez un prénom valide!";
    isValid = false;
  }
  if (emailRegex.exec(email.value) == null) {
    document.getElementById("mail").innerHTML = "Entrez un email valide!";
    isValid = false;
  }
  if (birthdate.value == ""){
    document.getElementById("birthday").innerHTML = "veuillez insérer une date";
    isValid = false;
  }
  if (isCheckboxSelected() == false){
    document.getElementById("cities").innerHTML = "selectionnez au moins une ville!";
    isValid = false;
  }
  if (isConditionSelected() == false){
    document.getElementById("box").innerHTML = "Veuillez accepter les conditions!";
    isValid = false;
  }
  if (eventsQuantity.value == ""){
    document.getElementById("tournaments").innerHTML = "veuillez insérer un chiffre!";
    isValid = false;
  }
  if (isValid == true){
    alert("Merci ! Votre réservation a été reçue.")
  }
  if (isValid == false) {
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
function isConditionSelected(){
  if (document.getElementById('checkbox1').checked){
    return true;
  }
return false
}

