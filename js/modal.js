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
const confirmationCloseBtn = document.querySelectorAll(".btn-close");
const regexName = /[a-zA-Z]+/g;
const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du modal
bouton.addEventListener("click", () => (modalbg.style.display = "none"));

//Empêcher la page de se recharger
formData.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);
//Fonction de contrôle du prenom
first.addEventListener("blur", (e) => {
  checkPrenom();
});
function checkPrenom() {
  const firstValue = first.value.trim();
  console.log(firstValue);
  if (regexName.exec(first.value) === null || first.length < 2) {
    first.nextElementSibling.classList.remove("invisible");
    first.style.border = "2px solid red";
    console.log("Erreur! Veuillez entrer un prénom valide");
  } else {
    first.style.border = "2px solid green";
    first.nextElementSibling.innerHTML = "";
    console.log("Bravo vous avez un prénom valide");
  }
}

//Fonction de contrôle du nom
last.addEventListener("blur", (e) => {
  checkNom();
});
function checkNom() {
  const lastValue = last.value.trim();
  console.log(lastValue);
  if (regexName.exec(last.value) === null || last.length < 2) {
    last.nextElementSibling.classList.remove("invisible");
    last.style.border = "2px solid red";
    console.log("Erreur! Veuillez entrer un nom valide");
  } else {
    last.style.border = "2px solid green";
    last.nextElementSibling.innerHTML = "";
    console.log("Bravo vous avez un nom valide");
  }
}

//validation du formulaire de l'email
email.addEventListener("blur", (e) => {
  checkEmail();
});

function checkEmail() {
  const emailValue = email.value.trim();
  console.log(emailValue);
  if (regexEmail.exec(email.value) === null) {
    last.nextElementSibling.classList.remove("invisible");
    email.style.border = "2px solid red";
    console.log("Erreur! Veuillez entrer une adresse email valide");
    return false;
  } else {
    email.style.border = "2px solid green";
    console.log("Bravo vous avez un email valide");
    return true;
  }
}

//Fonction de contrôle de la date de naissance
birthdate.addEventListener("blur", (e) => {
  checkBirthdate();
});
function checkBirthdate() {
  const birthdateValue = birthdate.value.trim();
  console.log(birthdateValue);
  if (birthdate.value == "") {
    birthdate.style.border = "2px solid red";
    birthdate.nextElementSibling.classList.remove("invisible");
    console.log("Erreur! Veuillez entrer une date de naissance valide");
  } else {
    birthdate.style.border = "2px solid green";
    birthdate.nextElementSibling.innerHTML = "";
    console.log("Bravo vous avez une date de naissance valide");
  }
}

//Fonction de validation du nombre de tournois
quantity.addEventListener("blur", (e) => {
  checkQuantity();
});
function checkQuantity() {
  const quantityValue = quantity.value;
  console.log(quantityValue);
  if (quantity.value == "") {
    quantity.style.border = "2px solid red";
    quantity.nextElementSibling.classList.remove("invisible");
    console.log("Erreur! Veuillez entrer un nombre de tournois valide");
  } else {
    quantity.style.border = "2px solid green";
    quantity.nextElementSibling.innerHTML = "";
    console.log("Bravo vous avez un nombre de tournois valide");
  }
}

// //Fonction de validation du formulaire
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (
//     checkPrenom() &&
//     checkNom() &&
//     checkEmail() &&
//     checkBirthdate() &&
//     checkQuantity() &&
//     checkLocation() &&
//     checkCheckbox()
//   ) {
//     modalbg.style.display = "none";
//     console.log("Bravo vous avez rempli le formulaire");
//   } else {
//     console.log("Erreur! Veuillez remplir le formulaire correctement");
//   }
// });

//Fonctions de contrôle avant validation du formulaire
function validForm() {
  checkPrenom();
  checkNom();
  checkEmail();
  checkBirthdate();
}
