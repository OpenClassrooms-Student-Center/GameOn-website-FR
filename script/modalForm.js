const form = document.querySelector('form');
const validForm = document.querySelector('input[type="submit"]');

// Protège contre en envois du formulaire par default + appelle fonction de validation
validForm.addEventListener("click", function(event) {
    event.preventDefault();
    validationForm();
});

function validationForm() {
    const inputs = document.querySelectorAll('#first, #last, #email, #birthdate, #quantity, #checkbox1');
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
        let valid = false;
        if (value.length < 2 || value.trim() === '') {
             console.log('erreur nom');
        }
        else {
            valid = true;
        }
        return valid;
    }
    
    const lastCheck = (value) => {
        let valid = false;
        if (value.length < 2 || value.trim() === '') {
            console.log('erreur prenom');
        }
        else {
            valid = true;
        }
        return valid;
    }    

    const emailCheck = (value) => {
        let valid = false;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            console.log('erreur mail'); 
        }
        else {
            valid = true;
        }
        return valid;
    } 

    const birthdateCheck = (value) => {
        let valid = false;
        const currentYear = new Date().getFullYear();

        if (!value) {
            console.log('erreur date');
        }

        else {
            const parts = value.split('/');
            const birthYear = parseInt(parts[0], 10);

            if (currentYear - birthYear < 18) {
                console.log('mineur');
            } 
            else {
                valid = true;
            }
        }

        return valid;
    }
  
    const quantityCheck = (value) => {
        let valid = false;
        if (!value || Number.isInteger(value)) {
            console.log('erreur quantité');
        }
        else {
            valid = true;
        }
        return valid;
    }

    const locationCheck = () => {
        const radios = document.querySelectorAll('input[name = "location"]');
        let valid = false;
        
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                valid = true;
                break;
            } 
        }
            if (!valid){
                console.log('erreur cheeckbox')
            }
        
        return valid;
    };
    
    locationCheck();
}
    
