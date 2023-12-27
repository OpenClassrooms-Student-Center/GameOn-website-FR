/**************************** 
This file contains main code
****************************/

const initData = {
    first:"",
    last:"",
    email:"",
    birthdate:"",
    quantity:"",
    location:"",
    cgu:false,
    next_event:false
}

const form = document.querySelector("form")

let formData = {}

/* remove all values in the forms input
and initialise the formdata object */
formData = resetForm(initData)

/* monitors with "change" event
and checks the validity of values */
attachInputsValidationHandlers(formData)

/* add or remove next event option
and removes cgu and location error message if present */
testRadioCheck(formData)

/* test all the values in the form,
send the values, and display the confirmation message */
//submitClick(formData)
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    onSubmit(formData)
})