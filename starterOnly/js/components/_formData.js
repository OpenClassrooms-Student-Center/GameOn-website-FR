////////FORM DATA : Conditions for validating each field/Data of the form
import {showTextError, hideTextError} from "./_formDataError.js";

//Regular Expressions (Regex)
const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumber = /^[0-9]{1,2}$/;

//DOM elements
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birth = document.querySelector("#birthdate")
const qty = document.querySelector("#quantity");

let location = document.querySelectorAll('input[name="location"]'); //radio buttons
const right = document.querySelectorAll('input[name="right"]')[0]; //checkbox 1

//----Collect User Data
let locationChecked;
let validationData;


//Functions

//----Test FormData validity
export function formDataValidation(){ 
    let validationData = 0;       

    //--------Firstname : lenght> 1 letter
    
        if (!firstName.value.trim().match(regexName)){ 
            showTextError(firstName);
            validationData-- ;
        } else {
            hideTextError(firstName);
        }
     

    //--------Lastname : lenght> 1 letter
    
        if (!lastName.value.trim().match(regexName)){ 
            showTextError(lastName);
            validationData-- ;
        } else {
            hideTextError(lastName);
        } 
    

    //--------Email: format valid

        if (!email.value.trim().match(regexEmail)){
            showTextError(email);
            validationData-- ;
        } else {
            hideTextError(email);
        } 
    

    //--------Birthdate: data exist
  
        if (!birth.value){
            showTextError(birth);
            validationData-- ;
        } else {
            hideTextError(birth);
        } 
    
     
    // --------Number of Games : 0-99  
    
        if (qty.value.trim().match(regexNumber)){
            hideTextError(qty);                              
        } else {
            showTextError(qty);
            validationData-- ;        
        } 
    

    //--------Towns (radio button): one checked
        
        location.forEach((el) => {
            if (el.checked) locationChecked = el.value;
        });

        if (!locationChecked){
             showTextError(location[0]);
             validationData-- ;
            
        } else {    
             hideTextError(location[0]);    
        };
        //console.log("location checked :",validationData);
    

    //--------TGU and newsletter (checkboxes) : First checkbox must be checked        
        
        if (!right.checked){
            showTextError(right);
            validationData-- ;
            
        } else {   
            hideTextError(right);    
        };
        //console.log("TCU.checked :",validationData);
    
    //--------Result after testing each fields validity  

        console.log(validationData);
        if (validationData == 0){
            return true;
        }else{
            return false;
        };
    
}





