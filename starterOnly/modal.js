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
const formData = document.querySelectorAll(".formData");
const modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal function
// when we click the x, the modal display property is changed to none.
const contentbox = document.querySelector(".content");
function closeModal() {
  // Première option: on ferme purement et simplement
  modalbg.style.display = "none";
  // Seconde option: on fait remonter avec animation, opacity = 0
  /* modalbg.style.animation = "modalclose 1s forwards"; */ // pb: on ne peut plus afficher le modal...
  /* contentbox.style.animation = "modalclose 1s forwards";
  modalbg.style.animation = "modalclosepure 1s ease-in 1s forwards"; */
}


// Validate function
// when all fields in the form are valid the validate function returns true.
// otherwise the form cannot be submitted (and the values entered stay)
function validate() {

  // on récupère les valeurs des différents champs
  const formFirst = document.querySelector("#first").value; // prénom
  const formLast = document.querySelector("#last").value; // nom
  const formEmail = document.querySelector("#email").value; // email
  const formBirthdate =  document.querySelector("#birthdate").value; // date naissance
  const formQuantity = document.querySelector("#quantity").value; // nombre de concours
  // une ville est elle sélectionnée ? cf fonction radioChecked plus bas 
  const formGeneral = document.querySelector("#checkbox1").checked; // conditions générales acceptées

  // on va à présent tester pour chacune des valeurs si elle correspond à ce qui est attendu.
  // Si oui, tout se déroule "en silence", si non on affiche un message d'erreur dans la console.
 
  // par souci de simplicité/éviter répétitions, on stocke l'ensemble des conditions dans une array
  const conditions = [
    formFirst.length < 2,
    formLast.length < 2,
    !validateEmail(formEmail),
    formBirthdate.length === 0 || validateBirthdate(formBirthdate),
    !Number.isInteger(Number(formQuantity)) || Number(formQuantity) < 0 || Number(formQuantity) > 99 || formQuantity === "",
    !radioChecked(),
    !formGeneral
  ];

  // on récupère l'ensemble des éléments ayant la classe "warning"
  const warningText = document.querySelectorAll(".warning");
  const attentionOutline = document.querySelectorAll(".attention");

  // on créé une variable qui va stocker le nombre de champs invalide
  let invalidInput = 0;

  // pour chaque condition, on vérifie si elle est vérifiée
  for (let i = 0; i<conditions.length; i++) {
    if (conditions[i]) { // si oui (ie, si le champ est invalide): 
      warningText[i].style.display = "inline-block"; // on affiche un message d'erreur 
      attentionOutline[i].style.outline = "2px solid red";
      invalidInput++; // et on incrémente le nombre de champs invalide
    } else { // si non (ie si le champ est valide)
      warningText[i].style.display =" none"; // on fait disparaitre un éventuel message d'erreur
      attentionOutline[i].style.outline = "0px solid red";
    }
  }

  // si le nombre d'entrées invalides est supérieur à 0, on bloque l'envoi.
  if (invalidInput > 0) {
    return false;
  } else { // sinon, on peut afficher un message indiquant le bon envoi du formulaire
    showSuccess();
  }

}

// Validate email function
// Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript?page=1&tab=votes#tab-top
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate radio check: l'une des villes est-elle sélectionnée?
function radioChecked() {
  let checkedItems = 0;
  let formLocation = [];
  for (let i=0; i<6; i++) {
    formLocation[i] = document.querySelector("#location"+[i+1]);
    if (formLocation[i].checked) {
      checkedItems = 1;
    }
  }
  return checkedItems;
}

// Validate Birthdate
// Adapted from: https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
function validateBirthdate(testDate) {
  var date_regex = /^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
  if (!(date_regex.test(testDate))) {
    return false;
  } else {
    return true;
  }
}

// Function showSuccess : si les entrées du formulaire sont validées, on affiche ce contenu
function showSuccess() {
  const formFull = document.getElementById("test_form");
    formFull.style.visibility = "hidden";

    const modalSuccess = document.createElement("div");
    modalBody.appendChild(modalSuccess);
    modalSuccess.classList.add("success-box");
	  modalSuccess.innerHTML = "<p class=\"success\">Merci, votre demande a bien été réceptionnée !</p><button class=\"btn-submit modal-btn btn-center\" onclick=\"closeModal()\">Fermer</button>";
}