function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal when click on span class "close" by changing display mode

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modalbg.style.display = "none";
});




// function testInput(inputName) {
  //   inputName.addEventListener("blur", function() {
    //     inputName.classList.remove("input-valid", "input-invalid");
    //     // console.log(inputName);
    //     if (inputName.value.match(regex)) {
      //       inputName.classList.add("input-valid");

      //     } else {
        //       inputName.classList.add("input-invalid");
        //       inputDiv = document.querySelector(".formData");

        //       const inputElement = document.createElement("span");
        //       spanMessage = `Le champ doit contenir au minimum 2 caractères`;
        //       inputElement.innerText = spanMessage;
        //       inputDiv.appendChild(inputElement);
        //       // console.log(inputElement.innerText);
        //     };
        //   });
        // };

        // testInput(firstInput);
        // testInput(lastInput);
        // testInput(emailInput);
        // testInput(birthdateInput);
        // testInput(quantityInput);

// const firstInput = document.querySelector("[name=first]");
// const lastInput = document.querySelector("[name=last]");
// const emailInput = document.querySelector("[name=email]");
// const birthdateInput = document.querySelector("[name=birthdate]");
// const quantityInput = document.querySelector("[name=quantity]");

// const inputsObject = {
//   first: {
//     regex: /\w{2,}/,
//     message: "doit contenir au moins 2 caractères"
//   },
//   last: {
//     regex: /\w{2,}/,
//     message: "doit contenir au moins 2 caractères"
//   },
//   email: {
//     regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//     message: "doit contenir une adresse électronique valide"
//   },
//   birthdate: {
//     regex: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
//     message: "doit contenir une date valide"
//   },
//   quantity: {
//     regex: /\d+/,
//     message: "doit contenir une valeur numérique"
//   }
// }

// const inputs = document.querySelectorAll(".formData");

// inputs.forEach(input => {
//   // const inputLabel = input.querySelector("label").innerText;
//   // console.log(inputLabel);
//   console.log(input);
//   const inputName = input.querySelector("input");
//   // console.log(inputName);

//   // console.log(inputsObject.inputName.id.value);
//   inputName.addEventListener("focus", function() {
//     inputName.removeChild("span");
//   })

//   inputName.addEventListener("blur", function() {
//     inputName.classList.remove("input-valid", "input-invalid");
//     const inputElement = document.createElement("span")
//     inputElement.classList.add("form-warning");

//     // console.log(inputsObject.inputName.id);
//     // console.log(inputName.id.innerText);

//     if (inputName.value.match(regex)) {
//       inputName.classList.add("input-valid");
//       // input.removeChild("span");

//     } else {
//       // input.removeChild(inputElement);
//       const span = input.getElementsByTagName("span");
//       input.removeChild(span);
//       inputName.classList.add("input-invalid");
//       inputElement.innerText = `Le champ doit contenir au minimum 2 caractères`
//       input.appendChild(inputElement);
//     }
//   })
// });

const formEntries = document.querySelectorAll(".formData");



formEntries.forEach(formEntry => {
  let regex = "";
  let spanMessage = "";
  const input = formEntry.querySelector("input");
  const inputName = input.id;
  const inputSpan = document.createElement("span");

  switch (inputName) {
    case "first":
      case "last":
        regex = /\w{2,}/;
        spanMessage = "Le champ doit contenir au moins 2 caractères";
        break;
        case "email":
          regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          spanMessage = "L'adresse mail doit être valide";
          break;
          case "birthdate":
            regex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
            spanMessage = "doit contenir une date valide";
      break;
      case "quantity":
        regex = /\d+/;
        spanMessage = "Le champ doit contenir une valeur numérique";
        break;
      }

      input.addEventListener("focus", function() {
        inputSpan.innerText = "";
      })

      input.addEventListener("blur", function() {
        console.log(input.value);
    input.classList.remove("input-valid", "input-invalid");
    inputSpan.classList.add("form-warning");

    if (input.value.match(regex)) {
      input.classList.add("input-valid");
    } else {
      input.classList.add("input-invalid");
      inputSpan.innerText = spanMessage;
      formEntry.appendChild(inputSpan);
    }
  })
});
