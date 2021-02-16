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
    console.log(inputs[i])
  }

  if (erreur) {
    submitElement.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    alert('Merci, Votre formulaire à bien été envoyé !');
  }
 });

 document.getElementById("first").addEventListener("input", function() {
  if (this.value == "") {
  document.getElementById("errorFirstName").innerHTML = "Veuillez entrez un Prénom valide";
  } else {
    document.getElementById("errorFirstName").innerHTML = "";
  }
 })

 document.getElementById("last").addEventListener("input", function() {
  if (this.value == "") {
  document.getElementById("errorLastName").innerHTML = "Veuillez entrez un Nom valide";
  } else {
    document.getElementById("errorLastName").innerHTML = "";
  }
 })



// regex 2 caractere : [a-z]


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