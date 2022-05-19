'use strict';

const form = document.querySelector('form');

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


