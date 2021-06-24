import FormValidator from "./module/validator.js";

///// Assign function to window object to avoid module scoping
window.editNav = function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

/////////////////////////////////////////////////////////////////// DOM ELEMENTS
const modalbg = document.querySelector(".bground");
const content = document.querySelectorAll(".content")[0];
const formValid = document.querySelector(".form-valid");
const signUpForm = document.querySelector("#signupForm");
const formInputs = signUpForm.querySelectorAll("input");
const formDatas = document.querySelectorAll(".formData");

/////////////////////////////////////////// FORM VALIDATOR

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

const validator = new FormValidator(signUpForm, fields);
validator.initialize();

/////////////////////////////////////////////////////////////// EVENTS LISTENERS

////////////////////////////// CLOSE/OPEN RESPONSIVE MENU

////////////////////////////// CLOSE/OPEN MODAL
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
  // reset all the input + reset style (show/no-show)
  signUpForm.style.opacity = 1;
  formValid.style.display = "none";
  formInputs.forEach((input) => {
    input.type != "submit" && (input.value = "");
    input.checked = false;
    input.name === "term" && (input.checked = true);
  });
  formDatas.forEach((formData) => {
    formData.setAttribute("data-error-visible", false);
    formData.setAttribute("data-error", "");
  });
}

////////////////////////////// SUBMITFORM
signUpForm.addEventListener("submit", (e) => {
  let error = isError(formDatas);

  if (!error) {
    //Excute specific code only if no error

    //Get all the result
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

    //store in an array
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

    showValidateScreen();
  }
});

function showValidateScreen() {
  signUpForm.style.opacity = 0;
  formValid.style.display = "flex";
}

function isError(fields) {
  // get all the value of data-error-visible and check if there is one value true meaning that the form can't be validate
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
