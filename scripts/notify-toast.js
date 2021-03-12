
/** Toggle the notification toast */
function showNotificationToast() {
    // Get the notification area
    const child = document.querySelector('#clonemother');
    // Clone the child node
    const clone = child.cloneNode(true);
    // Push the node 
    const node = document.querySelector("#toasts").appendChild(clone);
    // Define the timer for displaying the notification toast
    setTimeout(() => {
            if (node) {
                node.style.animation = "toast 2s ease-out forwards";
                setTimeout(() => { node.remove(); }, 5000);
            }
        },2000);
  }
 