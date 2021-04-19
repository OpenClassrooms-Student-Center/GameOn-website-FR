function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // toute la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton pour ouvrir la modale
const formData = document.querySelectorAll(".formData"); //
const closeBtn = document.querySelector(".close"); // bouton X pour fermer la modale
const contentBg = document.querySelector(".content");
const modalBody = document.querySelector(".modal-body");
const main = document.querySelector("main");
const body = document.querySelector("body");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const allSpan = document.querySelectorAll('span.error-alert'); // span des messages d'erreur
const condUtilisation = document.getElementById("checkbox1"); // checkbox conditions d'utilisation
const confirmationBox = document.querySelector(".confirmation-box")
const exitBtnModal = document.querySelector(".btn-exitModal"); // bouton fermer modal


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    // on remet tout à 0
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    birthDateInput.value = "";
    // on retire la confirmationBox
    confirmationBox.style.display = "none";
    // on affiche le form
    form.style.display = "block";
    // on affiche toute la modal
    modalbg.style.display = "block";
}
// ------------------------------------------------
// FERMETURE DE LA MODALE
// ------------------------------------------------
closeBtn.addEventListener('click', function(event) {
    modalbg.style.display = "none"; // change le style en display: none;
});
exitBtnModal.addEventListener('click', function(event) {
    modalbg.style.display = "none"; // change le style en display: none;
});
// ------------------------------------------------
// VALIDATION / MESSAGES ERREUR
// ------------------------------------------------
document.forms["reserve"].addEventListener("submit", function(e) {
    e.preventDefault();
    let error; // On crée une variable error qui va contenir les différents messages d'erreur
    // traitement cas par cas (input unique)
    // VALIDATION PRENOM
    if(firstNameInput.value == "" || firstNameInput.value.length < 2) { // -------on écrit la condition (si la valeur de l'input est vide ou si inférieur à 2 caractères)
        error = "Veuillez entrer 2 caractères ou plus pour le champ du nom"; // --on indique le message d'erreur correspondant si la condition est true
    };
    if (error) { // -------------------- *** (IF) Si on a bien une erreur: 
        e.preventDefault(); // --------------- j'empeche la soumission du formulaire (comportement par défaut du formulaire)
        allSpan[0].innerHTML = error; // ----- j'affiche l'erreur dans le span correspondant
        return false; // --------------------- On met false pour être sûr que rien ne se passe
    } else { // ------------------------ *** (ELSE) Si on n'a pas d'erreur:
        allSpan[0].innerHTML = ""; // -------- On vide le span
    };

    // VALIDATION NOM
    if(lastNameInput.value == "" || lastNameInput.value.length < 2) {
        error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    };
    if (error) {
        e.preventDefault();
        allSpan[1].innerHTML = error;
        return false;
    } else {
        allSpan[1].innerHTML = "";
    };

    // VALIDATION EMAIL
    const regexEmail = /\S+@\S+\.\S+/; // On définit une variable regex pour la validation des mails
    if(emailInput.value.search(regexEmail) === -1) { // on vérifie que la valeur de l'email ne verifie pas cette regex (ca retourne true dans ce cas)
        error = "Rentrez un email valide"; // on indique le message d'erreur correspondant si la condition est true
    };
    if (error) {
        e.preventDefault();
        allSpan[2].innerHTML = error;
        return false;
    } else {
        allSpan[2].innerHTML = "";
    };

    // VALIDATION BIRTHDAY 
    if(birthDateInput.value == "") { // on vérifie que la valeur de la date de naissance absente (si c'est le cas retourne true)
        error = "Vous devez entrer votre date de naissance";
    };
    if (error) {
        e.preventDefault();
        allSpan[3].innerHTML = error;
        return false;
    } else {
        allSpan[3].innerHTML = "";
    };

    // VALIDATION CONDITIONS GENERALES
    if(!condUtilisation.checked) { // on vérifie que la checkbox n'est pas checkée (si c'est le cas c'est true)
        error = "Vous devez vérifier que vous acceptez les termes et conditions";            
    };
    if (error) {
        e.preventDefault();
        allSpan[5].innerHTML = error;
        return false;
    } else {
        allSpan[5].innerHTML = "";
    }
// ------------------------------------------------
// CONFIRMATION
// ------------------------------------------------
    // On fait disparaitre le form
    form.style.display = "none";
    // On affiche le bouton fermer crée dans l'html
    confirmationBox.style.display = "flex";
    
});


// ------------------------------------------------
// ESSAI
// ------------------------------------------------
// Validation Form

// firstNameInput.addEventListener('input', (e) => {
//     if(e.target.value.length < 2) {
//         allSpan[0].style.display = 'inline';
//     } else {
//         allSpan[0].style.display = 'none';
//     }
// });

// lastNameInput.addEventListener('input', (e) => {
//     if(e.target.value.length < 2) {
//         allSpan[1].style.display = 'inline';
//     } else {
//         allSpan[1].style.display = 'none';
//     }
// });

// emailInput.addEventListener('input', (e) => {
//     const regexEmail = /\S+@\S+\.\S+/;
//     if(e.target.value.search(regexEmail) === 0) {
//         allSpan[2].style.display = 'none';
//     } else if(e.target.value.search(regexEmail) === -1) {
//         allSpan[2].style.display = 'inline';
//     }
// });

// ------------------------------------------------
// ESSAI
// ------------------------------------------------

// function validate(e) {
    // form.addEventListener("submit", function() {
    //     alert('Formulaire envoyé !');
        // e.preventDefault();

        // if (firstNameInput.value == "") {
        //     allSpan[0].innerHTML = 'icoucou';
        // }

    // });
// };


// ---------------------QUESTIONS------------------
// ???? Pourquoi ne fonctionne pas ???? ci-dessus 
// ???? preferer rajouter le contenant du message d'erreur dans le html ou préférer utiliser append child ????

// ---------------------QUESTIONS------------------
// - Est ce que priviligier la validation js uniquement ? ou peut utiliser attribut html ? Impression que attribut html prioritaire ... et que peut pas utiliser les 2 ?
// - onsubmit="return validate(event) ???? faut il englober le code dans cette fonction ?
// - A quoi correspond l'input A combien de tournoi ... ?
// - Vous devez choisir une option ... a quoi correspond ce message d'erreur ??
// - Conseil refacto ...
// - Breakpoints ()