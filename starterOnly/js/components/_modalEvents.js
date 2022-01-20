////////MODAL EVENTS : Open/Close on click

//DOM elements 
let modalContainer = document.querySelector(".bground"); //windows with form and congrats
let modalForm = document.querySelector("#modalForm"); //form element
let modalCongrats = document.querySelector(".congrats"); // congrats element

let modalSignupBtn = document.querySelector(".btn-signup");//button "I sign up"
let modalCloseX = document.querySelector(".close");//"icone" X on form and congrats
//let modalBtnGo = document.querySelector(".btnGo");//button "GO" on form 
let modalBtnClose = document.querySelector(".congratsBtnClose");//button "Close" on Congrats
//console.log(modalBtnClose);


//Functions
export function openModal(){
    modalContainer.style.display = "block";
    //console.log("openModal OK");
}

export function closeModal(){
    modalContainer.style.display = "none";
}

export function openModalForm() {
    modalForm.style.display = "";
    modalCongrats.style.display = "none";
    modalForm.reset(); //clear all previous form data and error or other method?
}

export function openModalCongrats() {
    modalForm.style.display = "none";
    modalCongrats.style.display = "flex";
    //console.log ("openModalCongrats OK");
}


//Events on click
 
//----Modal with form
modalSignupBtn.addEventListener("click", openModal, openModalForm);
modalCloseX.addEventListener("click", closeModal);

//----Modal with Congrats
//modalBtnGo.addEventListener("click", openModal, openModalCongrats);
modalBtnClose.addEventListener("click", closeModal);
