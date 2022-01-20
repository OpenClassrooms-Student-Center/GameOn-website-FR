////////FORM DATA : Conditions validations


//Regular Expressions (Regex)
const regexName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]{2,}$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumber = /^([0-9]|[1-9][0-9])$/;

//DOM elements
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birth = document.querySelector("#birthdate")
const qty = document.querySelector("#quantity");
//const locations = document.querySelector(".locations");
const location = document.querySelectorAll(".location"); 
const rights = document.querySelector(".rights");
let checkConditions = document.querySelector("#checkbox1");

//----Collect User Data
let valueFirstName = firstName.value.trim(); //trim: remove space before and after string
let valueLastName = lastName.value.trim();
let valueEmail = email.value.trim();
let valueBirth = birth.value;
let valueQty = qty.value.trim();
//let numberCheckLocation;
//let numberCheckRight;
let validationData;



//Functions

//----Test FormData validity
export function formDataValidation(){ 
    let validationData = 0;       

    //--------Firstname : lenght> 1 letter
    function conditionFirstName () {
        if (!valueFirstName.match(regexName)){ 
            showTextError(firstName);
            validationData-- ;
        } else {
            hideTextError(firstName);
        }
    } 

    //--------Lastname : lenght> 1 letter
    function conditionLastName () {
        if (!valueLastName.match(regexName)){ 
            showTextError(lastName);
            validationData-- ;
        } else {
            hideTextError(lastName);
        } 
    }

    //--------Email: format valid
    function conditionEmail () {
        if (!valueEmail.match(regexEmail)){
            showTextError(email);
            validationData-- ;
        } else {
            hideTextError(email);
        } 
    }

    //--------Birthdate: data exist
    function conditionBirthdate () {
        if (!valueBirth){
            showTextError(birth);
            validationData-- ;
        } else {
            hideTextError(birth);
        } 
    }
     
    // --------Number of Games : 0-99  
    function conditionQty () {
        if (valueQty.match(regexNumber) && valueQty===Number.isInteger){
            hideTextError(qty);                              
        } else {
            showTextError(qty);
            validationData-- ;        
        } 
    }

    //--------Towns (radio button): one checked
    function conditionLocation() {
        
        if (location.validity.valid == false ){
            showTextError(location);
            numberCheckLocation = 1;
            validationData-- ;
        } else {    
            hideTextError(location);
            
        }
    }

    //--------TGU and newsletter (checkboxes) : First checkbox must be checked
    function conditionRight() {
        if (checkConditions.getAttribute("checked")== "false"){
            showTextError(checkConditions);
            validationData-- ;
            
        } else {   
            hideTextError(checkConditions);
            
        }
    }

    if (validationData = 0){
        formDataValidation = "true"
    }
    console.log(formDataValidation);
}





//Events on focus

firstName.addEventListener("focusout", () => {
    conditionFirstName();
});

lastName.addEventListener("focusout", () => {
    conditionLastName();
});

email.addEventListener("focusout", () => {
    conditionEmail();
});

birth.addEventListener("focusout", () => {
    conditionBirthdate();
});

qty.addEventListener("focusout", () => {
    conditionQty();
});

/*location.addEventListener("focusout", () => {
    conditionLocation();
});*/

checkConditions.addEventListener("focusout", () => { //verif avac const right
    conditionRight();
});









