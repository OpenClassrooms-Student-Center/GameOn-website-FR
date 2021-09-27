function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openMenu() {
  console.log("On ouvre le menu");
};

// DOM Elements
const modalbg = document.querySelector(".bground"),
  modalBtn = document.querySelectorAll(".modal-btn"),
  modalBody = document.querySelector(".modal-body"),
  closeBtn = document.querySelector(".close"),
  icon = document.querySelector(".icon"),
  formData = document.querySelectorAll(".formData"),
  firstname = document.querySelector("#firstname"),
  lastname = document.querySelector("#lastname"),
  email = document.querySelector("#email"),
  birthdate = document.querySelector("#birthdate"),
  quantity = document.querySelector("#quantity"),
  terms = document.querySelector("#terms"),
  errorMsg = document.querySelectorAll(".errorMsg"),
  errorOptionMsg = document.querySelector(".errorOptionMsg"),
  newsletter = document.querySelector("#newsletter");

icon.addEventListener("click", openMenu);

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
    const infos = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      option: choice,
      terms: terms.checked,
      newsletter: newsletter.checked,
    };
    console.log(infos);
    modalBody.innerHTML = `
    <div class="modal-body-container">
    <div class="thanks-container">
    <p>Merci ${ firstname.value } !</p>
    <p>Votre réservation a été reçue.</p>
    </div>
    <button class="btn-signup modal-btn close-btn" onclick="closeModal()">
    Fermer
    </button>
    </div>
    `;
  } else if(!checkForm() && !isChecked) {
    errorOptionMsg.classList.remove("hidden");
  }  else {
    console.log("oops une erreur");
  }
}


