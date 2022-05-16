function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
var valid = [false,false,false,false,false,false,true];
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function close_modal(){
  modalbg.style.display="none";
  document.querySelector('.signup-success').style.display = "flex";
}

function close_signup_success(){
  document.querySelector('.signup-success').style.display = "none";
}

function display_error(){
  for(i=0;i<7;i++){
    (!valid[i])?(formData[i].dataset['errorVisible'] = true):true;
  }
}

function validate(){
  let v  = true;
  valid.forEach((input) => {v?(v=input):(v=false)});
  console.log(v);
  v?close_modal():display_error();
}

formData[0].oninput = function(){
  valid[0]=(document.querySelector('#first').value.length>1)?(true):false;
  formData[0].dataset['errorVisible'] = !valid[0];
}

formData[1].oninput = function(){
  valid[1]=(document.querySelector('#last').value.length>1)?(true):false;
  formData[1].dataset['errorVisible'] = !valid[1];
}

formData[2].oninput = function(){
  let expRegu = /^([^\+{}()\[\]\!\*\/\=\^\#\@\&\?\:\;\$\%\²\|\'\"]+)(.?)([^\+{}()\[\]\!\*\/\=\^\#\@\&\?\:\;\$\%\²\|\'\"]*)@([^\+{}()\[\]\!\*\/\=\^\#\@\&\?\:\;\$\%\²\|\'\"]+)\.([^\+{}()\[\]\!\*\/\=\^\#\@\&\?\:\;\$\%\²\|\'\"(0-9)]{2,3})$/;
  let v=expRegu.test(document.querySelector("#email").value);
  valid[2]=v;
  formData[2].dataset['errorVisible'] = !valid[2];
}

document.querySelector('#birthdate').onblur = function(){
  valid[3] = (document.querySelector('#birthdate').value.length == 0)?false:true;
  formData[3].dataset['errorVisible'] = !valid[3];
}

formData[4].oninput = function(){
  valid[4]=parseInt(document.querySelector('#quantity').value)?true:false;
  formData[4].dataset['errorVisible'] = !valid[4];
}

/*Faire un for pour voir si au moins une radios est cochée*/
formData[5].oninput = function(){
  let v=false;
  document.querySelectorAll('input[name="location"]').forEach((value) => {if(value.checked){v=true;}});
  valid[5]=v;
  formData[5].dataset['errorVisible'] = !valid[5];
}


formData[6].oninput = function(){
  valid[6]=document.querySelector('#checkbox1').checked?true:false;
  formData[6].dataset['errorVisible'] = !valid[6];
}

var s = [true,false,true];
var compteur=0;

s.forEach((value) => {compteur++;if(!value){return false}});
