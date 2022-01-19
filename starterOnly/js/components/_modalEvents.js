//DOM element
let modalContainer = document.querySelector(".bground"); //windows with form and congrats
let modalForm = document.querySelector("#modalForm"); //form element
let modalCongrats = document.querySelector(".congrats"); // congrats element

let modalSignupBtn = document.querySelector(".btn-signup");//button "I sign up"
console.log(modalSignupBtn);
let modalCloseX = document.querySelector(".close");//"icone" X on form and congrats
console.log(modalCloseX);
let modalBtnGo = document.querySelector(".btnGo");//button "GO" on form 
console.log(modalBtnGo);
let modalBtnClose = document.querySelector(".congratsBtnClose");//button "Close" on Congrats
console.log(modalBtnClose);


//Functions

export function openModal(){
    modalContainer.style.display = "block";
    console.log("openModal OK");
}

export function closeModal(){
    modalContainer.style.display = "none";
    console.log("closeModal OK");
}

export function openModalForm() {
    modalForm.style.display = "";
    modalCongrats.style.display = "none";
    modalForm.reset(); /*clear all previous form data and error or other method?*/
    
    console.log ("openModalForm OK");
}

export function openModalCongrats() {
    modalForm.style.display = "none";
    modalCongrats.style.display = "";

    console.log ("openModalCongrats OK");
}


//Events on click
 
//----Modal with form
modalSignupBtn.addEventListener("click", openModal, openModalForm);
modalCloseX.addEventListener("click", closeModal);

//----Modal with Congrats
modalBtnGo.addEventListener("click", openModal, openModalCongrats);
modalBtnClose.addEventListener("click", closeModal);
