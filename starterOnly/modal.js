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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


let inscrit = {
  ifirst:"",
  ilast:"",
  iemail:"",
  ibirthdate:0,
  iquantity:0,
  ilocation1:false,
  ilocation2:false,
  ilocation3:false,
  ilocation4:false,
  ilocation5:false,
  ilocation6:false,
  icheck1:false,
  icheck2:false
}