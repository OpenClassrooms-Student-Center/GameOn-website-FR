function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCloseBtn = document.querySelectorAll(".close");
  const keyCodes = { escape: 27 }
  
  const openModal = function () {
    modalbg.classList.add('openModal');
    modalbg.classList.replace('closeModal', 'openModal' );
  };
  const closeModal = function () {
    modalbg.classList.add('closeModal');
    modalbg.classList.replace('openModal', 'closeModal');
  };
  // ouverture de la modal au click du boutton
  modalBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      openModal();
    })
  );
  // Fermeture de la modal avec la croix
  modalCloseBtn.forEach((btn) =>
    btn.addEventListener("click", () => {
      closeModal();
    })
  );
  // Fermeture de la modal quand on click a l'exterieur de celle ci
  window.addEventListener("click", (e) => {
    if (e.target === modalbg) {
      closeModal();
    }
  });
  // fermeture de la modal avec la touche echap
  document.addEventListener("keydown", (e) => {
    if (e.which === keyCodes.escape) {
      closeModal();
    }
  });
});

function validClose() {
  let Comfirm = document.querySelector('.thank');
  Comfirm.style.transform = 'scale(0)';
}