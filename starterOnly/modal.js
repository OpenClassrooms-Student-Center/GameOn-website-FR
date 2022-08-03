function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const firstName = document.getElementsByName("first");
const form = document.getElementsByName("reserve");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  document.querySelector(".modal-body").style.display = "block";
  document.querySelector(".formConfirmation").style.display = "none";

}

// Ferme la modal
function closeModal() {
  modalbg.style.display = "none";
}

// permet la fermeture de la modal au click sur le BTN X
closeBtn.addEventListener("click", closeModal);

// bloque L'action submit et garde en mémoire la selection.
form[0].addEventListener('submit', (e) => {
  e.preventDefault();

})



// Validation du Form
function validate(form) {
  // On test la condition si elle est true ou false. Ce qui donnera la condition tertiaire.
  let withSpace = form["first"].value;
  let withoutSpace = withSpace.trim();
  let firstName = withoutSpace && withoutSpace.length >= 2;
  // Condition tertiaire si FirstName est true alors envoie la function getMessageHide : false getMessageError
  //firstName ? getMessageHide("error-firstName", form["first"].getAttribute("id")) : getMessageError("il faut 2 lettres ou plus", "error-firstName", form["first"].getAttribute("id"));
  firstName ? form["first"].parentNode.setAttribute("data-error-visible", "false") : form["first"].parentNode.setAttribute("data-error-visible", "true");

  let withSpace2 = form["last"].value;
  let withoutSpace2 = withSpace2.trim();
  let lastName = withoutSpace2 && withoutSpace2.length >= 2;
  //lastName ? getMessageHide("error-lastName", form["last"].getAttribute("id")) : getMessageError("il faut 2 lettres ou plus", "error-lastName", form["last"].getAttribute("id"));
  lastName ? form["last"].parentNode.setAttribute("data-error-visible", "false") : form["last"].parentNode.setAttribute("data-error-visible", "true");

  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test ==> permet de tester si l'input contient les éléments d'un adresse mail

  let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = form["email"].value &&  patternEmail.test(form["email"].value);
  email ? form["email"].parentNode.setAttribute("data-error-visible", "false") : form["email"].parentNode.setAttribute("data-error-visible", "true");

  // le birthday on utilise une expression régulier
  let patternBirthday = /^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$/;
  let birthday = form["birthday"].value && form["birthday"].value.match(patternBirthday);
  birthday ? form["birthday"].parentNode.setAttribute("data-error-visible", "false") : form["birthday"].parentNode.setAttribute("data-error-visible", "true");

  // regarde si un nombre de tournois a été selectionné.
  let nbrTournois = document.querySelector('input[name="quantity"]');
  let errorQuantity = document.getElementById('tournois');
  if (nbrTournois.value === '') {
    errorQuantity.setAttribute("data-error-visible", "true"); 
  } else {
    errorQuantity.setAttribute("data-error-visible", "false");
  };

  // on regarde si les chkBx sont selectionné 
  let box = document.querySelectorAll('input[name="location"]');
  let chkBxError= document.getElementById('checkbox');
  let chkBox = false;
  // on fait une loop pour quelle box on été selectionné afin de sa value
  for (let i = 0; i < box.length; i++){
    if (box[i].checked) {
      //chkError.setAttribute("data-error-visible", "false");
      switch (box[i].value) {
        case "New York":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        case "San Francisco":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        case "Seattle":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        case "Chicago":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        case "Boston":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        case "Portland":
          chkBxError.setAttribute("data-error-visible", "false");
          chkBox = box[i].checked;
          break;
        default:
          chkBxError.setAttribute("data-error-visible", "true");
      }
      console.log(chkBox);
    } else {
      chkBxError.setAttribute("data-error-visible", "true");
    } 
  };

  // voir si les condition générale on était accepter.
  let conditionGeneral = document.querySelector('input[id="checkbox1"]');
  let conditionError = document.getElementById('conditionGeneral');
  let boxCondition = '';
  //console.log(conditionGeneral.checked);
  if (conditionGeneral.checked) {
    conditionError.setAttribute("data-error-visible", "false");
    boxCondition = true;
  } else {
    conditionError.setAttribute("data-error-visible", "true"); 
    boxCondition = false;
  }

  // acceptation du formulaire avec un if final pour la validation.
  if (
    form["first"].value.length >= 2 &&
    form["last"].value.length >= 2 &&
    patternEmail.test(form["email"].value) &&
    form["birthday"].value.match(patternBirthday) &&
    nbrTournois.value !== "" &&
    chkBox !== false &&
    boxCondition !== false
  ) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
        let reset = document.querySelectorAll("input");
    for (let i = 0; i < reset.length; i++) {
      if (reset[i].type !== "submit") {
        reset[i].value = "";
      }
    }
        chkBox = false;
        boxCondition = false;
  } else {
    document.querySelector(".modal-body").style.display = "block";
    document.querySelector(".formConfirmation").style.display = "none";
  }

  
}