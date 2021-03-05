"use strict";

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close, .btn-close");
const modalbg = document.querySelector(".bground");
const modalSuccessMessage = document.querySelector(".reservation-accepted");

// // click : launch modal
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// // click : close modal
// closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// // launch modal
// function launchModal() {
//   modalbg.style.display = "block";
// }

// // close modal
// function closeModal() {
//   modalbg.style.display = "none";
//   modalSuccessMessage.style.display = "none";
// }

// ********* TEST class Modal *********
class Modal {

  constructor(open, close, modalBackground, modalSuccessMessage) {
    this.open = open;
    this.close = close;
    this.modalBackground = modalBackground;
    this.modalSuccessMessage = modalSuccessMessage;
  }

  openModal() {
    this.open.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.modalBackground.style.display = "block";
      });
    });
  }

  closeModal() {
    this.close.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.modalBackground.style.display = "none";
        this.modalSuccessMessage.style.display = "none";
      });
    });
  }
}

const modalInscription = new Modal(modalBtn, closeBtn, modalbg, modalSuccessMessage);

modalInscription.openModal();
modalInscription.closeModal();