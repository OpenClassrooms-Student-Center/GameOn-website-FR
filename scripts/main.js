/**************************** 
This file contains main code
****************************/

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

/* remove all values in the forms input
and initialise the formdata object */
initForm(formData)

/* monitors with "change" event
and checks the validity of values */
testInput(formData)

/* add or remove next event option
and removes cgu and location error message if present */
testRadioCheck(formData)

/* test all the values in the form,
send the values, and display the confirmation message */
submitClick(formData)

