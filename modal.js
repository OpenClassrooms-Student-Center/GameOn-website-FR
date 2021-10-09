function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const content = document.querySelector('.content');
const content_valid = document.querySelector('.content-valid');
const date = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const hero_section = document.querySelector('.hero-section');
const topnav = document.querySelector('.topnav');
const footer = document.querySelector('footer');
const confirmed = document.querySelector('.confirmed');

content_valid.style.display = "none";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// fermer formulaire
function closeForm() {
    form.style.display = "none";
}

// fermer la confirmation
function closeConfirmation() {
    content_valid.style.display = "none";
    modalbg.style.display = 'none';
    hero_section.style.display = 'initial';
    topnav.style.display = "initial";
    footer.style.display = "initial";
}

// verification du nom et prénom
function checkFirstAndLastName(input, type) {
    const regex = /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
    const input_value = input.value;
    const test = regex.test(input_value);
    if (test) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        if (type == 'first') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        }
        if (type == 'last') {
            input.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        }
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

// verification de l'adresse email
function checkEmail(input) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = regex.test(input.value)
    if (test) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        input.parentElement.setAttribute('data-error', 'Vous devez entrer une adresse email valide.');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

// verification de la date de naissance
function checkBirthdate(input) {
    if (input.value) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    } else {
        input.parentElement.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
        input.parentElement.setAttribute('data-error-visible', true);
    }
}

// verification du nombre
function checkQuantity(input) {
    if (input.value) {
        input.parentElement.removeAttribute('data-error');
        input.parentElement.removeAttribute('data-error-visible');
    }
}

// fonction de la validation
function validate() {
    const radio_value = document.querySelector('input[name="location"]:checked');
    if (radio_value == null) {
        const radio_parent = document.querySelector('input[name="location"]').parentNode;
        radio_parent.setAttribute('data-error', 'Vous devez choisir une option.');
        radio_parent.setAttribute('data-error-visible', true);
    }
    const check_value = document.getElementById('checkbox1').checked;
    if (check_value == false) {
        const check_parent = document.querySelector('input[id="checkbox1"]').parentNode;
        check_parent.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
        check_parent.setAttribute('data-error-visible', true);
    }
    const date = document.getElementById('birthdate').value;
    if (date == '') {
        const date_parent = document.querySelector('input[id="birthdate"]').parentNode;
        date_parent.setAttribute('data-error', 'Vous devez entrer votre date de naissance.');
        date_parent.setAttribute('data-error-visible', true);
    }
    const quantity = document.getElementById('quantity').value;
    if (!quantity) {
        const quantity_parent = document.querySelector('input[id="quantity"]').parentNode;
        quantity_parent.setAttribute('data-error', 'Vous devez entrer un nombre.');
        quantity_parent.setAttribute('data-error-visible', true);
    }
    const first = document.getElementById('first').value;
    if (!first) {
        const first_parent = document.querySelector('input[id="first"]').parentNode;
        first_parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        first_parent.setAttribute('data-error-visible', true);
    }
    const last = document.getElementById('last').value;
    if (!last) {
        const last_parent = document.querySelector('input[id="last"]').parentNode;
        last_parent.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        last_parent.setAttribute('data-error-visible', true);
    }
    const email = document.getElementById('email').value;
    if (!email) {
        const email_parent = document.querySelector('input[id="email"]').parentNode;
        email_parent.setAttribute('data-error', 'Vous devez entrer une adresse email valide.');
        email_parent.setAttribute('data-error-visible', true);
    }
    if (radio_value !== null && check_value !== false && date !== '' && quantity && first && last && email) {
        console.log("valid true");
        return true;
    } else {
        console.log("valid false");
    }
}

// déclenchement de l'événement de la validation du formulaire
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validate() == true) {
        modalbg.style.display = 'none';
        hero_section.style.display = 'none';
        content_valid.style.display = "initial";
        confirmed.style.color = "white";
        confirmed.style.display = "flex"
        confirmed.setAttribute('confirmed', true);
        topnav.style.display = "none";
        footer.style.display = "none";
        document.querySelector('form').reset();
        const check_parent = document.querySelector('input[id="checkbox1"]').parentNode;
        check_parent.removeAttribute('data-error');
        check_parent.removeAttribute('data-error-visible');
    }
})

// fermer la confirmation
function closeConfirmation() {
    hero_section.style.display = 'grid';
    content_valid.style.display = "none"
    confirmed.style.display = "none";
    topnav.style.display = "initial";
    footer.style.display = "initial";
}