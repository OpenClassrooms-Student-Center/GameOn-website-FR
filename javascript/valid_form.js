import { dom_element, all_regex, display_message } from "./constant.js";
import { edit_message } from "./function.js";

// SUPPRESSION D'UNE INPUT ( DE LA CLE 3 ET LE PREMIER QUI SUIT)
dom_element.inputTxt.splice(3, 1);

// SUPPRESSION D'UNE DiV FORMDATA

const containerBirthdate = dom_element.containerData.splice(3, 1);

// RETOURNE LE TEMPS EN MILLISECONDE DE 01 01 1970 A LA DATE INDIQUE
const dateMax = Date.parse("01 May 2003 00:00:00 GMT");

// RETOURNE LE TEMPS EN MILLISECONDE DE 01 05 1900 A 01 01 1970
const dateMin = Date.parse("01 May 1900 00:00:00 GMT"); 

// CREATION D UN PARAGRAPHE POUR AFFICHER LES MESSAGES D ERREURS

const paragraphe = document.createElement("p");

// FONCTION PERMETTANT DE VERIFIER LES ENTREES POUR CONFIRMER OU NON L ENVOI
export const send_data = (e) => {

  // ANNULE LE COMPORTEMENT PAR DEFAULT DE SUBMIT
  e.preventDefault();

   // VARIABLE QUI VA AUTORISER OU NON L ENVOI SELON SA VALEUR
  let isValid = true;

  dom_element.inputTxt.forEach((item, key) => {

    // DESTRUCTURING MSG EGAL A L OBJET DISPLAY_mESSAGE AVEC LA CLÉ
    const { msg } = display_message[key];

     // DESTRUCTURING REGEX EGAL A L OBJET ALL_rEGEX AVEC LA CLE
    const { regex } = all_regex[key];

    // SI PAS DE VALEUR OU VALEUR COMPARE PAR LA REGEX = FALSE
    if (!item.value || !item.value.match(regex)) {

      // ISVALUE = FALSE ET EMPECHE L ENVOI
      isValid = false;

      // APPEL DE LA FONCTION POUR AFFICHER LE MESSAGE
      edit_message(paragraphe, "erreur", msg, dom_element.containerData[key]); 
    }
  });

  // SI L INPUT EST VIDE OU SI LA DATE SAISI A UN TEMPS EN MS INFERIEUR OU SUPERIEUR

  if (!dom_element.birtday.value || Date.parse(dom_element.birtday.value) < dateMin || Date.parse(dom_element.birtday.value) > dateMax) {
    e.preventDefault();
    isValid = false;
    edit_message(paragraphe, "erreur", display_message[4].msg, containerBirthdate[0]);
  }

  // SI TOUT LES INPUT RADIO SONT PAS CHECK

  if (dom_element.inputRadio.every((item) => !item.checked)) {
    e.preventDefault();
    isValid = false;
    edit_message(paragraphe, "erreur", display_message[5].msg, dom_element.containerData[4]);
  }


  if (!dom_element.checkbox.checked) {
    e.preventDefault();
    isValid = false;
    edit_message(paragraphe, "erreur", display_message[6].msg, dom_element.containerData[5]);
  }

  // SI TOUTES LES CONDITIONS SONT TRUE ALORS ACCEPTE L ENVOI<
  if (isValid) {
    dom_element.formulaire.style.opacity = "0";
    edit_message(paragraphe, "valid", display_message[7].msg, dom_element.displayModal);
  } else {
    return 0;
  }
};
