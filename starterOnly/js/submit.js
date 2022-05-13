'use strict';

const form = document.querySelector('form');
/**
 * {*}
 */

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // submit to the server if the form is valid
  if (
    checkFirstName() ||
    checkLastName() ||
    checkEmail()||
    checkDate() ||
    checkNumbContest()) {
    displaySucess();
  }
});


