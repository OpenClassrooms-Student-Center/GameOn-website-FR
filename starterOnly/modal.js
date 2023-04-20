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
const confirmForm = document.querySelector(".confirm");
const closeBtn = document.querySelectorAll(".close");

let isTrue = [];

let informationObject = {
  "first": {
    isValid: false,
    regex: /\w{2,}/,
    errorMessage: "Le champ doit contenir au moins 2 caractères"
  },
  "last": {
    isValid: false,
    regex: /\w{2,}/,
    errorMessage: "Le champ doit contenir au moins 2 caractères"
  },
  "email": {
    isValid: false,
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errorMessage: "L'adresse mail doit être valide"
  },
  "birthdate": {
    isValid: false,
    regex: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
    errorMessage: "doit contenir une date valide"
  },
  "quantity": {
    isValid: false,
    regex: /^0*?[0-9]\d*$/,
    errorMessage: "Le champ doit contenir une valeur numérique"
  },
  "location1": {
    isValid: false,
    errorMessage: "Vous devez choisir une option."
  },
  "checkbox1": {
    isValid: false,
    errorMessage: "Vous devez vérifier que vous acceptez les termes et conditions."
  }
};

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  confirmForm.style.display = "none";
}

function launchConfirmModal() {
  confirmForm.style.display = "block";
}

function validInputHighlight(input) {
  input.style.border = "2px solid green";
}

function invalidInputHighlight(input) {
  input.style.border = "2px solid red";
}

function resetForm() {
  form.reset();
  const input = form.querySelectorAll("input");
  input.forEach(input => {
    input.style.border = "none";
    input.checked = false;
  })
  for (const [key, value] of Object.entries(informationObject)) {
    value.isValid = false
  }
}

function validateTextInput(input) {
  const inputName = input.id;
  const inputSpan = document.createElement("span");
  inputSpan.classList.add("form-warning");

  input.addEventListener("input", function() {
    if (informationObject[inputName].regex.test(input.value)) {
      validInputHighlight(input);
      informationObject[inputName].isValid = true;
      inputSpan.innerText = "";
    } else {
      invalidInputHighlight(input);
      informationObject[inputName].isValid = false;
      inputSpan.innerText = informationObject[inputName].errorMessage;
      input.parentElement.appendChild(inputSpan);
    }
  });
}

function validateLocationInput(input) {
  const inputSpan = document.createElement("span");
  inputSpan.classList.add("form-warning");
  const inputName = input.id;
  const radioButtons = document.querySelectorAll("[name=location]");
  let btnValid = [];
  submit.addEventListener("click", function() {
    btnValid = []
    for (const btn of radioButtons) {
      if (btn.checked) {
        btnValid.push(true);
      } else {
        btnValid.push(false);
      }
    }
    if (btnValid.some(input => input)) {
      informationObject[inputName].isValid = true;
      inputSpan.innerText = "";
    } else {
      inputSpan.innerText = informationObject[inputName].errorMessage;
      input.parentElement.appendChild(inputSpan);
    }
  })
  radioButtons.forEach(btn => {
    btn.addEventListener("change", function() {
      if(this.checked) {
        inputSpan.innerText = "";
      }
    })
  })
}

function validateCheckboxInput(input) {
  const inputSpan = document.createElement("span");
  inputSpan.classList.add("form-warning");
  const inputName = input.id;
  submit.addEventListener("click", function() {
    if (input.checked) {
      informationObject[inputName].isValid = true;
    } else {
      informationObject[inputName].isValid = false;
      inputSpan.innerText = informationObject[inputName].errorMessage;
      input.parentElement.appendChild(inputSpan);
    }
  });
  input.addEventListener("change", function() {
    if (this.checked) {
      inputSpan.innerText = "";
    }
  });
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.forEach(btn => {
  btn.addEventListener("click", closeModal)
});


formData.forEach(formEntry => {
  const input = formEntry.querySelector("input");
  const inputName = input.id;

  if (inputName !== "location1" && inputName !== "checkbox1") {
    validateTextInput(input);
  } else if (inputName === "location1") {
    validateLocationInput(input);
  } else if (inputName === "checkbox1") {
    validateCheckboxInput(input);
  }
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  isTrue = []
  console.log(isTrue);

  for (const [key, value] of Object.entries(informationObject)) {
    console.log(key, value.isValid);
    if (value.isValid) {
      validInputHighlight(document.getElementById(key));
      isTrue.push(true);
    } else {
      invalidInputHighlight(document.getElementById(key));
      isTrue.push(false)
    }
  };
  if (isTrue.every(value => value)) {
      closeModal();
      launchConfirmModal();
      resetForm();
  };
});
