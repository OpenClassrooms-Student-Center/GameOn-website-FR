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
const closeBtn = document.querySelector(".close");
const submitForm = document.querySelector("form");
const confirmationbg = document.querySelector(".bgroundbis");
const confirmationCloseBtn = document.querySelector(".closebis");
const fermerBtn = document.getElementById("fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modale quand on clique sur la croix: 
// on ajoute un évènement au clique sur la croix (closeBtn). Lorsque l'on clique dessus, modalbg se voit appliquer un style display:none. La modale retourne donc à son état initiale.
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Fermer la modale de confirmation quand on clique sur la croix ou bouton "fermer":
confirmationCloseBtn.addEventListener("click", () => {
  confirmationbg.style.display = "none";
});

fermerBtn.addEventListener("click", () => {
  confirmationbg.style.display = "none";
});



// Formulaire valide quand l'utilisateur clique sur submit
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first").value;
  const lastName = document.getElementById("last").value;
  const mail = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const checkboxes = document.querySelector("input[name='location']:checked"); //ici on ne peut pas juste mettre ".checkbox-input:checked" car ça selectionnerait aussi les deux autres cases en dessous 
  const cgvBox = document.getElementById("checkbox1");
  const birthdate = document.querySelector("input[name='birthdate']").value;

  const form = document.querySelector("form");

  let birthdateFormatted; // Déclare une variable pour stocker le résultat

  // Vérifie si la chaîne `birthdate` contient un tiret ("-")
  if (birthdate.includes("-")) {
    // Si c'est vrai, on reformate la date

    // Divise la chaîne en un tableau en séparant les éléments par le tiret
    let birthdateParts = birthdate.split("-"); // Exemple : "1990-12-25" devient ["1990", "12", "25"]

    // Inverse l'ordre des éléments dans le tableau
    birthdateParts.reverse(); // Exemple : ["1990", "12", "25"] devient ["25", "12", "1990"]

    // Rejoint les éléments du tableau en une chaîne, en utilisant "/" comme séparateur
    birthdateFormatted = birthdateParts.join("/"); // Exemple : ["25", "12", "1990"] devient "25/12/1990"
  } else {
    // Si `birthdate` ne contient pas de tiret, la chaîne est laissée telle quelle
    birthdateFormatted = birthdate;
  }
  // La variable `birthdateFormatted` contient maintenant soit la date reformattée, soit la date originale

  let isValid=true;

  const formDataFirstName = form.children[0];
  if (!/^[a-zA-Z\s]{2,}$/.test(firstName)) { //ici le regex indique qu'il faut au moins 2 caractères, les lettres et les espaces sont acceptés
    formDataFirstName.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    formDataFirstName.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataFirstName.setAttribute("data-error-visible", "false");
  };

  const formDataLastName = form.children[1];
  if (!/^[a-zA-Z\s]{2,}$/.test(lastName)) {
    formDataLastName.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    formDataLastName.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataLastName.setAttribute("data-error-visible", "false");
  };

  const formDataMail = form.children[2];
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mail)) { //ici le regex indique qu'il faut une suite de caractères puis @ puis suite de caractères puis . puis suite de caractères
    formDataMail.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.");
    formDataMail.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataMail.setAttribute("data-error-visible", "false");
  };

  const formDataBirthdate = form.children[3];
  if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19[0-9]{2}|20[0-9]{2})$/.test(birthdateFormatted)) {
    formDataBirthdate.setAttribute("data-error", "Veuillez entrer votre date de naissance.");
    formDataBirthdate.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataBirthdate.setAttribute("data-error-visible", "false");
  };

  const formDataQuantity = form.children[4];
  if (!/^\d+$/.test(quantity)) {
    formDataQuantity.setAttribute("data-error", "Veuillez entrer un nombre.");
    formDataQuantity.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataQuantity.setAttribute("data-error-visible", "false");
  };

  const formDataLocation = form.children[6]; //on passe du 4 au 6 car le child 5 est un est un <p>.
  if (checkboxes === null) { //null signifie l'absence. !== veut dire strictement différent. !== signie donc présent. On aurait pu aussi utiliser une boucle for mais le code aurait été plus long
    formDataLocation.setAttribute("data-error", "Veuillez choisir une ville.");
    formDataLocation.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataLocation.setAttribute("data-error-visible", "false");
  };

  const formDataCgv = form.children[7];
  if (!cgvBox.checked) { //.checked est une propriété de l'élément <input> de type checkbox
    formDataCgv.setAttribute("data-error", "Vous devez accepter les conditions générales.");
    formDataCgv.setAttribute("data-error-visible", "true");
    isValid=false;
  } else {
    formDataCgv.setAttribute("data-error-visible", "false");
  }

  if (isValid===true) {
    console.log("Formulaire valide");
    modalbg.style.display = "none";
    confirmationbg.style.display = "block";
  } else {
    console.log("Formulaire invalide");
  }

});


// on aurait pu utiliser la Constraint Validation (fonctionnalité de HTML5) et checkValidity() mais le but ici était du javascript pur.

