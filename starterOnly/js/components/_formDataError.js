////////FORM DATA ERROR : actions to be performed when there are (or not) errors in the filling of fields by the user 
import { formDataValidation} from "./_formData.js";

//DOM elements
const modalForm = document.querySelector(".modalForm");


//Functions

//----Show text error for each element
export function showTextError(el){
    //console.log(el,":show text error");

    // attribut data-error-visible="true"
    el.closest(".formData").dataset.errorVisible = true;
    //console.log("erreur");
};

//----Hide text error for each element
export function hideTextError(el){
    //console.log(el ," :text error hide");

    // attribut data-error-visible=null
    el.closest(".formData").dataset.errorVisible = null; 
    //console.log("pas d'erreur");
};