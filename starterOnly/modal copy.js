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

const validate = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const closer = document.querySelectorAll(".close");

let stringsNumber = document.querySelectorAll(".text-control");
let formInputs = document.querySelectorAll("input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//ISSUE 1 Fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}

closer.forEach((closer) => {
  closer.addEventListener("click", closeModal);
});

// stringsNumber.forEach((string) => {
//   string.addEventListener("input", (longueur) => {
//     longueur = longueur.target.value.length;
//     if (longueur < 3) {
//       string.style.border = "3px solid red";
//     } else {
//       string.style.border = "3px solid green";
//     }
//     if (longueur < 3) {
//       console.log("too short");
//     }
//   });
// });

validate.addEventListener("click", (submitting) => {
  submitting.preventDefault();
  console.log("toto");
});

// validate.addEventListener('click',(event)=>{
//      event.preventDefault();
//      form.innerHTML=`
//       <h4>Merci ! Votre réservation a été reçue.</h4>
//       <input class="btn-submit close" type="submit" class="button" value="Fermer">
//      `
// });

// formInputs.forEach((input) => {
//   input.setAttribute("name", "value");
//   console.log(input);
// });

formData.forEach((form) => {
  form.addEventListener("input", (input) => {
    if (input.target.value.length <= 2) {
      form.setAttribute("data-error-visible", "true");
    } else {
      form.setAttribute("data-error-visible", "false");
    }
  });
});
