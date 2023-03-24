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
const modalThx = document.querySelector(".thx-modal");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.getElementsByClassName(".btn-submit");

//modal form
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll(".location");
const cityName = document.getElementsByName("location");
const locationChecked = undefined;
// const checkbox = document.getElementById("checkbox1");
// const checkbox2 = document.getElementById("checkbox2");

// modal validation
const userNames = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userCity = document.getElementById("user-city");

// launch modal event
modalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "block";
  })
);

closeBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalbg.style.display = "none";
    modalThx.style.display = "none";
  })
);

// regex conditions
const nameRegex = new RegExp("^[a-zA-ZÀ-ÿ\\s]{2,}$");
const emailRegex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$");
const birthdateRegex = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");
const quantityRegex = new RegExp("^[0-9]{1,2}$");

// regex function
function testRegexOnInput(input, regex, length, error) {
  const value = input.value.trim();
  if (regex.test(value) && input.value.length >= length) {
    console.log(regex.test(value));
    error.dataset.errorVisible = "false";
    return true;
  } else {
    error.dataset.errorVisible = "true";
    return false;
  }
}

function testInputLocation(input) {
  let hasOneCheck = false;
  console.log(input);
  input.dataset.errorVisible = "false";
  for (let i = 0; i < cityName.length; i++) {
    if (cityName[i].checked) {
      this.locationChecked = cityName[i].value;
      hasOneCheck = true;
    }
  }
  if (!hasOneCheck) {
    input.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

// listen to input
form.firstName.addEventListener("input", () => {
  testRegexOnInput(form.firstName, nameRegex, 2, this.firstName);
});
form.lastName.addEventListener("input", () => {
  testRegexOnInput(form.lastName, nameRegex, 2, this.lastName);
});
form.email.addEventListener("input", () => {
  testRegexOnInput(form.email, emailRegex, 2, this.email);
});
form.birthdate.addEventListener("input", () => {
  testRegexOnInput(form.birthdate, birthdateRegex, 10, this.birthdate);
});
form.quantity.addEventListener("input", () => {
  testRegexOnInput(form.quantity, quantityRegex, 1, this.quantity);
});

cityName.forEach((location) => {
  location.addEventListener("input", () => {
    testInputLocation(location);
  });
});

// test regex on input

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    testRegexOnInput(form.firstName, nameRegex, 2, this.firstName) &&
    testRegexOnInput(form.lastName, nameRegex, 2, this.lastName) &&
    testRegexOnInput(form.email, emailRegex, 2, this.email) &&
    testRegexOnInput(form.birthdate, birthdateRegex, 10, this.birthdate) &&
    testRegexOnInput(form.quantity, quantityRegex, 1, this.quantity)
  ) {
    const user = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      city: this.locationChecked,
    };

    modalbg.style.display = "none";

    console.log(userNames);

    userNames.innerHTML = user.firstName + " " + user.lastName;
    userEmail.innerHTML = user.email;
    userCity.innerHTML = user.city;
    
    modalThx.style.display = "block";

    form.reset();
  } else {
    console.log("error");
  }
});
