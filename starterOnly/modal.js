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
const submitBtn = document.querySelector(".btn-submit");
const formBody = document.getElementsByName("reserve");
// objet contenant les champs du formulaire
const form = {
  first: document.getElementById("first"),
  last: document.getElementById("last"),
  email: document.getElementById("email"),
  birthdate: document.getElementById("birthdate"),
  quantity: document.getElementById("quantity"),
  city: document.querySelectorAll("input[type=radio]"),
  terms: document.getElementById("checkbox1")
};
// objet qui créé la div qui va afficher le message d'erreur
const errorMsg = {
  first: document.createElement("div"),
  last: document.createElement("div"),
  email: document.createElement("div"),
  birthdate: document.createElement("div"),
  quantity: document.createElement("div"),
  city: document.createElement("div"),
  terms: document.createElement("div")
};
// expression reguliere pour valider les differentes chaines de caractères
const regex = {
  mail: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  name: /^[a-zA-ZÀ-Ÿà-ÿ]+([\s\'\.\-][a-zA-ZÀ-Ÿà-ÿ]+)?([\s\'\.\-][a-zA-ZÀ-Ÿà-ÿ]+)*$/,
  quantity: /^\d{1,}$/
};

// launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer la modale
const closeModalBtn = document.querySelector(".close");

closeModalBtn.addEventListener("click", function () {
  modalbg.style.display = "none";
});

// application du style pour les msg d'erreur
for (const property in errorMsg) {
  errorMsg[property].style.color = "#FF4E60";
  errorMsg[property].style.fontSize = "12px";
}

// validation d'un champ de texte
function validText(entry, regex, container, msg, index, msg2) {
  formData[index].appendChild(container);
  if(entry.length < 2 && msg2.length > 0){
    container.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du " + msg2 + ".";
    return false;
  }
  if (entry.match(regex)) {
    container.innerHTML = "";
    return true;
  } else {
    container.innerHTML = msg;
    return false;
  }
}

// validation de la date de naissance
function isDateValid() {
  let date = new Date(form.birthdate.value).getTime();
  let year = form.birthdate.value.substring(0, 2);
  formData[3].appendChild(errorMsg.birthdate);
  if (parseInt(year) < 19 || isNaN(date) || Date.now() < date) {
    errorMsg.birthdate.innerHTML = "Vous devez saisir une date de naissance.";
    return false;
  } else {
    errorMsg.birthdate.innerHTML = "";
    return true;
  }
}

// validation de la selection de la ville
function isCityValid() {
  formData[5].appendChild(errorMsg.city);
  for (let i = 0; i < form.city.length; i++) {
    if (form.city[i].checked) {
      errorMsg.city.innerHTML = "";
      return true;
    }
  }
  errorMsg.city.innerHTML = "Vous devez choisir une option.";
  return false;
}

// validation des conditions d'utilisation
function isTermsValid() {
  const checkbox = document.getElementsByClassName("checkbox2-label");
  checkbox[0].appendChild(errorMsg.terms);
  //formData[6].appendChild(errorMsg.terms);
  if (form.terms.checked) {
    errorMsg.terms.innerHTML = "";
    return true;
  } else {
    errorMsg.terms.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  }
}

// affichage des remerciements
function displayThanks(){
  
  formBody[0].style.display = "none";
  const modalBody = document.getElementsByClassName("modal-body");
  const confirmMsg = document.createElement("div");
  const confirmBtn = document.createElement("div");
  modalBody[0].appendChild(confirmMsg);
  modalBody[0].appendChild(confirmBtn);
  confirmMsg.setAttribute("class", "confirmation");
  confirmMsg.innerHTML = "Merci !<br/>Votre réservation a été reçue.";
  confirmBtn.className = "btn-confirm";
  confirmBtn.innerHTML = "Fermer";
  confirmBtn.addEventListener("click", function(){
    validate();
  });
  
}

// envoie du formulaire
function validate(){
  formBody[0].submit();
  return true;
}

// evenement qui va verifier tous les champs au clic
submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  if(validText(form.first.value, regex.name, errorMsg.first, "Veuillez saisir un prénom correct.", 0, "prénom") &
  validText(form.last.value, regex.name, errorMsg.last, "Veuillez saisir un nom correct.", 1, "nom") &
  validText(form.email.value, regex.mail, errorMsg.email, "Veuillez saisir une adresse mail correcte.", 2, "") &
  isDateValid() & 
  validText(form.quantity.value, regex.quantity, errorMsg.quantity, "Veuillez entrer un nombre entier positif.", 4, "") &
  isCityValid() &
  isTermsValid()){
    displayThanks();
  }
});
