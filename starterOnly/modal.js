/**============================================
 *!               NavBar
 *=============================================**/

 const opensidebar = document.querySelector('.openNav');
 const navbar = document.querySelector(".main-navbar");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ouverture de la sidebar au format tablette et mobile
function sidebar() {
  navbar.classList.add("openNav");
}
// fermeture de la sidebar au format tablette et mobile
function closeNav() {
  navbar.classList.remove("openNav");
}

/**============================================
 *!               Modal open and close
 *=============================================**/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
// Touche Echap
const keyCodes = "Escape";

// Function flecher ajoute un class qui ouvre la modal.
const openModal = () => {
  modalbg.classList.add("openModal");
  modalbg.classList.replace("closeModal", "openModal");
};

// Function flecher ajoute un class qui ferme la modal.
const closeModal = () => {
  modalbg.classList.add("closeModal");
  modalbg.classList.replace("openModal", "closeModal");
};

function validClose() {
  let Comfirm = document.querySelector(".thank");
  Comfirm.style.transform = "scale(0)";
  closeModal();
}
/** ⁡⁢⁣⁣​‌‍‍𝙤𝙪𝙫𝙚𝙧𝙩𝙪𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙤𝙙𝙖𝙡 𝙖𝙪 𝙘𝙡𝙞𝙘𝙠 𝙙𝙪 𝙗𝙤𝙪𝙩𝙩𝙤𝙣​⁡ **/ 
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    openModal();
  })
);
/** ⁡⁢⁣⁣​‌‍‍𝙁𝙚𝙧𝙢𝙚𝙩𝙪𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙤𝙙𝙖𝙡 𝙖𝙫𝙚𝙘 𝙡𝙖 𝙘𝙧𝙤𝙞𝙭​⁡ **/ 
modalCloseBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    closeModal();
  })
);
/** ⁡⁢⁣⁣​‌‍‍𝙁𝙚𝙧𝙢𝙚𝙩𝙪𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙤𝙙𝙖𝙡 𝙦𝙪𝙖𝙣𝙙 𝙤𝙣 𝙘𝙡𝙞𝙘𝙠 𝙖 𝙡'𝙚𝙭𝙩𝙚𝙧𝙞𝙚𝙪𝙧 𝙙𝙚 𝙘𝙚𝙡𝙡𝙚 𝙘𝙞​⁡ **/ 
window.addEventListener("click", (e) => {
  if (e.target === modalbg) {
    closeModal();
  }
});

/** ⁡⁢⁣⁣​‌‍‍𝙛𝙚𝙧𝙢𝙚𝙩𝙪𝙧𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙤𝙙𝙖𝙡 𝙖𝙫𝙚𝙘 𝙡𝙖 𝙩𝙤𝙪𝙘𝙝𝙚 𝙚𝙘𝙝𝙖𝙥​⁡ (Quand ont relache le boutton "keyup") **/ 
document.addEventListener("keyup", (e) => {
  if (e.key === keyCodes) {
    closeModal();
  }
});
