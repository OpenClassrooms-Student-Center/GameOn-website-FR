// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// DOM Elements
const modalBtns = document.querySelectorAll(".modal-btn"); //Tous le boutons de la modal
const formDatas = document.querySelectorAll(".formData"); //Toutes les class="formdata"
const inputs = document.querySelectorAll("input"); // Tous les inputs
const inputsLocations = document.querySelectorAll("input[name = location]"); //Tous les inputs ayant l'attribut [name = location]

const modalBg = document.querySelector(".bground"); //Modal
const form = document.querySelector("form"); //Formulaire
const closeBtn = document.querySelector(".close"); // Modal close
/**
 * input id="quantity"
 * @type    {any}
 */
const quantity = document.getElementById("quantity"); //Input tournoi participé
/**
 * input id="checkbox1"
 * @type    {any}
 */
const checkbox1 = document.getElementById("checkbox1"); //Conditions d'utilisation

// Regex elements
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/; // (< 2 characters; Pas de chiffres)
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; // Vérification d'email

// launch modal event
modalBtns.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);
/**
 * Ouverture de la modal
 * @return  {void}  Ajoute les data-error/Ajoute l'attribut "visible=true" à modalBg
 */
function launchModal() {
  addDataError(formDatas); // Ajoute les data-error pour eviter que le formulaire soit valide au chargement de la page
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

/**
 * Au clic ou au changement d'etat => valid ou renvoi msg erreur aux inputs.
 * Au clic sur submit => valid le formulaire ou renvoi msg erreur aux inputs
 * @param   {HTMLInputElement}  input  element input du formulaire
 * @return  {void} Valid ou renvoi msg erreur aux inputs
 */

// eslint-disable-next-line max-lines-per-function
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
          validCheckboxLocation(input, parseInt(quantity.value, 10));
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
        submit();
      };
      break;
    default:
      break;
  }
}
/**
 * Verifie si le formulaire est valide
 * @return  {void}  Form valide => Affiche message de validation / Form invalide => Affiche les messages d'erreurs
 */
function submit() {
  if (errorTest(formDatas)) {
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
          validNumber(input, document.querySelector("input[name = location]"));
          break;
        case "checkbox":
          if (input.name === "location") {
            validCheckboxLocation(input, parseInt(quantity.value, 10));
          } else {
            validCheckboxConditions(input, checkbox1);
          }
          break;
      }
    });
  }
}
/**
 * Affiche le message de validation et le supprime au clic
 * @return  {void}  Affiche le message de validation et le supprime au clic
 */
function createValidText() {
  const validDiv = document.createElement("div");
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
 * @param   {NodeListOf<Element>}  formDatas  Array (des parents des inputs(7))
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
 * @param   {NodeListOf}  formDatas  Array (des parents des inputs(7))
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
 * @param   {HTMLInputElement}  input  input[type="text"]
 * @return    {void}                      Message error
 */
function validText(input) {
  const value = input.value.trim();
  if (value.length < 2)
    return showMessage(input, "Veuillez entrez au moins 2 caractères");
  else if (!firstLastRegex.test(value))
    return showMessage(
      input,
      "Veuillez entrez seulement des caractéres litterales"
    );
  return showMessage(input, "");
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
  const value = input.value;
  const min = input.min;
  const max = input.max;
  if (value < min) return showMessage(input, "Age maximum 100 ans");
  else if (value > max) return showMessage(input, "Age minimum 18 ans");
  showMessage(input, "");
}

/* ****************************** input[type="mail"] ********************************** */

/**
 * Validation input[type="email"]
 * @param {HTMLInputElement} input  input du formulaire
 * @returns {void} Affiche ou supprime le message d'erreur
 */
function validMail(input) {
  const value = input.value;
  if (!emailRegex.test(value))
    return showMessage(input, "Veuillez entrez une adresse email valide");
  return showMessage(input, "");
}

/* ****************************************** input[type="number"] ********************** */
/**
 * Validation input[type="number"]
 * @param {HTMLInputElement} input input du formulaire
 * @param {HTMLInputElement} cible input du formulaire qui recevra le message erreur
 * @returns {void} Affiche ou supprime le message d'erreur
 */
function validNumber(input, cible) {
  const value = parseInt(input.value);
  if (value < 0 || value > 100 || value.toString() === "NaN") {
    return showMessage(input, "Veuillez entrez une valeur entre 0 et 100");
  }
  if (value > 0 && numberOfLocationChecked(inputsLocations) === 0) {
    showMessage(cible, "Veuillez selectionner une ville");
  }
  if (value < numberOfLocationChecked(inputsLocations)) {
    showMessage(
      cible,
      "Vous ne pouvez pas selectionner plus de villes que de tournoi participé"
    );
    return showMessage(input, "");
  }
  if (value === 0 && numberOfLocationChecked(inputsLocations) === 0) {
    showMessage(cible, "");
  }
  if (value > 0 && numberOfLocationChecked(inputsLocations) > 0) {
    showMessage(cible, "");
  }
  return showMessage(input, "");
}

/* ************************************** input[type="checkbox", name="location"] ********************** */

/**
 * Validation input[type="checkbox", name="location"]
 * @param {HTMLInputElement} input  input du formulaire
 * @param {number} quantity quantité de ville checked
 */
function validCheckboxLocation(input, quantity) {
  if (numberOfLocationChecked(inputsLocations) === 0 && quantity > 0) {
    return showMessage(input, "Veuillez sélectionner une ville");
  }
  if (
    numberOfLocationChecked(inputsLocations) > quantity ||
    (quantity.toString() === "NaN" &&
      numberOfLocationChecked(inputsLocations) !== 0)
  ) {
    return showMessage(
      input,
      "Vous ne pouvez pas selectionner plus de villes que de tournoi participé"
    );
  }
  return showMessage(input, "");
}
/**
 * Nombre de checkbox checked
 * @param   {NodeListOf}  arr  Array contenant les checkbox
 * @return  {number}       Nombre de checkbox checked
 */
function numberOfLocationChecked(arr) {
  let numberInputLocationChecked = 0;
  for (const elm of arr) {
    if (elm.checked) {
      numberInputLocationChecked++;
    }
  }
  return numberInputLocationChecked;
}

/* *************************** input[type="checkbox"] **************************** */

/**
 * Validation input[type="checkbox"]
 * @param   {HTMLInputElement}  input  input du formulaire
 * @param   {HTMLInputElement}  elm    Element qui doit etre checked
 * @return  {void}         Affiche ou supprime le message d'erreur
 */
function validCheckboxConditions(input, elm) {
  if (input === elm && !input.checked) {
    return showMessage(
      input,
      "Veuillez accepter les conditions d'utilisations"
    );
  }
  return showMessage(input, "");
}

/**
 * Ajoute les attributs d'erreurs avec le msg correspondant au parent de input
 * @param {HTMLInputElement} input  input du formulaire
 * @param {string} msg        message d'erreur
 */
function showMessage(input, msg) {
  const target = input.parentElement;
  msg === ""
    ? target.removeAttribute("data-error")
    : target.setAttribute("data-error", msg);
  target.setAttribute("data-error-visible", (msg !== "").toString());
}
