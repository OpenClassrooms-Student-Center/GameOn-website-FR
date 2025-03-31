// Sélection des éléments du DOM
const modalBg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const burgerIcon = document.querySelector(".icon");
const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='radio'], input[type='checkbox'], input[type='date'], input[type='number'], input[type='password'], textarea");

/***************************/
/* Modal */
/***************************/


// Fonctions d'ouverture et de fermeture du modal
const openModal = () => {
  modalBg.style.display = "block";
};

const closeModal = () => {
  modalBg.style.display = "none";
};

// Fonction pour basculer le menu de navigation (utilise classList.toggle)
const editNav = () => {
  const topNav = document.getElementById("myTopnav");
  topNav.classList.toggle("responsive");
};

// Événements
modalBtns.forEach(btn => btn.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);
burgerIcon.addEventListener("click", () => {
  editNav();
});


// Fermer le modal en cliquant en dehors de son contenu
modalBg.addEventListener("click", event => {
  if (event.target === modalBg) {
    closeModal();
  }
});



/***************************/
/* Formulaire */
/***************************/

const firstNamesChecker = (value) => {
  if (value.length < 2) {
    console.log("Le prénom doit contenir au moins 2 caractères");
  }
};
const lastNamesChecker = (value) => {
  console.log(value);
};
const emailChecker = (value) => {
  console.log(value);
};
const birthdateChecker = (value) => {
  console.log(value);
};
const quantityChecker = (value) => {
  console.log(value);
};
const locationChecker = (value) => {
  console.log(value);
};
const termsChecker = (value) => {
  console.log(value);
};


// Écouter les saisies dans les champs de formulaire

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstNamesChecker(e.target.value);
        break;
      case "last":
        lastNamesChecker(e.target.value);
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
      case "location1":
      case "location2":
      case "location3":
      case "location4":
      case "location5":
      case "location6":  
        locationChecker(e.target.value);
        break;
      case "checkbox1":
        termsChecker(e.target.value);
        break;
      default:
        null;
    }
  });
}); 

