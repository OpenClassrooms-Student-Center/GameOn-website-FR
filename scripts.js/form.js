// empeche le default behaviour du formulaire lors du submit en cas derreur -> il nbe refraichit pas la page
let formulaire = document.getElementById("formulaire");
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInput();
});

//verification contenu formulaire
function validateInput() {
  var fname = document.getElementById("first").value; //retrieve first name value
  var lname = document.getElementById("last").value; //retrieve last name value
  var email = document.getElementById("email").value; //retrieve email value
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; //regex for email
  var birthday = document.getElementById("birthdate").value; //retrieve birthdate value
  var tourQuantity = document.getElementById("quantity").value; //retrieve tournament quantity value
  var location = document.querySelectorAll('input[type="radio"]:checked'); //retrieve location

  // check first name
  if (fname == "" || fname.length < 2 || fname.search(/^[a-zA-Z]+$/) == -1) {
    alert("Please Enter First Name");
    console.log("Please Enter First Name");
  }
  // check last name
  else if (
    lname == "" ||
    lname.length < 2 ||
    lname.search(/^[a-zA-Z]+$/) == -1
  ) {
    alert("Please Enter Last Name");
    console.log("Please Enter Last Name");
  }
  //check email
  else if (email == "") {
    alert("Please Enter Email");
    console.log("Please Enter Email");
  } else if (email.search(emailRegEx) == -1) {
    alert("Please enter a valid email address.");
    console.log("Please enter a valid email address.");
  }
  // check birthdate
  else if (!birthday) {
    alert("Please select Birth Date");
    console.log("Please select Birth Date");
  }
  // check location radiobuttons
  else if (location.length === 0){
    alert("Please select at least one location");
    console.log("Please select at least one location");
}
  // check tournament quantity
  else if (tourQuantity == "") {
    alert("Please enter a number");
    console.log("Please enter a number");
  } else if (tourQuantity < 0) {
    alert("Please enter a positive number");
    console.log("Please enter a positive number");
  } else if (tourQuantity > 99) {
    alert("Please enter a number between 0 and 99");
    console.log("Please enter a number between 0 and 99");
  }
  // check terms of use
  else if (document.getElementById("checkbox1").checked == false) {
    alert("You must accept the terms of use");
    console.log("You must accept the terms of use");
  }
  // closes the form if all fields are filled
  else {
    alert("Form Submitted Successfully");
    console.log("Form Submitted Successfully");
    closeModal();
  }
}

// {
//   // decalration des variables
//   var firstName = document.getElementById("first").value;
//   var lastName = document.getElementById("last").value;
//   var email = document.getElementById("email").value;
//   var DoB = document.getElementById("birthdate").value;
//   var quantity = document.getElementById("quantity").value;
//   var location = document.getElementById("formData").value; // TODO : à revoir
//   var checkbox = document.getElementById("checkbox1").checked;
//   var checkbox2 = document.getElementById("checkbox2").checked;
//   // var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//   if(firstName.length < 2 || lastName.length < 2 || (email.length < 2 || email != /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) || checkbox == false || checkbox2 == false)

//   DoB.length < 2 || quantity.length < 2 || location.length < 2

//   {
//       alert("There is an issue in your form! Please check the following: \n- First name and last name should be at least 2 characters long \n- Email should be valid \n- You must select at least one location \n- You must accept the terms of use \n- You must accept the privacy policy");
//       // console log for testing purposes
//       console.log("There is an issue in your form! Please check the following: \n- First name and last name should be at least 2 characters long \n- Email should be valid \n- You must select at least one location \n- You must accept the terms of use \n- You must accept the privacy policy");
//       return false;
//   } else {
//       return true;
//   }
// }
