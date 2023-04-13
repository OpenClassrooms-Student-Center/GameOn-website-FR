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

// close modal when click on span class "close" by changing display mode

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modalbg.style.display = "none";
});

// // stockage dans un array de tous les champs de formulaire avec la classe .formData
// const formEntries = document.querySelectorAll(".formData");

// // itération sur tous les champs de formulaire
// formEntries.forEach(formEntry => {
//   // création des variables regex et spanMessage
//   let regex = "";
//   let spanMessage = "";
//   // sélection du champ input
//   const input = formEntry.querySelector("input");
//   // récupération de l'id du champ
//   const inputName = input.id;
//   // création de l'élément span qui viendra nous indiquer l'erreur sur le champ de formulaire
//   const inputSpan = document.createElement("span");

//   // en fonction de l'inputName, les variables regex et spanMessage prendront des valeurs différentes:
//   switch (inputName) {
//     case "first":
//     case "last":
//       regex = /\w{2,}/;
//       spanMessage = "Le champ doit contenir au moins 2 caractères";
//     break;
//     case "email":
//       regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//       spanMessage = "L'adresse mail doit être valide";
//     break;
//     case "birthdate":
//       regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
//       spanMessage = "doit contenir une date valide";
//     break;
//     case "quantity":
//       regex = /\d+/;
//       spanMessage = "Le champ doit contenir une valeur numérique";
//     break;
//   }

//   // ajout d'un listener au focus sur le champ input
//   input.addEventListener("focus", function() {
//     // au focus, on vient vider le texte de l'élément span
//     inputSpan.innerText = "";
//   })

//   // lorsque l'on quitte le champ input:
//   input.addEventListener("blur", function() {
//     // réinitialisation des classes input-valid ou input-invalid du champ input
//     input.classList.remove("input-valid", "input-invalid");

//     // si la valeur de l'input correspond au format attendu, validé par une regex:
//     if (input.value.match(regex)) {
//       // ajout de la classe "input-valid" au champ input pour souligner la validité
//       input.classList.add("input-valid");


//     // si la valeur ne correspond pas:
//     } else {
//       // ajout de la classe "input-invalid" au champ pour souligner l'invalidité
//       input.classList.add("input-invalid");
//       // définition de la valeur du texte de l'élément span
//       inputSpan.innerText = spanMessage;
//       // affichage de l'élément span sous l'input du formulaire
//       formEntry.appendChild(inputSpan);
//       // ajout de la classe form-warning à l'élément span que nous avons créé
//       inputSpan.classList.add("form-warning");
//     }
//   })
// });

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
console.log(first);
