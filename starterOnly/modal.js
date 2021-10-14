function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*--------- DOM ELEMENTS ---------*/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
// form element
const form = document.getElementById ('reserve');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');

/*--------- EVENTS ---------*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// form submit
reserve.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit');
})

// close modal event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

/*--------- FUNCTIONS ---------*/

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Form validation
function validate(event) {

  if (!quantity.value) {
    erreur = "Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé ?.";
  }
  if (!birthdate.value) {
    erreur = "Veuillez renseigner une date de naissance.";
  }
  if (!email.value) {
    erreur = "Veuillez renseigner un E-mail.";
  }
  if (!lastName.value) {
    erreur = "Veuillez renseigner un Nom.";
  }
  if (!firstName.value) {
    alert("erreur");
    return false;
  }
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


