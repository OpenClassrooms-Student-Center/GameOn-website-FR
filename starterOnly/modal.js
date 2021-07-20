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
const buttonX = document.querySelectorAll(".close"); // Création de la constante sur le bouton (X)
const formData = document.querySelectorAll(".formData"); // cette constante permet de cibler les différents éléments du formulaire




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}


// bouton(X) event : écoute de l'événement "click" sur le bouton(X) qui lance la fonction "closeModal"
buttonX.forEach((close) => close.addEventListener("click", closeModal)); 

// close modal form : cette fonction permet de fermer la modale lorsqu'on clique sur le bouton (X)
function closeModal() {
  modalbg.style.display = "none";
}


// submit event : écoute de l'évenement "submit" du formulaire qui lance la fonction "validate"
document.getElementById("formulaire").addEventListener("submit", validate);

// validate form : cette fonction configure la validation du formulaire
function validate(e) {
  e.preventDefault(); //évite que la page se recharge et de perdre les données déjà saisies 
  if(first.value == "") {
    formData[0].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    formData [0].dataset.errorVisible = "true";
    return false;
  } /* Si l'input du prénom est vide à la soumission du formulaire, l'encadré rouge ainsi que le message d'erreur associé apparaissent
  et le formulaire n'est pas envoyé */ 
  if(last.value == "") {
    formData [1].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formData [1].dataset.errorVisible = "true";
    return false;
  } /* Si l'input du nom est vide à la soumission du formulaire, l'encadré rouge ainsi que le message d'erreur associé apparaissent
  et le formulaire n'est pas envoyé */ 
  if (email.value == "") {
    formData [2].dataset.error = "Veuillez saisir une adresse email valide.";
    formData [2].dataset.errorVisible = "true";
    return false;
  }  /* Si l'input de l'email est vide à la soumission du formulaire, l'encadré rouge ainsi que le message d'erreur associé apparaissent
  et le formulaire n'est pas envoyé */ 
  if (birthdate.value == "") {
    formData [3].dataset.error = "Veuillez entrer votre date de naissance.";
    formData [3].dataset.errorVisible = "true";
    return false;
  }  /* Si l'input de la date de naissance n'est pas complété à la soumission du formulaire, l'encadré rouge ainsi que le message 
  d'erreur associé apparaissent et le formulaire n'est pas envoyé */ 
  if (quantity.value == "") {
    formData [4].dataset.error = "Veuillez saisir un nombre compris entre 1 et 99.";
    formData [4].dataset.errorVisible = "true";
    return false;
  } /* Si l'input du nombre de tournois est vide à la soumission du formulaire, l'encadré rouge ainsi que le message d'erreur associé 
  apparaissent et le formulaire n'est pas envoyé */ 
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    formData [5].dataset.error = "Veuillez sélectionner 1 ville.";
    formData [5].dataset.errorVisible = "true";
    return false;
  } /* Si aucune ville n'est selectionnée à la soumission du formulaire, le message d'erreur associé apparait et le formulaire n'est 
  pas envoyé */ 
  if ( !checkbox1.checked) {
    formData [6].dataset.error = "Veuillez accepter les conditions d'utilisation.";
    formData [6].dataset.errorVisible = "true";
    return false; /* Si les conditions d'utilisation ne sont pas acceptées à la soumission du formulaire, le message d'erreur associé 
    apparait et le formulaire n'est pas envoyé */ 
  }else {
      document.getElementById("modal").innerHTML = "Félicitation, votre inscription a bien été prise en compte!";
      /* Lorsque le formulaire est valide un message de confirmation apparait */
      document.getElementById("modal").style.height = "758px";
      document.getElementById("modal").style.textAlign = "center";
      document.getElementById("modal").style.paddingTop = "60%";
      /* J'ai modifié le style de la modale, après validation du formulaire, afin de garder une cohérance avec la maquette*/
      return true; // le formulaire est envoyé
    }
} 

//modal input event : écoute de l'événement "input" qui lance la fonction "error"
formData.forEach((formData) => formData.addEventListener("input", error));

/*modal input error visible or not : cette fonction définit que l'encadré rouge est visible quand l'entrée de l'input ciblé est invalide 
ou que l'input ciblé est vide*/
function error(e) {
  let validity = e.target.validity;
  if (!validity.valid || e.target.value === "" ) {
   this.dataset.errorVisible = "true";
  }else{
    this.dataset.errorVisible = "false";
  }
}


//modal change event : écoute de l'événement "change" qui lance la fonction "DataError"
formData.forEach((formData) => formData.addEventListener("change", DataError));

//modal error messages : cette fonction configure les messages d'erreur lorque les entrées de l'utilisateur ne sont pas valides 
//après qu'il ai fini de taper, concerne uniquement les input éditables
function DataError(e) {
  let validity = e.target.validity;
  
  if (validity.valid ) {
    this.dataset.error = "";
  }else {
    formData [0].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    formData [1].dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    formData [2].dataset.error = "Veuillez saisir une adresse email valide.";
    formData [4].dataset.error = "Veuillez saisir un nombre compris entre 1 et 99.";
  }
   
}







