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
const closeBtn = document.querySelector(".close");
const myForm = document.querySelector("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //les fonctions => n'ont pas de noms

// launch modal form
function launchModal() { //
  modalbg.style.display = "block";
}
// Close modal
closeBtn.addEventListener("click", closeModal)
function closeModal() {
  modalbg.style.display = "none";
}

//Fonction génèral pour l'ajout d'attribue css
function displayError(input, errorMessage) {
  input.setAttribute("data-error-visible", true);
  input.setAttribute("data-error", errorMessage);

}
function removeError(input) {
  input.setAttribute("data-error-visible", false);
}

//déclarations des variables
let regexName = /^([a-zA-Z]{2,30}\s*)+/;
let regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let regexNombre = /^(0|[1-9]\d*)$/;
let eventError = true;

// Evenement pour le Prenom OK !
eventError = true;
first.addEventListener("input", function (e) {
  if (regexName.test(first.value) == true) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "le prénom doit comporter minimum 2 caractères");
  }
});

// Evenement pour le Nom OK !
eventError = true;
last.addEventListener("input", function (e) {
  if (regexName.test(last.value) == true) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "le nom doit comporter minimum 2 caractères");
  }
});


// Evenement pour l'email OK !
eventError = true;
email.addEventListener("input", function (e) {
  if (regexMail.test(email.value)) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une adresse mail valide");
  }
});

//Evenement pour le Nombre de tournois Ok !
eventError = true;
quantity.addEventListener("input", function (e) {
  let quantityValid = parseInt(quantity.value);
  if (quantityValid >= 0 && quantityValid <= 99) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner le nombre de tournois que vous avez réalisé");
  }
});

//Evenement pour la date d'anniversaire OK !
const today = new Date().toISOString().split("T")[0];
timestamp = Date.parse(today);
birthdate.max = today;
eventError = true;
birthdate.addEventListener("input", function (e) {
  let birthdateTime = Date.parse(birthdate.value);
  if (birthdateTime < timestamp) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une date de naissance valide");
  }
});

// location OK !
for (let i = 0; i < locations.length; i++) {
  locations[i].addEventListener("change", function (e) {
    eventError = true;
    let error = true;
    for (let u = 0; u < locations.length; u++) {
      if (locations[u].checked) {
        error = false;
        valeur = locations[u].value;
        removeError(e.target.parentNode);
        eventError = false;
        break
      }
    }
    if (error) {
      displayError(e.target.parentNode, "Veillez renseigner une ville");
    }

  });
}

// la case des conditions générales est cochée, l'autre case est facultative  OK ! (Appelle l'event 6 fois ????)
eventError = true;
checkbox1.addEventListener("input", function (e) {
  if (checkbox1) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "cette case est obligatoire");
  }
});

//validation du formulaire: faire un tableau pour recuperer toutes les infos de eventError dans les inputs !

/*function validate(e) {
  e.preventDefault();
  alert("Votre inscription est bien pris en compte");

  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const locations = document.getElementsByName("location").value;
  const checkbox1 = document.getElementById("checkbox1").value;
  const checkbox2 = document.getElementById("checkbox2").value;
}*/

document.forms["reserve"].addEventListener("submit", function (e) {

  let erreur;

  let inputs = this;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = ("Veillez renseigner tous les champs du formulaire");
    }
  }

  if (erreur) {
    e.preventDefault();
    alert("Veillez renseigner tous les champs du formulaire");
    return false;
  }
  else {
    alert("Votre inscription est bien pris en compte");
  }
})
