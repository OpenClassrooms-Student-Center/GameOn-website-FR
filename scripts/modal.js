/*********************************************************************** 
This file contains all the functions required to clode and launch modale
***********************************************************************/

/// DOM Elements ///
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const modalSucess = document.querySelector(".success")
const closeBtn = document.querySelectorAll(".close")
const closeBtnModalSucess = document.querySelector(".btn-closeSuccess")

/// modal opening form ///
function launchModal() {
  modalbg.style.display = "block"
}

/// modal opening event ///
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/// event capture: cross closure ///
closeBtn.forEach((btn)=>btn.addEventListener("click",closeModal))

closeBtnModalSucess.addEventListener("click",closeModal)

/// modal closing function ///
function closeModal(){
  modalbg.style.display ="none"
  modalSucess.style.display = "none"
  resetForm()
}




