function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += 'responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const formDataOptions = document.getElementById('formDataOptions');
const bground = document.querySelector('.bground');
const closeModalBtn = document.querySelector('.close');

// html labels links
// const formValid = document.getElementById("submit");
const input = document.getElementsByTagName('input');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
//const locationOption = document.getElementsById("location");

// Message d'erreur
const errorFirstName = document.getElementById('errorFirst');
const errorLastName = document.getElementById('errorLast');
const errorEmail = document.getElementById('errorEmail');
const errorBirthdate = document.getElementById('errorBirthdate');
const errorQuantity = document.getElementById('errorQuantity');
const errorLocation = document.getElementById('errorLocation');
const errorConditions = document.getElementById('errorConditions');
const errorForm = document.querySelector('.errorForm');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal event
closeModalBtn.addEventListener('click', function (event) {
  event.preventDefault();
  closeModal();
});

// close modal form
function closeModal() {
  bground.style.display = 'none';
}

// Récupération des données des champs du formulaire
let form = document.getElementById('reserve');
form.addEventListener('submit', function () {});

// VALIDATION DU CHAMP "Prénom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

form.firstName.addEventListener('change', function () {
  validFirstName(this);
});

const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(
    '^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-sa-zàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$',
    'i'
  );

  if (firstNameRegExp.test(inputFirstName.value)) {
    errorFirstName.innerHTML = '';
    return true;
  } else {
    errorFirstName.innerHTML = 'Veuillez saisir au moins 2 lettres';
    return false;
  }
};

// VALIDATION DU CHAMP "Nom"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// le champ contient 2 caractères minimum
// le champ accepte des mots composés séparés par "'" ; "-" ; " ")
// le champ n'accepte pas 2 éléments de séparation consécutifs
// casse indifférente

form.lastName.addEventListener('change', function () {
  validLastName(this);
});

const validLastName = function (inputLastName) {
  let lastNameRegExp = new RegExp(
    "^[a-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]+[-'sa-zsàáâãäåçèéêëìíîïðòóôõöùúûüýÿ]{1,}$",
    'i'
  );

  if (lastNameRegExp.test(inputLastName.value)) {
    errorLastName.innerHTML = '';
    return true;
  } else {
    errorLastName.innerHTML = 'Veuillez saisir au moins 2 lettres';
    return false;
  }
};

// VALIDATION DU CHAMP "Email"
// le champ n'est pas vide
// le champ n'est pas remplis de " "
// tout caractère ASCII accepté
// espaces et points non acceptés en début ou fin de saisie et si répétés côte à côte
// le champs contient strictement 1 "@" et 1 "." ensuite
// le nom de domanaine accepte les formats entreprise
// casse indifférente

form.email.addEventListener('change', function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@{1}[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );

  if (emailRegExp.test(inputEmail.value)) {
    errorEmail.innerHTML = '';
    return true;
  } else {
    errorEmail.innerHTML = 'Veuillez saisir un format correct';
    return false;
  }
};

// VALIDATION DU CHAMP "Birthdate"
// format jj/mm/aaaa
// le joueur doit avoir plus de 13 ans

// calcul de l'âge du joueur
form.birthdate.addEventListener('blur', function () {
  userAge(this);
});

let userAge = function () {

  // récupération de la valeur du champ "date"
  let userDateInput = form.birthdate.value;
  //let userDateInput = document.getElementById("birthdate").value;
  console.log(userDateInput);

  // conversion de la valeur du champ "date" en objet
  let userBirthdate = new Date(userDateInput);
  console.log("userBirthdate"+ birthdate);

  // différence entre la date de naissance et la date du jour
  let difference = Date.now() - userBirthdate.getTime();

  // calcul de l'âge
  let age = new Date(difference);
  let calculateAge = Math.abs(age.getUTCFullYear() - 1970);
  console.log(calculateAge);
  return calculateAge;
}

// Vérification âge > 13 ans
form.birthdate.addEventListener('change', function () {
  validAge(this);
});

function validAge () {
  if (userAge()>=13) {
    errorBirthdate.innerHTML = '';
    return true
  } else {
  errorBirthdate.innerHTML = 'Vous devez avoir plus de 13 ans pour participer';
  return false
  }
}

form.birthdate.addEventListener('focus', function () {
  userAge(this);
  validAge(this);
});

// VALIDATION DU CHAMP "Quantity"
// nombre de participations comprimse entre 0 et 99
// si la quantité est incorrecte ou nulle alors le block "choix de ville(s)" ne s'affiche pas
// Si nombre de participation = 0 alors la saisie est valide et le block "choix de ville(s)" ne s'affiche pas
// Si le nombre de participation(s) comprise entre 1 et 99 alors le block "choix de ville(s)" s'affiche

form.quantity.addEventListener('change', function () {
  validQuantity(this);
  quantityNull(this);
});

const validQuantity = function () {
  let quantityRegExp = new RegExp('^([1-9]$|^[1-9][0-9]$)|^(99)$');

  if (quantityRegExp.test(quantity.value)) {
    errorQuantity.innerHTML = '';
    formDataOptions.style.display = 'block';
  } else {
    formDataOptions.style.display = 'none';
    errorQuantity.innerHTML = 'Veuillez saisir un nombre compris entre 0 et 99';
    return false;
  }
};

const quantityNull = function () {
  if (quantity.value == 0) {
    errorQuantity.innerHTML = '';
    formDataOptions.style.display = 'none';
  } else {
  }
};

var atLeastOneChecked = false;
var i = 0;

while (document.getElementById('location' + i)) {
  if (document.getElementById('location' + i).checked) {
    atLeastOneChecked = true;
    break;
  }
  i++;
}
if (atLeastOneChecked == true) {
  errorLocation.innerHTML = '';
} else {
  errorLocation.innerHTML = 'Veuillez sélectionner au moins une ville';
}

// VALIDATION DES OPTIONS "Location"
// Si le nombre de particpation > 0, alors le block apparait et au moins une ville doit être cochée

form.location0.addEventListener('change', function () {
  validLocationOption(this);
});

form.location1.addEventListener('change', function () {
  validLocationOption(this);
});

form.location2.addEventListener('change', function () {
  validLocationOption(this);
});

form.location3.addEventListener('change', function () {
  validLocationOption(this);
});

form.location4.addEventListener('change', function () {
  validLocationOption(this);
});

form.location5.addEventListener('change', function () {
  validLocationOption(this);
});

const validLocationOption = function () {
  var atLeastOneChecked = false;
  var i = 0;

  while (document.getElementById('location' + i)) {
    if (document.getElementById('location' + i).checked) {
      atLeastOneChecked = true;
      break;
    }
    i++;
  }

  if (atLeastOneChecked == true) {
    errorLocation.innerHTML = '';
    return true;
  } else {
    errorLocation.innerHTML = 'Veuillez sélectionner au moins une ville';
    return false;
  }
};

// VALIDATION DE L'ACCEPTATION DES CONDITIONS
// la case doit être cochée

form.checkbox1.addEventListener('change', function () {
  validConditions(this);
});

function validConditions() {
  if (checkbox1.checked == true) {
    errorConditions.innerHTML = '';
    return true;
  } else {
    errorConditions.innerHTML =
      "* Veuillez accepter les conditions d'utiliation";
    return false;
  }
}

// Submit /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// si tous les champs sont remplis ET validés alors le formulaire est envoyé, le modal se ferme et le message de confirmation de la réservation apparaît
// sinon le formulaire n'est pas envoyé. Le modal reste ouvert, les informations fournies sont conservées et un message d'erreur apparait

/*form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    validFirstName(form.firstName) &&
    validLastName(form.lastName) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validLocationOption(form.location1, form.location2, form.location3, form.location4, form.location5, form.location6) &&
    validConditions(form.checkbox1)
  ) == true) {
    form.onsubmit();
    closeModal ();
    alert ("Merci ! Votre réservation est enregistrée.");
    return true;
  } else {
    errorForm.innerHTML = "Veuillez vérifier vos informations";
    return false;
  }
};*/
