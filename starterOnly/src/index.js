import { editNav, capitalize } from "./utils.js";
import validators from "./validators.js";

// DOM Elements
const menu = document.getElementById("burger-menu");
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
const modalConfirm = document.querySelector(".validation-message");
const modalBtn = document.querySelectorAll(".modal-btn");
const confirmModalBtn = document.querySelector(".close-modal");
const closeModalBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("signup");

const formList = [];

// Burger Menu
menu.addEventListener("click", () => {
  editNav();
  closeModal();
});

// TEXT FORMATTING
capitalize(document.querySelector(".btn-signup.modal-btn"));

//HANDLERS
// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
  setTimeout(() => {
    modalbg.style.opacity = 1;
  }, 10);
}
// Close modal form
function closeModal() {
  modalbg.style.opacity = 0;

  // Waiting for the form to fade out
  setTimeout(() => {
    modalbg.style.display = "none";

    if (!formList) return;

    formList.forEach((el) => {
      const element = document.getElementsByName(el.name)[0];
      const closestForm = element.closest(".formData");

      if (element.classList.contains("text-control"))
        element.classList.remove("error-input");
      closestForm.removeChild(closestForm.lastChild);

      element.value = "";
    });
  }, 1000);
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

// Listen to the submit event on our form
form.addEventListener("submit", (e) => {
  //Prevent the form from auto submiting and page reload
  e.preventDefault();

  // Resets the formList array
  formList.splice(0, formList.length);

  //get All form input values and push them into the formList Array.
  formData.forEach((formEl) => {
    let currentEl = formEl.querySelectorAll(".text-control, .checkbox-input");
    currentEl = currentEl.length === 1 ? currentEl[0] : Array.from(currentEl);

    //If the currentEl is an nodeList of more than 1 element, its converted to an Array,
    //then I filter this array to find the checked element which will be the checked radio.
    if (currentEl.length > 1) {
      const name = currentEl[0].name;
      const defaultValue = "";
      currentEl = currentEl.filter((el) => el.checked);
      formList.push({
        name: name,
        value: currentEl[0]?.value ? currentEl[0]?.value : defaultValue,
      });
    } else if (currentEl.type === "checkbox") {
      formList.push({ name: currentEl.name, value: currentEl.checked });
    } else {
      formList.push({ name: currentEl.name, value: currentEl.value.trim() });
    }

    // formList.push adds the currentEl name and value as an object
    // into the formList Array
  });

  // Here happens the validation, it returns and array, inside
  // of it for each element there is either true if the value is valid
  // or a string containing the error message in case the value in
  // not accepted or empty but required.
  const formErrors = formList.map((element) => validators(element));

  // Checking for remaining errors and generating an error message
  // when necessary
  formList.forEach((current, i) => {
    controlErrorMessage(current, formErrors[i]);
  });

  // If form is valid then continue, else return and wait for another submit
  if (formHasErrors(formErrors)) return;

  // Animate form to confirmation view
  modalBody.style.transform = "translateX(100%)";
  modalBody.style.opacity = 0;
  modalConfirm.style.transform = "translate(-50%, -50%)";
  modalConfirm.style.opacity = 1;
  confirmModalBtn.style.transform = "translateX(-50%)";
  confirmModalBtn.style.opacity = 1;

  confirmModalBtn.addEventListener("click", closeModal);

  // Because I do not have to send this data to some backend
  // I will just log the final result as a json object because it's the most common format
  // we exchange with the backend
  const data = JSON.stringify(
    Object.fromEntries(formList.map((obj) => [obj.name, obj.value]))
  );

  console.log(data);
  return;
});

function controlErrorMessage(el, status) {
  const element = document.getElementsByName(el.name)[0];
  const closestForm = element.closest(".formData");

  const hasErrorMessage = Array.from(closestForm.children).filter((element) =>
    element.classList.contains("error-caption")
  ).length
    ? true
    : false;

  // If status of the input is not true and doesn't have eny error message shown
  if (status !== true && !hasErrorMessage) {
    // Create error element
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-caption");
    errorElement.innerText = status;

    //Adding red border to input only on text inputs
    if (element.classList.contains("text-control"))
      element.classList.add("error-input");

    closestForm.appendChild(errorElement);
    return;
  }

  // If the input was empty or false and has error message but this time is valid
  // then I delete the errorMessage element and I remove the error class if it was a text input
  if (status === true && hasErrorMessage) {
    if (element.classList.contains("text-control"))
      element.classList.remove("error-input");
    closestForm.removeChild(closestForm.lastChild);
    return;
  }
}

function formHasErrors(errorList) {
  return errorList.filter((el) => el !== true).length ? true : false;
}
