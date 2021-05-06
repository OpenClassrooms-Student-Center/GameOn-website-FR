import { DOM_ELEMENT, ALL_REGEX, DISPLAY_MESSAGE } from "./constant.js";
import { EDIT_MESSAGE } from "./function.js";

// SUPPRESSION D'UNE INPUT ( DE LA CLE 3 ET LE PREMIER QUI SUIT)
DOM_ELEMENT.inputTxt.splice(3, 1);

// SUPPRESSION D'UNE DiV FORMDATA

const containerBirthdate = DOM_ELEMENT.containerData.splice(3, 1);

// RETOURNE LE TEMPS EN MILLISECONDE DE 01 01 1970 A LA DATE INDIQUE
const dateMax = Date.parse("01 May 2003 00:00:00 GMT");

// RETOURNE LE TEMPS EN MILLISECONDE DE 01 05 1900 A 01 01 1970
const dateMin = Date.parse("01 May 1900 00:00:00 GMT"); 

// CREATION D UN PARAGRAPHE POUR AFFICHER LES MESSAGES D ERREURS

const paragraphe = document.createElement("p");

// FONCTION PERMETTANT DE VERIFIER LES ENTREES POUR CONFIRMER OU NON L ENVOI
export const SEND_DATA = (e) => {

  // ANNULE LE COMPORTEMENT PAR DEFAULT DE SUBMIT
  e.preventDefault();

   // VARIABLE QUI VA AUTORISER OU NON L ENVOI SELON SA VALEUR
  let isValid = true;

  DOM_ELEMENT.inputTxt.forEach((item, key) => {

    // DESTRUCTURING MSG EGAL A L OBJET DISPLAY_MESSAGE AVEC LA CLÉ
    const { msg } = DISPLAY_MESSAGE[key];

     // DESTRUCTURING REGEX EGAL A L OBJET ALL_REGEX AVEC LA CLE
    const { regex } = ALL_REGEX[key];

    // SI PAS DE VALEUR OU VALEUR COMPARE PAR LA REGEX = FALSE
    if (!item.value || !item.value.match(regex)) {

      // ISVALUE = FALSE ET EMPECHE L ENVOI
      isValid = false;

      // APPEL DE LA FONCTION POUR AFFICHER LE MESSAGE
      EDIT_MESSAGE(paragraphe, "erreur", msg, DOM_ELEMENT.containerData[key]); 
    }
  });

  // SI L INPUT EST VIDE OU SI LA DATE SAISI A UN TEMPS EN MS INFERIEUR OU SUPERIEUR

  if (!DOM_ELEMENT.birtday.value || Date.parse(DOM_ELEMENT.birtday.value) < dateMin || Date.parse(DOM_ELEMENT.birtday.value) > dateMax) {
    e.preventDefault();
    isValid = false;
    EDIT_MESSAGE(paragraphe, "erreur", DISPLAY_MESSAGE[4].msg, containerBirthdate[0]);
  }

  // SI TOUT LES INPUT RADIO SONT PAS CHECK

  if (DOM_ELEMENT.inputRadio.every((item) => !item.checked)) {
    e.preventDefault();
    isValid = false;
    EDIT_MESSAGE(paragraphe, "erreur", DISPLAY_MESSAGE[5].msg, DOM_ELEMENT.containerData[4]);
  }


  if (!DOM_ELEMENT.checkbox.checked) {
    e.preventDefault();
    isValid = false;
    EDIT_MESSAGE(paragraphe, "erreur", DISPLAY_MESSAGE[6].msg, DOM_ELEMENT.containerData[5]);
  }

  // SI TOUTES LES CONDITIONS SONT TRUE ALORS ACCEPTE L ENVOI<
  if (isValid) {
    DOM_ELEMENT.formulaire.style.opacity = "0";
    EDIT_MESSAGE(paragraphe, "valid", DISPLAY_MESSAGE[7].msg, DOM_ELEMENT.displayModal);
  } else {
    return 0;
  }
};
