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

// Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//validation: ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Implémenter entrées du formulaire #2, ajouter validation ou messages d'erreur #3, ajouter confirmation quand envoie réussi #4
// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//form regex
isName = (name) => {
  return new RegExp(/^[A-Za-z]{2,20}$/).test(name);
};
isMail = (mail) => {
  return new RegExp(/^[A-Za-z0-9-éàè.]+@[a-z.]+[a-z.]$/).test(mail);
};
isBirth = (birthdate) => {
  return new RegExp(/^\d{4}\-\d{2}\-\d{2}$/).test(birthdate);
};
isQuantity = (quantity) => {
  return new RegExp("^([1-9][0-9]?){0,1}$").test(quantity);
};

//déclaration variables du DOM
const form = document.getElementById("loginForm");
const formPrenom = form.first;
const formNom = form.last;
const formEmail = form.email;
const formBirth = form.birthdate;
const formQuantity = form.quantity;
const formCGV = form.checkbox1;
const RADIOS = [
  form.location1,
  form.location2,
  form.location3,
  form.location4,
  form.location5,
  form.location6,
];
const formLocation = document.getElementById("location-error");