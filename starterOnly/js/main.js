
import { editNav} from "./components/_toggleMenu.js";
import { closeModal, openModal, openModalForm, openModalCongrats} from "./components/_modalEvents.js";
import { formDataValidation } from "./components/_formData.js";

//import { showTextError, hideTextError} from "./components/_formDataError.js";

//DOM element
let modalBtnGo = document.querySelector(".btnGo");//button "GO" on form

// Form validity event
modalBtnGo.addEventListener ("click", e => {
  formDataValidation();
  e.preventDefault();//ne marche pas

  if (formDataValidation.valid ="true") {
    openModal(); 
    openModalCongrats();
      
  } else{
    console.log(formValidation);
    return false;
  }
});
  


