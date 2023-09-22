let form = document.querySelector('form')
let firstnameField = document.getElementById('first')
let lastnameField = document.getElementById('last')
let emailField = document.getElementById('email')
let birthdateField = document.getElementById('birthdate')
let quantityField = document.getElementById('quantity')
let conditionsCheckbox = document.getElementById('checkbox1')
let btnRadio = document.querySelectorAll("input[name='location']")

// check first name
function checkInputFirst() {
    firsterror.style.display = 'none'
    firstnameField.classList.remove('error')
    if (firstnameField.value.length < 2){
        firsterror.style.display = 'block'
        firsterror.innerText = "Veuillez entrer 2 caractères ou plus."
        firstnameField.classList.add('error')
        return false

    } else {
        return true
    }
}

// check last name
function checkInputLast() {
    lasterror.style.display = 'none'
    lastnameField.classList.remove('error')
    if (lastnameField.value.length < 2){
        lasterror.style.display = 'block'
        lasterror.innerText = "Veuillez entrer 2 caractères ou plus."
        lastnameField.classList.add('error')
        return false
    }else {
        return true}
}

// check Email
function checkEmail() {
    let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (regexEmail.test(emailField.value)) {
        emailerror.style.display = 'none'
        emailField.classList.remove('error')
        return true
    }else {
        emailerror.style.display = 'block'
        emailerror.innerText = "Veuillez renseigner une adresse mail valide."
        emailField.classList.add('error')
        return false
    }
}

function checkAge() {
    // Date object
    let birthdate = new Date (birthdateField.value)

    // Get current date
    let currentDate = new Date()

    // Calculate the difference between current date and date of birth
    let age = currentDate.getFullYear() - birthdate.getFullYear()

    // Check if the user is at least 18 years old
    if (age >= 18) {
        ageerror.style.display = 'none'
        birthdateField.classList.remove('error')
        return true
    } else  {
        ageerror.style.display = 'block'
        ageerror.innerText = "Vous devez avoir plus de 18 ans pour participer"
        birthdateField.classList.add('error')
        return false
    }
}

// check Tournaments
function checkQuantity() {
    let regexQuantity = new RegExp("^([0-9]{1,2})$")
    if (regexQuantity.test(quantityField.value)) {
        quantityerror.style.display = 'none'
        quantityField.classList.remove('error')
        return true
        
    }else {
        quantityerror.style.display = 'block'
        quantityerror.innerText = "Veuillez renseigner un nombre entre 0 et 99."
        quantityField.classList.add('error')
        return false
    }
}

// check City
function isRadioChecked() {
    for (let i = 0; i < btnRadio.length; i++) {
        if (btnRadio[i].checked) {
            return true
        }
    }
    return false
}

function checkRadio() {
    const isChecked = isRadioChecked();
    if (isChecked) {
        locationerror.style.display = 'none'
        return true
    } else {
        locationerror.style.display = 'block'
        locationerror.innerText = "Veuillez sélectionner une ville"
        return false
    }
}

function checkCondition(){
    // Check if the conditions checkbox is checked
    if (conditionsCheckbox.checked) {
        conditionserror.style.display = 'none'
        return true
    } else {
        conditionserror.style.display = 'block'
        conditionserror.innerText = "Veuillez accepter les termes et conditions."
        return false
    }

}

// listen input, checkbox and radio buttons
firstnameField.addEventListener("change", () => {
    checkInputFirst()
})

lastnameField.addEventListener("change", () => {
    checkInputLast()
})

emailField.addEventListener("change", () => {
    checkEmail()
})

quantityField.addEventListener("change", () => {
    checkQuantity()
})

birthdateField.addEventListener("change", () => {
    checkAge()
})

btnRadio.forEach((checkedBoxInput) => checkedBoxInput.addEventListener("change", () => {
    checkRadio() 
  }))

conditionsCheckbox.addEventListener("change", () => {
    checkCondition()
})

    // catch the Submit event with preventDefault to prevent the page from reloading
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (
    checkInputFirst() &&
    checkInputLast() &&
    checkEmail() &&
    checkQuantity() &&
    checkRadio() &&
    checkCondition()&&
    checkAge()
    ){
        form.reset();
        formBody.style.display = "none";
        formSuccess.style.display = 'block';
    }else {
        checkInputFirst()
        checkInputLast()
        checkEmail()
        checkQuantity()
        checkRadio()
        checkCondition()
        checkAge()
    }
})



