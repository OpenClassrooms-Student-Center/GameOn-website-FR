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


//TODO #1 Fermer la modale
const modalCloseBtn = document.querySelectorAll(".close");

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

//TODO #2 Implémenter entrées du formulaire


// je crée une fonction pour toutes les entrées du formulaire
function checkFirstName() {
  const firstName = document.getElementById("first").value;

  if (firstName.length < 2 || !firstName) {
// j'indique d'enlever la classe hidden pour montrer qu'il y a eu une erreur
    document.getElementById("errorFirstName").classList.remove("hidden")
    return false;
  }
// j'indique de remettre la classe hidden pour montrer à l'utilisateur qu'il a saisie correctement son prénom
  document.getElementById("errorFirstName").classList.add("hidden")
  return true;
}

function checkLastName() {
  const lastName = document.getElementById("last").value;

  if (lastName.length < 2 || !lastName) {
    document.getElementById("errorLastName").classList.remove("hidden")
    return false;
  }
  document.getElementById("errorLastName").classList.add("hidden")
  return true;
}


function checkEmail() {
  const email = document.getElementById("email").value;

  if (/^([a-z]\.?)+@([a-z]+\.)+[a-z]+$/.test(email) == false) {
    document.getElementById("errorEmail").classList.remove("hidden")
    return false;
  }
  document.getElementById("errorEmail").classList.add("hidden")
  return true;
}

function checkBirthdate() {
  const birthdate = document.getElementById("birthdate").value;

  if (!birthdate) {
    document.getElementById("errorBirthdate").classList.remove("hidden")
    return false;
  }
  document.getElementById("errorBirthdate").classList.add("hidden")
  return true;
}

function checkQuantity() {
  var x = document.getElementById("quantity").value;

  if ((!x || x < 0 || x > 99)) {
    document.getElementById("errorQuantity").classList.remove("hidden")
    return false;
  }
  document.getElementById("errorQuantity").classList.add("hidden")
  return true;
}

function checkLocation() {
  var getSelectedValue = document.querySelector('input[name="location"]:checked');

  if (getSelectedValue === null) {
    document.getElementById("errorLocations").classList.remove("hidden")
    return false;
  }
  document.getElementById("errorLocations").classList.add("hidden")
  return true;
}
 
function checkPolicy() {
  
  if (document.getElementById("checkbox1").checked) {
    document.getElementById("errorPolicy").classList.add("hidden")
    return true;
  }
  document.getElementById("errorPolicy").classList.remove("hidden")
  return false;
}

const modalBody = document.querySelector(".modal-body");


// je crée une fonction pour valider chaque entrée une fois que l'utilisateur clique sur le bouton "C'est parti"
function validate() {

  if (checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkLocation() && checkPolicy()) {
    console.log("Ok")
// si toutes les entrées sont bien saisies, j'indique à l'utilisateur que sa réservation est bien enregistrée
    modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
    modalBody.style.height = "600px";
    modalBody.style.paddingTop = "250px";
    modalBody.style.paddingLeft = "100px";
    modalBody.style.paddingRight = "100px";
    return true;
  }
// j'indique à l'utilisateur qu'il n'a pas bien saisi ses informations en laissant la modale ouverte
  else {
    console.log("Error")
    modalbg.style.display = "block"
    return false;
  }
}

document.getElementById("submitBtn").addEventListener("click", validate)
