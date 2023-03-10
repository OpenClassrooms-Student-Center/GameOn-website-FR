

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
var formData = document.querySelectorAll(".formData");
//je cible le bouton de fermeture de la modale
const modalBtnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Ajout d'un évènement au click sur le bouton close et appel de la fonction closeModal
modalBtnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Définition et récupération de tous les élements dans des variables 
const form = document.getElementById('myForm');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const mail = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const conditionG = document.getElementById('checkbox1');
const checked = document.getElementById('Checked');
const submitBtn = document.getElementById('submitBtn');
const textLabel = document.querySelector('.text-label');

//définition d'une REGEX pour la saisie de l'email 
const mailValid = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

//Ecouteur d'évènement sur la soumission du formulaire
form.addEventListener('submit', function(e) {
  // Je stoppe le comportement par défaut du navigateur 
  e.preventDefault();
  
  //j'appelle une fonction qui va vérifier la validité des données saisies 
  validData();
});

//je défini une fonction anonyme pour afficher les erreurs de saisies qui prends 2 paramètres 
// 1 - l'élément en question, 2 le message associé
const setError = (element, message) => {
  //j'affecte ma variable comme étant le parent de l'element passé en parametre 
  const formData = element.parentElement;
  //je defini l'emplacement d'affichage de mes messages d'erreur dans une variable
  const errorDisplay = formData.querySelector('.erreur');

  //le message s'affichera à l'emplacement défini avec un innerHTML grâce au second parametre de la fonction
  errorDisplay.innerHTML = message;
  // j'ajoute une classe à formData pour customiser l'apparence de l'erreur
  formData.classList.add('erreurMessage');
  // je supprime la classe de succès en cas d'erreur
  formData.classList.remove('success');
}

//je défini une fonction anonyme pour afficher les succès de saisies qui prends 1 paramètre 
// 1 - l'élément en question
const setSuccess = (element) => {
  //j'affecte ma variable comme étant le parent de l'element passé en parametre
  const formData = element.parentElement;
  //je defini l'emplacement d'affichage dans une variable
  const errorDisplay = formData.querySelector('.erreur');

   //en cas de succès pas de message spécifique donc j'initialise innerHTML avec une string vide
  errorDisplay.innerHTML = "";
  // j'ajoute une classe à formData pour customiser l'apparence du succès
  formData.classList.add('success');
  // je supprime la classe d'erreur'en cas de succès
  formData.classList.remove('erreurMessage');
}

//je crée une fonction anonyme pour vérifier les données saisies par l'utilisateur
const validate = () => {
  //je défini mes variables pour récupérer les valeurs saisies 
  //et j'utilise la fonction trim pour retirer les espaces en début et fin de saisie 
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const mailValue = mail.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  
  //Je défini les conditions d'erreur et affiche le ou les messages associé
  //grace à mes 2 fonctions anonymes setError et setSuccess
  if(firstNameValue == "") {
    setError(firstName, 'Le prénom est requis');
  } else if (firstNameValue.length < 2) {
    setError(firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  } else {
    setSuccess(firstName);
  }
  //Je défini les conditions d'erreur et affiche le ou les messages associé
  //grace à mes 2 fonctions anonymes setError et setSuccess
  if(lastNameValue == "") {
    setError(lastName, 'Le nom est requis');
  } else if (lastNameValue.length < 2) {
    setError(lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  } else {
    setSuccess(lastName);
  }
  //Je défini les conditions d'erreur et affiche le ou les messages associé
  //grace à mes 2 fonctions anonymes setError et setSuccess
  if(mailValue == "") {
    setError(mail, 'L\'adresse email est requise');
    //ici je teste si les valeurs saisies sont conformes à ma REGEX défini plus haut
  } else if (mailValid.test(mailValue) == false) {
    //si non conforme j'affiche ce message
    setError(mail, "Votre adresse mail n\'a pas le bon format.")
  } else {
    // si conforme et que le champ n'est pas vide alors j'affiche le succès 
    setSuccess(mail);
  }
  //Je défini les conditions d'erreur et affiche le ou les messages associé
  //grace à mes 2 fonctions anonymes setError et setSuccess
  if(birthdateValue == "") {
    setError(birthdate, "Vous devez entrer votre date de naissance.");
  } else {
    setSuccess(birthdate);
  }
  //Je défini les conditions d'erreur et affiche le ou les messages associé
  //grace à mes 2 fonctions anonymes setError et setSuccess
  if(quantityValue == "" || quantityValue < 0) {
    setError(quantity, 'Veuillez saisir un chiffre');
  } else {
    setSuccess(quantity);
  }
  //je renvoie vers une fonction pour vérifier qu'au moins 1 bouton radio est sélectionné
  radioCheckedTrue();
  //je renvoie vers une fonction pour vérifier que le bouton des conditions générales est sélectionné
  generalCheckedTrue();

}

//je crée une fonction de vérification qu'au moins 1 valeurs soit sélectionné
const radioCheckedTrue = () => {
  //je crée une variable qui récupère toutes les valeurs ayant le même type 
  const btnRadio = document.querySelectorAll('input[type=radio]');
  // j'initialise une variable a false 
  let isFormValid = false;

  // je crée une boucle pour itérer sur tous les éléments jusqu'au maximum du nombre des éléments de même type 
  for(let i = 0; i < btnRadio.length; i++) {
    //si l'un des index est sélectionné 
    if(btnRadio[i].checked) {
      //je defini ma variable false à true 
      isFormValid = true;
      // j'arrete la boucle 
      break;
    }
  }

  //si ma variable est à true 
  if(isFormValid) {
    // j'affecte ma fonction de succès 
    setSuccess(checked);
  } else {
    // sinon j'affiche un message d'erreur
    setError(checked, "Vous devez choisir une option.");
  }
}

//je crée une fonction pour vérifier que les conditions générales soit coché 
const generalCheckedTrue = () => {
  //je récupère mon élément dans une variable 
  const conditionG = document.getElementById('checkbox1');
  //je récupère la balise d'affichage du message 
  const check = document.getElementById('check');

  //Je verifie que la condition checked soit à true
  if(conditionG.checked) {
    // je défini comme étant un succès 
    setSuccess(check);
  } else {
    // sinon si décoché j'affiche le message d'erreur associé 
    setError(check, "Vous devez vérifier que vous acceptez les termes et conditions.");
  }
}

//je crée une fonction de validation du formulaire 
const validData = () => {
  // Je crée une variable dataValid que j'initialise à false tant que toutes les données saisies ne sont pas valides
  var dataValid = false;
  // j'initialise une variable à 0 pour vérifier les champs à vérifier 
  var verifChamps = 0;
  //j'initialise une variable de vérification en récupérant toutes les occurences du formulaire
  const verif = document.querySelectorAll('.formData');
  // je crée une boucle for pour itérer sur chacun des éléments du formulaire
  for(let i = 0; i < verif.length; i++){
    // je vérifie que tous les champs devant être vérifié ait bien la classe de success 
    if(verif[i].classList.contains("success")){
      // si c'est le cas j'incrémente le compteur verifChamps
      verifChamps += 1;
      //si ma variable verifChamps est égale au nombre d'occurence contenu dans la variable verif 
      if(verifChamps == verif.length){
        // alors je défini dataValid à true
        dataValid = true;
        //je défini une variable dataFormValid comme étant un nouvel objet de mon formulaire 
        const dataFormValid = new FormData(form);
        // Je transforme les données saisies en JSON et stocke le tout dans une variable
        const formJson = JSON.stringify(Object.fromEntries(dataFormValid));
        // Je stocke ensuite ma variable dans le localStorage 
        localStorage.setItem("dataFormValid", formJson);
        // je renvoie vers une fonction qui affichera une modale de succès d'envoie des données 
        modalSuccess();
      } else {
        //sinon je renvoie vers ma fonction de vérification des données 
        validate();
      }
    } 
  }
}


//une fois toute les étape de succès vérifiée je crée une fonction pour afficher la modale associé 
const modalSuccess = () => {
  //je récupère toute les occurences dans une variable
  const modalValid = document.querySelectorAll('.success');
  // je boucle sur toutes les occurences pour leurs affecter une nouvelle classe pour les masquer 
  for(let i = 0; i < modalValid.length; i++) {
    modalValid[i].classList.add('hidden');
  }
  // j'ajoute le texte de remerciement en ajoutant la classe me permettant de customiser ce texte 
  textLabel.classList.add('textValid');
  textLabel.innerHTML = "Merci pour votre inscription";
  // je change la valeur du bouton c'est parti par fermer 
  submitBtn.value = "Fermer";

  //si la valeur du bouton est a "fermer"
  if(submitBtn.value == "Fermer") {
    //j'ajoute un écouteur d'évènement au clic 
    submitBtn.addEventListener('click', function() {
      // j'appelle ma fonction de fermeture de la modale  
      closeModal();
      // je supprime les données du localStorage 
      localStorage.removeItem("dataFormValid");
    });
  }
}

