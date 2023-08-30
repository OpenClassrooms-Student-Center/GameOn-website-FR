// Form
    const form = document.querySelector('form');
    const firstnameField = document.getElementById('first');
    const lastnameField = document.getElementById('last');
    const emailField = document.getElementById('email');
    const quantityField = document.getElementById('quantity');
    const conditionsCheckbox = document.getElementById('checkbox1');
    const locations = document.querySelectorAll("input[name='location']");

// Messages errors
    const errorMessages = {
        name: "Il doit être composé de deux lettres minimum et cinquantes lettres maximum minuscules ou majuscules.",
        email: "L'adresse e-mail est incorrecte. Elle doit être au format : utilisateur@service.com.",
        quantity: 'Le nombre de tournois doit être compris entre 0 et 99.',
        city: 'Vous devez choisir une ville pour vous inscrire.',
        conditions: "Vous devez accepter les conditions d'utilisation.",
    }

// Regular Expressions
    const regExpName = new RegExp(`^[a-zA-Z]{2,50}$`);
    const regExpEmail = new RegExp(`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$`);
    const RegExpQuantity = new RegExp(`^(?:[0-9]|[1-9][0-9])$`);



//Functions

    // Check input values
      function checkInputValue(regex, input, errorMessage ) {
        if (!regex.test(input.value)) {
          alert(errorMessage)
          return false;
        }
        return true;
      }

    // Check checkbox conditions
      function checkConditions(input, errorMessage) {
          if (!input.checked) {
            alert(errorMessage)
            return false;
          }
          return true;
        }

    // Check selection of the tournament's city
      function checkLocations(locations, errorMessage) {
          for (let location of locations) {
            if (location.checked) {
              return true;
            }
          }
          alert(errorMessage)
          return false;
        }

// Form validation
  function validateForm() {

      let firstnameValid = checkInputValue(regExpName, firstnameField, errorMessages.name)
      let lastnameValid = checkInputValue(regExpName, lastnameField, errorMessages.name)
      let emailValid = checkInputValue(regExpEmail, emailField, errorMessages.email)
      let quantityValid = checkInputValue(RegExpQuantity, quantityField, errorMessages.quantity)
      let locationvalid = checkLocations(locations, errorMessages.city)
      let conditionsChecked = checkConditions(conditionsCheckbox, errorMessages.conditions)

      console.log(firstnameValid)

      return firstnameValid && lastnameValid && emailValid && quantityValid && locationvalid && conditionsChecked
  }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Avant")
        if (validateForm()) {
          alert("Merci ! Votre réservation a bien été reçue.")
        } else {
          console.log("Merci ! Votre réservation")
        }
    });
