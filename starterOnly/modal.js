// DOM Elements
const test;
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

//the form should be valid when submit:
//THOMAS: La soumission est faite directement dans le html (si j'ai bien compris)?
//Du coup je n'ai pas à jouer la fonction
//THOMAS: Est ce que je dois rajouter un contrôle au moment de
// la validation du formulaire? ou est-ce que mes Checker suffise au contrôle?
function validate() {
  if (checkboxCGU.checked) {
    // note pour moi: pour l'instant: si la box checkbox est validée
    // un message s'affiche en alert et
    // alors on peut envoyer le formulaire : return true
    // TODO:  faire le contrôle des données sont ok
    // et dire ce qu'il faut envoyé et où
    alert("ça marche");
    return true;
  } else {
    alert("veuillez cocher les CGU");
    // sinon on indique de ne pas envoyer le formulaire
    return false;
  }
}

//prevent de Default behaviour on validation while coding:
//empêche la fermeture de la modale au clic 'je m'inscris':
// TODO: to remove when code will be ready.
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//------------------------Datas controls-------------------
// Control of datas class text-control:
const inputsText = document.querySelectorAll(".text-control");
let firstName, lastName, email, birthdate, quantity;

const firstNameChecker = (value) => {
  const containerFN = document.querySelector(".formData");
  // Thomas: est ce que mon containerFN existe que dans la fonction firstNameChecker ou partout
  // pourquoi ça marche alors que je suis dans 'document' ? = prend la première itérance et la sélectionne
  // Thomas: Il y a plusieurs .formData et comment je fait pour attraper le second?
  if (value.length > 0 && value.length < 2) {
    containerFN.setAttribute("data-error-visible", true);
    // containerFN.classList.add("error");
    firstName = null;
  } else if (value == null || value == "") {
    containerFN.classList.add("error");
    firstName = null;
  } else {
    containerFN.classList.remove("error");
    firstName = value;
  }
};

const lastNameChecker = (value) => {
  const containerLN = document.querySelector("#lastName");
  //est-ce que ça me sélectionne l'input ou toute la div? = l'input
  //THOMAS: est-ce génant pour l'application des classes css error?
  if (value.length > 0 && value.length < 2) {
    containerLN.classList.add("error");
    // pour appliquer set Attribute, il faut appeler le selectionner le .formdata
    // document
    //   .querySelector(".formData #lastName")
    //   .setAttribute("formData[data-error-visible]", true);
    lastName = null;
  } else if (value == null || value == "") {
    containerLN.classList.add("error");
    lastName = null;
  } else {
    containerLN.classList.remove("error");
    lastName = value;
  }
};

const emailChecker = (value) => {
  const containerE = document.querySelector("#email");
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    containerE.classList.add("error");
    email = null;
  } else {
    containerE.classList.remove("error");
    email = value;
  }
};
// email regex from : https://regexr.com/3e48o

const birthdateChecker = (value) => {
  birthdate = value;
};

const quantityChecker = (value) => {
  const containerQ = document.querySelector("#quantity");
  if (!value.match(/^[0-9]{0,1}[0-9]$/i)) {
    containerQ.classList.add("error");
    quantity = null;
  } else {
    containerQ.classList.remove("error");
    quantity = value;
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
//Ici on écoute sur l'input dans lequel on travaille,
//je veux créer une fonction qui contrôle/vérifie les datas pour chaque
//input, (fonction blablaChecker écrite juste avant et appeler pour chaque cas)
//

// Control of datas class checkbox-label:
const inputsCheckbox = document.querySelectorAll(".checkbox-input");
console.log(inputsCheckbox);
let place;

// checké une location,
// si la checkbox est validé, rajouté la donnée dans le tableau
// les CGU doivent etre checked sinon error
// la newletter peut être checké

function locationChoosen() {
  // ou
  // const locationChoosen= ()=>{}
  if (location1.checked) {
    alert("c'est coché");
  } else {
    alert("c'est pas coché");
  }
}

inputsCheckbox.forEach((input) => {});
// }= (e) => {
//   if (location1.checked) {
//     location = e.value;
//   }
//   console.log(location);
// };
// // inputsCheckbox.forEach((elementIC) => {
// //   elementIC.addEventListener("i", (e) => {
// //   }
// // });
// function validate() {
//   if (checkboxCGU.checked) {
//     // note pour moi: pour l'instant: si la box checkbox est validée
//     // un message s'affiche en alert et
//     // alors on peut envoyer le formulaire : return true
//     // TODO:  faire le contrôle des données sont ok
//     // et dire ce qu'il faut envoyé et où
//     alert("ça marche");
//     return true;
//   } else {
//     alert("veuillez cocher les CGU");
//     // sinon on indique de ne pas envoyer le formulaire
//     return false;

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
