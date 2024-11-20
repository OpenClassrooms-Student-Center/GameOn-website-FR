/******************************************************* 
This file contains all the functions required to operate
*******************************************************/

/// Burger menu ///
function editNav() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";j
    }
}

/// Initialize form data if modal is closed ///
function resetForm(){

    const formInput = document.querySelectorAll(".text-control")
    formInput.forEach((elt)=>{
        elt.value = ""
        removeErreurDisplay(elt.id)
    })

    const formChkBox = document.querySelectorAll(".checkbox-input")
    formChkBox.forEach((elt)=>elt.checked = false)
    removeErreurDisplay("location")

    formChkBox[6].checked = initData["cgu"]
    removeErreurDisplay("cgu")

    formChkBox[7].checked = initData["next_event"]

    Object.assign(formData,initData)
}

/// test all the values in the form,                        ///
/// send the values, and display the confirmation message   ///
// @param {object} objData: object storing form values
function onSubmit (objData) { 
    let isValid = true

    for (let obj in objData){
        try {
            tryInput(obj,objData[obj])
            if(obj==="location" && objData[obj]===""){
                throw new Error("Vous devez choisir une option.")
            }
            if(obj==="cgu" && objData[obj]===false){
                throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
            }
        } catch (Error) {
            erreurDisplay(obj,Error.message)
            isValid = false
            
        } 
    }
    //console.log(formData)
    if(isValid){
        modalbg.style.display ="none"
        modalSucess.style.display = "block"
        console.log(objData)
    } 
}

/// check that the values entered are correct
// @param {string} targetName: name of input to test
// @param {string} targetValue: value of input to test
// @throw {string} Error 
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
// @param {object} objData: object storing the form's correct values
// @catch {string} Error: display error on wrong values
function attachInputsValidationHandlers(objData){
    const formInput = document.querySelectorAll(".text-control")
    for (let cpt=0 ; cpt<5; cpt++){
        formInput[cpt].addEventListener("input",(event)=>{
            try {
                tryInput(event.target.name,event.target.value)
                objData[event.target.name]=event.target.value
                removeErreurDisplay(event.target.name)
            }catch (Error) {
                //objData[event.target.name]="error"
                //erreurDisplay(event.target.name,Error.message)
            }
        })
    }
}

/// add or remove next event option and removes cgu and location error message ///
// @param {object} objData: object storing form values
function testRadioCheck(objData) {
    const formChkBox = document.querySelectorAll(".checkbox-input")

    for (let cpt=0 ; cpt<formChkBox.length ; cpt++){
        formChkBox[cpt].addEventListener("change",(event)=>{

            if (event.target.id==="checkbox1"){
                objData.cgu = event.target.checked
                    removeErreurDisplay("cgu")
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
// @param {string} name : first or last name to be tested
// @param {booleen} islast : true = name / false = first name
// @throw {string} Erreur
function checkNames(name , isLast=true){
    let regex = new RegExp("[A-Za-z-]+$")
    name = name.trim()
    if (name.length<2 || !regex.test(name)) {
        if (isLast/*===true*/){
            throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
        } else{
            throw new Error("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
        }
    }
}

/// Validate email: error if invalid email format ///
// @param {string} email: email to be tested
// @throw {string} Erreur
function checkEmail(email){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!regex.test(email)) {
        throw new Error("Vous devez entrer une adresse de messagerie valide")
    }
}

/// Validate the number of participants ///
// @param {number} nb: number to be tested
//@throw {string} Erreur
function checkNumber(nb){
    regex = new RegExp("^[0-9]+$")
    if ( !regex.test(nb) || nb>100){
        throw new Error("Vous devez entrer une valeur numérique entre 0 et 99")
    }
}

/// Validate the presence of the date ///
// @param {string} date: date value
// @throw {string} Erreur
 function checkDate(date){
    // Calcul de l'age /86400000 = ms --> jours
    const ageDate= new Date(date)
    yearDate = ageDate.getFullYear()
    let age = (Date.now()-Date.parse(date))/86400000/365
     if (date==="" || age<16 || yearDate<1900){
         throw new Error("Entrer votre date de naissance(Age limite 16 ans)")
     }
}

/// remove span tag error from the html code ///
// @param {string} erreurTag: name of value (ex: "first" , "location" , "cgu")
//
function removeErreurDisplay(erreurTag){
    let spanErrorId= erreurTag + "JsErreur"
    //const spanError = document.getElementById(spanErrorId)
    const pTag = document.getElementById(spanErrorId)

    const redBorderTag="." + erreurTag + "Js input"
    const inputText=document.querySelector(redBorderTag)

    if(pTag){
        pTag.remove()
        inputText.classList.remove("borderJsErreur")
    } 
}

/// add span tag error from the html code if no present ///
// @param {string} erreurTag: name of value (ex: "first" , "location" , "cgu")
// @param {string} text: message to insert
function erreurDisplay(erreurTag,text){
    // Build Span ID identifier
    let spanErrorId= erreurTag + "JsErreur"
    const spanError = document.getElementById(spanErrorId)
    
    // Build parent class identifier
    erreurTag= "." + erreurTag + "Js"
    const parentTag = document.querySelector(erreurTag)
    const createTag = document.createElement("span")

    // Build red border CSS class indentifier
    const redBorderTag=erreurTag + " input"
    const inputText=document.querySelector(redBorderTag)

    if (/*text!=true &&*/ !spanError){
        createTag.id = spanErrorId
        parentTag.appendChild(createTag)
        createTag.innerText=text
        inputText.classList.add("borderJsErreur")
        return
    }

    createTag.innerText=text
} 