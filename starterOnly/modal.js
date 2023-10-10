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
const form = document.querySelector("form[name=reserve]");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  form.reset();
  formData.forEach((element) => {
    element.dataset.errorVisible = false;
  });
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}

// Vérification des données du formulaire
function validate() {
  let errors = 1;
  formData.forEach((element) => {
    const input = element.querySelector("input");
    if (
      input?.required &&
      (element.dataset.errorVisible = !input.validity.valid)
    ) {
      errors++;
    }
  });
  return errors === 0;
}
