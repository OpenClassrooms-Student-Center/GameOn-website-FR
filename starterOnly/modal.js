function editNav() {
  var burgerMenu = document.getElementById("myTopnav");
  if (burgerMenu.className === "topnav") {
    burgerMenu.className += " responsive";
  } else {
    burgerMenu.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const validation = document.querySelector(".validation");
const validationContainer = document.querySelector(".validation-container");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const textControl = document.querySelectorAll(".text-control");
const checkBoxCdg = document.getElementById("checkbox1");
const checkboxVide = document.getElementById("checkbox-vide");
const errorWhiteSpace = document.getElementById("errorWhiteSpace");
const locations = document.querySelectorAll(".location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal () {
  modalbg.style.display = "none";
}
close.addEventListener("click", closeModal);

// Tableau messages d'erreurs formulaires
let errorsLists = [
  "<br>Veuillez renseigner tous les champs.",
  "Le prénom ne doit comporter que des lettres, ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "Le nom ne doit comporter que des lettres, ou des tirets.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "L'adresse email n'est pas valide.",
  "Veuillez-sélectionner une date de naissance valide.",
  "<br> Vous devez choisir une option.",
  "<br>Vous devez vérifier que vous acceptez les termes et conditions.",
];

// Vérification du formulaire
document.getElementById("registration-form").addEventListener("submit", (e) => {

  // Initialisation d'une variable pour la soumission du formulaire
  let error;

  // Regex pour vérification saisie dans les inputs
  let regexName = /^[a-zA-Z-\s]+$/;
  let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  let regexBirthdate =
    /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;

  // On appel tous les formulaires avec une zone de texte
  for (let i = 0; i < textControl.length; i++) {
    // On vérifie que les formulaires ne soit pas vide
    if (textControl[i].value == "") {
      error = true;
      errorWhiteSpace.innerHTML = errorsLists[0];
      errorWhiteSpace.style.fontSize = "16px";
    } else {
      errorWhiteSpace.innerHTML = "";
    }

    // On vérifie les caractéres utilisés et le nombre de caractéres dans le prénom
    if (regexName.test(first.value) == false && first.value != "") {
      const errorFirstName = document.getElementById("errorFirstName");
      error = true;
      errorFirstName.textContent = errorsLists[1];
    } else if (first.value.length <= 1) {
      error = true;
      errorFirstName.textContent = errorsLists[2];
    } else {
      errorFirstName.textContent = "";
    }

    // On vérifie les caractéres utilisés et le nombre de caractéres dans le prénom
    if (regexName.test(last.value) == false && last.value != "") {
      const errorLastName = document.getElementById("errorLastName");
      error = true;
      errorLastName.textContent = errorsLists[3];
      errorLastName.classList.add("error-alert-message");
    } else if (last.value.length <= 1) {
      error = true;
      errorLastName.textContent = errorsLists[4];
    } else {
      errorLastName.textContent = "";
    }

    // On vérifie que le mail saisie soit correct
    if (regexMail.test(email.value) == false && email.value == "") {
      const errorMail = document.getElementById("errorMail");
      error = true;
      errorMail.textContent = errorsLists[5];
    } else {
      errorMail.textContent = "";
    }

    // On vérifie qu'on ai une date valide
    if (regexBirthdate.test(birthdate.value) == false) {
      const errorBirthdate = document.getElementById("errorBirthdate");
      error = true;
      errorBirthdate.textContent = errorsLists[6];
    } else {
      errorBirthdate.textContent = "";
    }
  }

  // On vérifie que l'une des checkbox de localisation soit coché
  let valid = false;
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      valid = true;
      break;
    }
  }

  // On vérifie que la localisation soit sélectionné
  if (valid) {
    const errorLocation = document.getElementById("errorLocation");
    errorLocation.innerHTML = "";
  } else {
    error = true;
    errorLocation.innerHTML = errorsLists[7];
    errorLocation.classList.add("error-alert-message");
  }

  // On vérifie que les termes et conditions soit cochés
  if (checkBoxCdg.checked == false) {
    error = true;
    checkboxVide.innerHTML = errorsLists[8];
  } else {
    checkboxVide.innerHTML = "";
  }

  // Si une erreur est détecté, on stop le comportement par défaut du submit, et on renvoie une erreur.
  if (error) {
    e.preventDefault();
    return false;
  }else{// si le dossier est validé, on affiche le message de validation du formulaire
    e.preventDefault();
    form.style.display = "none";
    validationContainer.style.display = "block";
    modalBody.classList.add("validation");
    modalbg.style.display = "block";
    
  }
    
  // Envoie du formulaire
  document.querySelector(".btn-close-form").addEventListener("click", () => {
    form.submit();
  });
  
});