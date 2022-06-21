// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");

// container who get the formData class to show the error flag, for data control
const containerQ = document.querySelector("#quantity").parentNode;
const containerE = document.querySelector("#email").parentNode;
const containerLN = document.querySelector("#lastName").parentNode;
const containerFN = document.querySelector(".formData");

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
}

//Close modal with X button
const modalClosure = document.querySelector(".closeModal");
// >function:
function closeModal() {
  modalBg.style.display = "none";
}
// >play of function:
modalClosure.addEventListener("click", closeModal);

//------------------------Datas controls-------------------
// Control of datas class text-control (text and number in input):
const inputsText = document.querySelectorAll(".text-control");
// une liste de 5 eléments
let firstName, lastName, email, birthdate, quantity;

// des variables vides

const firstNameChecker = (value) => {
  // Thomas: est ce que mon containerFN existe que dans la fonction firstNameChecker ou partout
  // pourquoi ça marche alors que je suis dans 'document' ? = prend la première itérance et la sélectionne
  // Thomas: Il y a plusieurs .formData et comment je fait pour attraper le second? = j'utilise la prop .parentNode
  if (value.length > 0 && value.length < 2) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
    // containerFN.classList.add("error");
    firstName = null;
    A = 0;
  } else if (value == null || value == "" || !value) {
    // ou mettre que !value
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
  //est-ce que ça me sélectionne l'input ou toute la div? = l'input
  //THOMAS: est-ce génant pour l'application des classes css error?
  if (value.length > 0 && value.length < 2) {
    containerLN.setAttribute("data-error-visible", true);
    containerLN.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
    // pour appliquer set Attribute, il faut appeler le selectionner le .formdata
    // document
    //   .querySelector(".formData #lastName")
    //   .setAttribute("formData[data-error-visible]", true);
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
  birthdate = value;
};

const quantityChecker = (value) => {
  if (!value.match(/^[0-9]{0,1}[0-9]$/i)) {
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
    // note pour moi: pour l'instant: si les checkers A, B,C,D,E et la checkboxCGU sont ok
    // un message ok s'affiche en alert et
    //  on peut envoyer le formulaire : return true
    // TODO:  dire ce qu'il faut envoyé et où
    alert("ça marche");
    return true;
  } else {
    alert("Il y a un autre problème, contactez l'administrateur du site.");
    return false;
  }
}

//prevent de Default behaviour on validation while coding:
//empêche la fermeture et la réinitialisation de la modale au clic 'je m'inscris':
// TODO: to place in the case the form is validated and sent (or to remove
// if we are no more need to preven this behavious when code will be ready).
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
