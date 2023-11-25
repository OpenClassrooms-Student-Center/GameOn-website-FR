function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Elements du DOM
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelectorAll(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const condition = document.getElementById("checkbox1");
const form = document.getElementById("reserve");
const submit = document.getElementById("submit");


/* FONCTIONS */

// Ouvre le formulaire.
function launchModal() {
  modalbg.style.display = "block";
}

// Ferme le formulaire
function closeModal() {
  modalbg.style.display = "none";
}


// Créer un message d'erreur, prend en paramètre l'élément sur lequel le message doit être affiché, puis le message qui doit être affiché.
function errorMessage(element, message) {

  // Créer un nouveau element <p>.
  const newP = document.createElement("p");

  // Ajoute la classe error à l'élément crée.
  newP.classList.add("error");

  // Ajoute le message à l'élément crée.
  newP.textContent = message;

  // Change la couleur d'arrière-plan de l'élément qui reçois l'erreur.
  element.style.background = "indianred";

  // Ajoute l'élément <p> précédemment créé à l'élément qui doit afficher l'erreur.
  element.parentNode.insertBefore(newP, element);

}



// Vérifie si le formulaire est correct à la soumission du formulaire.
function validate() {

  // Regex pour le champ nom et prénom.
  const name_regex = /^[A-zÀ-ú]+$/;

  // Regex pour le champ email.
  const mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Regex pour la date de naissance
  const date_regex = /^\d{4}-\d{2}-\d{2}$/;

  // Variable pour les champs localisations
  let checked = false;


  // Supprime tous les messages d'erreur déjà present.
  document.querySelectorAll(".error").forEach(e => e.remove());


  // Vérifie le champ prénom, si le champ ne passe pas le teste de regex ou s'il y a moin de 2 caractères,
  // alors on affiche un message d'erreur, et on empêche la soumission du formulaire.
  if (!name_regex.test(firstName.value) || firstName.value.length < 2) {

    // Appel de la fonction errorMessage, avec en paramètre l'élément du champ prénom et le message a affiché.
    errorMessage(firstName, "Ce champ doit contenir au minimum 2 caractères !");

    // on empêche la soumission du formulaire
    return false;

    // Sinon...
  } else {

    // On change l'arrière-plan du champ correcte.
    firstName.style.background = "green";

  }


  // Pareil que pour le champ prénom, on vérifie le champ nom avec les mêmes conditions.
  if (!name_regex.test(lastName.value) || lastName.value.length < 2) {

    errorMessage(lastName, "Ce champ doit contenir au minimum 2 caractères !");
    return false;

  } else {

    lastName.style.background = "green";

  }


  // Vérifie le champ email, avec un test pour le regex.
  if (!mail_regex.test(email.value)) {

    errorMessage(email, "Ce champ doit contenir une adresse email valide !");
    return false;

  } else {

    email.style.background = "green";

  }


  // Vérifie la date de naissance, avec un test pour le regex.
  if (!date_regex.test(birthdate.value)) {

    errorMessage(birthdate, "Entrez vôtre date de naissance !");
    return false;

  } else {

    birthdate.style.background = "green";

  }


  // Vérifie que le nombre de tournois et bien une valeur numérique entière.
  // Number.isInteger() permet de déterminer si l'argument est un nombre entier.
  // parseFloat() permet de transformer une chaîne de caractères en un nombre flottant.
  if (!Number.isInteger(parseFloat(quantity.value)) || quantity.value < 0) {

    errorMessage(quantity, "Ce champ doit être une valeur numérique entier !");
    return false;

  } else {

    quantity.style.background = "green";

  }


  // Vérifie si une localisation est cochée.
  // On boucle sur tous les boutons radio pour les localisations
  for (let i = 0; i < locations.length; i++) {

    // Si une des localisations est cochée
    if (locations[i].checked) {

      // la variable checked devient true
      checked = true;
      break
    }

  }

  // Si la variable checked est false, alors aucune localisation n'est cochée
  if (!checked) {

    errorMessage(document.getElementById("location1"), "Une localisation doit être sélectionner !");
    return false;

  }


  // Vérifie si les conditions d'utilisation sont cochée.
  if (!condition.checked) {

    errorMessage(condition, "Vous devez accepté les conditions d'utilisation !")
    return false;

  }

  /* Si tout est OK */

  if (submit.value === "Fermer") {

    return true;

  } else {

    // On décale les champs du formulaire à gauche pour les cacher.
    formData.forEach(e => e.style.transform = "translateX(-9999px)");


    const elemValidation = document.createElement("p");
    elemValidation.classList.add("valide");
    elemValidation.textContent = "Merci pour votre inscription";
    form.appendChild(elemValidation);

    // On change la valeur du bouton du formulaire pour afficher "Fermer".
    submit.value = "Fermer";

    return false;

  }

}


/* Event */

// Évènement pour ouvrir le formulaire.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Évènement pour fermer le formulaire.
closeBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));