const topNav = document.querySelector("#myTopnav");

function editNav() {
  topNav.classList.toggle("responsive");
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modaldone = document.querySelector(".signup-done");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("form[name=reserve]");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close, .btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  form.reset();
  formData.forEach((element) => {
    element.dataset.errorVisible = false;
  });
  const now = new Date();
  now.setFullYear(now.getFullYear() - 18);
  form.birthdate.max = now.toISOString().slice(0, 10); //`${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal(e) {
  e.preventDefault();
  e.stopPropagation();
  const modal = e.target.closest(".bground");
  if (modal) {
    modal.style.display = "none";
  }
}

// Vérification des données du formulaire
function validate() {
  let errors = 0;
  formData.forEach((element) => {
    const input = element.querySelector("input");
    if (
      input?.required &&
      (element.dataset.errorVisible = !input.validity.valid)
    ) {
      errors++;
      if (errors === 1) input.focus();
    }
  });
  if (errors === 0) {
    modalbg.style.display = "none";
    modaldone.style.display = "block";
  }
  // return errors === 0;
  return false;
}
