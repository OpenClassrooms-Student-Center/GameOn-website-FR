// Form
    const form = document.querySelector('form');
    const firstnameField = document.getElementById('first');
    const lastnameField = document.getElementById('last');
    const emailField = document.getElementById('email');
    const birthdateField = document.getElementById('birthdate');
    const quantityField = document.getElementById('quantity');
    const conditionsCheckbox = document.getElementById('checkbox1');
    const locations = document.querySelectorAll("input[name='location']");

// Messages errors
    const errorMessages = {
        name: "Il doit être composé de deux lettres minimum et cinquantes lettres maximum.",
        email: "L'adresse e-mail est incorrecte. Elle doit être au format : utilisateur@service.com.",
        quantity: 'Le nombre de tournois doit être compris entre 0 et 99.',
        birthdate: 'Vous devez etre majeur pour participer.',
        city: 'Vous devez choisir une ville pour vous inscrire.',
        conditions: "Vous devez accepter les conditions d'utilisation.",
    }

// Regular Expressions
    const regExpName = new RegExp(`^[a-zA-Z]{2,50}$`);
    const regExpEmail = new RegExp(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$`);
    const RegExpQuantity = new RegExp(`^(?:[0-9]|[1-9][0-9])$`);

// display error messages
  function errorMessageVisible(input, message) {
    let existingErrorField = input.parentNode.querySelector('.error-field');
    if (existingErrorField) {
      existingErrorField.textContent = message; // Update the existing error message
    } else {
      let errorField = document.createElement('div');
      errorField.className = 'error-field'
      errorField.textContent = message
      input.parentNode.appendChild(errorField)
    }
  }

// Remove error messages
function removeErrorMessage(input) {
  const existingErrorField = input.parentNode.querySelector('.error-field');
  if (existingErrorField) {
    existingErrorField.remove();
  }
}

//Functions

    // Check input values
      function checkInputValue(regex, input, errorMessage ) {
        if (!regex.test(input.value)) {
          errorMessageVisible(input, errorMessage)
          return false;
        }
        removeErrorMessage(input)
        return true;
      }

      // Check birthdate value
      function checkBirthdateValue(input, errorMessage) {
          let birthdate = new Date(input.value);
          let difference = Date.now() - birthdate.getTime();
          difference = new Date(difference);
          let userAge = difference.getFullYear() - 1970;

          // Check if userAge <18 and the value of the input is empty or not provided (or if the value cannot be converted into a valid date).
          if (userAge < 18 || isNaN(birthdate.getTime())) {
              errorMessageVisible(input, errorMessage)
              return false;
          }
          removeErrorMessage(input)
        return true;
      }

    // Check selection of the tournament's city
    function checkLocations(locations, errorMessage) {
        let anyChecked = false;

        for (let location of locations) {
            if (location.checked) {
                anyChecked = true;
                break; // Exit the loop if a checkbox is checked
            }
        }
        // If no checkboxes are checked, display the error message
            if (!anyChecked) {
                errorMessageVisible(locations[0], errorMessage);
                return false;
            }
        // If at least one checkbox is checked, remove the error message
            removeErrorMessage(locations[0]);
            return true;
    }

    // Check checkbox conditions
        function checkConditions(input, errorMessage) {
            if (!input.checked) {
                errorMessageVisible(input, errorMessage)
                return false;
            }
            return true;
        }

// Form validation
  function validateForm() {

      let firstnameValid = checkInputValue(regExpName, firstnameField, errorMessages.name)
      let lastnameValid = checkInputValue(regExpName, lastnameField, errorMessages.name)
      let emailValid = checkInputValue(regExpEmail, emailField, errorMessages.email)
      let birthdateValid = checkBirthdateValue(birthdateField, errorMessages.birthdate )
      let quantityValid = checkInputValue(RegExpQuantity, quantityField, errorMessages.quantity)
      let locationvalid = checkLocations(locations, errorMessages.city)
      let conditionsChecked = checkConditions(conditionsCheckbox, errorMessages.conditions)

      return firstnameValid && lastnameValid && emailValid && birthdateValid && quantityValid && locationvalid && conditionsChecked
  }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
          alert("Merci ! Votre réservation a bien été reçue.")
        }
    });
