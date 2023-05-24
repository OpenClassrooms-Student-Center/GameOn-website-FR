const form = document.querySelector('form');
const validForm = document.querySelector('input[type="submit"]');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

// Protège contre en envois du formulaire par default + appelle fonction de validation
validForm.addEventListener("click", function(event) {
    event.preventDefault();
    validationForm();
});

function validationForm() {
    const inputs = document.querySelectorAll('#first, #last, #email, #birthdate, #quantity, input[name=location], #checkbox1');
    inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            switch (e.target.id) {
                case "first":
                    firstCheck(e.target.value);    
                    break;
                case "last":
                    lastCheck(e.target.value);    
                    break;
                case "email":
                    emailCheck(e.target.value);    
                    break;
                case "birthdate":
                    birthdateCheck(e.target.value);    
                    break;
                case "quantity":
                    quantityCheck(e.target.value);    
                    break;
                case "checkbox1":
                    checkbox1Check(e.target.value);    
                    default: null;
            }
        })
    });
    const firstCheck = (value) => {
        const error = document.querySelector('.first');
        let valid = false;
        if (value.length < 2 || value.trim() === '' || !regex.test(value)) {
            error.setAttribute('data-error-visible', 'true');
        }
        else {
            valid = true;
            error.setAttribute('data-error-visible', 'ok');
        }
        return valid;
    }
    const lastCheck = (value) => {
        const error = document.querySelector('.last');
        let valid = false;
        if (value.length < 2 || value.trim() === '' || !regex.test(value)) {
            error.setAttribute('data-error-visible', 'true');
        }
        else {
            valid = true;
            error.setAttribute('data-error-visible', 'ok');
        }
        return valid;
    }    

    const emailCheck = (value) => {
        const error = document.querySelector('.email');
        let valid = false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error.setAttribute('data-error-visible', 'true');
        }
        else {
            valid = true;
            error.setAttribute('data-error-visible', 'ok');
        }
        return valid;
    } 

    const birthdateCheck = (value) => {
        const error = document.querySelector('.birthdate');
        let valid = false;
        const currentYear = new Date().getFullYear();

        if (!value) {
            error.setAttribute('data-error-visible', 'true');
            error.setAttribute('data-error-1-visible', 'false');
        }
        else {
            error.setAttribute('data-error-visible', 'ok');
            const parts = value.split('/');
            const birthYear = parseInt(parts[0], 10);

            if (currentYear - birthYear < 18) {
                error.setAttribute('data-error-1-visible', 'true');
            } 
            else {
                valid = true;
                error.setAttribute('data-error-1-visible', 'ok');
            }
        }
        return valid;
    }
  
    const quantityCheck = (value) => {
        const error = document.querySelector('.quantity');
        let valid = false;
        if (!value || Number.isInteger(value)) {
            error.setAttribute('data-error-visible', 'true');
        }
        else {
            valid = true;
            error.setAttribute('data-error-visible', 'ok');
        }
        return valid;
    }

    const locationCheck = () => {
        const error = document.querySelector('.location');
        const radios = document.querySelectorAll('input[name = "location"]');
        let valid = false;
        
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valid = true;
                error.setAttribute('data-error-visible', 'ok');
                break;
            } 
        }
            if (!valid){
                error.setAttribute('data-error-visible', 'true');
            }
        
        return valid;
    };

    const checkbox1Check = () => {
        const error = document.querySelector('.condition');
        const checkbox1 = document.querySelector("#checkbox1");
        let valid = false;
        if(!checkbox1.checked) {
            error.setAttribute('data-error-visible', 'true');
        }
        else {
            valid = true;
            error.setAttribute('data-error-visible', 'ok');
        }
        return valid;
    }

    checkbox1Check();

    const formValues = (inputs) => {
        let data = [];
    
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type === "text" || inputs[i].type === "email" || inputs[i].type === "date" || inputs[i].type === "number"
          ) {
            data.push(inputs[i].value);
          }
    
          if (inputs[i].type === "checkbox") {
            let currentValue = "";
    
            if (inputs[i].checked) {
              currentValue = inputs[i].value;
            }
            data.push(currentValue);
          }
        }
        return data;
      };

    const formIsValid = (values) => {
        let validInputs = [];
    
        validInputs.push(firstCheck(values[0]));
        validInputs.push(lastCheck(values[1]));
        validInputs.push(emailCheck(values[2]));
        validInputs.push(birthdateCheck(values[3]));
        validInputs.push(quantityCheck(values[4]));
        validInputs.push(locationCheck(values[4]));
        validInputs.push(checkbox1Check(values[5]));
    
        let isValid = true;
    
        for (let i = 0; i < validInputs.length; i++) {
          if (validInputs[i] === false) {
            isValid = false;
            break;
          }
        }
        return isValid;
      };

      if (formIsValid(formValues(inputs))) {
        console.log('Fomulaire validée');
      }
}
    
