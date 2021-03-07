
function showNotificationToast() {
    const child = document.querySelector('#clonemother');
    const clone = child.cloneNode(true);
    const node = document.querySelector("#toasts").appendChild(clone);
    setTimeout(() => {
            if (node) {
                node.style.animation = "toast 2s ease-out forwards";
                setTimeout(() => { node.remove(); }, 5000);
            }
        },2000);
  }
 