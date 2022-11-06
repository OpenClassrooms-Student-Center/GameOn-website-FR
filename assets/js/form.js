/*********** DOM ELEMENTS**********/
const form = document.querySelectorById("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const conditions = document.querySelector("#checkbox1");
const newsletter = document.querySelector("#checkbox2");

/********* REGEX ******/
const nameRegex = /^[a-zéèôöîïûùü' -]{2,50}$/i;
const emailRegex = /^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,10}$/i;
