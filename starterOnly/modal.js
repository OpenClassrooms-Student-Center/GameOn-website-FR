function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//Modal close
const closeBtn = document.querySelector(".close");
// console.log(close);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal
function closeModal() {
  modalBg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);

//(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
const first = document.getElementById("first");
const controlFirst = () => {
  return first.value.length < 2 ? false : true;
};

//(2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
const last = document.getElementById("last");
const controlLast = () => {
  return last.value.length < 2 ? false : true;
};

//(3) L'adresse électronique est valide.
const email = document.getElementById("email");
//Regex de vérification d'email stockée dans une variable
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const controlEmail = () => {
  return emailRegex.test(email.value) ? true : false;
};

//(4) Pour le nombre de concours, une valeur numérique est saisie.
const quantity = document.getElementById("quantity");
const controlQuantity = () => {
  if (parseInt(quantity.value) < 100 && parseInt(quantity.value) >= 0) {
    return true;
  } else {
    return false;
  }
};

//(5) Un bouton radio est sélectionné.
const btRadio = document.querySelectorAll("input[type=radio]");
const controlBtRadio = () => {
  for (let i = 0; i < btRadio.length; i++) {
    if (btRadio[i].checked) {
      return true;
    }
  }
  return false;
};

//(6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
const checkbox1 = document.getElementById("checkbox1");
const controlCheckbox1 = () => {
  if (checkbox1.checked) {
    return true;
  }
  return false;
};

//Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
