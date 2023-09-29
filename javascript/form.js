const form = document.querySelector('form');
const firstnameField = document.getElementById('first');
const lastnameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthdateField = document.getElementById('birthdate');
const quantityField = document.getElementById('quantity');
const conditionsCheckbox = document.getElementById('checkbox1');
const btnRadio = document.querySelectorAll("input[name='location']");

// Fonction générique pour la validation des champs
function validateField(field, errorElement, regex, errorMessage) {
  const value = field.value.trim();
  if (regex.test(value)) {
    errorElement.style.display = 'none';
    field.classList.remove('error');
    return true;
  } else {
    errorElement.style.display = 'block';
    errorElement.innerText = errorMessage;
    field.classList.add('error');
    return false;
  }
}

// Validation du prénom
function checkInputFirst() {
  return validateField(
    firstnameField,
    firsterror,
    /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
    "Veuillez entrer 2 caractères ou plus."
  );
}

// Validation du nom de famille
function checkInputLast() {
  return validateField(
    lastnameField,
    lasterror,
    /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/,
    "Veuillez entrer 2 caractères ou plus."
  );
}

// Validation de l'adresse e-mail
function checkEmail() {
  return validateField(
    emailField,
    emailerror,
    /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    "Veuillez renseigner une adresse mail valide."
  );
}

// Validation de la date de naissance
function checkAge() {
  const birthdate = new Date(birthdateField.value);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();
  if (age >= 18) {
    ageerror.style.display = 'none';
    birthdateField.classList.remove('error');
    return true;
  } else {
    ageerror.style.display = 'block';
    ageerror.innerText = "Vous devez avoir plus de 18 ans pour participer";
    birthdateField.classList.add('error');
    return false;
  }
}

// Validation de la quantité
function checkQuantity() {
  return validateField(
    quantityField,
    quantityerror,
    /^[0-9]{1,2}$/,
    "Veuillez renseigner un nombre entre 0 et 99."
  );
}

// Validation de la sélection de la ville
function checkRadio() {
  const isChecked = Array.from(btnRadio).some((radio) => radio.checked);
  if (isChecked) {
    locationerror.style.display = 'none';
    return true;
  } else {
    locationerror.style.display = 'block';
    locationerror.innerText = "Veuillez sélectionner une ville";
    return false;
  }
}

// Validation de l'acceptation des conditions
function checkCondition() {
  if (conditionsCheckbox.checked) {
    conditionserror.style.display = 'none';
    return true;
  } else {
    conditionserror.style.display = 'block';
    conditionserror.innerText = "Veuillez accepter les termes et conditions.";
    return false;
  }
}

// Écouteurs d'événements pour les champs
firstnameField.addEventListener("change", checkInputFirst);
lastnameField.addEventListener("change", checkInputLast);
emailField.addEventListener("change", checkEmail);
birthdateField.addEventListener("change", checkAge);
quantityField.addEventListener("change", checkQuantity);
btnRadio.forEach((radio) => radio.addEventListener("change", checkRadio));
conditionsCheckbox.addEventListener("change", checkCondition);

// Envoyer le formulaire si tous les conditions sont True 
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (
    checkInputFirst() &&
    checkInputLast() &&
    checkEmail() &&
    checkQuantity() &&
    checkRadio() &&
    checkCondition() &&
    checkAge()
  ) {
    form.reset();
    formBody.style.display = "none";
    formSuccess.style.display = 'block';
  }
});