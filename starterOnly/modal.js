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

  // launch and close modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  modalExit.addEventListener("click", closeModal);

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
    modalbg.style.animationName = '';
  }

  //close modal with animation
  function closeModal() {
    modalbg.style.animationName = 'modalclose';
    modalbg.style.animationDuration = 'var(--modal-duration)';
    setTimeout(function() {
      modalbg.style.display = "none";
    }, 500);
  }
  


