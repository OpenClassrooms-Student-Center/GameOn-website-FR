// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

//modal functionalities (launch, close)

// 1-- launch modal inscription form
modalBtn.forEach((btn) => btn.addEventListener('click', function(){
        modalbg.style.display = 'block';
}));

// 2-- close modal form
closeBtn[0].addEventListener('click', function(){
         modalbg.style.display = 'none';
});



// nav editing responsive 
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}




