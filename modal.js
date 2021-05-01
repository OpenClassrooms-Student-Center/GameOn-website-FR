// OBJET CONTENANT DES VARIABLE QUI RECUPERE LES ELEMENTS DU DOM

const domElement = {
  actionModal: document.getElementById("myTopnav"),
  btnNav: document.querySelector(".icon"),
  modalbg: document.querySelector(".bground"),
  displayModal: document.querySelector(".content"),
  modalBtn: document.querySelectorAll(".modal-btn"),
  formData: document.querySelectorAll(".formData"),
  btnCloseModal: document.querySelector("span.close"),
  formulaire: document.querySelector("form"),
  input: [...document.querySelectorAll("input")],
  radio: document.querySelectorAll("input[type=radio]"),
  checkbox: document.querySelector("input[type=checkbox]"),
};

// DECLARATION DES VARIABLES QUI CONTIENNENT LES REGEX

const regexName = new RegExp(/[a-z]{2,}/i);
const regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9]{2,}\.[a-z]{2,4}$/i);
const regexCompetition = new RegExp(/^[0-9]{1,2}/);
const regexBirthday = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}$/);

//  OBJET CONTENANT LES DIFFERENTS MESSAGES POUR INFORMER L UTILISATEUR LORS DE LA SAISI FORMULAIRE

const ErrorMessage = {
  0: { msg: "Veuillez renseigner un prénom valide", regex: regexName },
  1: { msg: "Veuillre renseigner un nom valide", regex: regexName },
  2: { msg: "Veuillez renseigner un email valide", regex: regexMail },
  3: { msg: "Veuillez renseigner votre date de naissance", regex: regexBirthday },
  4: { msg: "Veuillez renseigner le nombre de comptétion que vous avez fait", regex: regexCompetition },
  5: { msg: "Veuillez selectionné une ville" },
  6: { msg: "Il est obligé d'accepter les conditions de vente générales" },
  7: { msg: "Merci ! Votre réservation a été reçue." },
};

// DESTRUCTURING POUR NOMMER LES ELEMENTS DE TABLEAU RECUPERER LORS DU CIBLAGE DU DOM

const [inscription, validFormulaire] = domElement.modalBtn;

//MANIPULATION ET OPERATION SUR LES TABLEAUX

domElement.input.pop();                                    // SUPPRIME LE DERNIER ELEMENT DU TABLEAU INPUT (LE BOUTON SUBMIT)
const inputTxt = domElement.input.slice(0, 5);             // COUPE LE TABLEAU DE 0 A 4
const inputCity = domElement.input.slice(5, 11);           // COUPE LE TABLEAU 5 A 10

// FONCTION OUVRANT LE MENU DE NAVIGATION EN RESPONSIVE

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

// CREATION D UN ELEMENT PARAGRAPHE

const paragraphe = document.createElement("p");

// FONCTION POUR INFORMER L UTILISATEUR LORS DE SA SAISI DU FORMULAIRE

const editMessage = (elParent, classe, err) => {
  paragraphe.classList.add(classe);
  paragraphe.textContent = err;
  elParent.appendChild(paragraphe);
};

// FONCTION POUR VALIDER LE FORMULAIRE
const sendData = (e) => {
  e.preventDefault();

  // POUR CHACUN DES INPUTS , (INPUT1 PUIS INPUT2 PUIS INPUT3 ETC...)
  inputTxt.forEach((item, key) => {
    // DESTRUCRING DE L OBJET ERRORMESSAGE MSG ET REGEX SERONT EGAL A L OBJET ERRORMESSAGE AVEC LA CLÉ PLACE EN PARAMETRE
    const { msg, regex } = ErrorMessage[key];
    const val = item.value;
    // VARIABLE CONTENANT UNE VERIFICATION DE LA VALEUR DE ITEM
    const reg = val.match(regex);
    if (item.value != item.value.match(ErrorMessage[key].regex)) {
      editMessage(domElement.formData[key], "erreur", msg);
    }
  });

  // SI TOUT LES INPUT RADIO SONT NON COCHE , METTRE MESSAGE D ERREUR
  if (
    !domElement.radio[0].checked &&
    !domElement.radio[1].checked &&
    !domElement.radio[2].checked &&
    !domElement.radio[3].checked &&
    !domElement.radio[4].checked &&
    !domElement.radio[5].checked
  ) {
    editMessage(domElement.formData[5], "erreur", ErrorMessage[5].msg);
  }
  // SI LA CHECKBOX CGV N EST PAS COCHE RENVOI LE MESSAGE D ERREUR
  else if (!domElement.checkbox.checked) {
    editMessage(domElement.formData[6], "erreur", ErrorMessage[6].msg);
  }

  // SI TOUTE LES CONDITIONS SONT VERIFIÉ ALORS VALID LE FORMULAIRE
  for (item of inputTxt) {
    if (
      item.value &&
      !domElement.radio[0].checked &&
      (!domElement.radio[1].checked ||
        !domElement.radio[2].checked ||
        !domElement.radio[3].checked ||
        !domElement.radio[4].checked ||
        !domElement.radio[5].checked)
    ) {
      domElement.formulaire.style.opacity = "0";
      editMessage(domElement.displayModal, "valid", ErrorMessage[7].msg);
    }
    {
      // SINON ANNULE L ENVOI DU FORMULAIRE
      return 0;
    }
  }
};

// SELECTIONNE LE FORMULAIRE 0 DONC LE PREMIER , LA FONCTION SENDDATA S EXECUTERA QUAND DES DONNEES SONT PRETES A ETRE ENVOYE
document.forms[0].addEventListener("submit", sendData);
