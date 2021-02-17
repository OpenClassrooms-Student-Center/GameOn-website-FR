function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex
const nameRegex = /[a-z]/;
const mailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const dateRegex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none"
}

// console.log(modalBtn);



// validation du formulaire lors de l'envoi
document.forms["reserve"].addEventListener("submit", function(submitElement) {
  let erreur;
  let inputs = this;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "veuillez renseigner tous les champs !";
      break;
    }
  }

  if (erreur) {
    submitElement.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    alert('Merci, Votre formulaire à bien été envoyé !');
  }
 });

 // validation du prenom
 document.getElementById("first").addEventListener("input", function() {
  if (this.value !== "" && this.value.length > 2) {
  document.getElementById("errorFirstName").innerHTML = "";
  } else {
    document.getElementById("errorFirstName").innerHTML = "Veuillez entrer un Prénom valide";
  }
 })

 // validation du nom de famille
 document.getElementById("last").addEventListener("input", function() {
  if (this.value !== "" && this.value.length > 2) {
  document.getElementById("errorLastName").innerHTML = "";
  } else {
    document.getElementById("errorLastName").innerHTML = "Veuillez entrer un Nom valide";
  }
 })


 // validation de l'eMail
 document.getElementById("email").addEventListener("input", function() {
  if (mailRegex.test(this.value)) {
  document.getElementById("errorMail").innerHTML = "";
  return true;
  } else {
    document.getElementById("errorMail").innerHTML = "Veuillez entrer une adresse mail valide";
    return false;
  }
 })

 // validation de la date de naissance birthdate
 document.getElementById("birthdate").addEventListener("input", function() {
  if (dateRegex.test(this.value)) {
  document.getElementById("errorBirthdate").innerHTML = "c'est good";
  return true;
  } else {
    document.getElementById("errorBirthdate").innerHTML = "Veuillez entrer une date de naissance valide";
    return false;
  }
 })

 // validation de nombre de participation






 //   // if (!quantityNumber.value) {
//   //   erreur = "veuillez renseigner un nombre de participation"
//   // }

//   // if (!birthdate.value) {
//   //   erreur = "veuillez renseigner un l'année de naissance"
//   // }

//   // if (!email.value) {
//   //   erreur = "veuillez renseigner un email"
//   // }

//   // if (!lastName.value) {
//   //   erreur = "veuillez renseigner un nom de famille"
//   // }

//   // if (!firstName.value) {
//   //   erreur = "veuillez renseigner un Prénom"
//   // }

// console.log(document.forms["reserve"]);
// // let firstName = document.getElementById("first");
// // let lastName = document.getElementById("last");
// // let email = document.getElementById("email");
// // let birthdate = document.getElementById("birthdate");
// // let quantityNumber = document.getElementById("quantity");