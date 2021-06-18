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
const close = document.querySelector(".close");
const formGlobal = document.getElementById("formGlobal");
const validationPage = document.querySelector(".sendValidation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

formGlobal.addEventListener("submit", function (e) {
  let erreur;

  //email validation

  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData[2].children[2].value)) {
    formData[2].removeAttribute("data-error");
    formData[2].removeAttribute("data-error-visible");
  } else {
    erreur = "veuillez entrer un mail valide";
    formData[2].setAttribute("data-error", erreur);
    formData[2].setAttribute("data-error-visible", "true");
  }

  //birth date validation
  let parseBirthDate = Date.parse(formData[3].children[2].value);//converti la date entrée en milliseconde utc
  const today = Date.now();// défini la date d'aujourd'hui en ms utc
  const todayDate = new Date().toLocaleDateString();//converti la date du jour au format jour/mois/année

  

  if (parseBirthDate > today || !parseBirthDate) {
    erreur ="veuillez sélectionner une date de naissance antérieure au " + todayDate;
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", erreur);
  } else {
    formData[3].removeAttribute("data-error-visible");
    formData[3].removeAttribute("data-error");
  }

  // quantity of tournaments validation

  if (/[0-9]/.test(formData[4].children[2].value)) {
    formData[4].removeAttribute("data-error-visible");
    formData[4].removeAttribute("data-error");
  } else {
    erreur = "entrer un nombre entre 0 et 99";
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", erreur);
  }

  //town validation

  if (!formGlobal.location.value) {
    erreur = "selectionnez une ville";
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", erreur);
  } else {
    formData[5].removeAttribute("data-error-visible");
    formData[5].removeAttribute("data-error");
  }

  if (!formData[6].children[0].checked) {
    erreur = "merci d'accepter les conditions d'utilisation";
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", erreur);
  } else {
    formData[6].removeAttribute("data-error-visible");
    formData[6].removeAttribute("data-error");
  }

  if (erreur) {
    e.preventDefault();
  }
});



console.log(formData[3].children[2].value)