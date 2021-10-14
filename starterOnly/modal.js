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
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(birthdate.value);
  console.log(quantity.value);
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
  if (!firstName.value) {
    alert("Veuillez renseigner un Prenom.");
    return false;
  } else if (firstName.value.length <= 1){
    alert("Veuillez renseigner un Prenom correct.");
    return false;
  }

  if (!lastName.value) {
    alert("Veuillez renseigner un Nom.");
    return false;
  } else if (lastName.value.length <= 1){
    alert("Veuillez renseigner un nom correct.");
    return false;
  }

  if (!email.value) {
    alert("Veuillez renseigner un E-mail.");
    return false;
  }

  if (!birthdate.value) {
    alert("Veuillez renseigner une date de naissance.");
    return false;
  }

  if (!quantity.value) {
    alert("Veuillez renseigner a combien de tournois GameOn avez-vous déjà participé ?.");
    return false;
  }
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


