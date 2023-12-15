/************************************* 
This file contains code for all events
*************************************/

const formData = {}
const form = document.querySelector("form")

changeInput(formData)

form.addEventListener("submit",(event)=>{   
        event.preventDefault()
        let missing =submitClick(formData)
        console.log(`Manque ${missing.toString()}.`)
  })