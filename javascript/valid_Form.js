import { domElement, allRegex, displayMessage } from "./constant.js";
import { editMessage } from "./function.js";

// SUPPRESSION D'UNE INPUT ( DE LA CLE 3 ET LE PREMIER QUI SUIT)
domElement.inputTxt.splice(3, 1);

// SUPPRESSION D'UNE DiV FORMDATA

const containerBirthdate = domElement.containerData.splice(3, 1);

const dateMax = Date.parse("01 May 2003 00:00:00 GMT"); // RETOURNE LE TEMPS EN MILLISECONDE DE 01 01 1970 A LA DATE INDIQUE
const dateMin = Date.parse("01 May 1900 00:00:00 GMT"); // RETOURNE LE TEMPS EN MILLISECONDE DE 01 05 1900 A 01 01 1970

// CREATION D UN PARAGRAPHE POUR AFFICHER LES MESSAGES D ERREURS

const paragraphe = document.createElement("p");

// FONCTION PERMETTANT DE VERIFIER LES ENTREES POUR CONFIRMER OU NON L ENVOI

export const sendData = (e) => {
  e.preventDefault(); // ANNULE LE COMPORTEMENT PAR DEFAULT DE SUBMIT

  let isValid = true; // VARIABLE QUI VA AUTORISER OU NON L ENVOI SELON SA VALEUR

  domElement.inputTxt.forEach((item, key) => {
    const { msg } = displayMessage[key]; // DESTRUCTURING MSG EGAL A L OBJET DISPLAYMESSAGE AVEC LA CLÉ
    const { regex } = allRegex[key]; // DESTRUCTURING REGEX EGAL A L OBJET ALLREGEX AVEC LA CLE
    if (!item.value || !item.value.match(regex)) {
      // SI PAS DE VALEUR OU VALEUR COMPARE PAR LA REGEX = FALSE
      isValid = false; // ISVALUE = FALSE ET EMPECHE L ENVOI
      editMessage(paragraphe, "erreur", msg, domElement.containerData[key]); // APPEL DE LA FONCTION POUR AFFICHER LE MESSAGE
    }
  });

  // SI L INPUT EST VIDE OU SI LA DATE SAISI A UN TEMPS EN MS INFERIEUR OU SUPERIEUR

  if (!domElement.birtday.value || Date.parse(domElement.birtday.value) < dateMin || Date.parse(domElement.birtday.value) > dateMax) {
    e.preventDefault();
    isValid = false;
    editMessage(paragraphe, "erreur", displayMessage[4].msg, containerBirthdate[0]);
  }

  // SI TOUT LES INPUT RADIO SONT PAS CHECK

  if (domElement.inputRadio.every((item) => !item.checked)) {
    e.preventDefault();
    isValid = false;
    editMessage(paragraphe, "erreur", displayMessage[5].msg, domElement.containerData[4]);
  }


  if (!domElement.checkbox.checked) {
    e.preventDefault();
    isValid = false;
    editMessage(paragraphe, "erreur", displayMessage[6].msg, domElement.containerData[5]);
  }

  if (isValid) {
    // SI TOUTES LES CONDITIONS SONT TRUE ALORS ACCEPTE L ENVOI<
    domElement.formulaire.style.opacity = "0";
    editMessage(paragraphe, "valid", displayMessage[7].msg, domElement.displayModal);
  } else {
    return 0;
  }
};
