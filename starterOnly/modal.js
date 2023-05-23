function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
// DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const btnFermer = document.getElementById("btn-fermer");
  const msg = document.getElementById("msg");
  const modalBody = document.getElementById("modal-body");
  const close = document.getElementById("close");
  const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // close modal event
  btnFermer.addEventListener("click", closeModal);
  close.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }


    // ======================================================
  // ===== Vérification des champs avant validation =======
  // ======================================================
  // ======================================================


  // ecouter la modification du prenom
  form.first.addEventListener("change", function () {
    prenomIsValid(this);
  });

    // ecouter la modification du nom
  form.last.addEventListener("change", function () {
    nomIsValid(this);
  });

    // ecouter la modification de l'email
  form.email.addEventListener("change", function () {
    emailIsValid(this);
  });

    //ecouter la modification de la date de naissance
  form.birthdate.addEventListener("change", function () {
    birthdateIsValid(this);
  });

    // ecouter la modification de la quantité
  form.quantity.addEventListener("change", function () {
    quantityIsValid(this);
  });

    // ecouter la modification de la location
  // selectionner tous les inputs de type "radio" avec name="location"
  let locationInputs = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );
  // ajouter un écouteur d'événement "change" sur chacun des inputs
  locationInputs.forEach((input) => {
    input.addEventListener("change", function () {
      locationIsValid();
    });
  });

    //ecouter la modification des conditions
  form.checkbox1.addEventListener("change", function () {
    checkboxIsValid(this);
  });











  // ============== Vérification du prénom ================

  function prenomIsValid(inputPrenom) {
    // creation de la regex pour la validation du prenom
    let prenomRegEx = new RegExp("^[a-zA-Z]{2,}$");
    // on test la regex
    let testPrenom = prenomRegEx.test(inputPrenom.value);
    console.log(testPrenom);
    const small = document.getElementById("prenom");
    const input = document.querySelector("#first");

    if (testPrenom === true) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      input.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      small.classList.add("text-danger");
      input.classList.add("border-danger");
      return false;
    }
  }

    // ========== Vérification du nom et du prenom ==========

  function nomIsValid(inputNom) {
    // creation de la regex pour la validation du nom
    let nomRegEx = new RegExp("^[a-zA-Z]{2,}$");
    // on test la regex
    let testNom = nomRegEx.test(inputNom.value);
    console.log(testNom);
    // on recupere la balise small
    const small = document.getElementById("nom");
    const input = document.querySelector("#last");

    if (testNom === true) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      input.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      small.classList.add("text-danger");
      input.classList.add("border-danger");
      return false;
    }
  }

    // ============== Vérification de l'email ===============

  function emailIsValid(inputEmail) {
    // création de la regex pour la validation email
    let emailRegEx = new RegExp(
      "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
      "g"
    );
    // on test la regex
    let testEmail = emailRegEx.test(inputEmail.value);
    console.log(testEmail);

    // récupérer la balise small (la balise suivant l'input email)
    const smallMail = document.getElementById("mail");
    const input = document.querySelector("#email");

    if (testEmail === true) {
      smallMail.innerHTML = "";
      smallMail.classList.remove("text-danger");
      input.classList.remove("border-danger");
      return true;
    } else {
      smallMail.innerHTML = "Vous devez entrer un email valide";
      smallMail.classList.add("text-danger");
      input.classList.add("border-danger");
      return false;
    }
  }

    // ========= Vérification de la date de naissance =======

  function birthdateIsValid(inputBirthdate) {
    let birthdate = inputBirthdate.value;
    const input = document.querySelector("#birthdate");

    let birthdateRegEx = /^\d{4}-\d{2}-\d{2}$/;
    let testBirthdate = birthdateRegEx.test(birthdate);
    console.log(testBirthdate);
    const small = document.getElementById("sbirthdate");

    if (testBirthdate === true ) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      input.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML =
        "Vous devez entrer votre date de naissance.";
      small.classList.add("text-danger");
      input.classList.add("border-danger");
      return false;
    }
  }

    // ============== Vérification de la quantity ===========

  function quantityIsValid(inputQuantity) {
    // création de la regex pour la validation de la quantité
    let quantityRegEx = new RegExp("^(?:[1-9]|[1-9][0-9]|0)$");
    // on teste la regex
    let testQuantity = quantityRegEx.test(inputQuantity.value);
    // récupérer la balise small (la balise suivant l'input quantity)
    const smallQ = document.getElementById("squantity");

    // on recupere l'input
    const input = document.querySelector("#quantity");

    if (testQuantity === true) {
      smallQ.innerHTML = "";
      smallQ.classList.remove("text-danger");
      input.classList.remove("border-danger");
      return true;
    } else {
      smallQ.innerHTML = "Entrer un chiffre entre 0 et 99";
      smallQ.classList.add("text-danger");
      input.classList.add("border-danger");
      return false;
    }
  }

    // ============== Vérification de la location ===========

  function locationIsValid() {
    // récupérer tous les inputs de type "radio" avec name="location"
    let inputs = document.querySelectorAll(
      'input[type="radio"][name="location"]'
    );
    const small = document.getElementById("small-loc");

    // console.log(inputs);
    // vérifier si au moins un input est sélectionné
    let isInputSelected = false;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        isInputSelected = true;
        break;
      }
    }
    // afficher le message en fonction de l'état des inputs
    if (isInputSelected === true) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      return true;
    } else {
      small.innerHTML = "Vous devez sélectionner au moins un champs";
      small.classList.add("text-danger");
      return false;
    }
  }

// ============== Vérification des conditions ===========

  function checkboxIsValid() {
    // Récupérer la balise input de type "checkbox" avec l'id "checkbox1"
    let checkbox = document.querySelector(
      'input[type="checkbox"][id="checkbox1"]'
    );

    // Récupérer la balise small
    const small = document.getElementById("check");

    // Vérifier si la checkbox est cochée
    if (checkbox.checked) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      return true;
    } else {
      small.innerHTML = "Vous devez accepter les conditions d'utilisation";
      small.classList.add("text-danger");
      return false;
    }
  }

});
