"use strict";

// DOM Elements
const form = document.querySelector("form");

// change : form inputs
form.addEventListener("change", function (e) {
  switch (e.target.id) {
      case "first":
          checkedFirstName(first);
          break;
      case "last":
          checkedLastName(last);
          break;
      case "email":
          checkedEmail(email);
          break;
      case "birthdate":
          checkedBirthdate(birthdate);
          break;
      case "quantity":
          checkedQuantity(quantity);
          break;
      case "cgu":
          checkedCgu(cgu);
          break;
    }
});

// listen to submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    checkedFirstName(first) &&
    checkedLastName(last) &&
    checkedEmail(email) &&
    checkedBirthdate(birthdate) &&
    checkedQuantity(quantity) &&
    checkedLocation() &&
    checkedCgu(cgu)
  ) {
    modalSuccessMessage.style.display = "flex";
    this.reset();
  } 
});