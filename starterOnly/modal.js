function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements. Ici on récupère les informations du DOM sous forme de classe et on en fait des constantes. 

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelectorAll(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
submitBtn.forEach((btn) => btn.addEventListener("click", launchSubmit));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  alert ("Hello World");
}

// JS MODIFIE


function launchSubmit(e) {
  e.preventDefault();
  const firstNameData = document.querySelector(".firstname").value;
  isMyFirstNameTrue(firstNameData);
  const lastNameData = document.querySelector(".lastname").value;
  isMyLastNameTrue(lastNameData);
  const dayData = document.querySelector(".dateofbirth").value;
  isFirstValueTrue(dayData);
  const numberData = document.querySelector(".t-number").value;
  isNumberTrue(numberData);
  const checkData1 = document.querySelectorAll(".checkbox-input").value;
  isRadioChecked();
  const checkData2 = document.querySelectorAll(".checkbox-input").value;
  isCuChecked()
}


// Modal Conditions



function isMyFirstNameTrue(myFirstName) {
if ((myFirstName.length >= 2) && (typeof myFirstName === "string")){
  alert ("Votre prénom est valide");
} else {
  alert ("Votre prénom n'est pas valide");
}

/* Fonction de vérification du prénom, modifier typeof, 
on peut toujours mettre un nombre et je ne sais pas pourquoi */
}

function isMyLastNameTrue(myLastName) {
  if ((myLastName.length >= 2) && (typeof myLastName === "string")){
    alert ("Votre nom est valide");
  } else {
    alert ("Votre nom n'est pas valide");
  }

}

function isFirstValueTrue(myDay) {
  if (((myDay > 0) && (myDay < 31))) {
    alert ("Votre jour de naissance est valide");
  } else {
    alert ("Votre jour de naissance n'est pas valide");
  }

}

function isNumberTrue(myNumber) {
  if (((myNumber > -1) && (myNumber < 99))) {
    alert ("Votre nombre est correct");
  } else {
    alert ("Veuillez saisir un nombre correct");
  }

}

function isRadioChecked() {
  if ((location1.checked) || (location2.checked) || (location3.checked) || (location4.checked) || (location5.checked) || (location6.checked)) {
    alert ("Vous avez coché une ville");
  } else {
    alert ("Vous n'avez pas coché de ville");
  }

}

function isCuChecked() {
  if (checkbox1.checked) {
    alert ("Vous avez lu et accepté les conditions d'utilisation");
  } else {
    alert ("Vous n'avez pas lu et accepté les conditions d'utilisation");
  }

}