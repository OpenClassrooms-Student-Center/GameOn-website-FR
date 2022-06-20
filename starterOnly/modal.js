// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");

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
let A, B, C, D;
// des variables vides

const firstNameChecker = (value) => {
  const containerFN = document.querySelector(".formData");
  // Thomas: est ce que mon containerFN existe que dans la fonction firstNameChecker ou partout
  // pourquoi ça marche alors que je suis dans 'document' ? = prend la première itérance et la sélectionne
  // Thomas: Il y a plusieurs .formData et comment je fait pour attraper le second?
  if (value.length > 0 && value.length < 2) {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Il faut ajouter plus de caractères"
    );
    // containerFN.classList.add("error");
    firstName = null;
    A = 0;
  } else if (value == null || value == "") {
    containerFN.setAttribute("data-error-visible", true);
    containerFN.setAttribute(
      "data-error",
      "Il ne faut pas effacer le champs et lui mettre une valeur quand même"
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
  const containerLN = document.querySelector(".formData");
  //est-ce que ça me sélectionne l'input ou toute la div? = l'input
  //THOMAS: est-ce génant pour l'application des classes css error?
  if (value.length > 0 && value.length < 2) {
    containerLN.setAttribute("data-error-visible", true);
    // pour appliquer set Attribute, il faut appeler le selectionner le .formdata
    // document
    //   .querySelector(".formData #lastName")
    //   .setAttribute("formData[data-error-visible]", true);
    lastName = null;
    B = 0;
  } else if (value == null || value == "") {
    containerLN.classList.add("erreur");
    lastName = null;
    B = 0;
  } else {
    containerLN.classList.remove("erreur");
    lastName = value;
    B = 1;
  }
};

const emailChecker = (value) => {
  const containerE = document.querySelector("#email");
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    containerE.classList.add("erreur");
    email = null;
    C = 0;
  } else {
    containerE.classList.remove("erreur");
    email = value;
    C = 1;
  }
};
// email regex from : https://regexr.com/3e48o

const birthdateChecker = (value) => {
  birthdate = value;
};

const quantityChecker = (value) => {
  const containerQ = document.querySelector("#quantity");
  if (!value.match(/^[0-9]{0,1}[0-9]$/i)) {
    containerQ.classList.add("erreur");
    quantity = null;
    D = 0;
  } else {
    containerQ.classList.remove("erreur");
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
let place;
let checkboxNewsVar = false;
let E;

// checké une location,
// si la checkbox est validé, mémoriser la donnée dans une variable
inputsCheckbox.forEach((input) => {
  input.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "location1":
        if (location1.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "location2":
        if (location2.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "location3":
        if (location3.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "location4":
        if (location4.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "location5":
        if (location5.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "location6":
        if (location6.checked) {
          place = e.target.value;
          E = 1;
        }
        break;
      case "checkboxCGU":
        if (checkboxCGU.checked) {
        } else {
          alert("cochezzzzzz les CGU !!!!!!!");
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
function validate() {
  if (A + B + C + D + E == 5 && checkboxCGU.checked) {
    // note pour moi: pour l'instant: si les checkers A, B,C,D,E et la checkboxCGU sont ok
    // un message ok s'affiche en alert et
    // alors on peut envoyer le formulaire : return true
    // TODO:  dire ce qu'il faut envoyé et où
    alert("ça marche");
    return true;
  } else {
    alert("y a un problème");
    // sinon on indique de ne pas envoyer le formulaire
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
