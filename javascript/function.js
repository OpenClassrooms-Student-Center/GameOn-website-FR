// FONCTION POUR AFFICHER LE MENU NAV EN RESPONSIVE

const edit_nav = el => el.className === "topnav" ? el.className += " responsive" : el.className ="topnav";

// FONCTION POUR OUVRIR LA MODALE

const launch_modal = el => el.style.display = "block";

// FONCTION POUR FERMER LA MODALE

const close_modal = el => el.style.display = "none";

// FONCTION POUR AFFICHER LE BON MESSAGE D ERREUR POUR LE BON INPUT
// CLASSE => CLASSE CRÉER EN CSS , MSGERROR => MESSAGE QU ON VEUT , ET CONTENEUR
const edit_message = (paragraphe, classe, msgError, elParent) => {

  // ON AJOUTE LA CLASSE ( ERREUR OU VALID) CREE EN CSS
  paragraphe.classList.add(classe); 
  
  // ON INDIQUE LE MESSAGE A METTRE DANS LA BALISE P
  paragraphe.textContent = msgError; 
  
  // ON SELECTIONNE LE CONTENEUR POUR PLACER LE PARAGRAPHE AVEC LE MESSAGE
  elParent.appendChild(paragraphe); 
};

export { edit_nav , launch_modal, close_modal, edit_message};