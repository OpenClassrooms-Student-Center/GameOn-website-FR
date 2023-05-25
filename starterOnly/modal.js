function editNav() {
  const x = document.getElementById("myTopnav");
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
  const close1 = document.getElementById("close1");
  const form = document.getElementById("form");
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const condition = document.querySelector("#checkbox1");



    // masquer le message de confirmation
    msg.style.display = "none";

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
    modalBody.style.display = "block";
    msg.style.display = "none";
    form.reset();
  }

    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  // close modal form
  function closeModal() {
    const textDanger = document.querySelectorAll(".text-danger");
    const borderDanger = document.querySelectorAll(".border-danger");
    const smalls = document.querySelectorAll("small");
    textDanger.forEach((element) => {
      element.classList.remove("text-danger");
    });
    borderDanger.forEach((element) => {
      element.classList.remove("border-danger");
    });
    for (let i = 0; i < smalls.length; i++) {
      smalls[i].innerHTML = "";
    }
    modalbg.style.display = "none";
  }

    // close modal
    btnFermer.addEventListener("click", closeModal);
    close.addEventListener("click", closeModal);
    close1.addEventListener("click", closeModal);


    // ============== Vérification du prénom ================

  function prenomIsValid() {
    // creation de la regex pour la validation du prenom
    let prenomRegEx = /^[a-zA-Z]{2,}$/;
    // on test la regex
    let testPrenom = prenomRegEx.test(firstName.value);
    console.log(testPrenom);
    const small = document.getElementById("prenom");

    if (testPrenom === true) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      firstName.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      small.classList.add("text-danger");
      firstName.classList.add("border-danger");
      return false;
    }
  }

  // ========== Vérification du nom et du prenom ==========

  function nomIsValid() {
    // creation de la regex pour la validation du nom
    let nomRegEx = /^[a-zA-Z]{2,}$/;
    // on test la regex
    let testNom = nomRegEx.test(lastName.value);
    console.log(testNom);
    // on recupere la balise small
    const small = document.getElementById("nom");

    if (testNom === true) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      lastName.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      small.classList.add("text-danger");
      lastName.classList.add("border-danger");
      return false;
    }
  }

  // ============== Vérification de l'email ===============

  function emailIsValid() {
    // création de la regex pour la validation email
    let emailRegEx = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

    // on test la regex
    let testEmail = emailRegEx.test(email.value);
    console.log(testEmail);

    // récupérer la balise small (la balise suivant l'input email)
    const smallMail = document.getElementById("mail");

    if (testEmail === true) {
      smallMail.innerHTML = "";
      smallMail.classList.remove("text-danger");
      email.classList.remove("border-danger");
      return true;
    } else {
      smallMail.innerHTML = "Vous devez entrer un email valide";
      smallMail.classList.add("text-danger");
      email.classList.add("border-danger");
      return false;
    }
  }

  // ========= Vérification de la date de naissance =======

  function birthdateIsValid() {
    let birthdateRegEx = /^\d{4}-\d{2}-\d{2}$/;
    let testBirthdate = birthdateRegEx.test(birthdate.value);
    console.log(testBirthdate);
    const small = document.getElementById("sbirthdate");

    if (testBirthdate === true ) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      birthdate.classList.remove("border-danger");
      return true;
    } else {
      small.innerHTML =
        "Vous devez entrer votre date de naissance.";
      small.classList.add("text-danger");
      birthdate.classList.add("border-danger");
      return false;
    }
  }

  // ============== Vérification de la quantity ===========

  function quantityIsValid() {
    // création de la regex pour la validation de la quantité
    let quantityRegEx = /^\d+$/;
    // on teste la regex
    let testQuantity = quantityRegEx.test(quantity.value);
    // récupérer la balise small (la balise suivant l'input quantity)
    const smallQ = document.getElementById("squantity");

    // on recupere l'input
    if (testQuantity === true) {
      smallQ.innerHTML = "";
      smallQ.classList.remove("text-danger");
      quantity.classList.remove("border-danger");
      return true;
    } else {
      smallQ.innerHTML = "Entrer un chiffre entre 1 et 99";
      smallQ.classList.add("text-danger");
      quantity.classList.add("border-danger");
      console.log(testQuantity);
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
    // Récupérer la balise small
    const small = document.getElementById("check");

    // Vérifier si la checkbox est cochée
    if (condition.checked) {
      small.innerHTML = "";
      small.classList.remove("text-danger");
      return true;
    } else {
      small.innerHTML = "Vous devez accepter les conditions d'utilisation";
      small.classList.add("text-danger");
      return false;
    }
  }


  // ======================================================
  // ===== Vérification des champs avant validation =======
  // ======================================================
  // ======================================================
  // ecouter la modification du prenom
  form.first.addEventListener("change", function () {
    prenomIsValid();
  });

  // ecouter la modification du nom
  form.last.addEventListener("change", function () {
    nomIsValid();
  });
  // ecouter la modification de l'email
  form.email.addEventListener("change", function () {
    emailIsValid();
  });
  //ecouter la modification de la date de naissance
  form.birthdate.addEventListener("change", function () {
    birthdateIsValid();
  });
  // ecouter la modification de la quantité
  form.quantity.addEventListener("change", function () {
    quantityIsValid();
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
    checkboxIsValid();
  });
  

  // ======================================================
  // ============== Vérification du formulaire ============
  // ======================================================
  // ======================================================

  function submitForm(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Vérification que les champs sont valides
    prenomIsValid();
    nomIsValid();
    emailIsValid();
    birthdateIsValid();
    quantityIsValid();
    locationIsValid();
    checkboxIsValid();

    if (prenomIsValid() && nomIsValid() && emailIsValid() && birthdateIsValid() 
      && quantityIsValid() && locationIsValid() && checkboxIsValid()) {
      modalBody.style.display = "none";
      document.getElementById("msg").style.display = "block";
      console.log("Formulaire valide"); 
    } 
  }

  // Ajout d'un écouteur d'événements sur le bouton de soumission du formulaire
  const submitButton = document.getElementById("btn-validation");
  submitButton.addEventListener("click", submitForm);
});
