// FONCTION POUR AFFICHER LE MENU NAV EN RESPONSIVE

const EDIT_NAV = el => el.className === "topnav" ? el.className += " responsive" : el.className ="topnav";

// FONCTION POUR OUVRIR LA MODALE

const LAUNCH_MODAL = el => el.style.display = "block";

// FONCTION POUR FERMER LA MODALE

const CLODE_MODAL = el => el.style.display = "none";

// FONCTION POUR AFFICHER LE BON MESSAGE D ERREUR POUR LE BON INPUT
// CLASSE => CLASSE CRÉER EN CSS , MSGERROR => MESSAGE QU ON VEUT , ET CONTENEUR
const EDIT_MESSAGE = (paragraphe, classe, msgError, elParent) => {

  // ON AJOUTE LA CLASSE ( ERREUR OU VALID) CREE EN CSS
  paragraphe.classList.add(classe); 
  
  // ON INDIQUE LE MESSAGE A METTRE DANS LA BALISE P
  paragraphe.textContent = msgError; 
  
  // ON SELECTIONNE LE CONTENEUR POUR PLACER LE PARAGRAPHE AVEC LE MESSAGE
  elParent.appendChild(paragraphe); 
};

export { EDIT_NAV , LAUNCH_MODAL, CLODE_MODAL, EDIT_MESSAGE};