const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");

function checkForm(e) {
  e.preventDefault();

  console.log("Statut");

  let isFirstNameOk = checkLength(firstName, 2);
  let isLastNameOk = checkLength(lastName, 2);

  if (isFirstNameOk && isLastNameOk) {
    console.log("c'est good");
  }
}

function checkLength(element, length) {
  if (element.value.length < length) {
    firstName.parentElement.setAttribute('data-error-visible', 'true');
    lastName.parentElement.setAttribute('data-error-visible', 'true');

    return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.style.border = 'solid #279e7a 0.19rem';
  firstName.style.border = 'solid #279e7a 0.19rem';
  return true;
}

function checkEmail() {
  const regex = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

  if (email.value.match(regex)) {
      email.parentElement.setAttribute('data-error-visible', 'false');
      email.style.border = 'solid #279e7a 0.19rem';
      return true;
  }
  email.parentElement.setAttribute('data-error-visible', 'true');
  email.style.border = '2px solid #e54858';
  return false;
}

form.addEventListener("submit", checkForm);
form.addEventListener("focusout", checkEmail);

