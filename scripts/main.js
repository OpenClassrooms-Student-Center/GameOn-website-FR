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
        for (let cpt = 0 ; cpt < missing.length -1 ; cpt++ ){
            erreurDisplay(missing[cpt],"Champs incorrect")
        }
        if(missing[missing.length-1]==="cgu"){
            erreurDisplay(missing[missing.length-1],"Veuillez accepter les conditions")
        }
  })