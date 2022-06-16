// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClosure = document.querySelector(".closeModal");
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

//Close modal with X button
// >function:
function closeModal() {
  modalBg.style.display = "none";
}
// >call of function:
modalClosure.addEventListener("click", closeModal);

//the form should be valid when submit
function validate() {
  if (checkboxCGU.checked) {
    // les données sont ok, on peut envoyer le formulaire
    alert("ça marche");
    return true;
  } else {
    alert("veuillez cocher les CGU");
    // et on indique de ne pas envoyer le formulaire
    return false;
  }
}

//empêche la fermeture de la modale au clic 'je m'inscris':
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Control of datas:
// FirstName: 2 caracter and not empty
const inputsText = document.querySelectorAll(".text-control");
let firstName, lastName;

const firstNameChecker = (value) => {
  const containerFN = document.querySelector(".formData");
  // est ce que mon containerFN existe que dans la fonction
  //firstNameChecker ou partout
  console.log(containerFN); //pourquoi ça marche alors que je suis dans document
  // et qu'il y a plusieurs .formData
  if (value.length > 0 && value.length < 2) {
    containerFN.classList.add("error");
    firstName = null;
  } else if (value == null || value == "") {
    containerFN.classList.add("error");
    firstName = null;
  } else {
    containerFN.classList.remove("error");
    firstName = value;
  }
};

const lastNameChecker = (value) => {
  const containerLN = document.querySelector("#lastName");
  //est-ce que ça me sélectionne l'input ou toute la div?
  //est-ce génant pour l'application des classes error?
  if (value.length > 0 && value.length < 2) {
    containerLN.classList.add("error");
    lastName = null;
  } else if (value == null || value == "") {
    containerLN.classList.add("error");
    lastName = null;
  } else {
    containerLN.classList.remove("error");
    lastName = value;
  }
};

const emailChecker = (value) => {
  console.log(value);
};
const birthdateChecker = (value) => {
  console.log(value);
};
const quantityChecker = (value) => {
  console.log(value);
};

inputsText.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstNameChecker(e.target.value);
        break;
      case "lastName":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
//Ici on écoute sur l'input dans lequel on travaille,
//je veux créer une fonction qui contrôle/vérifie les datas pour chaque
//input, (fonction écrite juste avant et appeler pour chaque cas)
//

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
