//import { formDataValidation} from "./_formData.js";

//DOM elements
let formData = document.querySelectorAll(".formData");
let input= document.querySelector(".input")
let inputError = document.createElement(".text-control");// for red outline
let textError = document.querySelectorAll(".error");//span


//Functions

//----Show text error

export function showTextError (el) {
    input.after(inputError);
    input.style.outline = "2px solid #D8000C";
    span.after(textError);
    span.style.display = "block";
}
  
//----Hide text error
export function hideTextError(el) { 
    textError.style.display = "none";//A Revoir
    for (let i = 0; i < allTextError.length; i++) { 
        allTextError[i].style.display = "none"// hide red text 
    }

    inputError.style.outline = "none";// hide red outline// a revoir
    for (let i = 0; i < allInputError.length; i++) {
        allInputError[i].style.outline = "none"; 
    }
}