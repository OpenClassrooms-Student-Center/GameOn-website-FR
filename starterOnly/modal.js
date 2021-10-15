function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const formDatas = document.querySelectorAll(".formData");
const form = document.querySelector("form"); //Formulaire
const closeBtn = document.querySelector(".close"); // Modal close
const inputs = document.querySelectorAll("input"); // Tous les inputs
/**
 * input id="quantity"
 * @type    {any}
 */
const quantity = document.getElementById("quantity");

/**
 * input id="checkbox1"
 * @type  {any}
 */
const checkbox1 = document.getElementById("checkbox1");

// Regex elements
// (< 2 characters; Pas de chiffres)
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// Vérification d'email
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

let quantityValue = quantity.value; //Nombre de tournois participés

// launch modal event
modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);
/**
 * Ouverture de la modal
 * @return  {void}  Ajoute l'attribut "visible=true" à modalBg
 */
function launchModal() {
  modalBg.setAttribute("visible", "true");
}
/**
 * Fermeture de la modal
 * @return  {void}  Supprime l'attribut "visible" à modalBg
 */
function closeModal() {
  modalBg.removeAttribute("visible");
}

// Pour chaque element input
inputs.forEach((input) => {
  // On les passe a la validation
  addValidation(input);
});

// Ajoute les data-error pour eviter que le formulaire soit valide au chargement de la page
addDataError(formDatas);

/**
 * Au clic ou au changement d'etat valid ou renvoi msg erreur aux inputs.
 * Au clic sur submit valid le formulaire ou renvoi msg erreur aux inputs
 * @param   {HTMLInputElement}  input  element input du formulaire
 * @return  {void} Valid ou renvoi msg erreur aux inputs
 */
function addValidation(input) {
  switch (input.type) {
    case "text":
      input.oninput = function () {
        validText(input);
      };
      break;
    case "email":
      input.oninput = function () {
        validMail(input);
      };
      break;
    case "date":
      limitDate(input, "max", 18); // Age minimun 18ans
      limitDate(input, "min", 100); // Age maximum 100ans
      input.onchange = function () {
        validDate(input);
      };
      break;
    case "number":
      input.oninput = function () {
        validNumber(input, document.querySelector("input[name = location]"));
      };
      break;
    case "checkbox":
      if (input.name === "location") {
        input.onchange = function () {
          validCheckboxLocation(input, parseInt(quantity.value));
        };
      } else {
        input.onchange = function () {
          validCheckboxConditions(input, checkbox1);
        };
      }
      break;
    case "submit":
      input.onclick = function (e) {
        e.preventDefault();
        if (errorTest(formDatas)) {
          console.log(input);
          createValidText();
        } else {
          inputs.forEach((input) => {
            switch (input.type) {
              case "text":
                validText(input);
                break;
              case "email":
                validMail(input);
                break;
              case "date":
                validDate(input);
                break;
              case "number":
                validNumber(
                  input,
                  document.querySelector("input[name = location]")
                );
                break;
              case "checkbox":
                if (input.name === "location") {
                  validCheckboxLocation(input, parseInt(quantity.value));
                } else {
                  validCheckboxConditions(input, checkbox1);
                }
                break;
            }
          });
        }
      };
      break;
    default:
      break;
  }
}

function createValidText() {
  let validDiv = document.createElement("div");
  validDiv.id = "validDiv";
  modalBg.appendChild(validDiv);
  validDiv.innerHTML = "<p>Merci ! Votre réservation à été recue</p>";
  validDiv.onclick = function () {
    form.reset();
    addDataError(formDatas);
    modalBg.removeChild(validDiv);
    closeModal();
  };
}
/**
 * Permet de savoir si tous les inputs sont valides
 *
 * @param   {NodeListOf<Element>}  formDatas  Array (des parents des inputs(7))
 *
 * @return  {boolean}             Si aucune erreur => true
 */
function errorTest(formDatas) {
  for (const formData of formDatas) {
    if (formData.getAttribute("data-error")) {
      return false;
    }
  }
  return true;
}

/**
 * Permet d'éviter que le formulaire soit valide au chargement de la page
 *
 * @param   {any}  formDatas  Array (des parents des inputs(7))
 *
 * @return  {void}             Ajoute atrr"data-error" sauf à 'conditions' qui est checked
 */
function addDataError(formDatas) {
  for (const formData of formDatas) {
    if (!formData.hasAttribute("id")) formData.setAttribute("data-error", " ");
  }
}
/* **************************************** input[type=text] ************************** */
/**
 * Validation input[type="text"]
 *
 * @param   {HTMLInputElement}  input  input[type="text"]
 *
 * @return    {void}                      Message error
 *
 */
function validText(input) {
  let value = input.value.trim();
  if (value.length < 2)
    return showMessage(input, "Veuillez entrez au moins 2 caractères");
  // si pas regex return showMessage...
  else if (!firstLastRegex.test(value))
    return showMessage(
      input,
      "Veuillez entrez seulement des caractéres litterales"
    );
  deleteMessage(input);
}

/* ************************ input[type="date"] *************************************** */

/**
 * Ajoute un zero devant date si date < 10
 * @param {string | number} dateNumber jour ou mois
 * @returns {string} 0+jours ou 0+mois
 */
function addZero(dateNumber) {
  if (dateNumber < 10) return "0" + dateNumber;
  return dateNumber.toString();
}

/**
 * donne une limite à l'input
 * @param {HTMLInputElement} input input du formulaire
 * @param {("min" | "max")} type l'extrémité à limiter
 * @param {Number} gap le nombre d'années à décaler
 * @returns {void} met à jour l'input avec une limite
 */
function limitDate(input, type, gap) {
  const now = new Date(); // Récupération de la date actuelle
  const year = now.getFullYear() - gap; // Année actuelle -18ans ou -100ans
  const month = addZero(now.getUTCMonth()); // Ajout du zero(Mois actuel)
  const day = addZero(now.getUTCDate()); // Ajout du zero(jour actuel)
  input.setAttribute(type, `${year}-${month}-${day}`); // Ajoute l'attribut "Min" ou "max" avec la date correspondante.
}

/**
 * Validation input[type="date"]
 *
 * @param {HTMLInputElement} input  input du formulaire
 * @returns {Void} Affiche ou supprime le message d'erreur
 */
function validDate(input) {
  let value = input.value;
  let min = input.min;
  let max = input.max;
  if (value < min) return showMessage(input, "Age maximum 100 ans");
  else if (value > max) return showMessage(input, "Age minimum 18 ans");
  deleteMessage(input);
}

/* ****************************** input[type="mail"] ********************************** */

/**
 * Validation input[type="email"]
 *
 * @param {HTMLInputElement} input  input du formulaire
 * @returns {void} Affiche ou supprime le message d'erreur
 */
function validMail(input) {
  let value = input.value;
  if (!emailRegex.test(value))
    return showMessage(input, "Veuillez entrez une adresse email valide");
  return deleteMessage(input);
}

/* ****************************************** input[type="number"] ********************** */
/**
 * @param {HTMLInputElement} input input du formulaire
 * @param {HTMLInputElement} cible input du formulaire qui recevra le message erreur
 */
function validNumber(input, cible) {
  let value = input.value;
  if (parseInt(value) < 0 || parseInt(value) > 100 || value == "") {
    deleteMessage(cible);
    return showMessage(input, "Veuillez entrez une valeur entre 0 et 100");
  } else if (
    parseInt(value) > 0 &&
    numberOfLocationChecked(inputsLocations) === 0
  ) {
    deleteMessage(input);
    return showMessage(cible, "Veuillez selectionner une ville");
  } else if (
    parseInt(value) == 0 &&
    numberOfLocationChecked(inputsLocations) > 0
  ) {
    deleteMessage(input);
    return showMessage(
      cible,
      "Vous ne pouvez pas selectionner une ville si vous n'avez jamais participé à un tournoi"
    );
  } else if (parseInt(value) < numberOfLocationChecked(inputsLocations)) {
    return showMessage(
      cible,
      "Vous ne pouvez pas selectionner plus de villes que de tournoi participé"
    );
  } else if (value == "" && numberOfLocationChecked(inputsLocations) == 0) {
    deleteMessage(cible);
    return showMessage(input, "Veuillez entrez une valeur entre 0 et 100");
  } else if (
    parseInt(value) > 0 &&
    numberOfLocationChecked(inputsLocations) > 0
  ) {
    deleteMessage(cible);
  }

  deleteMessage(input);
}

/* ************************************** input[type="checkbox", name="location"] ********************** */

/**
 * @param {HTMLInputElement} input  input du formulaire
 * @param {number} quantity nombre de tournois participés
 */
function validCheckboxLocation(input, quantity) {
  if (numberOfLocationChecked(inputsLocations) === 0 && quantity > 0) {
    return showMessage(input, "Veuillez sélectionner une ville");
  } else if (
    numberOfLocationChecked(inputsLocations) > 0 &&
    (quantity == 0 || quantity.toString() == "NaN")
  ) {
    return showMessage(
      input,
      "Vous ne pouvez pas selectionner une ville si vous n'avez jamais participé à un tournoi"
    );
  } else if (numberOfLocationChecked(inputsLocations) > quantity) {
    return showMessage(
      input,
      "Vous ne pouvez pas selectionner plus de ville que de tournoi participé"
    );
  } else {
    return deleteMessage(input);
  }
}
const inputsLocations = document.querySelectorAll("input[name = location]");
/**
 * Nombre de villes séléctionnées
 * @param {NodeListOf} [array]
 * @return {number} [return description]
 */
function numberOfLocationChecked(array) {
  let numberInputLocationChecked = 0;
  for (let element of array) {
    if (element.checked) {
      numberInputLocationChecked++;
    }
  }
  return numberInputLocationChecked;
}

/* *************************** input[type="checkbox"] **************************** */

/**
 * [validCheckboxConditions description]
 *
 * @param   {HTMLInputElement} input  input du formulaire
 * @param   {HTMLInputElement}  elm    element du formulaire
 *
 * @return  {void}         Affiche ou supprime le message erreur
 */
function validCheckboxConditions(input, elm) {
  if (!elm.checked) {
    return showMessage(
      input,
      "Veuillez accepter les conditions d'utilisations"
    );
  }
  return deleteMessage(input);
}
/**
 * Ajoute les attributs d'erreurs avec le msg correspondant au parent de input
 *
 * @param {HTMLInputElement} input  input du formulaire
 * @param {string} msg        message d'erreur
 */
function showMessage(input, msg) {
  const target = input.parentElement;
  target.setAttribute("data-error", msg);
  target.setAttribute("data-error-visible", "true");
}

function deleteMessage(input) {
  const target = input.parentElement;
  target.removeAttribute("data-error");
  target.removeAttribute("data-error-visible");
}
