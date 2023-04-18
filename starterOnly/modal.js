function editNav() {
  if (x.className === "topnav") {
    var x = document.getElementById("myTopnav");
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const submit = document.querySelector(".btn-submit");
const firstDiv = form.first.parentElement;

const confirmForm = document.querySelector(".confirm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// -------------------------------            Issue #1              ----------------------------------//
// ------------  close modal when click on span class "close" by changing display mode  ---------------//

// creating a function that changes the display value
function closeModal() {
  modalbg.style.display = "none";
  confirmForm.style.display = "none";
}
// select the close button by className
const closeBtn = document.querySelectorAll(".close");
// on click, calling closeModal() function
closeBtn.forEach(btn => {
  btn.addEventListener("click", closeModal)
});

function launchConfirm() {
  confirmForm.style.display = "block";
}

const formEntries = document.querySelectorAll(".formData");
let isValid = {
    "first": false,
    "last": false,
    "email": false,
    "birthdate": false,
    "quantity": false,
    "location1": false,
    "checkbox1": false
}

function validInputHighlight(input) {
  input.style.border = "2px solid green";
}
function invalidInputHighlight(input) {
  input.style.border = "2px solid red";
}
function emptyForm() {
  form.reset();
}

formEntries.forEach(formEntry => {
  const input = formEntry.querySelector("input");
  const inputName = input.id;
  const inputSpan = document.createElement("span");
  inputSpan.classList.add("form-warning");
  let errorMessage = "";

  if (inputName !== "location1" && inputName !== "checkbox1") {
    input.addEventListener("input", function() {
      switch (inputName) {
        case "first":
        case "last":
          regex = /\w{2,}/;
          errorMessage = "Le champ doit contenir au moins 2 caractères";
          break;
        case "email":
          regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          errorMessage = "L'adresse mail doit être valide";
          break;
        case "birthdate":
          regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
          errorMessage = "doit contenir une date valide";
          break;
        case "quantity":
          regex = /^0*?[0-9]\d*$/;
          errorMessage = "Le champ doit contenir une valeur numérique";
          break;
      }
      if (regex.test(input.value)) {
        validInputHighlight(input);
        isValid[inputName] = true;
        inputSpan.innerText = "";
      } else {
        invalidInputHighlight(input);
        inputSpan.innerText = errorMessage;
        formEntry.appendChild(inputSpan);
        isValid[inputName] = false;
      }
    });
    input.addEventListener("focus", function() {
      inputSpan.innerText = "";
    });

  } else if (inputName === "location1") {
    errorMessage = "Vous devez choisir une option."
    const radioButtons = document.querySelectorAll("[type=radio]");
    for (const btn of radioButtons) {
        submit.addEventListener("click", function() {
        if (btn.checked) {
          isValid[inputName] = true;
          errorMessage = "";
        } else {
          inputSpan.innerText = errorMessage;
          formEntry.appendChild(inputSpan);
        }
        btn.addEventListener("change", function(event) {
          if(this.checked) {
            inputSpan.innerText = "";
          }
        })
      })
    }
  } else if (inputName === "checkbox1") {
    submit.addEventListener("click", function() {
      if (input.checked) {
        isValid[inputName] = true;
      } else {
        isValid[inputName] = false;
        errorMessage = "Vous devez vérifier que vous acceptez les termes et conditions.";
        inputSpan.innerText = errorMessage;
        formEntry.appendChild(inputSpan);
      }
    });
    input.addEventListener("change", function() {
      if (this.checked) {
        inputSpan.innerText = "";
      }
    })
  }
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  for (const [key, value] of Object.entries(isValid)) {
    value ? validInputHighlight(document.getElementById(key)) : invalidInputHighlight(document.getElementById(key));
  }
  const isTrue = Object.values(isValid).every(value => value)
  if (isTrue) {
    closeModal();
    launchConfirm();
    emptyForm();
  }
});
