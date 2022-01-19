import "./_variables"


/*Show text error*/
function showTextError(el) {
    el.closest(".formData").dataset.errorVisible = "true";
}
   
   
   /*Hide text error*/
function hideTextError(el) {
    el.closest(".formData").dataset.errorVisible = null;
}