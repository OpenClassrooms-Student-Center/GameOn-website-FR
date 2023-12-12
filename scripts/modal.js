// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("form")
const closeBtn = document.querySelector(".close")
const formData = {}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";j
  }
}

// returns the form data in an object
function recoveryForm(formObj) {
  const formTxtInput = document.querySelectorAll(".text-control")
  const formChkBox = document.querySelectorAll(".checkbox-input")
  // recovery the input data
  for (let cptInput=0 ; cptInput<formTxtInput.length; cptInput++){
    formObj[formTxtInput[cptInput].id] = formTxtInput[cptInput].value
  }
  // recovery the selected tournement
  for (let cptChk=0 ; cptChk<formChkBox.length-2 ; cptChk++){
    if (formChkBox[cptChk].checked){
      formObj.location = formChkBox[cptChk].value
    }
  }
  // recovery cgu and next event
  formObj.cgu = formChkBox[6].checked
  formObj.next_event = formChkBox[7].checked
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click",()=>{ 
  modalbg.style.display ="none"
})

form.addEventListener("submit",(event)=>{
  event.preventDefault()
  recoveryForm(formData)
  console.log(formData)
})



