/******************************************************* 
This file contains all the functions required to operate
*******************************************************/

/// Burger menu ///
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";j
    }
}

/// Initialize form data if modal is closed
function initForm(objData){
    const formInput = document.querySelectorAll(".text-control")
    for (let cpt = 0 ; cpt < formInput.length ; cpt++){
        formInput[cpt].value = ""
    }

    const formChkBox = document.querySelectorAll(".checkbox-input")
    for (let cpt = 0 ; cpt <formChkBox.length ; cpt++){
        formChkBox[cpt].checked = false
    }
    formChkBox[6].checked = true

    for (let i in objData){
        removeErreurDisplay(i)
        objData[i]=""
    }
    objData.cgu=true
    objData.next_event=false
}

function tryInput(targetName,targetValue){
    switch(targetName){
        case "first":
            checkNames(targetValue,false)
            break
        case "last":
            checkNames(targetValue,true)
            break
        case "email":
            checkEmail(targetValue)
            break
        case "birthdate":
             checkDate(targetValue)
             break
        case "quantity":
            checkNumber(targetValue)
            break
    }

}

/// Tests all text and date input form ///
/// writes them to an object parameter ///
/// Returns an erreur in wrong input   ///
function changeInput(objData){
    const formInput = document.querySelectorAll(".text-control")
    for (let cpt=0 ; cpt<5; cpt++){
        formInput[cpt].addEventListener("input",(event)=>{
            try {
                tryInput(event.target.name,event.target.value)
                objData[event.target.name]=event.target.value
                removeErreurDisplay(event.target.name)
            }catch (Error) {
                objData[event.target.name]="error"
                erreurDisplay(event.target.name,Error.message)
            }
        })
    }
}

/// add checkbox and radio input in an object parameter ///
function addRadioCheck(objData) {
    const formChkBox = document.querySelectorAll(".checkbox-input")

    for (let cpt=0 ; cpt<formChkBox.length ; cpt++){
        formChkBox[cpt].addEventListener("change",(event)=>{

            if (event.target.id==="checkbox1"){
                objData.cgu = event.target.checked
                //if (event.target.checked){
                    removeErreurDisplay("cgu")
                 //   return
                //}
                //erreurDisplay("cgu","Vous devez vérifier que vous acceptez les termes et conditions.")
                return
            }

            if (event.target.id==="checkbox2"){
                objData.next_event = event.target.checked
                return
            }

            objData[event.target.name] = event.target.value 
            removeErreurDisplay("location")
        })
    }
    
}

/// Validate first and last name: no error if more than tow letters ///
function checkNames(name , isLast=true){
    name = name.trim()
    if (name.length<2) {
        if (isLast===true){
            throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
        } else{
            throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
        }
    }
}

/// Validate email: error if invalid email format ///
function checkEmail(email){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!regex.test(email)) {
        throw new Error("Vous devez entrer une adresse de messagerie valide")
    }
}

/// Validate the number of participants ///
function checkNumber(nb){
    regex = new RegExp("^[0-9]+$")
    if ( !regex.test(nb) || nb>100){
        throw new Error("Vous devez entrer une valeur numérique entre 0 et 99")
    }
}

// /// Validate date ///
 function checkDate(date){
     //regex = new RegExp("\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d")
     if (date===""){
         throw new Error("Vous devez entrer votre date de naissance.")
     }  
}

/// remove error message display
function removeErreurDisplay(erreurTag){
    let spanErrorId= erreurTag + "JsErreur"
    const spanError = document.getElementById(spanErrorId)
    const pTag = document.getElementById(spanErrorId)

    const redBorderTag="." + erreurTag + "Js input"
    const inputText=document.querySelector(redBorderTag)

    if(pTag){
        pTag.remove()
        inputText.classList.remove("borderJsErreur")
    } 
}

/// error message display //
function erreurDisplay(erreurTag,text){
    let spanErrorId= erreurTag + "JsErreur"
    const spanError = document.getElementById(spanErrorId)
    
    erreurTag= "." + erreurTag + "Js"
    const parentTag = document.querySelector(erreurTag)
    const createTag = document.createElement("span")

    const redBorderTag=erreurTag + " input"
    const inputText=document.querySelector(redBorderTag)

    if (text!=true && !spanError){
        createTag.id = spanErrorId
        parentTag.appendChild(createTag)
        createTag.innerText=text
        inputText.classList.add("borderJsErreur")
        return
    }

    createTag.innerText=text
} 