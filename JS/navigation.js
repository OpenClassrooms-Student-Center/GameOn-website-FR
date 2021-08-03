const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');

const btnMainOpen = document.querySelector('.main__btn');
const btnModCross = document.querySelector('.modal__close');
const btnCloseRegistration = document.querySelector('.modal__closeregistration');
const blockModal = document.querySelector('.modal');
const myForm = document.querySelector('#reservation');
let modal = false;

const allError = document.querySelectorAll('.error');
const allInputs = document.querySelectorAll('.modal__input');
const allItemNav = document.querySelectorAll('.navbar__link');

// Création d'une classe pour fabriquer un objet dans lequel ont met les données du formulaire
class Formulaire {
  constructor() {
    this.firstname = document.querySelector('#first').value;
    this.lastname = document.querySelector('#last').value;
    this.email = document.querySelector('#email').value;
    this.birthdate = document.querySelector('#birthdate').value;
    this.numbers = document.querySelector('#quantity').value;
  }
}

//----------------------------- Menu Header  -----------------------------//

function mobileMenu() {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
}
// Faire apparaitre au click
document.addEventListener("click", mobileMenu);
// sur le hamburger
hamburger.addEventListener("click", mobileMenu);
// sur tout les liens
allItemNav.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu();
  });
});
// on stopPropagation pour menu active && hamburger
if (modal = true) {
  navbarMenu.addEventListener("click", function (e) {
    e.stopPropagation;
    mobileMenu();
  });
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation;
    mobileMenu();
  });
}

//----------------------------- Modale -----------------------------//

// Ouverture
btnMainOpen.addEventListener("click", () => {
  modal = true;
  //console.log(modal);
  blockModal.style.display = "block";
  blockModal.removeAttribute('aria-hidden');
  blockModal.setAttribute('aria-modal', 'true');
  document.removeEventListener("click", mobileMenu);
  allInputs[0].focus();
});
// Fermeture
btnModCross.addEventListener("click", () => {
  modal = false;
  //console.log(modal);
  blockModal.style.display = "none";
  blockModal.setAttribute('aria-hidden', 'true');
  blockModal.removeAttribute('aria-modal');
  document.addEventListener("click", mobileMenu);
});

myForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let error;
  const formulaireValues = new Formulaire();
  const firstName = formulaireValues.firstname;
  const lastName = formulaireValues.lastname;
  const email = formulaireValues.email;
  const birthdate = formulaireValues.birthdate;
  const numbers = document.querySelector("#quantity").value;
  const checkCondition = document.querySelector("#checkbox1");
  
  if (firstName.trim() == "") {
    allError[0].innerHTML = "Le champ prénom est requis";
    allError[0].style.color = "#FF4E60";
    allInputs[0].style.border = "2px solid #FF4E60";
    allInputs[0].focus();
    error = true;
  } else if (regExFirstLastName(firstName) == false) {
    allError[0].innerHTML = "Le champ prénom doit comporter des lettres et des tirets";
    error = true;
  } else {
    allError[0].innerHTML = "";
    allInputs[0].style.border = "2px solid #279e7a";
  }
  if (lastName.trim() == "") {
    allError[1].innerHTML = "Le champ nom est requis";
    allError[1].style.color = "#FF4E60";
    allInputs[1].style.border = "2px solid #FF4E60";
    allInputs[1].focus();
    error = true;
  } else if (regExFirstLastName(lastName) == false) {
    allInputs[4].style.border = "2px solid #FF4E60";
    allError[1].innerHTML = "Le champ nom doit comporter des lettres et des tirets";
    error = true;
  } else {
    allError[1].innerHTML = "";
    allInputs[1].style.border = "2px solid #279e7a";
  }
  if (email.trim() == "") {
    allError[2].innerHTML = "Le champ email est requis";
    allError[2].style.color = "#FF4E60";
    allInputs[2].style.border = "2px solid #FF4E60";
    allInputs[2].focus();
    error = true;
  } else if (regExEmail(email) == false) {
    allInputs[4].style.border = "2px solid #FF4E60";
    allError[2].innerHTML = "Le champ email n'est pas valide";
    error = true;
  } else {
    allError[2].innerHTML = "";
    allInputs[2].style.border = "2px solid #279e7a";
  }
  if (birthdate == "") {
    allError[3].innerHTML = "Le champ email est requis";
    allError[3].style.color = "#FF4E60";
    allInputs[3].style.border = "2px solid #FF4E60";
    allInputs[3].focus();
    error = true;
  } else if (regExBdate(birthdate) == false) {
    allInputs[4].style.border = "2px solid #FF4E60";
    allError[3].innerHTML = "Le champ date de naissance n'est pas valide";
    error = true;
  } else {
    allError[3].innerHTML = "";
    allInputs[3].style.border = "2px solid #279e7a";
  }
  if (numbers == "") {
    allError[4].innerHTML = "Le champ tournois est requis";
    allError[4].style.color = "#FF4E60";
    allInputs[4].style.border = "2px solid #FF4E60";
    allInputs[4].focus();
    error = true;
  } else if (regExNumber(numbers) == false || numbers == null) {
    allInputs[4].style.border = "2px solid #FF4E60";
    allError[4].innerHTML = "Le champ tournoi(s) n'est pas valide";
    error = true;
  } else {
    allError[4].innerHTML = "";
    allInputs[4].style.border = "2px solid #279e7a";
  }
  if (checkCondition.checked == false) {
    allError[5].style.color = "#FF4E60";
    allError[5].innerHTML = "Cocher la case pour valider les conditions";
    document.querySelector("#reservation > div:nth-child(8) > label:nth-child(2) > span.modal__checkicon").style.background = "#FF4E60";
    error = true;
  } else if (checkCondition.checked == true) {
    allError[5].innerHTML = "";
    document.querySelector("#reservation > div:nth-child(8) > label:nth-child(2) > span.modal__checkicon").style.background = "#279e7a";
  }
  console.log(error);
  if (error == true) {
    e.preventDefault();
    return false;
  } else {
    modifyModal()
  }
})
//----------------------------- Gestion de validation du formulaire -----------------------------//

// Expression de fonction pour faire les regEx
const regExFirstLastName = (value) => {
  return /^[A-Za-z\s]{3,20}$/.test(value);
}
const regExEmail = (value) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
}
const regExBdate = (value) => {
  return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(value);
}
const regExNumber = (value) => {
  if (isNaN(value)) {
    return Number(/^(([1-8][0-9]?|9[0-8]?)\.\d+|[1-9][0-9]?)$/.test(value));
  } else {
    return /^^(([1-8][0-9]?|9[0-8]?)\.\d+|[1-9][0-9]?)$/.test(value);
  }
}

function modifyModal() {
  let modalBody = document.querySelector('.modal__body');
  let modalContent = document.querySelector('.modal__content');
  // on cache le formulaire
  modalBody.style.display = "none";
  let newElt = document.createElement("div");
  modalContent.appendChild(newElt);
  newElt.classList.add("modal__registration");
  let modalRegistration = document.querySelector('.modal__registration');
  const newP = document.createElement("p");
  const newBtn = document.createElement("button");
  modalRegistration.appendChild(newP);
  modalRegistration.appendChild(newBtn);
  newP.classList.add("modal__greetings");
  newBtn.classList.add("modal__closeregistration");
  document.querySelector(".modal__greetings").innerHTML = "Merci ! <br>Votre réservation a été reçue."
  document.querySelector(".modal__closeregistration").innerHTML = "Fermer"
  // fermer la seconde modale
  newBtn.addEventListener("click", () => {
    modal = false;
    //on supprime la div crée
    modalBody.style.display = "block";
    modalContent.removeChild(newElt);
    // on maque la modale
    blockModal.style.display = "none";
    blockModal.setAttribute('aria-hidden', 'true');
    blockModal.removeAttribute('aria-modal');
    document.addEventListener("click", mobileMenu);
  });
}

// let error;
//   console.log(allInputs)
//   for (let i in allInputs){
//     if (allInputs[i].value == "") {
//       allError[i].innerHTML = "Le champ est requis";
//       allError[i].style.color = "#FF4E60";
//       allInputs[i].focus();
//       allInputs[i].style.border = "2px solid #FF4E60";
//       error = false;
//     } else {
//       allError[i].innerHTML = "";
//       allInputs[i].style.border = "2px solid #279e7a";
//       console.log(allInputs[i].style.border);
//       error = true;
//     }
//   }
//   if (error) {
//     return false
//   } else {
//     modifyModal()
//   }


