// DOM Elements
const modalBg = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const modalConfirmation = document.querySelector(".modal-confirmation");
const modalBody = document.querySelector(".modal-body");
const btnModalConfirmation = document.querySelector(
  ".modal-confirmation-close"
);

// DOM selection of a container whose got the formData class to show the
// error flag when we are data controling
const containerQ = document.querySelector("#quantity").parentNode;
const containerE = document.querySelector("#email").parentNode;
const containerLN = document.querySelector("#lastName").parentNode;
const containerFN = document.querySelector(".formData");
// .parentNode allows us to catch the parent of an ID for instance,
// here we can apply the data-error (from css) attribute link to the formData class.

// const today and birthdate.max will not allow the user to use a future day as birthdate.
const today = new Date().toISOString().split("T")[0];
birthdate.max = today;

// Those variable are useful for a second confirmation while we are using
// the validate() function.
let A = 0;
let B = 0;
let C = 0;
let D = 0;
let E = 0;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalBg.style.display = "block";
  modalConfirmation.style.display = "none";
}

//Close modal with X button
const modalClosure = document.querySelector(".closeModal");
// >function:
function closeModal() {
  modalBg.style.display = "none";
}
// >play of function:
modalClosure.addEventListener("click", closeModal);

//------------------------Datas controls on text-------------------
// This first control allows the user to correct his inputs when typing in.

// Control of datas, using .text-control class (text and number in input):
const inputsText = document.querySelectorAll(".text-control");
// 5 empty elements created with the user datas:
let firstName, lastName, email, birthday, quantity;

//Then all the checker function:
const firstNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    // In purpose to apply [data-error] and [data-error-visible] attributes
    // we are using setAttribute method. For doing so, we had previously selected
    // the .formData class div (so called containerFN).

    firstName = null;
    A = 0;
  } else if (value == null || value == "" || !value) {
    // TODO : ou mettre que !value
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    firstName = null;
    A = 0;
  } else {
    containerFN.removeAttribute("data-error-visible", false);
    firstName = value;
    A = 1;
  }
};

const lastNameChecker = (value) => {
  if (value.length > 0 && value.length < 2) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    lastName = null;
    B = 0;
  } else if (value == null || value == "") {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    lastName = null;
    B = 0;
  } else {
    containerLN.removeAttribute("data-error-visible", false);
    lastName = value;
    B = 1;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    containerE.setAttribute("data-error-visible", true);
    containerE.setAttribute(
      "data-error",
      "Veuillez entrer une adresse email valide."
    );
    email = null;
    C = 0;
  } else {
    containerE.removeAttribute("data-error-visible", false);
    email = value;
    C = 1;
  }
};
// email regex from : https://regexr.com/3e48o

const birthdateChecker = (value) => {
  birthday = value;
};

const quantityChecker = (value) => {
  if (!value.match(/^[0-9][0-9]?$/i)) {
    containerQ.setAttribute("data-error-visible", true);
    containerQ.setAttribute(
      "data-error",
      "Vous devez choisir une valeur numérique entre 0 et 99."
    );
    quantity = null;
    D = 0;
  } else {
    containerQ.removeAttribute("data-error-visible", false);
    quantity = value;
    D = 1;
  }
};
// quantity regex from :

inputsText.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstNameChecker(e.target.value);
        break;
      case "lastName":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;

      default:
        null;
    }
  });
});
//Ici , pour chaque inputs test, on écoute sur l'input dans lequel on travaille
// On switch en ciblant id, sur chaque id, on joue la fonction checker
// et on récupère la valeur dans les données ecoutées de l'id, puis on sort (break) et on
// continue pour l'input text suivant.
//  Pour chaque cas, la fonction checker apprlique une vérification
// ((je veux créer une fonction qui contrôle/vérifie les datas pour chaque
//input, (fonction blablaChecker écrite juste avant et appeler pour chaque cas)))

//-------------------- Data control on radio and checkbox--------------------------
// Control of datas class checkbox-label (radio and checkbox):
const inputsCheckbox = document.querySelectorAll(".checkbox-input");
const inputsRadio = document.getElementsByName("location");
const containerR = document.getElementsByName("location").parentNode;

let place;
let checkboxNewsVar = false;

// checké une location,
// si la checkbox est validé, mémoriser la donnée dans une variable
inputsRadio.forEach((input) => {
  input.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "location1":
        if (location1.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location2":
        if (location2.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location3":
        if (location3.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location4":
        if (location4.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location5":
        if (location5.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      case "location6":
        if (location6.checked) {
          place = e.target.value;
          E = 1;
          location1.parentNode.removeAttribute("data-error-visible", false);
        }
      default:
        null;
      // location1.parentNode.setAttribute("data-error-visible", true);
      // location1.parentNode.setAttribute(
      //   "data-error",
      //   "Vous devez choisir une place."
      // );
      // impossible de mettre le message d'erreur s'il n'y a pas eu de submit avant
    }
  });
});
inputsCheckbox.forEach((input) => {
  input.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "checkboxCGU":
        if (checkboxCGU.checked) {
          checkboxCGU.parentNode.removeAttribute("data-error-visible", false);
        } else {
          checkboxCGU.parentNode.setAttribute("data-error-visible", true);
          checkboxCGU.parentNode.setAttribute(
            "data-error",
            "Vous devez vérifier que vous acceptez les termes et conditions ."
          );
        }
        break;
      case "checkboxNews":
        if (checkboxNews.checked) {
          checkboxNewsVar = true;
        } else {
          checkboxNewsVar = false;
        } // notons que si l'utilisateurs ne coche et décoche pas la newsletter,
        // alors la checkboxVar restera undefined, du coup je lui ai mis la valeur
        // false par défaut quand j'ai défini la variable.
        break;
      default:
        null;
    }
  });
});

//the form should be valid when submit:
//THOMAS: La soumission est faite directement dans le html (si j'ai bien compris)?
//Du coup je n'ai pas à jouer la fonction
//THOMAS: Est ce que je dois rajouter un contrôle au moment de
// la validation du formulaire? ou est-ce que mes Checker suffise au contrôle?
// THOMAS: à quoi sert le required du html si je met
//tout ce code?
// function validate() {
//   if (A + B + C + D + E == 5 && checkboxCGU.checked) {
//     // note pour moi: pour l'instant: si les checkers A, B,C,D,E et la checkboxCGU sont ok
//     // un message ok s'affiche en alert et
//     //  on peut envoyer le formulaire : return true
//     // TODO:  dire ce qu'il faut envoyé et où
//     alert("ça marche");
//     return true;
//   } else {
//     if (!E) {
//       location1.parentNode.setAttribute("data-error-visible", true);
//       location1.parentNode.setAttribute(
//         "data-error",
//         "Vous devez choisir une option."
//       );
//     }

//     alert("y a un problème");
//     // sinon on indique de ne pas envoyer le formulaire
//     return false;
//   }
// }
function validate() {
  if (A + B + C + D + E < 5) {
    if (!E) {
      location1.parentNode.setAttribute("data-error-visible", true);
      location1.parentNode.setAttribute(
        "data-error",
        "Vous devez choisir une option."
      );
    }
    if (!D) {
      containerQ.setAttribute("data-error-visible", true);
      containerQ.setAttribute("data-error", "Vous devez choisir une quantité.");
    }
    if (!C) {
      containerE.setAttribute("data-error-visible", true);
      containerE.setAttribute(
        "data-error",
        "Vous devez entrer une adresse email."
      );
    }
    if (!B) {
      containerLN.setAttribute("data-error-visible", true);
      containerLN.setAttribute("data-error", "Vous devez entrer un nom.");
    }
    if (!A) {
      containerFN.setAttribute("data-error-visible", true);
      containerFN.setAttribute("data-error", "Vous devez entrer un prénom.");
    }
    alert("Il y a un ou plusieurs problèmes, corrigez les champs indiqués.");
    return false;
  }
  if (A + B + C + D + E == 5 && checkboxCGU.checked) {
    // fonction allgood à écrire
    // note pour moi: pour l'instant: si les checkers A, B,C,D,E et la checkboxCGU sont ok
    // un message ok s'affiche en alert et
    //  on peut envoyer le formulaire : return true
    // TODO:  dire ce qu'il faut envoyé et où
    alert("ça marche");

    modalBody.style.display = "none";
    modalConfirmation.style.display = "flex";
    document.querySelector("#reserveForm").reset();
    A = 0;
    B = 0;
    C = 0;
    D = 0;
    E = 0;
    return true;
  } else {
    alert("Il y a un autre problème, contactez l'administrateur du site.");
    return false;
  }
}

btnModalConfirmation.addEventListener("click", (e) => {
  modalBg.style.display = "none";
  modalBody.style.display = "block";
});

//prevent de Default behaviour on validation while coding:
//empêche la fermeture et la réinitialisation de la modale au clic 'je m'inscris':
// TODO: to place in the case the form is validated and sent (or to remove
// if we are no more need to preven this behavious when code will be ready).
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// form.addEventListener("submit", myFunction);

// function myFunction() {
//   document.getElementById("reserveForm").reset();
// }

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
