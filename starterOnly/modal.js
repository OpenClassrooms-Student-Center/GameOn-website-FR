/***
 * Mise en place de la gestion des modales
 */

// Ajout d'événement personnalisés pour "open" et
// "close" afin de gérer l'ouverture et/ou la formeture
// d'une modale (par exemple, pour initialiser un
// formulaire)
const openEvent = new CustomEvent("open");
const closeEvent = new CustomEvent("close");

const observer = new MutationObserver((records) => {
  for (const { target } of records) {
    if (target.getAttribute("open") === "true") {
      target.classList.add("show");
      target.dispatchEvent(openEvent);
    } else {
      target.classList.remove("show");
      target.dispatchEvent(closeEvent);
    }
  }
});

const options = {
  attributeFilter: ["open"],
  attributes: true,
};

for (const modal of document.querySelectorAll(".modal")) {
  // Valeur par défaut de la "propriété" open (qui sera
  // également l'attribut)
  modal.open = false;

  // On ajoute un "oservateur" sur la modale
  observer.observe(modal, options);

  // Ajout de getter et setter pour l'attribut "open" aux
  // modales
  Object.defineProperty(modal, "open", {
    enumerable: true,
    configurable: true,
    get: function () {
      return this.getAttribute("open");
    },
    set: function (value) {
      this.setAttribute("open", value);
    },
  });

  // Ajout de méthode aux showModal() et close() aux
  // modales
  modal.showModal = function () {
    this.open = true;
  };
  modal.close = function () {
    this.open = false;
  };
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
      target.showModal();
    });
  }
}

/***
 * Mise en place de la Fermeture des modales en fonction de l'emplacement
 * des "boutons" avec dismiss
 */
for (const element of document.querySelectorAll("[data-dismiss=modal]")) {
  const target = element.closest(".modal");
  if (target) {
    element.addEventListener("click", (e) => {
      target.close();
    });
  }
}

/***
 * Ajout d'événement sur différents éléments du DOM
 */
const topNav = document.querySelector("#myTopnav");

const signupModal = document.querySelector("#modal-signup"); // Modale de réservation
const signupForm = signupModal.querySelector("form[name=reserve]");
const formDatas = signupForm.querySelectorAll(".formData");

const modalDone = document.querySelector("#modal-done"); // Modale de réussite
const messageDone = modalDone.querySelector(".message");

// Affectation d'un EventListener "click" à tout les .nav-burger
// permettant d'afficher le menu responsive
topNav.querySelector(".nav-burger").addEventListener("click", () => {
  topNav.classList.toggle("responsive");
});

// Ajout de l'événement "change" aux entrées du formulaire
// de réservation pour afficher ou non les erreurs
// Note: uniquement sur les inputs ayant l'attribut required
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
    signupModal.close();
    messageDone.innerHTML = success
      ? "Merci pour votre inscription !"
      : "Désolé, nous n'avons pas vu valider votre réservation !";
    modalDone.showModal();
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
          if (modal.open) {
            modal.close();
          }
      }
      break;
  }
});

// Ajout du gestionnaire du click pour fermer les modales
window.addEventListener("click", ({ target }) => {
  if (target.classList.contains("modal") && target.open) {
    target.close();
  }
});
