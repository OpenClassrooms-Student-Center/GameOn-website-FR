/** @format */

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const turnaments = document.getElementById('turnaments');
const conditions = document.getElementById('conditions-checkbox');

const setErrorFor = (input, message) => {
  input.closest('div').setAttribute('data-success-visible', 'false');

  input.closest('div').setAttribute('data-error', message);
  input.closest('div').setAttribute('data-error-visible', 'true');
};

const setSuccessFor = (input, message) => {
  input.closest('div').setAttribute('data-error-visible', 'false');

  input.closest('div').setAttribute('data-success', message);
  input.closest('div').setAttribute('data-success-visible', 'true');
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const checkFirstName = () => {
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName, 'Il faut renseigner un prénom');
    return false;
  } else if (firstNameValue.length < 2) {
    setErrorFor(firstName, 'Le prénom doit faire au moins 2 caractères');
    return false;
  } else {
    setSuccessFor(firstName, '✔');
    return true;
  }
};

firstName.addEventListener('focusout', function () {
  checkFirstName();
});

const checkLastName = () => {
  const lastNameValue = lastName.value.trim();

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Il faut renseigner un nom');
    return false;
  } else if (lastNameValue.length < 2) {
    setErrorFor(lastName, 'Le nom doit faire au moins 2 caractères');
    return false;
  } else {
    setSuccessFor(lastName, '✔');
    return true;
  }
};

lastName.addEventListener('focusout', function () {
  checkLastName();
});

const checkEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Il faut renseigner un e-mail');
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "L'e-mail n'est pas valide");
    return false;
  } else {
    setSuccessFor(email, '✔');
    return true;
  }
};

email.addEventListener('focusout', function () {
  checkEmail();
});

const checkBirthdate = () => {
  const birthdateValue = birthdate.value.trim();

  if (birthdateValue === '') {
    setErrorFor(birthdate, 'Il faut renseigner une date de naissance');
    return false;
  } else {
    setSuccessFor(birthdate, '✔');
    return true;
  }
};

birthdate.addEventListener('focusout', function () {
  checkBirthdate();
});

const checkTurnaments = () => {
  const turnamentsValue = turnaments.value.trim();

  if (turnamentsValue === '') {
    setErrorFor(turnaments, 'Il faut indiquer le nombre de tournois');
    return false;
  } else {
    setSuccessFor(turnaments, '✔');
    return true;
  }
};

turnaments.addEventListener('focusout', function () {
  checkTurnaments();
});

const checkLocation = () => {
  const locations = document.getElementsByName('location');

  let i = 0;

  while (i < locations.length) {
    if (locations[i].checked) {
      i++;
      document.querySelector('.error-location').style.display = 'none';
      return true;
    } else {
      document.querySelector('.error-form').style.display = 'block';
      document.querySelector('.error-location').style.display = 'block';
      return false;
    }
  }
};

function checkConditions() {
  if (!conditions.checked) {
    document.querySelector('.error-form').style.display = 'block';
    document.querySelector('.error-conditions').style.display = 'block';
    return false;
  } else {
    document.querySelector('.error-conditions').style.display = 'none';
    return true;
  }
}

const validate = () => {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkTurnaments();
  checkLocation();
  checkConditions();
};

form.addEventListener('submit', (e) => {
  if (
    checkFirstName() == false ||
    checkLastName() == false ||
    checkEmail() == false ||
    checkBirthdate() == false ||
    checkTurnaments() == false ||
    checkLocation() == false ||
    checkConditions() == false
  ) {
    e.preventDefault();
  } else {
    e.preventDefault();
    document.querySelector('.content').style.display = 'none';
    modalEnd.style.visibility = 'visible';
  }
});
