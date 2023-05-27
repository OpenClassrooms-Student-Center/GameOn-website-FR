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
  const modalExit = document.querySelector(".close");
  const modalSubmit = document.querySelector(".container-confirmation-submit");
  const confirmationExit = document.querySelectorAll(".close-modal-submit, .close-btn-confirmation");

  // appel des fonction pour ouvrir fermer la modal au click
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  modalExit.addEventListener("click", closeModal);
  confirmationExit.forEach(element => {
    element.addEventListener("click", closeConfirmation);
  });

  // lancer la modal avec condition si elle a pas deja été validée
  function launchModal() {
    if (formCompleted === true) {
      confirmationForm()
    }
    else {
    modalbg.style.display = "block";
    modalbg.style.animationName = '';
    }
  }

  //fermeture de la modale
  function closeModal() {
    modalbg.style.animationName = 'modalclose';
    modalbg.style.animationDuration = 'var(--modal-duration)';
    setTimeout(function() {
      modalbg.style.display = "none";
    }, 500);
  }
  
  function confirmationForm() {
    modalSubmit.style.display = 'block';
  }

  function closeConfirmation() {
    modalSubmit.style.display = "none";
  }


