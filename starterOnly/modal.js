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
let eltEmail = document.getElementById('errorEmail');
let eltLast = document.getElementById('errorLast');
let eltFirst = document.getElementById('errorFirst');
let eltDate = document.getElementById('errorDate');
let eltQuantity = document.getElementById('errorQuantity');
let eltRadio = document.getElementById('errorRadio');
let eltCheckbox = document.getElementById('errorCheckbox');
var validRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
const modalForm = document.getElementById("myForm");

span.onclick = function () {
  modalForm.reset();
  modalbg.style.display = "none";
}

modalForm.addEventListener('submit', addModal);
function addModal(e) {
  e.preventDefault();
  
  const formData = new FormData(myForm);
  const first = formData.get('first');
  const numberFirst = first.length;
  var dataFirst = false;
  if (!numberFirst) {
    eltFirst.innerHTML = "Entrez votre prénom svp";
  }
  else if (numberFirst <= 1 ) {
    eltFirst.innerHTML = "Prénom invalid";
  }
  else if (numberFirst >= 2 ) {
    var dataFirst = true;
    eltFirst.innerHTML = "";
  }
 
  const last = formData.get('last');
  const numberLast = last.length;
  var dataLast = false;
  if (!numberLast) {
    eltLast.innerHTML = "Entrez votre nom svp";
  }
  else if (numberLast <= 1 ) {
    eltLast.innerHTML = "Nom invalid";
  }
  else if (numberLast >= 2 ) {
    var dataLast = true;
    eltLast.innerHTML = "";
  }
  
  const email = formData.get('email');
  var dataEmail = false;

  if (!email) {
    eltEmail.innerHTML = "Entrez votre email svp";
  }
  else if (!email.match(validRegex)) {
    eltEmail.innerHTML = "Email invalid";
  }
  else {
    var dataEmail = true;
    eltEmail.innerHTML = "";
  }

  const birthdate = formData.get('birthdate');
  var dataBirth  = false;
  let dateBirth = new Date(birthdate);
  let dateNow = new Date();
  console.log("dateBirth", dateBirth);
  console.log("dateNow", dateNow);
  var valueDate = document.getElementById('birthdate').value;
  if ( valueDate == null || valueDate== '')
  {
    eltDate.innerHTML = "Entrez date de naissance svp";
  }
  else if (dateBirth >= dateNow) {
    eltDate.innerHTML = "Date invalid";
  }
  else {
    var dataBirth  = true;
    eltDate.innerHTML = "";
  }
  
  const quantity = formData.get('quantity');
  var dataQuantity  = false;
  
    if (Number.isInteger, quantity) {
      var dataQuantity = true;
      eltQuantity.innerHTML = "";
    }
    else {
      eltQuantity.innerHTML = "Entrez un chiffre svp";

    }
    
  console.log('myFirst', {first, last, email, birthdate, quantity });
  
  var radios = document.getElementsByName('location');
  var dataRadio = false;
  for(var i = 0; i < radios.length; i++){
   if(radios[i].checked){
      var count1 = {
        i
      }
   }
  }
  if(count1 === undefined){
    eltRadio.innerHTML = "Entrez un choix svp";
  }
  else{
    var dataRadio = true;
    eltRadio.innerHTML = "";
  }
  var checkbox1 = document.getElementById('checkbox1');
  var dataCheckbox1 = false;
  
  var checkbox2 = document.getElementById('checkbox2');
  if (checkbox1.checked) {
  var dataCheckbox1 = true;
    eltCheckbox.innerHTML = "";
  }
  else {
    eltCheckbox.innerHTML = "Vous devez selectionner cette case";
  }
console.log('test général',dataFirst ,dataLast, dataEmail, dataBirth, dataQuantity, dataRadio, dataCheckbox1);
if(dataFirst && dataLast && dataEmail && dataBirth && dataQuantity && dataRadio && dataCheckbox1) {
  const modalbgBis = document.querySelector(".bgroundBis");
  modalForm.reset();
  modalbgBis.style.display = "block";
  modalbg.style.display = "none";
  // alert('result is true.');
  document.getElementById("modal-btn-bis").addEventListener("click", endModal);

  function endModal() {
    modalbgBis.style.display = "none";
  }
}
else{
  alert('result is false.');
}

}


