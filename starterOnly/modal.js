// VARIABLES
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const acceptedConditions = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");


// ouverture de la modale au clic sur le bouton
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// function pour ouvrir la modale avec ajout d'une class "opened-modal"
function launchModal() {
  modalForm.classList.add("opened-modal")
}

//fermeture de la modale au clic sur la croix

closeButton.addEventListener("click", closeModal)

// function pour fermer la modale
function closeModal() {
  modalForm.classList.remove("opened-modal")
}

// si les conditions ne sont pas acceptées, le formulaire passe en disabled

acceptedConditions.addEventListener("click", disableSubmit)

function disableSubmit(event) {
  console.log(event);

  const conditionsAreAccepted = event.target.checked;   //On récupère dans l'événément l'attribut checked dans target. Aperçu dans la console
  if(conditionsAreAccepted === false) {                 //Si les conditions ne sont pas acceptées, alors on active l'attribut disabled sur le submitButton
  submitButton.setAttribute("disabled", "true");
   } else {
  submitButton.removeAttribute("disabled");       //Si les conditions sont acceptées, alors on retire l'attribut disabled sur le submitButton
 }
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}