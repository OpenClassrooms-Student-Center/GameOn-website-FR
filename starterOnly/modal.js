function editNav() {
  if (x.className === "topnav") {
    var x = document.getElementById("myTopnav");
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const submit = document.querySelector(".btn-submit");
const firstDiv = form.first.parentElement;



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



// -------------------------------            Issue #1              ----------------------------------//
// ------------  close modal when click on span class "close" by changing display mode  ---------------//

// creating a function that changes the display value
function closeModal() {
  modalbg.style.display = "none";
}
// select the close button by className
const closeBtn = document.querySelector(".close");
// on click, calling closeModal() function
closeBtn.addEventListener("click", closeModal);




// -------------------------------            Issue #2              ----------------------------------//
// ------------           form inputs must be valid when clicking on "Submit"           ---------------//


// submit.disabled = true;

// function validInput(input) {
//   input.style.border = "2px solid green";
// }
// function invalidInput(input) {
//   input.style.border = "2px solid red";
// }


// // ------------                       validates form entries                           ---------------//


// // function to validate "first" entry
// // checking if input value match the regex pattern, if so return true
// function validateFirst() {
//   const span = document.createElement("span");
//   const first = form.first;
//   let namesRegex = /\w{2,}/;
//   first.addEventListener("blur", function() {
//     if (namesRegex.test(first.value)) {
//       validInput(first)
//       return true
//     } else {
//       invalidInput(first);
//       span.innerText = errorMessage.first;
//       form.first.parentElement.appendChild(span);
//       span.classList.add("form-warning");
//       // showSpan(first);
//       return false;
//     }
//   });
// }


// function validateLast() {
//   const last = form.last;
//   let namesRegex = /\w{2,}/;
//   last.addEventListener("blur", function() {
//     if (namesRegex.test(last.value)) {
//       validInput(last)
//       return true;
//     } else {
//       invalidInput(last);
//       // span.innerText = errorMessage.last;
//       // span.classList.add("form-warning")
//       // form.last.parentElement.appendChild(span);
//       return false;
//     };
//   })
// }

// function validateEmail() {
//   const email = form.email;
//   let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   email.addEventListener("change", function() {
//     if (emailRegex.test(email.value)) {
//       return true;
//     } else {
//       return false;
//     };
//   })
// }

// function validateBirthdate() {
//   const birthdate = form.birthdate;
//   let dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
//   return dateRegex.test(birthdate.value);
// }

// function validateQuantity() {
//   const quantity = form.quantity;
//   let quantityRegex = /^\d+$/;
//   return quantityRegex.test(quantity.value);
// }

// // function to validate if a location is checked
// function validateLocation() {
//   // selecting all the input of type radio
//   const locations = document.querySelectorAll("[type=radio]");
//   //looping on all radio buttons to check if one is checked
//   for (const location of locations) {
//     if (location.checked) {
//       // if so return true
//       return true;
//     }
//   }
//   return false;
// }

// function validateTOU() {
//   // selecting the checkbox input managing the terms of use
//   const terms = document.querySelector("#checkbox1");
//   // checking if this is checked, if so return true
//   return terms.checked;
// }

// function validateForm() {
//   validateFirst();
//   validateLast();
//   validateEmail();
//   validateBirthdate();
//   validateQuantity();
//   validateLocation();
//   validateTOU();
//   // select the "Submit button"
//   // disable button if all input are not valid
//   if (validateFirst() && validateLast() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateTOU()) {
//     submit.disabled = false;
//   } else {
//     submit.disabled = true;
//   }
// };

// form.addEventListener("change", validateForm);

// // -------------------------------            Issue #3              ----------------------------------//
// // -------------------------        Add validation or error messages       ---------------------------//

// const errorMessage = {
//   first: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
//   last: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
//   email: "Veuillez entrer une adresse mail valide.",
//   date: "Vous devez entrer votre date de naissance.",
//   locations: "Vous devez choisir une option.",
//   terms: "Vous devez vérifier que vous acceptez les termes et conditions."
// }

// const span = document.createElement("span");
// function showSpan(input) {
//   // const inputParent = form.first.parentNode;
//   // console.log(inputParent);
//   span.innerText = errorMessage[input.id];
//   formData.appendChild(span);
//   span.classList.add("form-warning")
// }


// function emptySpan(input) {
//   const formData = input.closest(".formData")
//   span.innerText = "";
// }





// const span = document.createElement("span");

// function showSpan(input) {
//   const formData = input.closest(".formData");
//   console.log(formData);
//   span.innerText = spanMessage;
//   span.classList.add("form-warning");
//   formData.appendChild(span);
//   console.log(span);
// }
// function deleteSpan(input) {
//   const formData = input.closest(".formData");
//   console.log(formData);
//   // span.remove();
//   span.innerText = "";
//   console.log(span);
// }

// // pour le premier, au blur, vérifier la validité de ce qui est renseigné en fonction de la regex
// let firstIsValid = false;
// function validateFirst() {
//   const first = form.first;
//   spanMessage = "doit contenir au moins 2 caractères";
//   regex = /\w{2,}/;
//   first.addEventListener("blur", function() {
//     // si correct: borderColor green
//     if (first.value.match(regex)) {
//       first.style.border = "2px solid green";
//       firstIsValid = true;
//     } else {
//       // si incorrect: borderColor red
//       first.style.border = "2px solid red";
//       // définir le span message
//       // afficher le span message
//       showSpan(first);
//     }
//   })
//   first.addEventListener("focus", function() {
//     deleteSpan(first);
//   })
// };
// validateFirst();


// let lastIsValid = false;
// function validateLast() {
//   const last = form.last;
//   spanMessage = "doit contenir au moins 2 caractères";
//   regex = /\w{2,}/;
//   last.addEventListener("blur", function() {
//     if (last.value.match(regex)) {
//       last.style.border = "2px solid green";
//       lastIsValid = true
//     } else {
//       last.style.border = "2px solid red";
//       showSpan(last);
//     }
//   })
//   last.addEventListener("focus", function() {
//     deleteSpan(last);
//   })
// };
// validateLast();


// let emailIsValid = false;
// function validateEmail() {
//   const email = form.email;
//   regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   email.addEventListener("blur", function() {
//     if (email.value.match(regex)) {
//       email.style.border = "2px solid green";
//       emailIsValid = true
//     } else {
//       email.style.border = "2px solid red";
//       spanMessage = "doit contenir une adresse mail valide";
//       showSpan(email);
//     }
//   })
//   email.addEventListener("focus", function() {
//     deleteSpan(email);
//   })
// };
// validateEmail();





// ------------------------------------------------------------------//

const formEntries = document.querySelectorAll(".formData");
let isValid = {
    "first": false,
    "last": false,
    "email": false,
    "birthdate": false,
    "quantity": false,
    "location1": false,
    "checkbox1": false
}


function validInputHighlight(input) {
  input.style.border = "2px solid green";
}
function invalidInputHighlight(input) {
  input.style.border = "2px solid red";
}

// function textControlValidate(input) {
  //   let regex = "";
  //   const textControlSpan = document.createElement("span");

  //   input.addEventListener("blur", function() {
    //     console.log(input);
    //     switch (input.id) {
      //       case "first":
      //       case "last":
      //         regex = /\w{2,}/;
      //         errorMessage = "Le champ doit contenir au moins 2 caractères";
      //         break;
      //       case "email":
      //         regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         errorMessage = "L'adresse mail doit être valide";
//         break;
//       case "birthdate":
//         regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
//         errorMessage = "doit contenir une date valide";
//         break;
//       case "quantity":
//         regex = /^0*?[0-9]\d*$/;
//         errorMessage = "Le champ doit contenir une valeur numérique";
//         break;
//     }
//     if (regex.test(input.value)) {
  //       validInputHighlight(input);
  //       errorMessage = "";
  //       isValid[input.id] = true;
  //     } else {
    //       invalidInputHighlight(input);
    //       isValid[input.id] = false;
    //       textControlSpan.innerText = errorMessage;
    //       input.parentElement.appendChild(textControlSpan);
    //       // console.log(input.parentElement);
//       textControlSpan.classList.add("form-warning");
//     }
//   })
// }

// function locationValidate(input) {
  //   errorMessage = "Vous devez choisir une option."
  //   const locationSpan = document.createElement("span");
  //   const locations = document.querySelectorAll("[type=radio]");
  //   for (const location of locations) {
    //     submit.addEventListener("click", function() {
      //       if (location.checked) {
        //         isValid[inputName] = true;
//         errorMessage = "";
//       } else {
  //         locationSpan.innerText = errorMessage;
  //         input.parentElement.appendChild(locationSpan);
  //         locationSpan.classList.add("form-warning");
  //       }
  //     })
  //   }
  // }


formEntries.forEach(formEntry => {
  const input = formEntry.querySelector("input");
  // console.log(input);
  const inputName = input.id;
  const inputSpan = document.createElement("span");
  let errorMessage = "";

  if (inputName !== "location1" && inputName !== "checkbox1") {
    // textControlValidate(input);
    input.addEventListener("blur", function() {
      switch (inputName) {
        case "first":
        case "last":
          regex = /\w{2,}/;
          errorMessage = "Le champ doit contenir au moins 2 caractères";
          break;
        case "email":
          regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          errorMessage = "L'adresse mail doit être valide";
          break;
        case "birthdate":
          regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
          errorMessage = "doit contenir une date valide";
          break;
        case "quantity":
          regex = /^0*?[0-9]\d*$/;
          errorMessage = "Le champ doit contenir une valeur numérique";
          break;
      }
      if (regex.test(input.value)) {
        validInputHighlight(input);
        inputSpan.innerText = "";
        isValid[inputName] = true;
      } else {
        invalidInputHighlight(input);
        isValid[inputName] = false;
        inputSpan.innerText = errorMessage;
        formEntry.appendChild(inputSpan);
        inputSpan.classList.add("form-warning");
      }
    });
    input.addEventListener("focus", function() {
      // const inputSpan = document.createElement("span");
      inputSpan.innerText = "";
    });

  } else if (inputName === "location1") {
    // locationValidate(input)
    errorMessage = "Vous devez choisir une option."
    const radioButtons = document.querySelectorAll("[type=radio]");
    for (const btn of radioButtons) {
        submit.addEventListener("click", function(event) {
        if (btn.checked) {
          isValid[inputName] = true;
          // errorMessage = "";
        } else {
          inputSpan.innerText = errorMessage;
          inputSpan.classList.add("form-warning");
          formEntry.appendChild(inputSpan);
        }
        btn.addEventListener("change", function(event) {
          if(this.checked) {
            inputSpan.innerText = "";
          }
        })
      })
    }
  } else if (inputName === "checkbox1") {
    submit.addEventListener("click", function() {
      if (input.checked) {
        inputSpan.innerText = "";
        isValid[inputName] = true;
      } else {
        isValid[inputName] = false;
        errorMessage = "Vous devez vérifier que vous acceptez les termes et conditions.";
        inputSpan.innerText = errorMessage;
        formEntry.appendChild(inputSpan);
        inputSpan.classList.add("form-warning");
      }
    });
    input.addEventListener("click", function() {
      if (this.checked) {
        inputSpan.innerText = "";
      }
    })

  }
  input.addEventListener("focus", function() {
    const inputSpan = document.createElement("span");
    inputSpan.innerText = "";
  })
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  Object.entries(isValid).forEach(entry => {
    console.log(entry[1]);
    console.log(entry[0]);
    if (!entry[1]) {
      invalidInputHighlight(document.getElementById(entry[0]));
    };
  })
})
