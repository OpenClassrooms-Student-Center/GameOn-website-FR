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
const submitBtn = document.querySelector(".btn-submit");


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

// submitBtn.addEventListener("click", getFormData);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function getFormData() {
  var data = new FormData(document.getElementById("form"));
  for (var value of data.values()) {
    console.log(value);
  }

  // const data = {};
  // for (let i = 0; i < formData.length; i++) {
  //   const input = formData[i].querySelector("input");
  //   data[input.name] = input.value;
  // }
  // console.log(data);
  // return data;
}
