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
  if (this.value !== "" && this.value.length > 2) {
    errorFirstName.innerHTML = "";
  firstName.style.border = "";
  } else {
    errorFirstName.innerHTML = "Veuillez entrer un Prénom valide";
    firstName.style.border = "4px solid #e54858";
  }
 })

 // Validate lastName and appear red elt when detect error
 let lastName = document.getElementById("last");
 let errorLastName = document.getElementById("errorLastName");

 lastName.addEventListener("input", function() {
  if (this.value !== "" && this.value.length > 2) {
  errorLastName.innerHTML = "";
  lastName.style.border = "";
  } else {
    errorLastName.innerHTML = "Veuillez entrer un Nom valide";
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
  if (this.value >= 0 && this.value < 10) {
  errorQuantity.innerHTML = "";
  quantity.style.border = "";
  } else {
    errorQuantity.innerHTML = "nous n'avons pas fait autant de tournois ";
    quantity.style.border = "4px solid #e54858";
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
// // let firstName = document.getElementById("first");
// // let lastName = document.getElementById("last");
// // let email = document.getElementById("email");
// // let birthdate = document.getElementById("birthdate");
// // let quantityNumber = document.getElementById("quantity");