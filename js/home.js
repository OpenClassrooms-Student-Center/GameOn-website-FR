import { closeModal } from "./modal.js";
/**
 * Gestion du menu
 */
const topNav = document.querySelector("#myTopnav");
topNav.querySelector(".nav-burger").addEventListener("click", () => {
  topNav.classList.toggle("responsive");
});

/***
 * Gestion du formulaire et des événements associés
 * (clavier, click, input, etc...)
 */
const signupModal = document.querySelector("#modal-signup"); // Modale de réservation
const signupForm = signupModal.querySelector("form[name=reserve]");
const formDatas = signupForm.querySelectorAll(".formData");

const modalDone = document.querySelector("#modal-done"); // Modale de message
const messageDone = modalDone.querySelector(".message");

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

// Ajout de l'événement "change" aux entrées du formulaire
// de réservation pour afficher ou non les erreurs
// Note: uniquement sur les inputs ayant l'attribut required
for (const formData of formDatas) {
  for (const input of formData.querySelectorAll("input[required]")) {
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
    const input = formData.querySelector("input[required]");
    if (input && (formData.dataset.errorVisible = !input.validity.valid)) {
      errors.push(input);
    }
  }
  if (errors.length === 0) {
    let success;
    // Début du traitement de l'envoie des données du formulaire et réception de
    // la confirmation de la réservation
    // ...
    success = true; // Pour l'instant, on met a "true" pour simuler la réussite
    // ...
    // Fin du traitement
    messageDone.innerHTML = success
      ? "Merci pour votre inscription !"
      : "Désolé, nous n'avons pas vu valider votre réservation !";
    signupModal.close();
    modalDone.showModal();
  } else {
    errors[0].focus();
  }
});

// Ajout du gestionnaire du clavier
window.addEventListener("keyup", ({ key, target }) => {
  switch (key) {
    case "Escape":
      if (target.tagName === "INPUT") {
        target.blur();
      } else {
        closeModal();
      }
      break;
  }
});

// Ajout du gestionnaire du click pour fermer les modales
window.addEventListener("click", ({ target }) => {
  closeModal(target);
});
