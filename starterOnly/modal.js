// Ajout d'événement personnalisés pour "open" et
// "close" afin de gérer l'ouverture et/ou la formeture
// d'une modale (par exemple, pour initialiser un
// formulaire)
const openEvent = new CustomEvent("open");
const closeEvent = new CustomEvent("close");

const observer = new MutationObserver((records) => {
  for (const { attributeName, target } of records)
    if (attributeName === "open")
      target.dispatchEvent(
        target.getAttribute("open") == "true" ? openEvent : closeEvent
      );
});

for (const element of document.querySelectorAll(".modal"))
  observer.observe(element, { attributes: true });

// Functions pour gérer les modales
function showModal(modal) {
  modal.classList.add("show");
  modal.setAttribute("open", true);
}

function closeModal(modal) {
  modal.setAttribute("open", false);
  modal.classList.remove("show");
}

function toggleModal(modal) {
  if (isShow(modal)) {
    showModal(modal);
  } else {
    closeModal(modal);
  }
}

function isShow(modal) {
  return modal.classList.contains("show");
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
      showModal(target);
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

// DOM Elements
const topNav = document.querySelector("#myTopnav");

const signupModal = document.querySelector("#modal-signup");
const signupForm = signupModal.querySelector("form[name=reserve]");
const formDatas = signupForm.querySelectorAll(".formData");

const modalDone = document.querySelector("#modal-done");
const modalError = document.querySelector("#modal-error");

// Affectation d'un EventListener "click" à tout les .nav-burger
// permettant d'afficher le menu responsive
topNav.querySelector(".nav-burger").addEventListener("click", () => {
  topNav.classList.toggle("responsive");
});

// Ajout de l'événement "change" aux entrées du formulaire
// de réservation pour afficher ou non les erreurs
for (const formData of formDatas) {
  for (const input of formData.querySelectorAll("input")) {
    if (input.required)
      input.addEventListener("change", ({ target }) => {
        formData.dataset.errorVisible = !target.validity.valid;
      });
  }
}

// Affectation d'un EventListener "submit" au formulaire de
// réservation pour vérifier la validité
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];
  for (const formData of formDatas) {
    const input = formData.querySelector("input");
    if (
      input?.required &&
      (formData.dataset.errorVisible = !input.validity.valid)
    ) {
      errors.push(input);
    }
  }
  if (errors.length === 0) {
    let success;
    // Début du traitement de l'envoie des données du formulaire et réception de
    // la confirmation de la réservation
    // ...
    success = true; // Pour l'instant, on met a "true" pour simulier la réussite
    // ...
    // Fin du traitement
    closeModal(signupModal);
    if (success) {
      showModal(modalDone);
    } else {
      showModal(modalError);
    }
  } else {
    errors[0].focus();
  }
});

// Ajout de l'événement "open" (c'est un évenement personalisé)
// lorsque la modale s'ouvre pour initialiser le formulaire de
// Réservation
signupModal.addEventListener("open", (e) => {
  signupForm.reset();
  for (const formData of formDatas) {
    formData.dataset.errorVisible = false;
  }
  const maxBirthdate = new Date();
  maxBirthdate.setFullYear(maxBirthdate.getFullYear() - 18);
  signupForm.birthdate.max = maxBirthdate.toISOString().slice(0, 10);
});

// Ajout du gestionnaire du clavier
window.addEventListener("keyup", ({ key, target }) => {
  switch (key) {
    case "Escape":
      if (target.tagName === "INPUT") {
        target.blur();
      } else {
        for (const modal of document.querySelectorAll(".modal"))
          if (isShow(modal)) {
            closeModal(element);
          }
      }
      break;
  }
});

// Ajout du gestionnaire du click pour fermer les modales
window.addEventListener("click", ({ target }) => {
  if (target.classList.contains("modal")) {
    closeModal(target);
  }
});
