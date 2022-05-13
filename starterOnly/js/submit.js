'use strict';

const form = document.querySelector('form');

/**
 * Modal Sucesss
*/
function displaySucess() {
  modalSucess.style.display = 'flex';
  form.style.display= 'none';
};

/**
 * {*}
 */

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // submit to the server if the form is valid
  if (
    checkFirstName() == 'true' ||
    checkLastName() == 'true'||
    checkEmail() == 'true' ||
    checkDate() == 'true' ||
    checkNumbContest() == 'true' ||
    checkSelectCity() == 'true' ||
    checkCgukBoxes() == 'true') {
    return displaySucess();
  }
});


