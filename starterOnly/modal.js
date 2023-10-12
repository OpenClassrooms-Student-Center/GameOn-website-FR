// DOM Elements
const topNav = document.querySelector("#myTopnav");

const signupModal = document.querySelector("#modal-signup");
const signupForm = signupModal.querySelector("form[name=reserve]");
const formData = signupForm.querySelectorAll(".formData");

const modalDone = document.querySelector("#modal-done");

const modalBtn = document.querySelectorAll(".btn-signup");
const closeBtn = document.querySelectorAll(".modal-close, .btn-close");

/**
 * Démarre une modale
 *
 * Assure que la modale soit initialisé a chaque lancement,
 * si c'est nécesaire.
 *
 **/
function launchModal(modal) {
  if (modal.init) {
    modal.init(modal);
  }
  modal.classList.add("open");
}

/**
 * Ferme une modale
 *
 * Permet le lancement d'un animation pour lors de la fermeture
 * de la modale
 */
function closeModal(modal, animate = true) {
  if (modal) {
    if (animate) {
      modal.classList.add("close");
      modal.addEventListener(
        "animationend",
        (e) => {
          modal.classList.remove("open");
          modal.classList.remove("close");
        },
        { once: true }
      );
    } else {
      modal.classList.remove("open");
    }
  }
}

/**
 * Initialisation du formulaire de réservation
 *
 * Permet d'initialiser le formulaire de réservation, afin de
 * revenir a son état d'origine, tout en assurant que la date
 * maximum soit actualisée (vérification de l'âge)
 *
 */
function initForm(modal) {
  signupForm.reset();
  formData.forEach((element) => {
    element.dataset.errorVisible = false;
  });
  const max = new Date();
  max.setFullYear(max.getFullYear() - 18);
  signupForm.birthdate.max = max.toISOString().slice(0, 10);
}

/**
 * Vérification des données du formulaire
 *
 * Permet de vérifier la validatité d'un formulaire, en se
 * basant sur la présence de l'attribut required, et de la
 * propriété validity des <input>, ainsi, il suffit de
 * spécifier les contraintes directement dans le code HTML
 * quand c'est nécessaire (min, max, pattern, etc...)
 *
 * Permet également d'afficher les messages d'erreurs
 *
 */
function formValidate(e) {
  e.preventDefault();
  const errors = [];
  formData.forEach((element) => {
    const input = element.querySelector("input");
    if (
      input?.required &&
      (element.dataset.errorVisible = !input.validity.valid)
    ) {
      errors.push(input);
    }
  });
  if (errors.length === 0) {
    // ...
    closeModal(signupModal);
    launchModal(modalDone);
  } else {
    errors[0].focus();
  }
}

/**
 * Gestionnaire des événements clavier
 *
 */
function keyupEvent(e) {
  console.log("Key", e.key);
  switch (e.key) {
    case "Escape":
      document.querySelectorAll(".modal").forEach((element) => {
        if (element.classList.contains("open")) {
          closeModal(element);
        }
      });
      break;
  }
}

// Affectation d'un EventListener "click" à tout les .nav-burger
// permettant d'afficher le menu responsive
topNav.querySelector(".nav-burger").addEventListener("click", () => {
  topNav.classList.toggle("responsive");
});

// Affectation d'un EventListener "click" à tout les boutons
// permettant de lancer la modale de réservation
modalBtn.forEach((element) =>
  element.addEventListener("click", (e) => {
    launchModal(signupModal);
  })
);

// Affectation d'un EventListener "click" à tout les boutons
// permettant de fermer une modale
closeBtn.forEach((element) =>
  element.addEventListener("click", (e) => {
    closeModal(e.target?.closest(".modal"));
  })
);

// Affectation d'un EventListener "submit" au formulaire de
// réservation
signupForm.addEventListener("submit", formValidate);
signupModal.init = initForm;

// Ajout du gestionnaire du clavier
document.addEventListener("keyup", keyupEvent);
