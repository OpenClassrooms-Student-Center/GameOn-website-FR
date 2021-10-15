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
const form = document.getElementById("form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close-btn");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const checkBox = document.getElementById("checkbox1");
const birth = document.getElementById("birthdate");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const nameError = document.getElementById("name_error")
const lastNameError = document.getElementById("lastName_error")
const quantityError = document.getElementById("quantity_error")
const emailError = document.getElementById("email_error")
const dateError = document.getElementById("date_error")
const radioboxError = document.getElementById("radiobox_error")
const termError = document.getElementById("term_error")
const confirmation = document.getElementById("confirmation");

var numberOfValidFields = 0;
// definir l'action 'click' pour l'ouverture et la fermeture de la modale. 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// definir l'action 'submit'
form.addEventListener("submit", (e) => validateForm(e));


/**
 * ouverture de la modale
 */
function launchModal() {
  modalbg.style.display = "block";
}


/**
 * fermeture de la modale
 */
function closeModal() {
  //fermeture de la modale
  modalbg.style.display = "none";
  //masquer le message de confirmation
  confirmation.style.display = 'none'
  //reafficher le formulaire
  form.style.display = 'block'
}

/**
 * validation d'une adresse mail via une expression regex
 * @param {Stirng} email email à verifier
 * @returns si l'email est valide ou pas
 */
function validEmail(email) {
  var reg = /\S+@\S+\.\S+/;
  var result = reg.test(email);
  return result;
}

/**
 * Test et affiche un message d'erreur si le test est invalide
 * @param {Boolean} condition la condition à tester
 * @param {HTMLElement} errorElement l'élément sur lequel afficher l'erreur
 * @param {String} message Le message à afficher
 * @param {HTMLElement} fieldElement L'élément sur lequel rajouter une bordure rouge
 * @param {Boolean} isEmail Est-ce que c'est un email
 */
function showErrorMessage(condition, errorElement, message, fieldElement, isEmail) {

  //verifier la condition de la validation du champs
  if (condition == true) {
    //afficher le message d'erreur
    errorElement.textContent = message;

    //ajouter une classe CSS pour rendre les bordures rouge
    if (fieldElement) fieldElement.className += " error_field ";

    //retourne 0 parce que la valeur saisie par l'utilisateur n'est pas correcte
    return 0;

  } else {

    //s'il s'agit d'un champs pour saisir l'adresse mail, alors on verifie le format
    if (isEmail && !validEmail(email.value)) {
      //afficher le message d'erreur
      errorElement.textContent = "Veuillez saisir une adresse email valide !";
      //retourne 0 parce que la valeur saisie par l'utilisateur n'est pas correcte
      return 0;
    } else {

      //suppresion de la message d'erreur
      errorElement.textContent = ""
      //reinitialisation de la classe CSS du champs (suppression des bordures rouges)
      if (fieldElement) fieldElement.className = "text-control";

      //retourne 1 car la valeur saisie est correcte.
      return 1;
    }
  }
}


/**
 * Verification des valeurs saisies par l'utilisateur
 * @param {*} e 
 */
function validateForm(e) {

  //Permet d'empêcher le rechargement de la page
  e.preventDefault();

  numberOfValidFields = 0;

  //verification du champ 'prenom'
  numberOfValidFields += showErrorMessage(firstName.value.length < 2, nameError, "Veuillez entrer 2 caractères ou plus", firstName)
  //verification du champ 'nom'
  numberOfValidFields += showErrorMessage(lastName.value.length < 2, lastNameError, "Veuillez entrer 2 caractères ou plus", lastName)
  //verification du champ 'email'
  numberOfValidFields += showErrorMessage(email.value == "", emailError, "Veuillez saisir votre adresse email", email, true)
  //verification du champ 'nombre de paticipations'
  numberOfValidFields += showErrorMessage(quantity.value == "", quantityError, "Veuillez saisir une valeur", quantity)

  //verification du champ 'date de naissance'
  numberOfValidFields += showErrorMessage(birth.value == "", dateError, "Vous devez entrer votre date de naissance", birth)

  let resultRadio = !loc1.checked && !loc2.checked && !loc3.checked
    && !loc4.checked && !loc5.checked && !loc6.checked
  //verification du champ 'Quelles villes ?'
  numberOfValidFields += showErrorMessage(resultRadio, radioboxError, "Vous devez choisir une option", null)
  //verification du champ 'conditions d'utilisation'
  numberOfValidFields += showErrorMessage(!checkBox.checked, termError, "Vous devez vérifier que vous acceptez les termes", null)

  //si tous les champs sont valides, alors on affiche le message de confirmation.
  if (numberOfValidFields === 7) {
    confirmation.style.display = 'block'
    form.style.display = 'none'
  }
}
