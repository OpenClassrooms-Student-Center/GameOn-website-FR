// 1# Lancement et fermeture de la modale

// Je récupère les éléments de la modale dans le DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// Je récupère mon élément et je déclenche la fonction launchModal au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction qui lance la modale
// Je sélectionne le background de ma modale et lui applique un display block pour l'afficher
function launchModal() {
  modalbg.style.display = "block";
}

// Je récupère mon élément et je déclenche la fonction closeModal au click
// La croix est formée d'un before/after, je sélectionne le premier élement de mon tableau (before)
modalCross[0].addEventListener ("click", closeModal);

// Fonction qui ferme la modale
// Je sélectionne le background de ma modale et lui applique un display none pour le masquer
function closeModal() {
  modalbg.style.display = "none";
};

// 2# Vérification des données du formulaire

// Je récupère les éléments du formulaire dans le DOM
const form = document.getElementById ('form');
const firstname = document.getElementById ('first');
const lastname = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const location1 = document.getElementById ('location1');
const location2 = document.getElementById ('location2');
const location3 = document.getElementById ('location3');
const location4 = document.getElementById ('location4');
const location5 = document.getElementById ('location5');
const location6 = document.getElementById ('location6');

// Désactivation du traitement par défaut du button submit

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// 3# Gestion des erreurs du formulaire

const validation = document.getElementById ('checkbox1')
const firstError = document.getElementById ('first-error');
const lastError = document.getElementById ('last-error');
const emailError = document.getElementById ('email-error');
const birthdateError = document.getElementById ('birthdate-error');
const quantityError = document.getElementById ('quantity-error');
const locationError = document.getElementById ('location-error');
const validationError = document.getElementById ('validation-error');
const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');

//  Traitement du formulaire

function validate () {

// Vérification du prénom

let firstValidate;

if (!firstname.value.match(/^[a-z ,.'-]+$/i) || firstname.value == ' ' || firstname.value == null || firstname.value.length < 2) {
    firstError.innerText = 'Prénom incomplet ou mal orthographié';
    firstError.style.color = '#fe142f';
    firstError.style.fontSize = '12px';
    firstError.style.marginTop = '10px';
    firstname.style.border = 'solid #fe142f 2px'
    firstname.style.backgroundColor = '#fe142f'
  } else {
    firstname.style.border = 'none';
    firstname.style.backgroundColor = 'white'
    firstError.style.display = 'none';
    firstValidate = true;
};

// Vérification du nom

let lastValidate;

if (!lastname.value.match(/^[a-z ,.'-]+$/i) || lastname.value == ' ' || lastname.value == null || lastname.value.length < 2) {
    lastError.innerText = 'Nom incomplet ou mal orthographié';
    lastError.style.color = '#fe142f';
    lastError.style.fontSize = '12px';
    lastError.style.marginTop = '10px';
    lastname.style.border = 'solid #fe142f 2px'
    lastname.style.backgroundColor = '#fe142f'
  } else {
    lastname.style.border = 'none';
    lastname.style.backgroundColor = 'white'
    lastError.style.display = 'none';
    lastValidate = true;
};

// Vérification de l'e-mail

let mailValidate;

if (!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email.value) || email.value == ' ' || email.value == null){
    emailError.innerText = 'Adresse mail invalide';
    emailError.style.color = '#fe142f';
    emailError.style.fontSize = '12px';
    emailError.style.marginTop = '10px';
    email.style.border = 'solid #fe142f 2px'
    email.style.backgroundColor = '#fe142f'
} else {
    email.style.border = 'none';
    email.style.backgroundColor = 'white'
    emailError.style.display = 'none';
    mailValidate = true;
};

 // Vérification de la date de naissance

let birthValidate;

if (!birthdate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
  birthdateError.innerText = 'Date de naissance incorrecte';
  birthdateError.style.color = '#fe142f';
  birthdateError.style.fontSize = '12px';
  birthdateError.style.marginTop = '10px';
  birthdate.style.border = 'solid #fe142f 2px'
  birthdate.style.backgroundColor = '#fe142f'
} else {
  birthdate.style.border = 'none';
  email.style.backgroundColor = 'white'
  birthdateError.style.display = 'none';
  birthValidate = true;      
};

// Vérification du nombre de tournois

let quantityValidate;

if (!quantity.value.match(/^[0-9]+$/)) { 
  quantityError.innerText = 'Indiquer un nombre de tournois';
  quantityError.style.color = '#fe142f';
  quantityError.style.fontSize = '12px';
  quantityError.style.marginTop = '10px';
  quantity.style.border = 'solid #fe142f 2px'
  quantity.style.backgroundColor = '#fe142f'
} else {
  quantity.style.border = 'none';
  email.style.backgroundColor = 'white'
  quantityError.style.display = 'none';
  quantityValidate = true;
};

// Choix des villes

let radioChecked;

if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) { 
  locationError.innerText = 'Choisir au une ville';
  locationError.style.color = '#fe142f';
  locationError.style.fontSize = '12px';
  locationError.style.marginTop = '10px';         
} else {
  locationError.style.display = 'none';
  radioChecked = true;
};

// Validation des conditions

let conditionsChecked;

  if (!validation.checked) {
    validationError.innerText = 'Accepter les termes et conditions générales';
    validationError.style.color = '#fe142f';
    validationError.style.fontSize = '12px';
    validationError.style.marginTop = '10px';
    validationError.style.marginBottom = '10px';
  } else {
    validationError.style.display = 'none';
    conditionsChecked = true;
  };

  // Confirmation inscription réussie

  if (firstValidate == true && lastValidate == true && mailValidate == true && birthValidate == true && quantityValidate == true && radioChecked == true && conditionsChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  };

  // Fermeture de la modale de confirmation
confirmationCloseBtn[0].addEventListener("click", closeModal);

};