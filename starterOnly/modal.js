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
const submitBtn = document.getElementById("submitBtn");
const textLabel = document.getElementById("textLabel");


// fonction de validation du formulaire
form.addEventListener("submit", function (e) {

  // stopper le comportement du formulaire, empeche le submit de champs vides/erronés
  e.preventDefault();

  // appelle de la fonction validate
  validInputs();
});


// fonction gestion des erreurs des données
const validate = () => {

  const errorFirstname = document.getElementById("errorFirstname");
  const errorLastname = document.getElementById("errorLastname");
  const errorEmail = document.getElementById("errorEmail");
  const errorBirthdate = document.getElementById("errorBirthdate");
  const errorQuantity = document.getElementById("errorQuantity");

  const successFirstname = document.querySelector(".firstname");
  const successLastname = document.querySelector(".lastname");
  const successEmail = document.querySelector(".email");
  const successBirthdate = document.querySelector(".birthdate");
  const successQuantity = document.querySelector(".quantity");
  let validRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;


  // conditions d'erreurs si le champs prénom est vide
  if (firstname.value.trim() === '') {
    errorFirstname.textContent = "Veuillez entrez un prénom";
    successFirstname.classList.add("errorInput");
    successFirstname.classList.remove("successInput");
  }
  // condition d'erreur si les champs prénomest inférieur à 2 caractères
  else if (firstname.value.trim().length < 2) {
    errorFirstname.textContent = "Ce champs doit contenir au moins 2 caractères";
    successFirstname.classList.add("errorInput");
    successFirstname.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorFirstname.textContent = '';
    successFirstname.classList.remove("errorInput");
    successFirstname.classList.add("successInput");
  }

  // conditions d'erreurs si le champs nom est vide
  if (lastname.value.trim() === '') {
    errorLastname.textContent = "Veuillez entrez un nom";
    successLastname.classList.add("errorInput");
    successLastname.classList.remove("successInput");
  }
  // condition d'erreur si les champs nom est inférieur à 2 caractères
  else if (lastname.value.trim().length < 2) {
    errorLastname.textContent = "Ce champs doit contenir au moins 2 caractères";
    successLastname.classList.add("errorInput");
    successLastname.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorLastname.textContent = '';
    successLastname.classList.remove("errorInput");
    successLastname.classList.add("successInput");
  }

  // conditions d'erreurs si le champs email est vide
  if (email.value.trim() === '') {
    errorEmail.textContent = "Veuillez entrez une adresse email";
    successEmail.classList.add("errorInput");
    successEmail.classList.remove("successInput");
  }
  // condition d'erreur si le format email ne correspond pas
  else if (!validRegex.test(email.value)) {
    errorEmail.textContent = "Le format est invalide";
    successEmail.classList.add("errorInput");
    successEmail.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorEmail.textContent = '';
    successEmail.classList.remove("errorInput");
    successEmail.classList.add("successInput");
  }

  // condition d'erreur du champs date de naissance
  if (birthdate.value === '') {
    errorBirthdate.textContent = "Veuillez indiquer votre date de naissance";
    successBirthdate.classList.add("errorInput");
    successBirthdate.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorBirthdate.textContent = '';
    successBirthdate.classList.remove("errorInput");
    successBirthdate.classList.add("successInput");
  }

  // condition d'erreur si le champs est vide
  if (quantity.value.trim() === '') {
    errorQuantity.textContent = "Veuillez indiquer une valeur";
    successQuantity.classList.add("errorInput");
    successQuantity.classList.remove("successInput");
  }
  // condition d'erreur si le chiffre est négatif
  else if (quantity.value.trim() < 0) {
    errorQuantity.textContent = "Vous ne pouvez pas entrer une valeur négative";
    successQuantity.classList.add("errorInput");
    successQuantity.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorQuantity.textContent = '';
    successQuantity.classList.remove("errorInput");
    successQuantity.classList.add("successInput");
  }

  // appelle de la fonction qui gère les erreurs de selection de la ville
  radioChecked();

  // appelle de la fonction qui gère les erreurs si les CGU ne sont pas cochées
  conditionOfUseChecked();
  // console.log(formData.length);

}

// création de la fonction callback pour le choix de la ville
const radioChecked = () => {
  // constante qui selectionne tous les éléments input dans un tableau par leur attribut name => location
  const location = document.querySelectorAll("input[name=location]");
  const city = document.querySelector(".city");
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
    city.classList.add("errorInput");
    city.classList.remove("successInput");
  }
  // sinon on n'affiche pas d'erreur
  else {
    errorLocation.textContent = "";
    city.classList.remove("errorInput");
    city.classList.add("successInput");
  }
}

// création de la fonction callback pour les conditions d'utilisation
const conditionOfUseChecked = () => {
  const errorConditionOfUse = document.getElementById("errorConditionOfUse");
  // on récupère notre champs conditions d'utilisateion
  const userConditions = document.querySelector(".userConditions");

  // on vérifie que l'élément checkbox1 soit coché grâce à la propriété checked
  if (conditionOfUse.checked) {
    // si c'est le cas, pas de message d'erreur
    errorConditionOfUse.textContent = "";
    userConditions.classList.remove("errorInput");
    userConditions.classList.add("successInput");
  }
  // sinon on affiche l'erreur
  else {
    errorConditionOfUse.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    userConditions.classList.add("errorInput");
    userConditions.classList.remove("successInput");
  }
}

// Création d'une fonction permettant de vérifier la validité des inputs
const validInputs = () => {
  // configuration d'un bouléen sur false tant que les données saisies ne sont pas valides
  var validInput = false;
  // création d'une variable pour la boucle for afin de vérifier les champs
  var counterInput = 0;
  // vérification des occurences du formulaire
  const verif = document.querySelectorAll(".formData");

  // création de la boucle pour passer sur chaques éléments du formulaire
  for (let i = 0; i < verif.length; i++) {
    // on vérifie que tous les champs ont la classe success
    if (verif[i].classList.contains("successInput")) {
      // si le champs est valide, alors on passe au suivant
      counterInput += 1;

      // si checkInputs a parcouru la totalité des champs
      if (counterInput == verif.length) {
        // alors on confirme la validité du formulaire
        validInput = true;
        modalSuccess();
        // sinon on renvoie vers la vérification des données
      } else {
        validate();
      }
    }
  }
}

// une fois les inputs validés, on valide le formulaire
const modalSuccess = () => {
  // récupération des occurences
  const formDataValid = document.querySelectorAll(".successInput");

  // création d'une boucle qui passe sur les occurences afin de leur attribuer une classe pour les masquer
  for (let i = 0; i < formDataValid.length; i++) {
    formDataValid[i].classList.add("hidden");
  }
  // ajout d'un texte pour la confirmation d'inscription
  textLabel.classList.add("textValid");
  textLabel.innerHTML = "Merci pour votre inscription !";
  // je change la valeur du bouton submit
  submitBtn.value = "Fermer";

  // si la valeur du bouton submit est "fermer"
  if (submitBtn.value == "Fermer") {
    // on ajoute un écouteur d'évènement au clic
    submitBtn.addEventListener("click", function () {
      // Appel de la fonction de fermeture de la modal
      closeModal();
      // rechargement de la page
      window.location.reload();
    })
  }
}

