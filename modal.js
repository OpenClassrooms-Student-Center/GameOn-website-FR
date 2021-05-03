import { domElement, allRegex, displayMessage} from "./objetjs.js";

// FONCTION POUR AFFICHER LE MENU EN RESPONSIVE

const editNav = () => {
  if (domElement.actionModal.className === "topnav") {
    domElement.actionModal.className += " responsive";
  } else {
    domElement.actionModal.className = "topnav";
  }
};

domElement.btnNav.addEventListener("click", editNav);

// FONCTION POUR OUVRIR LA MODALE

const launchModal = () => (domElement.modalbg.style.display = "block");
domElement.modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// FONCTION POUR FERMER LA MODALE

const closeModal = () => (domElement.modalbg.style.display = "none");
domElement.btnCloseModal.addEventListener("click", closeModal);

// SUPPRESSION D'UNE INPUT ( DE LA CLE 3 ET LE PREMIER QUI SUIT)

domElement.inputTxt.splice(3, 1);

// SUPPRESSION D'UNE DUV FORMDATA 
const containerBirthdate  = domElement.containerData.splice(3, 1);

// CREATION D UN PARAGRAPHE POUR AFFICHER LES MESSAGES D ERREURS

const paragraphe = document.createElement("p");

// FONCTION POUR AFFICHER LE BON MESSAGE D ERREUR POUR LE BON INPUT
const editMessage = (classe, msgError, elParent) => {               // CLASSE => CLASSE CRÉER EN CSS , MSGERROR => MESSAGE QU ON VEUT , ET CONTENEUR
  paragraphe.classList.add(classe);                                 // ON AJOUTE LA CLASSE ( ERREUR OU VALID) CREE EN CSS
  paragraphe.textContent = msgError;                                // ON INDIQUE LE MESSAGE A METTRE DANS LA BALISE P
  elParent.appendChild(paragraphe);                                 // ON SELECTIONNE LE CONTENEUR POUR PLACER LE PARAGRAPHE AVEC LE MESSAGE
};

const dateMaximum = Date.parse("01 May 2003 00:00:00 GMT");          // RETOURNE LE TEMPS EN MILLISECONDE DE 01 01 1970 A LA DATE INDIQUE
const dateMinimum = Date.parse("01 May 1900 00:00:00 GMT");          // RETOURNE LE TEMPS EN MILLISECONDE DE 01 05 1900 A 01 01 1970


// FONCTION PERMETTANT DE VERIFIER LES ENTREES POUR CONFIRMER OU NON L ENVOI

const sendData = (e) => {

  e.preventDefault();                                                             // ANNULE LE COMPORTEMENT PAR DEFAULT DE SUBMIT

  let isValid = true;                                                             // VARIABLE QUI VA AUTORISER OU NON L ENVOI SELON SA VALEUR

  domElement.inputTxt.forEach((item, key) => {  
    const { msg } = displayMessage[key];                                          // DESTRUCTURING MSG EGAL A L OBJET DISPLAYMESSAGE AVEC LA CLÉ
    const { regex } = allRegex[key];                                              // DESTRUCTURING REGEX EGAL A L OBJET ALLREGEX AVEC LA CLE
    if (!item.value || !item.value.match(regex)) {                                // SI PAS DE VALEUR OU VALEUR COMPARE PAR LA REGEX = FALSE
      isValid = false;                                                            // ISVALUE = FALSE ET EMPECHE L ENVOI
      editMessage("erreur", msg, domElement.containerData[key]);                  // APPEL DE LA FONCTION POUR AFFICHER LE MESSAGE
    }
  });

  if (domElement.inputRadio.every((item) => !item.checked)) {                     // SI TOUT LES INPUT RADIO SONT PAS CHECK
    e.preventDefault();
    isValid = false;
    editMessage("erreur", displayMessage[5].msg, domElement.containerData[4]);
    console.log("cochez");
  }


  // SI L INPUT EST VIDE OU SI LA DATE SAISI A UN TEMPS EN MS INFERIEUR OU SUPERIEUR 
  if(!domElement.birtday.value || Date.parse(domElement.birtday.value) < dateMinimum || Date.parse(domElement.birtday.value) > dateMaximum){
    e.preventDefault();
    isValid == false;
    editMessage("erreur", displayMessage[4].msg, containerBirthdate[0])
  }

  if (!domElement.checkbox.checked) {
    e.preventDefault();
    isValid = false;
    editMessage("erreur", displayMessage[6].msg, domElement.containerData[5]);
  }

  if (isValid) {                                               // SI TOUTES LES CONDITIONS SONT TRUE ALORS ACCEPTE L ENVOI<                                 
    domElement.formulaire.style.opacity = "0";
    editMessage("valid", displayMessage[7].msg, domElement.displayModal);
  } else {
    return 0;
  }
};

document.forms[0].addEventListener("submit", sendData);
