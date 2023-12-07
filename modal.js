function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements////////////

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//concerns closing modal
const cross = document.getElementById("cross");
const cross2=document.getElementById("cross2");

//concerns switching modals
const hi =document.querySelector(".hi");
const bye =document.querySelector(".bye");
const cparti = document.getElementById("cparti");

//form data

const form = document.getElementById("reserve");  //ensemble 
const first = document.getElementById("first");
const last = document.getElementById("last");
const mail = document.getElementById("email");
const bdate = document.getElementById("birthdate");
const tournaments = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const terms = document.querySelector("#checkbox1");

//divs to display on error///
const prenom=document.getElementById("prenom")
const nom= document.getElementById("nom")
const mel =document.getElementById("mel")
const daten= document.getElementById("daten");
const nombre =document.getElementById("nombre")
const  noterms=document.getElementById("noterms")
const nolocation=document.getElementById("nolocation");


//regex

let regexmel=new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
let tournamentsnb=new RegExp("^[0123456789]+")




////////////OTHER VARIQBLES//////////////////////







//EVENT LISTENERS/////////


//

// first.addEventListener("change",validfirst);
// last.addEventListener("change",validlast);
// mail.addEventListener("change",validmel);
 //quantity.addEventListener("change",onechecked);




// launch modal event  
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

cross.addEventListener("click",closeModal);
//cparti.addEventListener("click",switchmodal);
cross2.addEventListener("click",closeModal);
abientot.addEventListener("click",closeModal);

/////////////////////////////FUNCTIONS///////////////////////



// launch modal form 
function launchModal() {
  modalbg.style.display = "block";
  hi.style.display = "block";
  console.log("test");
}

// close modal 

function closeModal() {
  modalbg.style.display = "none";
  bye.style.display="none";
  console.log("exit");
  form.reset();
  console.log("Form cleared");
  location.reload();
  

}



//switch modal hi to bye

function switchmodal(){
  hi.style.display="none";
  bye.style.display="flex";
  ;
  console.log("Merci pour votre inscription!");

}

//check if one location chosen
function onechecked(){
  for (var i=0;i<locations.length;i++){             //i of locations?
    if(locations[i].checked){
      return true;
    }

  }
}




//Form validation functions////////////

// function validfirst(variable) {
//   if (variable.length<2){
//     document.getElementById("prenom").style.display="inline";
//     console.log("invalid first name!");
//   }
//   else{
//     console.log("valid first name");
//     validated.add("first");
//     console.log(validated)
//   }
// };

// function validlast(variable){
//   if (variable.length<2){
//     document.getElementById("nom").style.display="inline";
//     console.log("invalid last name!")
//   }
//   else{
    
//     console.log("valid last name");
//     validated.add("last");
//     console.log(validated);
//   }
// };

// function validmel(variable){
// if(!regexmel.test(variable)){
//   document.getElementById("mel").style.display="inline";
//   console.log("Invalid email");
// }
// else{
//   console.log("Valid email");
//   validated.add("mail");
// }
// };

// function validbdate(variable){
//   if (typeof variable != 'number'){
//     throw new BdateError ()
//   }
// };

// function validquantity(variable){

// };

// function termschecked(checkbox){};
// ;


////CODE////////



form.addEventListener("submit", (event) => {
  
        event.preventDefault();

        if(isformcomplete()==="true"){
          switchmodal();
        }
        
})


function isformcomplete(){
  //start function///

  //first name
  if (first.value.length<2){
    prenom.style.display="inline";
    console.log("invalid first name!");
  }

  //last name
  if (last.value.length<2){
    nom.style.display="inline";
    console.log("invalid last name!")
  }

  if(!regexmel.test(mail.value)){
    mel.style.display="inline";
    console.log("Invalid email");
  }

  if (bdate.value===""){
    daten.style.display="inline";
    console.log("Invalid bdate")
  }

  if (!parseInt(tournaments.value)>0){
    nombre.style.display="inline";
    console.log("Invalid tournament number")
  }

  if (!onechecked())  {
      nolocation.style.display="inline";
      console.log("No location checked")
    };

  if(!terms.checked){
    noterms.style.display="inline";
    console.log("Terms not checked")
  }
  return true;
 //end function/// 

}


