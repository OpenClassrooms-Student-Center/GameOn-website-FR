/************************************* 
This file contains code for all events
*************************************/

const formData = {}
const form = document.querySelector("form")
let missing = []


changeInput(formData)

form.addEventListener("submit",(event)=>{   
        event.preventDefault()
        missing = submitClick(formData)
        for (let cpt = 0 ; cpt < missing.length ; cpt++ ){
            erreurDisplay(missing[cpt],"Champs incorrect")
        }
        console.log(`Manque ${missing.toString()}.`)
  })