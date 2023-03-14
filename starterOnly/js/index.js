import { editNav } from './modules/navigation.js'
import { launchModal, closeModal } from './modules/modal.js'

// DOM Elements
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const toggleNavBtn = document.getElementById('togglenav')
const closeBtn = document.querySelectorAll('.close');

// Show / hide navigation menubars (xs only)
toggleNavBtn.addEventListener('click', editNav);

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal))
closeBtn.forEach(btn => btn.addEventListener('click', closeModal));
