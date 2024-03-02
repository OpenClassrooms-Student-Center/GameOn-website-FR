function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// REGEX
const regexName = new RegExp("^[a-z]+$");
const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const first = document.getElementById('first');
const last = document.getElementById('last');
const mail = document.getElementById('email');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[name="location"]');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalClose.addEventListener("click", () => {
  modalbg.style.display = "none";
});

const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    // On fait la vérification des champs
    const firstValue = first.value;
    const lastValue = last.value;
    const mailValue = mail.value;
    const quantityValue = quantity.value;

    if (firstIsValid(firstValue) && lastIsValid(lastValue) && mailIsValid(mailValue) && quantityIsValid(quantityValue)) {
      console.log("Merci pour votre inscription !");
    } else {
      console.log("Le formulaire est invalide");
      return;
    }  
    
});

//fonction pour valider le prénom
const firstIsValid = (firstValue) => {
  if (firstValue === "") {
    console.log('Le prénom est obligatoire');
    return false;
  } else {
    const result = regexName.test(firstValue);
     if (result) {
      return true;
     }
     else {
      console.log('Le prénom doit contenir que des lettres');
      return false;
     }
  }
}
 
//fonction pour valider le nom
const lastIsValid = (lastValue) => {
  if (lastValue === "") {
    console.log('Le nom est obligatoire');
    return false;
  } else {
    const result = regexName.test(lastValue);
     if (result) {
      return true;
     }
     else {
      console.log('Le nom doit contenir que des lettres');
      return false;
     }
  }
}
// fonction de validation de mail
 const mailIsValid = (mailValue) => {
  const result = regexEmail.test(mailValue);
  if (result) {
    return true ;
  }
  else{
    console.log('Veuillez entrer une adresse mail valide');
    return false;
  }
 }
 // vérification nombre de concours
 const quantityIsValid = (quantityValue) => {
  if (quantityValue === "") {
    console.log('Veuillez choisir un nombre de concours entre 0 et 99');
    return false;
  }
   else {
    return true;
   }
 }
 // vérification du button radio
const radioBtnIsSelected = () => {
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            return true;
            break;
        }
    }
    console.log('Veuillez séléctionner un tournoi');
    return false;
}
