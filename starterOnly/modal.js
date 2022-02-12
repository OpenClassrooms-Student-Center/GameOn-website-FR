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
const modalBtn2 = document.querySelectorAll(".modal-btn2");
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
const btnSubmit = document.querySelector("input[type=submit]")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //les fonctions => n'ont pas de noms
modalBtn2.forEach((btn) => btn.addEventListener("click", closeModal)); //les fonctions => n'ont pas de noms

// launch modal form
function launchModal() {
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

// Evénement pour le Prénom OK !
let eventErrorFirst = true;
first.addEventListener("input", function (e) {
  if (regexName.test(first.value) == true) {
    removeError(e.target.parentNode);
    eventErrorFirst = false;
  }
  else {
    displayError(e.target.parentNode, "le prénom doit comporter minimum 2 caractères");
  }
});

// Evénement pour le Nom OK !
let eventErrorLast = true;
last.addEventListener("input", function (e) {
  if (regexName.test(last.value) == true) {
    removeError(e.target.parentNode);
    eventErrorLast = false;
  }
  else {
    displayError(e.target.parentNode, "le nom doit comporter minimum 2 caractères");
  }
});


// Evénement pour l'email OK !
let eventErrorEmail = true;
email.addEventListener("input", function (e) {
  if (regexMail.test(email.value)) {
    removeError(e.target.parentNode);
    eventErrorEmail = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une adresse mail valide");
  }
});

//Evénement pour la date de naissance OK !
const today = new Date().toISOString().split("T")[0];
timestamp = Date.parse(today);
birthdate.max = today;
let eventErrorBirthdate = true;
birthdate.addEventListener("input", function (e) {
  let birthdateTime = Date.parse(birthdate.value);
  if (birthdateTime < timestamp) {
    removeError(e.target.parentNode);
    eventErrorBirthdate = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une date de naissance valide");
  }
});

//Evénement pour le Nombre de tournois Ok !
let eventErrorQuantity = true;
quantity.addEventListener("input", function (e) {
  let quantityValid = parseInt(quantity.value);
  if (quantityValid >= 0 && quantityValid <= 99) {
    removeError(e.target.parentNode);
    eventErrorQuantity = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner le nombre de tournois que vous avez réalisé");
  }
});


// Evénement pour la localisation OK !
let eventErrorLocation = true;
for (let i = 0; i < locations.length; i++) {
  locations[i].addEventListener("change", function (e) {
    let error = true;
    for (let u = 0; u < locations.length; u++) {
      if (locations[u].checked) {
        error = false;
        valeur = locations[u].value;
        removeError(e.target.parentNode);
        eventErrorLocation = false;
        break
      }
    }
    if (error) {
      displayError(e.target.parentNode, "Veillez renseigner une ville");
    }

  });
}

// Evénement pour la conditions générales OK !
let eventErrorCheckbox1 = true;
checkbox1.addEventListener("input", function (e) {
  if (checkbox1) {
    removeError(e.target.parentNode);
    eventErrorCheckbox1 = false;
  }
  else {
    displayError(e.target.parentNode, "cette case est obligatoire");
  }
});

//validation du formulaire: faire un tableau pour recuperer toutes les infos de eventError dans les inputs !

/*let inputs = [eventErrorFirst, eventErrorLast, eventErrorEmail, eventErrorBirthdate, eventErrorQuantity, eventErrorLocation, eventErrorCheckbox1]
function validate() {
  for (let i in inputs) {
    if (!inputs[i].every()) {
      alert("Votre inscription est bien pris en compte"); // ajouter du texte avec javascript, lui dire qu'il est un enfant de ... , et penser a la lui mettre une class que j'aurais definie en CSS
    }
    return false;
    /*if (inputs[i].some()) {
      alert("FAUX !");
    }
  }
}*/

function validate() {

  if (!eventErrorFirst) {
    btnSubmit.addEventListener("click", launchModal); {
      while (myForm.firstChild) {
        myForm.removeChild(myForm.firstChild);
      }
      const p = document.createElement("p");
      myForm.appendChild(p);
      p.innerHTML = "Merci pour votre Inscription";
      p.classList.add("formEnd");

      const button = document.createElement("button");
      myForm.appendChild(button);
      button.innerHTML = "Fermer";
      button.classList.add("btn-close");
      button.classList.add("modal-btn2");
      modalBtn2.addEventListener("click", closeModal);
      function closeModal() {
        modalbg.style.display = "none";
      }
    }
  }
  //alert("Votre inscription est bien pris en compte"); // ajouter du texte avec javascript, lui dire qu'il est un enfant de ... , et penser a la lui mettre une class que j'aurais definie en CSS

  else {
    alert("FAUX !");
  }
  return false;
}
