function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.getElementsByClassName(".btn-submit");

//modal form
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll(".location");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "block";
  })
);

closeBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "none";
  })
);

// submitBtn.forEach((btn) => btn.addEventListener("submit", getFormData()));

// // submitBtn.addEventListener("click", getFormData());

// function getFormData() {
//   var data = new FormData(document.getElementById("formulaire"));
//   for (var value of data.values()) {
//     console.log(value);
//   }
//   return false
//   // const data = {};
//   // for (let i = 0; i < formData.length; i++) {
//   //   const input = formData[i].querySelector("input");
//   //   data[input.name] = input.value;
//   // }
//   // console.log(data);
//   // return data;
// }

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("submit", firstName.value, lastName.value, email.value);

  // const fullNameInput = formFields.fullName;
  // const emailInput = formFields[1];

  // console.log(fullNameInput.value); // output: 'foo bar'
  // console.log(emailInput.value); // output: 'foo@bar.com'

  console.log(e);
  var data = new FormData(e.target);

  console.log(form.first, data, e.target);
  console.log(e.target.children);

  // Object.values(e.target).forEach((key, i) => {
  //   console.log(key);
  //   if ( key === "formData") console.log(key, key.value, i);
  // });

  // e.target.children.forEach((input) => {
  //   if (input.getElementsByClassName("formData")) {
  //     console.log(input);
  //   }
  // });
});
