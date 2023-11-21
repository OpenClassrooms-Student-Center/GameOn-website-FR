function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const form = document.getElementById("form");
const formData = document.querySelectorAll(".formData");
const formBtn = document.querySelector(".btn-submit");
const modalConfirm = document.getElementById("confirm");
const closeMessage = document.getElementById("closeMessage");

// Création de constante pour récuperer les noeuds htmd les champs du formulaire
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournament = document.getElementsByName("tournament")[0];
const conditions = document.getElementById("conditions");

// Stockage de ces éléments dans un objet
const formElements = {
  firstName,
  lastName,
  email,
  birthdate,
  quantity,
  tournament,
  conditions,
};

// Création d'un écouteur d'événement pour l'ensemble des boutons d'ouverture de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Création d'un écouteur d'événement pour le bouton de fermeture de la modale.
closeModalBtn.addEventListener("click", closeModal);

// Création d'un écouteur d'événement pour le bouton du formulaire.
closeMessage.addEventListener("click", closeModal);

// Affichage de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modale
function closeModal() {
  modalbg.style.display = "none";
  modalConfirm.style.display = "none";
}

// Création d'une fonction isRequired pour vérifier si un champ obligatoire est bien renseigné
// La fonction trim() permet de supprimer les espaces vides.
function isRequired(value) {
  return value && value.trim();
}

// Création d'une fonction isMinLength pour vérifier la longeur minimum de la valeur d'un champ
function isMinLength(value, min) {
  return value.length >= min;
}

// Création d'une fonction isIntegrer pour vérifier si la valeur du champ est un nombre entier
function isInteger(value) {
  return Number.isInteger(value);
}

// Création d'une fonction isBetween pour déterminer si la valeur d'un champ est compris entre la valeur minimale et maximale définie
function isBetween(value, min, max) {
  return value >= min && value <= max;
}

// Création d'une fonction isEmail pour déterminer s'il s'agit d'une adresse e-mail valide et la regex permet de valider l'adresse e-mail avec les caractères adéquates.
function isEmail(value) {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return emailRegex.test(value);
}

// Création d'une fonction isValidDate pour déterminer si la date mentionnée est valide.
// Création d'une condition pour vérifier si la date inscrite n'est pas dans le futur.
function isValidDate(value) {
  const [day, month, year] = value.split("/");
  const date = `${year}/${month}/${day}`;
  const currentDate = new Date();

  if (new Date(date) < currentDate) {
    return true;
  }
  return false;
}

// Création d'une fonction pour valider le formulaire
function validateForm(values) {
  //Création d'une constante pour stocker les erreurs des différents champs s'il y en a.
  const errors = {};
  // Instruction d'une condition : si le nom n'est pas renseigné, on ajoute une erreur à l'objet errors.
  if (!isRequired(values.firstName)) {
    errors.firstName = "Veuillez renseigner ce champs.";
  }

  // Instruction d'une condition : si le nom n'a pas au moins deux caractères, on ajoute une erreur à l'objet errors.
  if (!isMinLength(values.firstName, 2) && !errors.firstName) {
    errors.firstName = "Veuillez entrer 2 caractères ou plus.";
  }

  // Instruction d'une condition : si le prénom n'est pas renseigné, on ajoute une erreur à l'objet errors
  if (!isRequired(values.lastName)) {
    errors.lastName = "Veuillez renseigner ce champs.";
  }

  // Instruction d'une condition : si le prénom n'a pas au moins deux caractères, on ajoute une erreur à l'objet errors
  if (!isMinLength(values.lastName, 2) && !errors.lastName) {
    errors.lastName = "Veuillez entrer 2 caractères ou plus.";
  }

  // Instruction d'une condition : si l'email est invalide et ne respecte pas les caractères adéquates, on ajoute une erreur à l'objet errors
  if (!isEmail(values.email)) {
    errors.email = "Veuillez entrer un email valide.";
  }

  // Instruction d'une condition : si la date d'anniversaire n'est pas indiqué, on ajoute une erreur à l'objet errors
  if (!isRequired(values.birthdate)) {
    errors.birthdate = "Veuillez renseigner une date de naissance.";
  }

  // Instruction d'une condition : si la date n'est pas valide, on ajoute une erreur à l'objet errors.
  if (!isValidDate(values.birthdate)) {
    errors.birthdate = "Veuillez renseigner une date de naissance valide.";
  }

  // Instruction d'une condition : si le nombre de participation n'est pas renseigné et que le nombre n'est pas compris entre 0 et 99, on ajoute une erreur à l'objet errors.
  if (!isRequired(values.quantity)) {
    errors.quantity = "Veuillez renseigner ce champs.";
  }

  if (
    !isInteger(Number(values.quantity)) ||
    !isBetween(Number(values.quantity), 0, 99)
  ) {
    errors.quantity = "Veuillez entrer un nombre entre 0 et 99.";
  }

  // Instruction d'une condition : si la ville n'est pas indiqué, on ajoute une erreur à l'objet errors.
  if (!isRequired(values.tournament)) {
    errors.tournament = "Veuillez renseigner ce champs.";
  }

  // Instruction d'une condition : si les conditions d'utilisation ne sont pas acceptées, on ajoute une erreur à l'objet errors.
  if (!isRequired(values.conditions)) {
    errors.conditions = "Veuillez accepter les conditions d'utilisation.";
  }

  return errors;
}

// Création d'une fonction pour écouter l'événement submit et valider les valeurs du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Création d'une constante formData pour créer un nouvel objet formData dans le formulaire.
  // Création d'une constante values pour transformer et récupérer les paires cles et valeurs dans le formulaire.
  // Création d'une constante errors pour regrouper toutes les erreurs du formulaire.
  const formData = new FormData(form);
  const values = Object.fromEntries(formData.entries());
  const errors = validateForm(values);
  const fieldNames = Object.keys(formElements);

  const hasErrors = Object.keys(errors).length > 0;

  // Instruction d'une condition : s'il y a des erreurs
  // S'il y a une erreur le message d'erreur s'affiche, sinon le message ne s'affiche pas car le formulaire ne contient pas d'erreurs.
  if (hasErrors) {
    // On récupère l'ensemble des clés de nos champs de formulaire et on itère dessus
    fieldNames.forEach((field) => {
      // Pour chaque élément on récupère le parent
      const parent = formElements[field].parentElement;
      // Pour chaque élément on récupère un erreur si elle existe
      const error = errors[field];

      if (error) {
        // Si une erreur pour le champ existe on l'affiche
        parent.setAttribute("data-error-visible", true);
        parent.setAttribute("data-error", error);
      } else {
        // Si une erreur n'existe pas on la masque, permet de gérer la revalidation
        parent.setAttribute("data-error-visible", false);
        parent.setAttribute("data-error", "");
      }
    });

    // Si des erreurs sont rencontrées on retourne false pour ne pas envoyer le formulaire
    return false;
  }

  // S'il n'y a pas d'erreur de validation, la fonction continue de s'exécuter et le formulaire pourra être envoyé
  modalConfirm.style.display = "flex";
  //Si le formulaire est validé et envoyé, on le réinitialise
  form.reset();
});
