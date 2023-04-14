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
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}



// récupération des id des inputs
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const conditionOfUse = document.getElementById("checkbox1");
const errorMessage = document.getElementsByClassName("errorMessage");
const submitBtn = document.getElementsByClassName("btn-submit");

// fonction de validation du formulaire
form.addEventListener("submit", function (e) {

  // stopper le comportement du formulaire, empeche le submit de champs vides/erronés
  e.preventDefault();

  // appelle de la fonction validate
  const isFormValid = validate();

  if (isFormValid) {
    closeModal();
  }
});


  // fonction gestion des erreurs des données
  function validate() {

    const errorFirstname = document.getElementById("errorFirstname");
    const errorLastname = document.getElementById("errorLastname");
    const errorEmail = document.getElementById("errorEmail");
    const errorBirthdate = document.getElementById("errorBirthdate");
    const errorQuantity = document.getElementById("errorQuantity");
    let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;



    // conditions d'erreurs si le champs prénom est vide
    if (firstname.value.trim() === '') {
      errorFirstname.textContent = "Veuillez entrez un prénom";
    }
    // condition d'erreur si les champs prénomest inférieur à 2 caractères
    else if (firstname.value.trim().length < 2) {
      errorFirstname.textContent = "Ce champs doit contenir au moins 2 caractères";
    }
    // sinon on n'affiche pas d'erreur
    else {
      errorFirstname.textContent = '';
    }

    // conditions d'erreurs si le champs nom est vide
    if (lastname.value.trim() === '') {
      errorLastname.textContent = "Veuillez entrez un nom";
    }
    // condition d'erreur si les champs nom est inférieur à 2 caractères
    else if (lastname.value.trim().length < 2) {
      errorLastname.textContent = "Ce champs doit contenir au moins 2 caractères";
    }
    // sinon on n'affiche pas d'erreur
    else {
      errorLastname.textContent = '';
    }

    // conditions d'erreurs si le champs email est vide
    if (email.value.trim() === '') {
      errorEmail.textContent = "Veuillez entrez une adresse email";
    }
    // condition d'erreur si le format email ne correspond pas
    else if (!validRegex.test(email.value)) {
      errorEmail.textContent = "Le format est invalide";
    }
    // sinon on n'affiche pas d'erreur
    else {
      errorEmail.textContent = '';
    }

    // condition d'erreur du champs date de naissance
    if (birthdate.value === '') {
      errorBirthdate.textContent = "Veuillez indiquer votre date de naissance";
    }
    // sinon on n'affiche pas d'erreur
    else {
      errorBirthdate.textContent = '';
    }

    // condition d'erreur si le champs est vide
    if (quantity.value.trim() === '') {
      errorQuantity.textContent = "Veuillez indiquer une valeur";
    }
    // condition d'erreur si le chiffre est négatif
    else if (quantity.value.trim() < 0) {
      errorQuantity.textContent = "Vous ne pouvez pas entrer une valeur négative";
    }
    // sinon on n'affiche pas d'erreur
    else {
      errorQuantity.textContent = '';
    }

    // appelle de la fonction qui gère les erreurs de selection de la ville
    radioChecked();

    // appelle de la fonction qui gère les erreurs si les CGU ne sont pas cochées
    conditionOfUseChecked();
  }




// création de la fonction callback pour le choix de la ville
const radioChecked = () => {
  // constante qui selectionne tous les éléments input dans un tableau par leur attribut name => location
  const location = document.querySelectorAll("input[name=location]");
  // on cré un bouléen qu'on définira par défaut sur faux
  let locationChecked = false;
  // je cré une boucle qui va regarder tous les éléments input du tableau location
  // la variable i vérifiera 1 a 1 chaque input du tableau
  for (let i = 0; i < location.length; i++) {
    //si à l'index i un input est coché (vérifié avec la propriété .checked)
    if (location[i].checked) {
      // alors on passe le bouléen sur vrai
      locationChecked = true;
      // et on arrête de boucler
      break;
    }
  }
  // si aucun input n'est coché
  if (locationChecked == false) {
    // on demande alors à l'utilisateur d'en cocher
    errorLocation.textContent = "Veuillez selectionner une ville";
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorLocation.textContent = "";
  }
}

// création de la fonction callback pour les conditions d'utilisation
const conditionOfUseChecked = () => {
  const errorConditionOfuse = document.getElementById("errorConditionOfuse");

  // on vérifie que l'élément checkbox1 soit coché grâce à la propriété checked
  if (conditionOfUse.checked) {
    // si c'est le cas, pas de message d'erreur
    errorConditionOfuse.textContent = "";
  } 
  // sinon on affiche l'erreur
  else {
    errorConditionOfuse.textContent = "Veuillez lire et cocher les conditions d'utilisation";
  }

}