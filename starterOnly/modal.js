function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//////////////////////////////////////////////////////////// FORM VALIDATOR
class FormValidator {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.valide;
  }

  initialize() {
    this.setAttribute();
    this.validateOnSubmit();
    this.validateOnEntries();
  }

  setAttribute = () => {
    formDatas.forEach((element) => {
      element.setAttribute("data-error-visible", "false");
    });
  };

  validateOnEntries = () => {
    this.fields.forEach((field) => {
      const input = document.querySelectorAll(`[name="${field}"]`);

      input[0].addEventListener("input", (e) => {
        this.validateFields(input);
      });
    });
  };

  validateOnSubmit = () => {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      //Check if there is error

      this.fields.forEach((field) => {
        const input = document.querySelectorAll(`[name="${field}"]`);
        this.validateFields(input);
      });
    });
  };

  validateFields = (field) => {
    // Switch statement to test all the different possibilities
    const inputName = field[0].name;
    let inputValue = field[0].value;

    const formDataElement = field[0].parentElement;

    switch (inputName) {
      case "first":
        //(1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
        if (inputValue.trim() < 2 || inputValue === null) {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez entrer 2 caractères ou plus pour le champ du nom."
          );
          formDataElement.setAttribute("data-error-visible", true);
        } else {
          formDataElement.setAttribute("data-error-visible", false);
        }
        break;

      case "last":
        // (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
        if (inputValue < 2 || inputValue === null) {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez entrer 2 caractères ou plus pour le champ du nom."
          );
          formDataElement.setAttribute("data-error-visible", true);
        } else {
          formDataElement.setAttribute("data-error-visible", false);
        }
        break;
      case "email":
        const re = /\S+@\S+\.\S+/;
        // (3) L'adresse électronique est valide.
        if (re.test(inputValue)) {
          formDataElement.setAttribute("data-error-visible", false);
        } else {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez entrer un adresse email correct"
          );
          formDataElement.setAttribute("data-error-visible", true);
        }
        break;
      case "birthdate":
        if (inputValue === "") {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez entrer une date de naissance correcte"
          );
          formDataElement.setAttribute("data-error-visible", true);
        } else {
        }
        break;
      case "quantity":
        // (4) Pour le nombre de concours, une valeur numérique est saisie.
        if (typeof parseInt(inputValue) != "number" || inputValue === "") {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez entrer nombre entre 0 et 99"
          );
          formDataElement.setAttribute("data-error-visible", true);
        } else {
          formDataElement.setAttribute("data-error-visible", false);
        }
        break;
      case "location":
        // Un bouton radio est sélectionné.
        let almostOneIsChecked = false;
        let checkedElemValue;

        field.forEach((elem) => {
          if (elem.checked) {
            almostOneIsChecked = true;
            checkedElemValue = elem.value;
          }
        });

        if (almostOneIsChecked) {
          formDataElement.setAttribute("data-error-visible", false);
        } else {
          formDataElement.setAttribute(
            "data-error",
            "Veuillez selectionner au moins une ville"
          );
          formDataElement.setAttribute("data-error-visible", true);
        }
        break;
      case "term":
        // (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
        if (field[0].checked) {
          formDataElement.setAttribute("data-error-visible", false);
        } else {
          formDataElement.setAttribute(
            "data-error",
            "Vous devez vérifier que vous acceptez les termes et conditions."
          );
          formDataElement.setAttribute("data-error-visible", true);
        }
        break;
      case "event":
        field.checked && console.log(field.checked);
        break;

      default:
        console.log("error: no such field in this form");
        break;
    }
  };
}

/////////////////////////////////////////////////////////////////// DOM ELEMENTS
const modalbg = document.querySelector(".bground");
const formDatas = document.querySelectorAll(".formData");
const content = document.querySelectorAll(".content")[0];
const modalBody = document.querySelector(".modal-body");
const formValid = document.querySelector(".form-valid");
const signUpForm = document.querySelector("#signupForm");
const formInputs = signUpForm.querySelectorAll("input");

const fields = [
  "first",
  "last",
  "email",
  "birthdate",
  "quantity",
  "location",
  "term",
  "event",
];

/////////////////////////////////////////// FORM VALIDATOR

const validator = new FormValidator(signUpForm, fields);
validator.initialize();

/////////////////////////////////////////// EVENTS LISTENERS

document.addEventListener("click", (e) => {
  if (e.target.matches(".modal-btn")) {
    //Case if user click on any element with classes .modal-btn
    resetModal();
    launchModal();
  } else if (
    e.target.matches(".close") ||
    e.target.matches(".validform__close-btn") ||
    e.target.closest(".content") === null
  ) {
    //Case if user click either on close element or any element outside the content div.
    closeModal();
  }
});

signUpForm.addEventListener("submit", (e) => {
  let error = isError(formDatas);
  console.log(error);

  if (!error) {
    const location = document.querySelector(
      "input[name='location']:checked"
    ).value;

    const event = document.querySelector("input[name='event']").checked;
    const term = document.querySelector("input[name='term']").checked;
    const first = document.querySelector("input[name='first']").value;
    const last = document.querySelector("input[name='last']").value;
    const birthDate = document.querySelector("input[name='birthdate']").value;
    const quantity = document.querySelector("input[name='quantity']").value;
    const email = document.querySelector("input[name='email']").value;

    let result = [
      first,
      last,
      email,
      birthDate,
      quantity,
      location,
      term,
      event,
    ];

    console.log(result);

    signUpForm.style.opacity = 0;
    formValid.style.display = "flex";
  }
});

/////////////////////////////////////////////////////////////// CLOSE/OPEN MODAL

// launch modal form
function launchModal() {
  // adding specific classes to bgground et content to display them
  modalbg.classList.add("bground--show");
  content.classList.add("content--show");
}

function closeModal() {
  // removing specific classes to bgground et content to display them
  content.classList.remove("content--show");
  modalbg.classList.remove("bground--show");
}

function resetModal() {
  signUpForm.style.opacity = 1;
  formValid.style.display = "none";
  formInputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = true;
    } else {
      input.type != "submit" && (input.value = "");
    }
  });
}

function isError(fields) {
  let error = [];

  fields.forEach((element) => {
    error = [...error, element.attributes[1].value];
  });

  if (error.includes("true")) {
    return true;
  } else {
    return false;
  }
}
