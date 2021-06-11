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
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// test preventdefault
document.getElementById("formGlobal").addEventListener("submit", function (e) {
  let erreur;

  //first name validation
  const first = document.getElementById("first");
  if (!first.value) {
    erreur = "prénom manquant";
    document.getElementById("firstSpan").innerHTML = erreur;
  } else if (first.value.length < 2) {
    erreur = "veuillez rentrer un prénom de 2 caractères minimum";
    document.getElementById("firstSpan").innerHTML = erreur;
  } else {
    document.getElementById("firstSpan").innerHTML = "";
  }

  //last name validation
  const last = document.getElementById("last");
  if (!last.value) {
    erreur = "nom manquant";
    document.getElementById("lastSpan").innerHTML = erreur;
  } else if (last.value.length < 2) {
    erreur = "veuillez entrer un nom de 2 carctères minimum";
    document.getElementById("lastSpan").innerHTML = erreur;
  } else {
    document.getElementById("lastSpan").innerHTML = "";
  }

  //email validation
  const email = document.getElementById("email");
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    document.getElementById("mailSpan").innerHTML = "";
  } else {
    erreur = "veuillez renseigner un email valide";
    document.getElementById("mailSpan").innerHTML = erreur;
  }

  //birth date validation
  const today = new Date().toISOString().split("T")[0];
  let birthDate = document.getElementById("birthdate");
  console.log(birthDate.value)
  
  if(birthDate.value > today) {
    erreur =
      "veuillez sélectionner une date de naissance antérieure au " + today;
    document.getElementById("birthSpan").innerHTML = erreur;
  } else {
    document.getElementById("birthSpan").innerHTML = "";
  }

  // quantity of tournament validation
  const quantity = document.getElementById('quantity');
  if(/[0-9]/.test(quantity.value)){
    document.getElementById("quantitySpan").innerHTML = "";
  }
  else{
    erreur = "entrer un nombre entre 0 et 99";
    document.getElementById("quantitySpan").innerHTML = erreur;

  }
  if (erreur) {
    e.preventDefault();
  }
});
