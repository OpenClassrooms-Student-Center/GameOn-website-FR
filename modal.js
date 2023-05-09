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
const confirmForm = document.querySelector(".modal-confirm");
const closeBtn = document.querySelectorAll(".close");
const closeModalBtn = document.querySelector(".btn-close");

let isTrue = [];

// create an object containing all relevant informations to check all form inputs
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

// display the form modal
function launchModal() {
  modalbg.style.display = "block";
  form.style.opacity = 1;
  confirmForm.style.display = "none";
}

// hide the modal
function closeModal() {
  modalbg.style.display = "none";
  confirmForm.style.display = "none";
}

// display the confirmation modal
function launchConfirmModal() {
  form.style.opacity = 0;
  confirmForm.style.display = "block";
}

// highlight the form input's border in green
function validInputHighlight(input) {
  input.style.border = "2px solid green";
}

// highlight the form input's border in red
function invalidInputHighlight(input) {
  input.style.border = "2px solid red";
}

// reset form and saved values
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

// check if form input is valid for text input
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
};
// check if form input is valid for birthdate input
function validateBirthdateInput(input) {
  const inputName = input.id;
  const inputSpan = document.createElement("span");
  inputSpan.classList.add("form-warning");

  input.addEventListener("input", function() {
    let today = new Date();
    let date = new Date(input.value);
    if (informationObject[inputName].regex.test(input.value) && (inputName === "birthdate")) {
      if (date < today) {
        validInputHighlight(input);
        informationObject[inputName].isValid = true;
        inputSpan.innerText = "";
      } else {
        invalidInputHighlight(input);
        informationObject[inputName].isValid = false;
        inputSpan.innerText = informationObject[inputName].errorMessage;
        input.parentElement.appendChild(inputSpan);
      }
    }
  });
};

// check if form input is valid for location input (radio buttons)
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

// check if form input is valid for terms of use input (checkbox)
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

// call closeModal function when clicking the closeBtn
closeBtn.forEach(btn => {
  btn.addEventListener("click", closeModal)
});

closeModalBtn.addEventListener("click", closeModal);


// testing all the form's inputs
formData.forEach(formEntry => {
  const input = formEntry.querySelector("input");
  const inputName = input.id;
  switch (inputName) {
    case "birthdate":
      validateBirthdateInput(input);
      break;
    case "location1":
      validateLocationInput(input);
      break;
    case "checkbox1":
      validateCheckboxInput(input);
      break;
    default:
      validateTextInput(input);
      break;
  }
});

// when clicking on the submit button, checks if all form entries are valid:
submit.addEventListener("click", function(event) {
  event.preventDefault();
  isTrue = []
  for (const [key, value] of Object.entries(informationObject)) {
    // console.log(key, value.isValid);
    if (value.isValid) {
      validInputHighlight(document.getElementById(key));
      isTrue.push(true);
    } else {
      invalidInputHighlight(document.getElementById(key));
      isTrue.push(false)
    }
  };
  // if all form entries are valid, calling functions :
  if (isTrue.every(value => value)) {
      launchConfirmModal();
      resetForm();
  };
});
