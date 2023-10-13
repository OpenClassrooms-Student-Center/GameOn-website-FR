const openEvent = new CustomEvent("open");
const closeEvent = new CustomEvent("close");

const observer = new MutationObserver((records) => {
  for (const { attributeName, target } of records) {
    if (attributeName === "open") {
      if (target.getAttribute("open") == "true") {
        target.dispatchEvent(openEvent);
      } else {
        target.dispatchEvent(closeEvent);
      }
    }
  }
});

// DOM Elements
const topNav = document.querySelector("#myTopnav");

const signupModal = document.querySelector("#modal-signup");
const signupForm = signupModal.querySelector("form[name=reserve]");
const formData = signupForm.querySelectorAll(".formData");

const modalDone = document.querySelector("#modal-done");

/**
 * Démarre une modale
 *
 * Assure que la modale soit initialisé a chaque lancement,
 * si c'est nécesaire.
 *
 **/
function launchModal(modal) {
  modal.classList.add("show");
  modal.setAttribute("open", true);
}

/**
 * Ferme une modale
 *
 * Permet le lancement d'un animation pour lors de la fermeture
 * de la modale
 */
function closeModal(modal) {
  modal.setAttribute("open", false);
  modal.classList.remove("show");
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
  console.log("Init");
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

for (const element of document.querySelectorAll(".modal")) {
  observer.observe(element, { attributes: true });
}

/***
 * Mise en place du lancement des modales en fonction des cibles
 * des "boutons" avec le toggle=modal
 */
for (const element of document.querySelectorAll(
  "[data-toggle=modal][data-target]"
)) {
  const target = document.querySelector(element.dataset.target);
  if (target && target.classList.contains("modal")) {
    element.addEventListener("click", (e) => {
      launchModal(target);
    });
  }
}

/***
 * Fermeture des modales
 */
for (const element of document.querySelectorAll("[data-dismiss=modal]")) {
  const target = element.closest(".modal");
  if (target) {
    element.addEventListener("click", (e) => {
      closeModal(target);
    });
  }
}

/**
 * Gestionnaire des événements clavier
 *
 */
function keyupEvent(e) {
  switch (e.key) {
    case "Escape":
      document.querySelectorAll(".modal").forEach((element) => {
        if (element.classList.contains("show")) {
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

// Affectation d'un EventListener "submit" au formulaire de
// réservation
signupForm.addEventListener("submit", formValidate);
signupModal.addEventListener("open", initForm);
//signupModal.init = initForm;

// Ajout du gestionnaire du clavier
document.addEventListener("keyup", keyupEvent);

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("change", (e) => {
    console.log(e.target.validity);
    if (e.target.validity.valid) {
      e.target.closest(".formData").dataset.errorVisible = false;
    }
  });
});
