// On récupère les élements du DOM nécessaires
const modalBackground = document.querySelector(".modalBackground"),
  modalBtn = document.querySelector(".modal-btn"),
  heroBtn = document.querySelector(".heroBtn"),
  modalBody = document.querySelector(".modalBody"),
  mainNavBar = document.querySelector(".main-navbar"),
  closeFormCross = document.querySelector(".closeFormCross"),
  icon = document.querySelector(".icon"),
  formData = document.querySelectorAll(".formData"),
  signupForm = document.querySelector("#signupForm"),
  firstname = document.querySelector("#firstname"),
  lastname = document.querySelector("#lastname"),
  email = document.querySelector("#email"),
  birthdate = document.querySelector("#birthdate"),
  quantity = document.querySelector("#quantity"),
  terms = document.querySelector("#terms"),
  errorMsg = document.querySelectorAll(".errorMsg"),
  errorOptionMsg = document.querySelector(".errorOptionMsg"),
  newsletter = document.querySelector("#newsletter");

// On déclare le template du menu en vue mobile
const navTemplate = `
    <a href="#" class="active"><span>Accueil</span></a>
    <a href="#"><span>Détails de l'évènement</span></a>
    <a href="#"><span>À propos</span></a>
    <a href="#"><span>Contact</span></a>
    <a href="#"><span>Évènements passés</span></a>
  `;

// On écoute le click sur l'icône de menu en vue mobile pour ouvrir et fermer le menu
icon.addEventListener("click", () => {
  let navWrapper = document.getElementById("navWrapper");
  if (navWrapper !== null) {
    navWrapper.remove();
  } else {
    const ul = document.createElement("ul");
    ul.className = "navWrapper";
    ul.id = "navWrapper";
    ul.innerHTML = navTemplate;
    mainNavBar.appendChild(ul);
    closeOnOut();
  }
});

/**
 * Permet de fermer le menu en vue mobile lorsque la souris sort du menu
 */
function closeOnOut() {
  let nav = document.querySelector("#navWrapper");
  nav.addEventListener("mouseleave", () => {
    nav.remove();
  });
}

// Ecoute le click pour ouvrir la modale de formulaire
heroBtn.addEventListener("click", openModal);

// Ecoute le click pour fermer la modale de formulaire
closeFormCross.addEventListener("click", closeModal);

/**
 * Permet d'ajouter la classe visible à la modale pour la faire apparaître
 */
function openModal() {
  modalBackground.classList.add("visible");
}

/**
 * Permet de retirer la classe visible à la modale pour la faire disparaître
 */
function closeModal() {
  modalBackground.classList.remove("visible");
}

// On récupère les champs de formulaire à vérifier
const inputs = [firstname, lastname, email, birthdate, quantity, terms];

// On boucle sur les champs de formulaire pour vérifier la validité
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", () => {
    // Si ce n'est pas valide, on affiche le message d'erreur et on change l'affichage du champs
    if (!inputs[i].validity.valid) {
      errorMsg[i].classList.remove("hidden");
      inputs[i].classList.remove("valid");
      inputs[i].classList.add("invalid");
    } 
    // Si c'est valide, on retire le message d'erreur et on change l'affichage du champs
    else {
      inputs[i].classList.remove("invalid");
      inputs[i].classList.add("valid");
      errorMsg[i].classList.add("hidden");
    }
  });
}

// On récupère les choix de villes du formulaire
let choice,
  option = document.querySelectorAll(".option"),
  isChecked = false;

// On écoute le click sur toutes les options, on passe isChecked à true dès qu'il y a au moins un click et on enregiste le nom de la ville choisie 
for (let i = 0; i < option.length; i++) {
  const elt = option[i];
  elt.addEventListener("click", () => {
    isChecked = option[i].checked;
    choice = option[i].value;
  });
}

/**
 * Permet de vérifier si tous les champs requis sont valides
 *
 * @return  {Boolean}  true si tous les champs sont valides, sinon false
 */
function checkForm() {
  if (
    firstname.validity.valid &&
    lastname.validity.valid &&
    email.validity.valid &&
    birthdate.validity.valid &&
    quantity.validity.valid &&
    isChecked &&
    terms.checked
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Permet de sauvegarder les infos du formulaire si tous les champs sont valides
 * Affiche ensuite un message de remerciement
 */
function submitForm() {
  event.preventDefault();
  if (checkForm()) {
    const infos = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      birthdate: birthdate.value,
      quantity: quantity.value,
      option: choice,
      terms: terms.checked,
      newsletter: newsletter.checked,
    };
    console.log(infos);
    signupForm.reset();
    modalBody.innerHTML = `
    <div class="modal-body-container">
    <div class="thanks-container">
    <p>Merci !</p>
    <p>Votre réservation a été reçue.</p>
    </div>
    <button class="heroBtn modal-btn thanksCloseBtn" id="closingBtn" onclick="closeModal()">
    Fermer
    </button>
    </div>
    `;
  } else if (!checkForm() && !isChecked) {
    errorOptionMsg.classList.remove("hidden");
  } else {
    console.log("oops une erreur");
  }
}