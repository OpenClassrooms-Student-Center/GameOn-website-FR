//MAIN : actions to be taken when submitting the form and when there is a navbar icon
import { editNav} from "./components/_toggleMenu.js";
import { closeModal, openModal, openModalForm, openModalCongrats} from "./components/_modalEvents.js";
import { formDataValidation } from "./components/_formData.js";
import { showTextError, hideTextError} from "./components/_formDataError.js";

//DOM element
const modalForm = document.querySelector(".modalForm");

// Form validity event
modalForm.addEventListener("submit", e => {
  //console.log("go ok")
  e.preventDefault();//stop form refresh by navigator

  if (formDataValidation()) {
    //console.log("formData validation true")
    openModal(); 
    openModalCongrats();
      
  } else{
    //console.log("formData validation false")
    return false;
  }
  return false
});
  


