/**
 * The function is called when the user clicks on the hamburger icon. The function toggles the class of
 * the navbar to responsive
 */
function editNav() {
  const myTopnav = document.getElementById('myTopnav');
  myTopnav.classList.toggle('responsive');
}
/**
 * It takes an element as an argument, removes the active class from all of its siblings, and adds the
 * active class to itself
 * @param  {HTMLAnchorElement}  el - the element that was clicked
 */
function setActive(el) {
  [...el.parentElement.children].forEach((sib) => {
    if (sib.classList.contains('active')) {
      sib.classList.remove('active');
    }
  });
  el.classList.add('active');
}
document.querySelector('.icon').addEventListener('click', editNav);
/* The above code is adding an event listener to each link in the navbar. When the link is clicked, the
setActive function is called. */
document.querySelectorAll('.main-navbar a+a').forEach((el) => {
  // @ts-ignore
  el.addEventListener('click', () => setActive(el));
});
