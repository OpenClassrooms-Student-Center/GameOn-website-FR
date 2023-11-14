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
  hideModal()
}

//hide modal when click on background
function hideModal(){
  modalbg.addEventListener("click", (event) =>{
    if(event.target === modalbg){
      modalbg.style.display = "none";
    }
  })
}

//close modal when click on X
let closeButton = document.querySelector(".content .close")
closeButton.addEventListener("click", () =>{
  modalbg.style.display = "none";
  clearFields()
})

//clear fields when click on X
function clearFields(){
  let nbrFields = document.querySelectorAll(".formData .text-control")

  for(let actualFields = 0; actualFields < nbrFields.length; actualFields++){
    nbrFields[actualFields].value = ""
  }
}
