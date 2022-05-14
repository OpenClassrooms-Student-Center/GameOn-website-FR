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
  const FormValid =[
    checkFirstName(),
    checkLastName(),
    checkEmail(),
    checkDate(),
    checkNumbContest(),
    checkSelectCity(),
    checkCgukBoxes(),
  ];
  if (FormValid.includes(false)) {
    return false;
  }
  return displaySucess();
});


