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


//////////////////Fermeture du formulaire///////////
const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

//Vérifier que le champ Prénom a un minimum de 2 caractères n'est pas vide.

//Fonction qui vérifie le prénom et le nom non vide et au moins 2 caractère

function checkIdentity(identity) {
  if (identity.value.trim() === "") {
    throw new Error(`Vous devez mettre un ${identity.name}`)
  }
  if (identity.value.trim().length < 2) {
    throw new Error(`Vous devez mettre un ${identity.name} d'au moins 2 caractères`)
  }
}
//Fonction qui vérifie le mail avec une regex

function checkEmail(email) {
  const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$");
  if (email.value.trim() === "") {
    throw new Error(`Vous devez mettre un ${email.name}`);
  }
  if (!regex.test(email.value.trim())) {
    throw new Error(`L'adresse e-mail est invalide`);
  }
}

//Fonction qui vérifie la date de naissance (année comprise entre 1900 et 2023)

function checkBirthdate(birthdate) {
  const currentYear = new Date().getFullYear();
  const regex = new RegExp("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19[0-9]{2}|20[0-" + (currentYear - 2000) + "]{2})$");

  if (birthdate.value.trim() === "") {
    throw new Error(`Vous devez entrer une date de naissance`);
  }
  if (!regex.test(birthdate.value.trim())) {
    throw new Error(`La date de naissance est invalide`);
  }
}


//Fonction qui vérifie le nombre de tournoi

function checkTournament(numberTournament) {
  if (numberTournament.value.trim() === "") {
    throw new Error(`Vous devez mettre un nombre de tournois`);
  }

  const intValue = parseInt(numberTournament.value.trim(), 10);

  if (intValue.toString() !== numberTournament.value.trim()) {
    throw new Error(`Veuillez entrer uniquement un nombre entier`);
  }

  if (intValue < 0 || intValue > 99) {
    throw new Error(`Vous devez mettre un nombre de tournois entre 0 et 99`);
  }
}
//Fonction qui vérifie si un tournoi est checké

//Fonction qui vérifie le check des conditions d'utilisation

//Une fois les fonctions mise en place, mettre en place le try/catch


const form = document.getElementById("main-form");
console.log(form);

form.addEventListener("submit", (event) => {

  try {
    event.preventDefault()
    const first = document.getElementById("first");
    checkIdentity(first);

    const last = document.getElementById("last");
    checkIdentity(last);

    const email = document.getElementById("email");
    checkEmail(email);

    const birthdate = document.getElementById("birthdate");
    checkBirthdate(birthdate);

    const tournament = document.getElementById("quantity");
    checkTournament(tournament);

  } catch (error) {
    console.log(error.message);
  }
}
)




