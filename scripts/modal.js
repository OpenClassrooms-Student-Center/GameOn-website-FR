/*********************************************************************** 
This file contains all the functions required to clode and launch modale
***********************************************************************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalSucess = document.querySelector(".success")
const closeBtn = document.querySelectorAll(".close")
const closeBtnModalSucess = document.querySelector(".btn-closeSuccess")

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalSucess.style.display = "block"
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn)=>btn.addEventListener("click",closeModal))

closeBtnModalSucess.addEventListener("click",closeModal)

// close modal form //
function closeModal(){
  modalbg.style.display ="none"
  modalSucess.style.display = "none"
  initForm(formData)
}




