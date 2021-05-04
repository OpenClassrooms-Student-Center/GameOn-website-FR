// FONCTION POUR AFFICHER LE MENU NAV EN RESPONSIVE

const editNav = (el) => {
  if (el.className === "topnav") {
    el.className += " responsive";
  } else {
    el.className = "topnav";
  }
};

// FONCTION POUR OUVRIR LA MODALE

const launchModal = (el) => (el.style.display = "block");

// FONCTION POUR FERMER LA MODALE

const closeModal = (el) => (el.style.display = "none");

// FONCTION POUR AFFICHER LE BON MESSAGE D ERREUR POUR LE BON INPUT

const editMessage = (paragraphe, classe, msgError, elParent) => {
  // CLASSE => CLASSE CRÉER EN CSS , MSGERROR => MESSAGE QU ON VEUT , ET CONTENEUR
  paragraphe.classList.add(classe); // ON AJOUTE LA CLASSE ( ERREUR OU VALID) CREE EN CSS
  paragraphe.textContent = msgError; // ON INDIQUE LE MESSAGE A METTRE DANS LA BALISE P
  elParent.appendChild(paragraphe); // ON SELECTIONNE LE CONTENEUR POUR PLACER LE PARAGRAPHE AVEC LE MESSAGE
};

export { editNav , launchModal, closeModal, editMessage};