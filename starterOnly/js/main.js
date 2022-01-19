//import "./components/_variables";
import { closeModal, openModal, openModalForm, openModalCongrats} from"./components/_modalEvents.js";
//import "./components/_toggleMenu.js";
//import "./components/_formData.js";
//import "./components/_formDataError.js";






 


/*---- DOM Elements----*/

/*Principle:*/
/*SELECT, thanks to a CLASS, first/all (method: querySelector/querySelectorAll)*/
/*existing DOM element(s) ("xxx") */
/*through THE element "document" (=first DOM element)*/
/*and STOCK this information by initiate a variable (keyword=const) and giving her a UNIQUE name*/

//let modalSignupBtn = document.querySelector(".btn-signup");/*button "I sign up*/
//console.log(modalSignupBtn);

//const modalBground = document.querySelector(".bground"); /*modal with form and congrats*/
//const modalForm = document.querySelector("#modalForm"); /*form element*/
//const modalCloseX = document.querySelector(".close");/*"icone" X on form*/
//const modalSubmitBtn = document.querySelector(".btn-submit");/*button "GO" on form*/

//const modalCongrats = document.querySelector(".congrats"); /* congrats element*/
//const modalCloseBtnClose = document.querySelector(".closeModalBtn"); /*button "Close" on page "validation"*/

//FORM
const formData = document.querySelectorAll(".formData");
//form part1 : Info
const firstName = document.querySelector("#first");
const formDataFirst = document.querySelector(".infoFirst");

const lastName = document.querySelector("#last");
const formDataLast = document.querySelector(".infoName");

const emailAddress = document.querySelector("#email");
const formDataEmail = document.querySelector(".infoEmail");

const birth = document.querySelector("#birthdate");
const formDataBirthdate = document.querySelector(".infoBirthdate");

const qty = document.querySelector("#quantity");
const formDataQuantity = document.querySelector(".infoQuantity");

//form part 2 et 3 :location et rights
const place = document.querySelector(".location");
const formDataTown = document.querySelector(".locations");
const check = document.querySelector("#checkbox1");
const formDataCheckboxes = document.querySelector(".rights");

//Collect User Data
let valueFirstName = firstName.value.trim();/*trim: remove space before and after string*/
let valueLastName = lastName.value.trim();
let valueBirth = birth.value.trim();
let valueEmailAddress = emailAddress.value.trim();
let valueQty = qty.value.trim();













