/************************************* 
This file contains code for all events
*************************************/

const formData = {
    first:"",
    last:"",
    email:"",
    birthdate:"",
    quantity:"",
    location:"",
    cgu:true,
    next_event:false
}
const form = document.querySelector("form")

initForm(formData)
changeInput(formData)
addRadioCheck(formData)

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let cpt=0
    for (let obj in formData){
        try {
            tryInput(obj,formData[obj])
            if(obj==="location" && formData[obj]===""){
                throw new Error("Vous devez choisir une option.")
            }
            if(obj==="cgu" && formData[obj]===false){
                throw new Error("Vous devez vérifier que vous acceptez les termes et conditions.")
            }
        } catch (Error) {
            erreurDisplay(obj,Error.message)
            cpt++
        } 
    }
    if(cpt===0){
        modalbg.style.display ="none"
        console.log(formData)
    }
    
})