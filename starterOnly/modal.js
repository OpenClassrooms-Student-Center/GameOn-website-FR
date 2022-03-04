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
const modalBody = document.querySelector(".modal-body");
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
const btnSubmit = document.querySelector("input[type=submit]");
const confirm = modalEnd();



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //les fonctions => n'ont pas de noms
modalBtn2.forEach((btn) => btn.addEventListener("click", closeModal)); //les fonctions => n'ont pas de noms

// launch modal form
function launchModal() {
  displayForm();
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

//Fonction qui créer l'élément "p"
function addElementP() {
  const p = document.createElement("p");
  p.innerHTML = "Merci pour votre Inscription";
  p.classList.add("formEnd");
  return p;
}

//Fonction qui créer l'élément "button"
function addElementButton() {
  const button = document.createElement("button");
  button.innerHTML = "Fermer";
  button.classList.add("btn-close");
  button.classList.add("modal-btn2");
  button.addEventListener("click", closeModal);
  return button;
}

//Fonction qui créer la div "modalEnd" qui contient "p" & "button"
function modalEnd() {
  const div = document.createElement("div");
  div.setAttribute("id", "confirmMessage");
  div.style.display = "none"
  let p = addElementP();
  let button = addElementButton();
  div.appendChild(p);
  div.appendChild(button);
  modalBody.appendChild(div);
  return div;
}

//fonction qui change le display
function displayForm() {
  myForm.style.display = "block";
  confirm.style.display = "none";
}

function displayConfirmMessage() {
  myForm.style.display = "none";
  confirm.style.display = "block";
}

//déclarations des variables
let regexName = /^([a-zA-Z]{2,30}\s*)+/;
let regexMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let inputs = []

// Evénement pour le Prénom OK !
inputs[0] = true;
first.addEventListener("input", function (e) {
  if (regexName.test(first.value) == true) {
    removeError(e.target.parentNode);
    inputs[0] = false;
  }
  else {
    displayError(e.target.parentNode, "le prénom doit comporter minimum 2 caractères");
  }
});

// Evénement pour le Nom OK !
inputs[1] = true;
last.addEventListener("input", function (e) {
  if (regexName.test(last.value) == true) {
    removeError(e.target.parentNode);
    inputs[1] = false;
  }
  else {
    displayError(e.target.parentNode, "le nom doit comporter minimum 2 caractères");
  }
});


// Evénement pour l'email OK !
inputs[2] = true;
email.addEventListener("input", function (e) {
  if (regexMail.test(email.value)) {
    removeError(e.target.parentNode);
    inputs[2] = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une adresse mail valide");
  }
});

//Evénement pour la date de naissance OK !
const today = new Date().toISOString().split("T")[0];
timestamp = Date.parse(today);
birthdate.max = today;
inputs[3] = true;
birthdate.addEventListener("input", function (e) {
  let birthdateTime = Date.parse(birthdate.value);
  if (birthdateTime < timestamp) {
    removeError(e.target.parentNode);
    inputs[3] = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner une date de naissance valide");
  }
});

//Evénement pour le Nombre de tournois Ok !
inputs[4] = true;
quantity.addEventListener("input", function (e) {
  let quantityValid = parseInt(quantity.value);
  if (quantityValid >= 0 && quantityValid <= 99) {
    removeError(e.target.parentNode);
    inputs[4] = false;
  }
  else {
    displayError(e.target.parentNode, "Veillez renseigner le nombre de tournois que vous avez réalisé");
  }
});


// Evénement pour la localisation OK !
inputs[5] = true;
for (let i = 0; i < locations.length; i++) {
  locations[i].addEventListener("change", function (e) {
    let error = true;
    for (let u = 0; u < locations.length; u++) {
      if (locations[u].checked) {
        error = false;
        valeur = locations[u].value;
        removeError(e.target.parentNode);
        inputs[5] = false;
        break
      }
    }
    if (error) {
      displayError(e.target.parentNode, "Veillez renseigner une ville");
    }

  });
}

// Evénement pour la conditions générales OK !
inputs[6] = false;
checkbox1.addEventListener("input", function (e) {
  if (checkbox1) {
    removeError(e.target.parentNode);
    inputs[6] = true;
  }
  else {
    displayError(e.target.parentNode, "cette case est obligatoire");
  }
});

//validation du formulaire: faire un tableau pour recuperer toutes les infos de eventError dans les inputs !

function validate() {
  if (inputs.every(elem => elem == false)) {
    myForm.reset();
    displayConfirmMessage();
  }

  if (inputs.some(elem => elem == true)) {
    alert("Veillez renseigner tous les champs du formulaire");
  }
  return false;
}