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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// Modal close
const closeBtn = document.querySelector(".close");
// Tous les inputs
const inputs = document.querySelectorAll("input");
const first = document.getElementById("firts");
const quantity = document.getElementById("quantity");

// Regex elements
// (< 2 characters; Pas de chiffres)
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// Vérification d'email
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);
// Open modal
function launchModal() {
  modalBg.setAttribute("visible", "true");
}
// close modal
function closeModal() {
  modalBg.removeAttribute("visible");
}

// Pour chaque element input
inputs.forEach((input) => {
  // On les passe a la validation
  addValidation(input);
});

/**
 * [addValidation description]
 *
 * @param   {HTMLInputElement}  input  [input description]
 *
 * @return  {void} [return description]
   
 }}         
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
          // @ts-ignore
          validCheckboxLocation(input, quantity.value);
        };
      } else {
        input.onchange = function () {
          validCheckboxConditions(input);
        };
      }
      break;
    default:
      break;
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
  showMessage(input, "");
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
  showMessage(input, "");
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
  return showMessage(input, "");
}

/* ****************************************** input[type="number"] ********************** */
/**
 * @param {HTMLInputElement} input input du formulaire
 * @param {HTMLInputElement} cible input du formulaire qui recevra le message erreur
 */
function validNumber(input, cible) {
  let value = parseInt(input.value);
  if (value <= -1 || value > 100) {
    return showMessage(input, "Veuillez entrez une valeur entre 0 et 100");
  } else if (value > 0 && numberOfLocationChecked() === 0) {
    showMessage(cible, "Veuillez selectionner une ville");
  } else if (value === 0 && numberOfLocationChecked() > 0) {
    showMessage(input, "");
    return showMessage(
      cible,
      "Vous ne pouvez pas selectionner une ville si vous n'avez jamais participé à un tournoi"
    );
  } else if (value < numberOfLocationChecked()) {
    return showMessage(
      cible,
      "Vous ne pouvez pas selectionner plus de villes que de tournoi participé"
    );
  } else if (value === 0 && numberOfLocationChecked() === 0) {
    showMessage(cible, "");
  } else if (value > 0 && numberOfLocationChecked() > 0) {
    showMessage(cible, "");
  }

  return showMessage(input, "");
}

/* ************************************** input[type="checkbox", name="location"] ********************** */

/**
 * @param {HTMLInputElement} input  input du formulaire
 * @param {number} quantity quantité de ville checked
 */
function validCheckboxLocation(input, quantity) {
  if (numberOfLocationChecked() === 0 && quantity > 0) {
    return showMessage(input, "Veuillez sélectionner une ville");
  } else if (numberOfLocationChecked() > 0 && quantity == 0) {
    return showMessage(
      input,
      "Vous ne pouvez pas selectionner une ville si vous n'avez jamais participé à un tournoi"
    );
  } else if (numberOfLocationChecked() > quantity) {
    return showMessage(
      input,
      "Vous ne pouvez pas selectionner plus de villes que de tournoi participé"
    );
  }
  return showMessage(input, "");
}

function numberOfLocationChecked() {
  const inputsLocations = document.querySelectorAll("input[name = location]");
  let numberInputLocationChecked = 0;
  for (let inputLocation of inputsLocations) {
    // @ts-ignore
    if (inputLocation.checked) {
      numberInputLocationChecked++;
    }
  }
  return numberInputLocationChecked;
}

/* *************************** input[type="checkbox"] **************************** */
function validCheckboxConditions(input) {
  let checkbox1 = document.getElementById("checkbox1");
  if (input === checkbox1 && !input.checked) {
    return showMessage(
      input,
      "Veuillez accepter les conditions d'utilisations"
    );
  }
  return showMessage(input, "");
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
  // @ts-ignore
  target.setAttribute("data-error-visible", msg !== "");
}
