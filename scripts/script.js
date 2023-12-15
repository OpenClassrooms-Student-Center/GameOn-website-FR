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

/// Tests all text and date input form ///
/// writes them to an object parameter ///
/// Returns an erreur in wrong input   ///
function changeInput(objData){
    const formInput = document.querySelectorAll(".text-control")
    console.log(formInput)
    for (let cpt=0 ; cpt<5; cpt++){
        formInput[cpt].addEventListener("change",(event)=>{
            console.log(formInput[cpt].id)
            try {
                switch(event.target.name){
                    case "first":
                        checkNames(event.target.value,false)
                        break
                    case "last":
                        checkNames(event.target.value,true)
                        break
                    case "email":
                        checkEmail(event.target.value)
                        break
                    case "birthdate":
                        checkDate(event.target.value)
                        break
                    case "quantity":
                        checkNumber(event.target.value)
                        break
                }
                objData[event.target.name]=event.target.value
                erreurDisplay(event.target.name,true,"")
            }catch (Error) {
                erreurDisplay(event.target.name,false,`Une erreur est survenue: ${Error.message}`)
            }
        })
    }
}

/// add checkbox and radio input in an object parameter ///
function addRadioCheck(objData) {
    const formChkBox = document.querySelectorAll(".checkbox-input")
        /*recovery the selected tournement*/
    for (let cpt=0 ; cpt<formChkBox.length-2 ; cpt++){
      if (formChkBox[cpt].checked){
        objData.location = formChkBox[cpt].value
      }
    }
        /*recovery cgu and next event*/
    objData.cgu = formChkBox[6].checked
    objData.next_event = formChkBox[7].checked
}

/// check missing ///
function submitClick(objData){
    checkList = ["first","last","email","birthdate","quantity","location"]
    missingList=[]
    addRadioCheck(objData)
    for (let cpt = 0; cpt < checkList.length; cpt++) {
        const elt = checkList[cpt];
        if(objData[elt]===undefined){
            missingList.push(elt)
        }
    }
    return missingList
}

/// Validate first and last name: no error if more than tow letters ///
function checkNames(name , isLast=true){
    name = name.trim()
    if (name.length<2) {
        if (isLast===true){
            throw new Error("nom")
        } else{
            throw new Error("premon")
        }
    }
}

/// Validate email: error if invalid email format ///
function checkEmail(email){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!regex.test(email)) {
        throw new Error(`L'Email ${email} n'est pas valide`)
    }
}

/// Validate the number of participants ///
function checkNumber(nb){
    regex = new RegExp("^[0-9]+$")
    if (!regex.test(nb)){
        throw new Error(`${nb} n'est pas une valeur numérique`)
    }
}

/// Validate date ///
function checkDate(date){
    regex = new RegExp("\\d\\d\\d\\d\\-\\d\\d\\-\\d\\d")
    if (!regex.test(date)){
        throw new Error(`${date} n'est pas une date`)
    }  
}

/// error message display //
function erreurDisplay(erreurTag,remove,text){
    let spanErrorId= erreurTag + "JsErreur"
    erreurTag= "." + erreurTag + "Js"

    const parentTag = document.querySelector(erreurTag)
    const spanError = document.getElementById(spanErrorId)
    const createTag = document.createElement("span")
    with (createTag.style){
        fontFamily="var(--font-default)"
        fontSize="10px"
        fontWeight=400
        color="#FF4E60"
    }
console.log(text)
    if(remove===true){
        const pTag = document.getElementById(spanErrorId)
        pTag.remove()
    }else{
        if (text!=true && !spanError){
            createTag.id = spanErrorId
            parentTag.appendChild(createTag)
            createTag.innerText=text
        }else {
            createTag.innerText=text
        }   
    }
} 