'use strict';

const form = document.querySelector('form');
/**
 * {*}
 */
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const isUserFirstNameValid = checkFirstName();
  const isFormValid = isUserFirstNameValid;
  // submit to the server if the form is valid
  if (isFormValid) {
    alert('sucess');
  }
});


