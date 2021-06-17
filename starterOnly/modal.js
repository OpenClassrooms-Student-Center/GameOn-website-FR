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
};


formGlobal.addEventListener("submit", function(e){

  //email validation
  const email = document.getElementById("email");
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    email.parentElement.removeAttribute("data-error-visible");
    email.parentElement.removeAttribute("data-error");
  } else {
    erreur = "veuillez renseigner un email valide";
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", erreur);
  }

  //birth date validation
  const today = new Date().toISOString().split("T")[0]; //défini la date d'aujourd'hui
  let birthDate = document.getElementById("birthdate");

  if (birthDate.value > today || birthDate.value == "") {
    erreur =
      "veuillez sélectionner une date de naissance antérieure au " + today;
    birthDate.parentElement.setAttribute("data-error-visible", "true");
    birthDate.parentElement.setAttribute("data-error", erreur);
  } else {
    birthDate.parentElement.removeAttribute("data-error-visible");
    birthDate.parentElement.removeAttribute("data-error");
  }

  // quantity of tournaments validation
  const quantity = document.getElementById("quantity");

  if (/[0-9]/.test(quantity.value)) {
    quantity.parentElement.removeAttribute("data-error-visible");
    quantity.parentElement.removeAttribute("data-error");
  } else {
    erreur = "entrer un nombre entre 0 et 99";
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute("data-error", erreur);
  }

  
  //town validation

  if(!formGlobal.location.value){      
    erreur = "selectionnez une ville";      
    formData[5].setAttribute("data-error-visible","true");
    formData[5].setAttribute("data-error",erreur);    
  }else{
    formData[5].removeAttribute("data-error-visible");
    formData[5].removeAttribute("data-error");    
  }


  const check = document.getElementById("checkbox1");  
  if (!check.checked) {
    erreur = "merci d'accepter les conditions d'utilisation";
    check.parentElement.setAttribute("data-error-visible", "true");
    check.parentElement.setAttribute("data-error", erreur);
  } else {
    check.parentElement.removeAttribute("data-error-visible", "true");
    check.parentElement.removeAttribute("data-error", erreur);
  }

  if (erreur) {
    e.preventDefault();
  } else {
    function validate() {
      alert("formulaire envoyé");
    }
    validate();
  }
});
const radio = document.getElementsByName("location");
console.log(radio)
