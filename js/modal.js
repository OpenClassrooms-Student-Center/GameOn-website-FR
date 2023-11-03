// Ajout d'événement personnalisés pour "open" et
// "close" afin de gérer l'ouverture et/ou la formeture
// d'une modale (par exemple, pour initialiser un
// formulaire)
const openEvent = new CustomEvent("open");
const closeEvent = new CustomEvent("close");

const observer = new MutationObserver((records) => {
  for (const { target } of records) {
    if (target.hasAttribute("open")) {
      target.classList.add("show");
      target.dispatchEvent(openEvent);
    } else {
      target.dispatchEvent(closeEvent);
      target.classList.remove("show");
    }
  }
});

const options = {
  attributeFilter: ["open"],
  attributes: true,
};

const attributes = {
  enumerable: true,
  configurable: true,
  get: function () {
    return this.hasAttribute("open");
  },
  set: function (value) {
    if (value === true) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  },
};

for (const modal of document.querySelectorAll(".modal")) {
  // On ajoute un "oservateur" sur la modale
  observer.observe(modal, options);

  // Ajout de getter et setter pour la propriété "open"
  Object.defineProperty(modal, "open", attributes);

  // Ajout des méthodes showModal() et close()
  modal.showModal = function () {
    this.open = true;
  };
  modal.close = function () {
    this.open = false;
  };
}

// Fonction qui ferme toutes les modales qui sont "open"
export function closeModalAll() {
  let counter = 0;
  for (const modal of document.querySelectorAll(".modal[open]")) {
    modal.close();
    counter++;
  }
  return counter;
}

// Fonction qui ferme toutes les modales ciblées par un sélecteur CSS
export function closeModalBySelector(selectors) {
  let counter = 0;
  for (const element of document.querySelector(selectors)) {
    counter += closeModalByElement(element);
  }
  return counter;
}

// Fonction qui ferme une modale clibé par un élément (HTMLElement)
export function closeModalByElement(element) {
  if (element.classList.contains("modal") && element.open) {
    element.close();
    return 1;
  }
  return 0;
}

// Fonction polyvalente permettant de fermer la/lesa modale(s),
// soit en le(s) ciblant avec un sélecteur CSS, soit par un
// HTMLElement ou TOUS !
export function closeModal(target = null) {
  if (target === null) {
    return closeModalAll();
  }
  if (typeof target === "string" || target instanceof String) {
    return closeModalBySelector(target);
  }
  if (target instanceof HTMLElement) {
    return closeModalByElement(target);
  }
  console.error(
    "closeModal: Target doit cibler un élément du DOM, ou un sélecteur CSS ou être null !"
  );
  return -1;
}

// Mise en place du lancement des modales en fonction des cibles
// des "boutons" ayant l'attribut data-toggle=modal
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

// Mise en place de la Fermeture des modales en fonction de l'emplacement
// des "boutons" ayant l'attribut data-dismiss
for (const element of document.querySelectorAll("[data-dismiss=modal]")) {
  const target = element.closest(".modal");
  if (target) {
    element.addEventListener("click", (e) => {
      target.close();
    });
  }
}
