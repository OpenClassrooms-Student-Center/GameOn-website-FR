function editNav() {
  var x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// function for suscribe form
function sendSubscription() {
  const subscribeForm = document.querySelector("#reserveForm")
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // validation conditions d'utilisations par JS
    if(!event.target.querySelector("#conditions").checked)
    {
        alert("Vous devez vérifier que vous accepter les termes et conditions.");
        return
    }

    // Creation of subscription object
    const subscription = {
      firstName: event.target.querySelector("#first").value,
      lastName: event.target.querySelector("#last").value,
      lastName: event.target.querySelector("#last").value,
      email: event.target.querySelector("#email").value,
      birthdate: new Date(event.target.querySelector("#birthdate").value),
      quantity: parseInt(event.target.querySelector("#quantity").value),
      location: event.target.querySelector("input[name='location']:checked").value,
      conditions: event.target.querySelector("#conditions").checked,
      newsletter: event.target.querySelector("#newsletter").checked,
    }
    console.log({subscription})
    alert("Merci ! Votre réservation a été reçue.");
    return subscription
  })
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch subscription event
submitBtn.addEventListener("click", sendSubscription)

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// TODO: CSS Mobile + desktop