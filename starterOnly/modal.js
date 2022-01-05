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
const modalClose = document.querySelector(".close") //Création et chargement de la constante 'modalClose' et accès à la class .close du DOM  
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
//Stockage des valeurs de champs dans des variables//
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const emailAdress = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityTournois = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");
//Controle du format du mail//
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermeture du questionnaire
modalClose.addEventListener('click', close); //Ecoute event clic de souris sur la constante modalClose qui cible la class .close, nommé 'close'

//Appel de la fonction 'close' pour cacher le formulaire
function close () {
  modalbg.style.display = "none"; 
  document.querySelectorAll(".formData").reset();
}

/* ou
modalClose.addEventListener('click', function () {
  modalbg.style.display = "none";
}); //Ecoute event clic de souris sur l'element close, nommé 'close' et on cache le formulaire
*/

//La fonction est exécutée lors de la soumission du formulaire//
function validate (event) {
//Désactivé le comportement par défaut de l'évenement//
  event.preventDefault();
}

function verifFirstLength() {
  if (document.getElementById("first").value.length < 2) {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return false;
  }
  else {
    return true;
  }
}

/*
if (first != '' && last != '' && email != '' && contact != '') {
  if (email.match(emailReg)) {
    if (document.getElementById("male").checked || document.getElementById("female").checked) {
      if (contact.length == 10) {
        alert("All type of validation has done on OnSubmit event.");
        return true;
      } else {
        alert("The Contact No. must be at least 10 digit long!");
        return false;
      }
    } else {
      alert("You must select gender.....!");
      return false;
    }
  } else {
    alert("Invalid Email Address...!!!");
    return false;
  }
} else {
  alert("All fields are required.....!");
  return false;
}
*/