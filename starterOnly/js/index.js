function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"),
  modalBtn = document.querySelectorAll(".modal-btn"),
  closeBtn = document.querySelector(".close"),
  formData = document.querySelectorAll(".formData"),
  firstname = document.querySelector("#firstname"),
  lastname = document.querySelector("#lastname"),
  email = document.querySelector("#email"),
  birthdate = document.querySelector("#birthdate"),
  quantity = document.querySelector("#quantity"),
  terms = document.querySelector("#terms"),
  errorMsg = document.querySelectorAll(".errorMsg"),
  newsletter = document.querySelector("#newsletter");

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modalbg.style.display = "block";
  })
);

// close modal event
closeBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

// afficher message d'erreur
const inputs = [firstname, lastname, email, birthdate, quantity, terms];

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    if (!inputs[i].validity.valid) {
      errorMsg[i].classList.remove("hidden");
      inputs[i].classList.remove("valid");
      inputs[i].classList.add("invalid");
    } else {
      inputs[i].classList.remove("invalid");
      inputs[i].classList.add("valid");
      errorMsg[i].classList.add("hidden");
    }
  });
}

let choice,
  option = document.querySelectorAll(".option"),
  isChecked = false;

for (let i = 0; i < option.length; i++) {
  const elt = option[i];
  elt.addEventListener("click", () => {
    isChecked = option[i].checked;
    choice = option[i].value;
  });
}

function checkForm() {
  if (
    firstname.validity.valid &&
    lastname.validity.valid &&
    email.validity.valid &&
    birthdate.validity.valid &&
    quantity.validity.valid &&
    isChecked &&
    terms.checked
  ) {
    return true;
  } else {
    return false;
  }
}

function submitForm() {
  event.preventDefault();
  if (checkForm()) {
    const info = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      option: choice,
      terms: terms.checked,
      newsletter: newsletter.checked,
    };
    console.log(info);
    console.log("on change le contenu pour afficher les remerciements");
  } else {
    console.log("oops une erreur");
  }
}
