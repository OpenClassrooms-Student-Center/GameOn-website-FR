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
// Ajoute un évenement au Click sur le bouton Close et appel la fonction closeModal

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// création des constantes pour la récupération des éléments
const form = document.getElementById("myForm");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
const checkedCity = document.getElementById("checked");

form.addEventListener("submit", (event) => {
  // stop le comportement par défaut du navigateur
  event.preventDefault();
  // j'appel ma fonction de validation des données
  validateForm();
});


// création d'une REGEX pour la saisie des mails
// Et je transforme le type html en text, précement en email, pour prioriser la regex
const regexMail = /^[A-Za-z0-9.-_]+[@]{1}[A-Za-z0-9.-_]+[.]{1}[a-z0-9]{2,15}$/;

// je créer ma fonction de validation des données
const validate = () => {
  // si la valeur de firstName est vide en surprimant les espaces avec la fonction trim()
  // Je specifie que si le champ est vide, le message apparait
  if (firstName.value.trim() == "") {
    // j'appel la fonction error() sur l'élément firstName pour afficher le message d'erreur
    error(firstName, "Ce champs est requis.");
    // Je specifie que si la valeur du champ a moins de deux caractères et sans espaces, le message erreur apparait
  } else if (firstName.value.trim().length < 2) {
    error(
      firstName,
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  } else {
    // si il n'y a aucune erreur dans la fonction error() j'appel la fonction success()
    success(firstName);
  }
  // Je fais la même chose que pour firstName
  if (lastName.value.trim() == "") {
    error(lastName, "Ce champs est requis.");
  } else if (lastName.value.trim().length < 2) {
    error(
      lastName,
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  } else {
    success(lastName);
  }

  // Si la valeur de email est vide en surprimant les espaces avec la fonction trim
  if (email.value.trim() == "") {
    // j'appel la fonction error() sur l'élément email pour afficher le message d'erreur
    error(email, "Ce champs est requis.");
    // Je teste la REGEX avec la fonction ".test" que les caractères saisis soient correct (true) ou non (false)
  } else if (regexMail.test(email.value) == false) {
    // si les conditions sont fausses, j'appel la fonction error() sur l'élement email pour afficher le message d'erreur
    error(email, "Email incorrect.");
  } else {
    // si il n'y a aucun erreur sur le champ email j'appel la fonction success() sur l'élément email
    success(email);
  }
  // Idem que pour firstName
  if (birthdate.value.trim() == "") {
    error(birthdate, "Veuillez saisir votre date de naissance.");
  } else {
    success(birthdate);
  }
  // Idem que pour firstName
  if (quantity.value.trim() == "") {
    error(quantity, "Veuillez saisir votre nombre de participations.");
    // Je specifie que le champ doit contenir un chiffre qui doit être à minima : 0
  } else if (quantity.value.trim() < 0) {
    error(quantity, "Veuillez saisir votre nombre de participations.");
  } else {
    success(quantity);
  }

  // j'appel ma fonction radioChecked
  radioChecked();
  // j'appel ma fonction conditionChecked
  conditionChecked();
};

// je créer une fonction anonyme pour boucler les éléments de type radio
const radioChecked = () => {
  // je récupère mes éléments en ciblant les input de type radio, le querySelectorAll génère un tableau des éléments
  const location = document.querySelectorAll("input[name=location]");
  // je définit une variable sur False
  let checked = false;
  // je créer une boucle pour passer sur chacun des éléments
  for (let i = 0; i < location.length; i++) {
    // je vérifie si un élément du tableau location est checké
    if (location[i].checked) {
      // je rédifinit ma variable checked à True
      checked = true;
      // et j'arrête la boucle
      break;
    }
  }
  // Si ma variable Checked est True.
  if (checked) {
    // j'appel ma fonction de succès sur l'élément checkedCity
    success(checkedCity);
  } else {
    // j'appel ma fonction de error sur l'élément checkedCity avec le message d'erreur
    error(checkedCity, "Veuillez séléctionner une ville.");
  }
};

// je creer une fonction anonyme conditionChecked
const conditionChecked = () => {
  // je récupère mon élément styleCondition
  const conditionsG = document.getElementById("styleCondition");
  // si la condition est checké : success
  if (checkbox.checked) {
    success(conditionsG);
    // sinon : error
  } else {
    error(
      conditionsG,
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
  }
};


// je créer la function error qui prend deux paramètres: l'élement et le message
function error(element, message) {
  // je viens récupérer l'élément du parent "formData"
  const formData = element.parentElement;
  // je créer une constante pour cibler l'endroit ou sera afficher le message
  const displayError = formData.querySelector(".errorMessage");
  // j'affiche le message d'erreur dynamiquement avec innerHTML
  displayError.innerHTML = message;
  // j'ajoute la class "error" au parent "formData"
  formData.classList.add("error");
  // je supprime la class "success" au parent "formData" si elle existe
  formData.classList.remove("success");
}

// ici la fonction success est presque identique, je ne récupère pas le message
// je créer la function success qui prend le paramètre: élement
function success(element) {
  const formData = element.parentElement;
  const displayError = formData.querySelector(".errorMessage");
  // je déclare que le innerHTML est une chaine de caractères vide pour supprimer un message d'erreur s'il existe
  displayError.innerHTML = "";
  // j'ajoute la class "success" au parent
  formData.classList.add("success");
  // je supprime la class "error" au parent si elle existe
  formData.classList.remove("error");
}


// je creer une fonction anonyme validateForm
const validateForm = () => {
  // j'attribut false et 0 pour les variables valide et data
  var valide = false;
  var data = 0;
  // je récupère tous les éléments qui ont la class "formData"
  const formData = document.querySelectorAll(".formData");
  // je créer une boucle pour passer sur chacun des éléments
  for (let i = 0; i < formData.length; i++) {
    // si la class .success est présente, data est incrémenté de 1
    if (formData[i].classList.contains("success")) {
      data += 1;
    }
    // si data est égale à la longueur de formData
    if (formData.length == data) {
      // je passe la variable valide à True
      valide = true;
      // et j'appel ma nouvelle modal : modalSuccess()
      modalSuccess();
    }
    // sinon je renvois vers la fonction validate
    else {
      validate();
    }
  }
};
