// grap elements Dom 
const modalSubmit = document.getElementsByClassName('wrapper-confirmation');
const closeIcon = document.getElementsByClassName('confirmation-icon');
const confirmationBtn = document.getElementById('btn-confirmation');

// confirmation modal functionalities (launch ,close)

// 1-- launch submitted model 
const  displayModalSubmit = () => {
           modalbg.style.display = 'none';
           modalSubmit[0].style.display = 'block';
}
// 2-- close submitted modal
const  closeSubmit = () => (modalSubmit[0].style.display = 'none');

// submitted modal event 
closeIcon[0].addEventListener('click', closeSubmit);
confirmationBtn.addEventListener('click', closeSubmit);



