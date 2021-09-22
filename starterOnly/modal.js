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

// Close Modal function
// when we click the x, the modal display property is changed to none.
function closeModal() {
  modalbg.style.display = "none";
}


// Validate function
// when all fields in the form are valid the validate function returns true.
// otherwise the form cannot be submitted (and the values entered stay)
function validate() {

  // on récupère la longueur du prénom
  const formFirst = document.querySelector("#first").value;
  
  // on récupère la longueur du nom
  const formLast = document.querySelector("#last").value;
  
  // on récupère la valeur de l'input email
  const formEmail = document.querySelector("#email").value;
  
  // on récupère le nombre de concours
  const formQuantity = document.querySelector("#quantity").value;
  
  // un bouton radio est-il sélectionné?
  // cf plus bas: fonction radioChecked 

  // on récupère la valeur associée au check des conditions générales
  const formGeneral = document.querySelector("#checkbox1").checked;

  // on va à présent tester pour chacune des valeurs si elle correspond à ce qui est attendu.
  // Si oui, tout se déroule "en silence", si non on récupère un message d'erreur dans la console.
  if (formFirst.length < 2) {
    console.log("Prénom trop court Coucou");
  }
  if (formLast.length < 2) {
    console.log("Nom trop court");
  }
  if (!validateEmail(formEmail)) {
    console.log("Email paaaas ok");
  }
  if (!Number(formQuantity)) {
    console.log("Paaaas numérique le nombre de concours");
  }
  if (!radioChecked()) {
    console.log("Paaaas de ville sélectionnée!!");
  }
  if (!formGeneral) {
    console.log("CG paaaaas acceptées");
  }

  // On vérifie que l'ensemble des conditions est respecté. Si l'un des champs n'est pas valide on empêche la validation du formulaire.
  if (formFirst.length < 2 || formLast.length < 2 || !validateEmail(formEmail) || !Number(formQuantity) || !radioChecked() || !formGeneral) {
    return false;
  } else {
    return true;
  }
}


// Validate email function
// Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript?page=1&tab=votes#tab-top
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate radio check: l'une des villes est-elle sélectionnée?
function radioChecked() {
  let checkedItems = 0;
  let formLocation = [];
  for (let i=0; i<6; i++) {
    formLocation[i] = document.querySelector("#location"+[i+1]);
    if (formLocation[i].checked) {
      checkedItems = 1;
    }
  }
  return checkedItems;
}