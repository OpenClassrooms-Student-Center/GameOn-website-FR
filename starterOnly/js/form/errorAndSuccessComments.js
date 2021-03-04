"use strict";

// ********* comments management error/success *********

let formData = document.querySelectorAll(".formData");

function setErrorFor(input, errorComment) {
  formData = input.parentElement;
  formData.setAttribute("data-error-visible", "true");
  formData.setAttribute("data-error", errorComment);
}

function removeErrorFor(input) {
  formData = input.parentElement;
  formData.removeAttribute("data-error-visible");
  formData.removeAttribute("data-error");
}