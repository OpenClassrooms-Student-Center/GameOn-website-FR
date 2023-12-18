/*********************************************************************** 
This file contains all the functions required to clode and launch modale
***********************************************************************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close")

// launch modal form
function launchModal() {
  if (missing[0]){
    for (let cpt = 0 ; cpt < missing.length ; cpt++){
      removeErreurDisplay(missing[cpt])
    }
  }

  initForm()
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click",()=>{ 
  modalbg.style.display ="none"
})



