function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex
const mailRegex = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const dateRegex = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;


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
  let error;
  let inputs = this;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      error = "veuillez renseigner tous les champs !";
      document.getElementById("error").style.color = "red";
      break;
    }
  }

  if (error) {
    submitElement.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } else {
    alert('Merci, Votre formulaire à bien été envoyé !');
    // document.getElementsByClassName("content").innerHTML = "";


  }
 });

 // Validate first Name and appear red elt when detect error
 let firstName = document.getElementById("first");
 let errorFirstName = document.getElementById("errorFirstName");

 firstName.addEventListener("input", function() {
  if (this.value !== "" && this.value.length >= 2) {
    errorFirstName.innerHTML = "";
  firstName.style.border = "";
  } else {
    errorFirstName.innerHTML = "Nous sommes sur que votre prénom possède plus d'une lettre !";
    firstName.style.border = "4px solid #e54858";
  }
 })

 // Validate lastName and appear red elt when detect error
 let lastName = document.getElementById("last");
 let errorLastName = document.getElementById("errorLastName");

 lastName.addEventListener("input", function() {
  if (this.value !== "" && this.value.length >= 2) {
  errorLastName.innerHTML = "";
  lastName.style.border = "";
  } else {
    errorLastName.innerHTML = "c'est pareil pour votre nom Minimum 2 caractère !! ";
    lastName.style.border = "4px solid #e54858";
  }
 })


 // Validate Email and appear red elt when detect error
 let email = document.getElementById("email");
 let errorMail = document.getElementById("errorMail");

 email.addEventListener("input", function() {
  if (mailRegex.test(this.value)) {
  errorMail.innerHTML = "";
  email.style.border = "";
  return true;
  } else {
    errorMail.innerHTML = "Veuillez entrer une adresse mail valide";
    email.style.border = "4px solid #e54858";
    return false;
  }
 })

 // validation de la date de naissance birthdate
let birthdate = document.getElementById("birthdate");
let errorBirthdate = document.getElementById("errorBirthdate");

birthdate.addEventListener("input", function() {
  console.log(birthdate.value);
  if (dateRegex.test(this.value)) {
  errorBirthdate.innerHTML = "";
  birthdate.style.border = "";
  return true;
  } else {
    errorBirthdate.innerHTML = "Veuillez entrer une date de naissance valide";
    birthdate.style.border = "4px solid #e54858";
    return false;
  }
 })


 // validation de nombre de participation
let quantity = document.getElementById("quantity");
let errorQuantity = document.getElementById("errorQuantity");

quantity.addEventListener("input", function() {
  if (this.value === "" || this.value == NaN) {
  errorQuantity.innerHTML = "veuillez renseigner ce champs";
  quantity.style.border = "4px solid #e54858";
  } else {
    errorQuantity.innerHTML = "";
    quantity.style.border = "";
  }
 })

// validate location
let cityLocation = document.getElementsByName("location");
let errorLocation = document.getElementById("errorLocation");

function locationChecked() {
if ((cityLocation[0].checked || cityLocation[1].checked || cityLocation[2].checked || cityLocation[3].checked || cityLocation[4].checked || cityLocation[5].checked || cityLocation[6].checked)) {
     errorLocation.innerHTML = "blue";
     return true;
   } else {
     errorLocation.innerHTML = "Veuillez choisir une option";
     return false;
   }
}

// Validate CGU
let errorCGU = document.getElementById("errorCGU");
let checkbox1 = document.getElementById("checkbox1");

checkbox1.addEventListener("input", function() {
  if (checkbox1.checked) {
    errorCGU.innerHTML = "";
  } else {
    errorCGU.innerHTML = "Veuillez accepter les termes et conditions";
  }
})










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
// let firstName = document.getElementById("first");
// let lastName = document.getElementById("last");
// let email = document.getElementById("email");
// let birthdate = document.getElementById("birthdate");
// let quantityNumber = document.getElementById("quantity")