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
  const modalExit = document.querySelector(".close");
  const modalSubmit = document.querySelector(".container-confirmation-submit");
  const confirmationExit = document.querySelectorAll(".close-modal-submit, .close-btn-confirmation");

  // launch and close modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  modalExit.addEventListener("click", closeModal);
  confirmationExit.forEach(element => {
    element.addEventListener("click", closeConfirmation);
  });

  // launch modal form
  function launchModal(formCompleted) {
    if (formCompleted = true) {
      confirmationForm()
    }
    else {
    modalbg.style.display = "block";
    modalbg.style.animationName = '';
    }
  }

  //close modal with animation
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


