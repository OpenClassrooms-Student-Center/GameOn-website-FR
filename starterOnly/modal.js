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



});
