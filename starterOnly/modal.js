// VARIABLES
const modalForm = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeButton = document.querySelector(".close");
const acceptedConditions = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const radioButton = document.querySelector("#location1");
const form = document.querySelector("form");
const modal2 = document.querySelector(".modal2");
const closeButtonModal2 = document.querySelector(".close-modal2");
const closeButtonBottomModal2 = document.querySelector(".button-modal2");

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

  const input = event.target;
  const parentElement = input.parentElement;

  const conditionsAreAccepted = event.target.checked;   //On récupère dans l'événément l'attribut checked dans target. Aperçu dans la console
  if(conditionsAreAccepted === false) {                 //Si les conditions ne sont pas acceptées, alors on active l'attribut disabled sur le submitButton
  submitButton.setAttribute("disabled", "true");

  parentElement.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");  // Message d'erreur apparaît
  parentElement.setAttribute("data-error-visible", "true");

   } else {
  submitButton.removeAttribute("disabled");       //Si les conditions sont acceptées, alors on retire l'attribut disabled sur le submitButton
  
  parentElement.removeAttribute("data-error");
  parentElement.removeAttribute("data-error-visible"); 
  }
 
}



// MESSAGE D'ERREUR DU PRÉNOM

firstName.addEventListener("invalid", errorOnFirstName);

function errorOnFirstName(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value.length >= 2) {
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DU NOM DE FAMILLE

lastName.addEventListener("invalid", errorOnLastName);
function errorOnLastName(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value.length >= 2) {
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DE LA DATE DE NAISSANCE

birthdate.addEventListener("invalid", errorOnBirthdate);

function errorOnBirthdate(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Vous devez entrer votre date de naissance.");
  parentElement.setAttribute("data-error-visible", "true");

  input.addEventListener("input", function () {
    if (input.value != null) {                          
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
}

// MESSAGE D'ERREUR DES BOUTONS RADIO

radioButton.addEventListener("invalid", errorOnLocation);

function errorOnLocation(event) {
  const input = event.target;
  const parentElement = input.parentElement;
  parentElement.setAttribute("data-error", "Vous devez choisir une option.");
  parentElement.setAttribute("data-error-visible", "true");
  
  input.addEventListener("input", function () {
    if (input.value != null) {                          
      parentElement.removeAttribute("data-error");
      parentElement.removeAttribute("data-error-visible");
    }
  });
  
}

function validate () {   //cette fonction était déjà nommée dans le HTML. Ici on vérifie que le formulaire est valide avec checkValidity
    if(form.checkValidity()) {
      closeModal();                   //ici, on peut soit appeler la fonction closeModal(), soit ajouter un display = "none";
      modalForm.style.display = 'none';
      //alert("Merci ! Votre réservation a été reçue.") //
    }

}


function openModal2() {
    modal2.style.display = 'block';
    modal2.classList.add("opened-modal")
};

//fermeture de la modale 2 au clic sur la croix ou sur le bouton fermer

closeButtonModal2.addEventListener("click", closeModal2)
closeButtonBottomModal2.addEventListener("click", closeModal2)


// function pour fermer la modale
function closeModal2() {
  modal2.style.display = "none";
}


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}