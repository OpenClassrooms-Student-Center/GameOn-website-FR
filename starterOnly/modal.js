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
const today = new Date().toISOString().split("T")[0];
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1"); // Peux être qu'un tableau la aussi serai une bonne idée si je décide de rajouter "checkbox 2"
const checkbox2 = document.getElementById("checkbox2"); // Peux être qu'un tableau la aussi serai une bonne idée si je décide de rajouter "checkbox 2"


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

//Fonction génèral pour l'ajout d'attribue
function displayError(input, errorMessage) {
  input.setAttribute("data-error-visible", true);
  input.setAttribute("data-error", errorMessage);

}
function removeError(input) {
  input.setAttribute("data-error-visible", false);
}

/*//fonction pour récuperer la valeur de quantity
function numberOfTournaments() {
  let valueNumber = (document.getElementById("quantity").value);
  let numberOfTournamentsValid = valueNumber.length >= 0 || valueNumber.length <= 99;
}*/

let regexName = /^([a-zA-Z]{2,30}\s*)+/;
let regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let regexNombre = /^(0|[1-9]\d*)$/;
let regexBirthdate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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

//Evenement pour le Nombre de tournois
eventError = true;
let quantityValid = quantity.length > 0;
quantity.addEventListener("input", function (e) {
  if (quantityValid(quantity.value)) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner le nombre de tournois que vous avez réalisé");
  }
});

//Evenement pour la date d'anniversaire a terminer !!
eventError = true;
birthdate.max = today;
birthdate.addEventListener("input", function (e) {
  if (regexBirthdate.test(birthdate)) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une date de naissance valide");
  }
});

// location OK !
eventError = true;
for (let i = 0; i < locations.length; i++) {
  locations[i].addEventListener("change", function (e) {
    let error = true;
    for (let u = 0; u < locations.length; u++) {
      if (locations[u].checked) {
        error = false;
        valeur = locations[u].value;
        console.log(valeur);
        removeError(e.target.parentNode);
        eventError = false;
        break
      }
    }
    if (error) {
      displayError(e.target.parentNode, "Veillez renseigner une ville");
    }

  });

  // la case des conditions générales est cochée, l'autre case est facultative  OK ! (Appelle l'event 6 fois ????)
  eventError = true;
  checkbox1.addEventListener("input", function (e) {
    if (checkbox1) {
      removeError(e.target.parentNode);
      eventError = false;
      console.log(eventError);
    }
    else {
      displayError(e.target.parentNode, "cette case est obligatoire");
    }
  });
}

// Bonne pratique ???
eventError = true;
checkbox2.addEventListener("input", function (e) {
  if (checkbox2.value = false) {
    removeError(e.target.parentNode);
    eventError = false;
  }
  else {
    removeError(e.target.parentNode);
    eventError = false;
    console.log("lol");
  }
});
//validation du formulaire OK !

function validate() {
  if (eventError == true) {
    alert("Veillez renseigner tous les champs du formulaire");
    return false;
  }
  else {
    alert("Votre inscription est bien pris en compte")
    return true;
  }
}

/*form.addEventListener("submit", function (e) {
  e.preventDefault();

if (!first.value) {
  erreur = "Veuillez rentrer un prénom de plus de 2 caractères";
}

if (!last.value) {
  erreur = "Veuillez rentrer un nom de plus de 2 caractères";
}

if (!email.value) {
  erreur = "Veuillez rentrer une adresse valide";
}

if (!birthdate.value) {
  erreur = "Veuillez rentrer votre date de naissance";
}

if (!quantity.value) {
  erreur = "Veuillez sélectionner une ville ";
}

if (!location.value) {
  erreur = "Veuillez sélectionner une ville "; //pas a jour, comment faire pour récupérer le tableau ?
}

if (!checkbox1.value) {
  erreur = "Veuillez acceptez les termes des conditions";
}

if (erreur) {
  e.preventDefault();
  //aller chercher la const formData pour lui indiqué erreur et lui changé sa (classe/input ???)
  return false;
}

else {
  alert('Merci, votre inscription est bien prise en compte !');
}


// trouver un moyen de conserver les données du formulaire !
*/