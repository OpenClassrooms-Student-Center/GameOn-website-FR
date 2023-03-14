const modalbg = document.querySelector('.bground');

// launch modal form
export function launchModal () {
    modalbg.style.display = 'block';
}

// close modal form
export function closeModal () {
    modalbg.style.display = 'none';
}