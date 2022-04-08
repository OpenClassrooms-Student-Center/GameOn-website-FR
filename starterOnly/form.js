/**============================================
 *!                            DOM Element
 *=============================================**/
const modalForm = document.querySelector(".bground");
const modalContent = document.querySelector(".content");
const modalConfirmBtn = document.querySelector(".confirm-modal-btn");
const modalConfirmClose = document.querySelector(".confirm-close");
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");
const detailsModal = document.querySelector(".confirm_modal");
const Comfirm = document.querySelector(".thank");
/**============================================
 *!                  𝙈𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙙'𝙚𝙧𝙧𝙚𝙪𝙧𝙨 𝙙𝙚 𝙘𝙝𝙖𝙦𝙪𝙚 𝙞𝙣𝙥𝙪𝙩
 *=============================================**/
const errorMessages = {
  lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
  firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
  email: "Veuillez entrer une adresse email valide.",
  birthdate: "Veuillez entrer une date de naissance valide.",
  legalage: "Vous n'avez pas l'age requis",
  quantity: "Veuillez entrer un nombre valide.",
  location: "Veuillez choisir une ville.",
  checkbox: "Veuillez accepter les conditions d'utilisations.",
};
/**============================================
 *!                  Function validation des inputs
 *=============================================**/
function validateInput() {

  // 𝙑𝙖𝙡𝙚𝙪𝙧 𝙙𝙚 𝙡'𝙞𝙣𝙥𝙪𝙩 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙩𝙚 
  let birthdate = new Date(birthdateInput.value);
  // ⁡⁢⁣⁣​‌‍‍𝘿𝙖𝙩𝙚 𝙖𝙘𝙩𝙪𝙚𝙡𝙡𝙚​⁡
  let today = new Date();

  /**  ⁡⁢⁣⁣​‌‍‍𝙍𝙚𝙜𝙚𝙭 𝙚𝙢𝙖𝙞𝙡​⁡ **/
  /** ⁡⁢⁣⁣​‌‍‍.𝘁𝗲𝘀𝘁(..) 𝗿𝗲𝘁𝗼𝘂𝗿𝗻𝗲 𝗯𝗼𝗼𝗹𝗲𝗮𝗻𝘀 𝘁𝗿𝘂𝗲 𝗼𝘂 𝗳𝗮𝗹𝘀𝗲​⁡ **/

  let emailRegex = /^(\w[-\.]?)*@[\w]{1,}(\.\w{2,3}){1,2}$/.test(
    emailInput.value
  );

  /**  ⁡⁢⁣⁣​‌‍‍𝙍𝙚𝙜𝙚𝙭 𝘲⁡⁢⁣⁣​‌‍‍𝙪𝙖𝙣𝙩𝙞𝙩é 𝙙𝙚 𝙩𝙤𝙪𝙧𝙣𝙤𝙞𝙨​⁡ **/
  /** ⁡⁢⁣⁣​‌‍‍.𝘁𝗲𝘀𝘁(..) 𝗿𝗲𝘁𝗼𝘂𝗿𝗻𝗲 𝗯𝗼𝗼𝗹𝗲𝗮𝗻𝘀 𝘁𝗿𝘂𝗲 𝗼𝘂 𝗳𝗮𝗹𝘀𝗲​⁡ **/

  let qtyRegex = /^[\d]{1,}$/.test(quantityInput.value);

  /**
   *  ​‌‍‍⁡⁣⁣⁢‍‍‍‍‍‍‍⁡⁢⁣⁣​‌‍‍𝙍𝙚𝙜𝙚𝙭 𝙥𝙧𝙚𝙣𝙤𝙢 : 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚 𝙡𝙚𝙩𝙩𝙧𝙚 𝙢𝙞𝙣 𝙚𝙩 𝙢𝙖𝙟 𝙖𝙘𝙘𝙚𝙣𝙩 𝟮 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚 𝙢𝙞𝙣𝙞𝙢𝙪𝙢 - 𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙤𝙪 𝙣𝙤𝙣 𝙥𝙪𝙞𝙨 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚⁡​ ​
   * ⁡⁢⁣⁣​‌‍‍⁡⁣⁢⁣‍‍​‌‍‌‍‍‍‍⁡⁢⁣⁣.𝘵𝘦𝘴𝘵(...) 𝘳𝘦𝘵𝘰𝘶𝘳𝘯𝘦 𝘶𝘯 𝘣𝘰𝘰𝘭𝘦𝘢𝘯𝘴 𝘵𝘳𝘶𝘦 𝘰𝘶 𝘧𝘢𝘭𝘴𝘦⁡ ​
   **/

  let FirstNameRegex =
    /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(
      firstNameInput.value
    );

  /** ​‌‌‍​‌‍‍‍​‌‍‌⁡⁣⁢⁣​‌‍‍⁡⁢⁣⁣𝙧𝙚𝙜𝙚𝙭 𝙣𝙤𝙢 : 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚 𝙡𝙚𝙩𝙩𝙧𝙚 𝙢𝙞𝙣 𝙚𝙩 𝙢𝙖𝙟 𝙖𝙘𝙘𝙚𝙣𝙩 𝟮 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚 𝙢𝙞𝙣𝙞𝙢𝙪𝙢 - 𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙤𝙪 𝙣𝙤𝙣 𝙥𝙪𝙞𝙨 𝙘𝙝𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚⁡​​⁡ ​ **/
  /** ⁡⁢⁣⁣​‌‍‍.𝘁𝗲𝘀𝘁(...) 𝗿𝗲𝘁𝗼𝘂𝗿𝗻𝗲 𝘂𝗻 𝗯𝗼𝗼𝗹𝗲𝗮𝗻𝘀 𝘁𝗿𝘂𝗲 𝗼𝘂 𝗳𝗮𝗹𝘀𝗲​⁡ **/

  let lastNameRegex =
    /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{2,}[-]?([\w]+)?([-\d])?/.test(
      lastNameInput.value
    );

  let locationValue = document.querySelector(
    ".checkbox-input[type=radio]:checked"
  );
  let locaInput = document.getElementById("location1");

  /** ​‌‍‍‍‍⁡⁢⁣⁣‍‍𝙎𝙞 𝙢𝙖 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚 𝙁𝙞𝙧𝙨𝙩𝙉𝙖𝙢𝙚𝙍𝙚𝙜𝙚𝙭 𝙚𝙩 𝙚𝙜𝙖𝙡𝙚 𝙖 𝙛𝙖𝙪𝙭 𝙖𝙡𝙤𝙧𝙨 𝙧𝙚𝙩𝙪𝙧𝙣 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧​​⁡ **/

  if (FirstNameRegex === false) {
    firstNameInput.parentNode.setAttribute("data-error-visible", true);
    firstNameInput.parentNode.setAttribute(
      "data-error",
      errorMessages.firstName
    );
    return false;
  } else if (FirstNameRegex === true) {
    firstNameInput.parentNode.setAttribute("data-valid-visible", true);
  }
  
  /** ⁡⁢⁣⁣​‌‍‍𝙨𝙞 𝙢𝙖 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚 𝙇𝙖𝙨𝙩𝙉𝙖𝙢𝙚𝙍𝙚𝙜𝙚𝙭 𝙚𝙩 𝙚𝙜𝙖𝙡𝙚 𝙖 𝙛𝙖𝙪𝙭 𝙖𝙡𝙤𝙧𝙨 𝙧𝙚𝙩𝙪𝙧𝙣 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/

  if (lastNameRegex === false) {
    lastNameInput.parentNode.setAttribute("data-error-visible", true);
    lastNameInput.parentNode.setAttribute("data-error", errorMessages.lastName);
    return false;
  } else if (lastNameRegex === true) {
    lastNameInput.parentNode.setAttribute("data-valid-visible", true);
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙨𝙞 𝙢𝙖 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚 𝙚𝙢𝙖𝙞𝙡𝙍𝙚𝙜𝙚𝙭 𝙚𝙩 𝙚𝙜𝙖𝙡𝙚 𝙖 𝙛𝙖𝙪𝙭 𝙖𝙡𝙤𝙧𝙨 𝙧𝙚𝙩𝙪𝙧𝙣 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/

  if (emailRegex === false) {
    emailInput.parentNode.setAttribute("data-error-visible", true);
    emailInput.parentNode.setAttribute("data-error", errorMessages.email);
    return false;
  } else if (emailRegex === true) {
    emailInput.parentNode.setAttribute("data-valid-visible", true);
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙨𝙞 𝙢𝙖 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚 𝙡𝙤𝙘𝙖𝙑𝙖𝙡𝙪𝙚 𝙚𝙨𝙩 𝙣𝙪𝙡𝙡 𝙤𝙪 𝙪𝙣𝙙𝙚𝙛𝙞𝙣𝙚𝙙  𝙖𝙡𝙤𝙧𝙨 𝙧𝙚𝙩𝙪𝙧𝙣 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/

  if (locationValue === null || locationValue === undefined) {
    locaInput.parentNode.setAttribute("data-error-visible", true);
    locaInput.parentNode.setAttribute("data-error", errorMessages.location);
    return false;
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙨𝙞 𝙢𝙖 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚 q𝙩𝙮𝙍𝙚𝙜𝙚𝙭 𝙚𝙩 𝙚𝙜𝙖𝙡𝙚 𝙖 𝙛𝙖𝙪𝙭 𝙤𝙪 𝙚𝙨𝙩 𝙪𝙣𝙙𝙚𝙛𝙞𝙣𝙚𝙙 𝙖𝙡𝙤𝙧𝙨 𝙧𝙚𝙩𝙪𝙧𝙣 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/

  if (qtyRegex === false || qtyRegex === undefined) {
    quantityInput.parentNode.setAttribute("data-error-visible", true);
    quantityInput.parentNode.setAttribute("data-error", errorMessages.quantity);
    return false;
  } else if (qtyRegex === true || qtyRegex !== undefined) {
    quantityInput.parentNode.setAttribute("data-valid-visible", true);
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙎𝙞 𝘾𝙝𝙚𝙘𝙠𝙗𝙤𝙭𝙄𝙣𝙥𝙪𝙩 𝙚𝙨𝙩 𝙙𝙞𝙛𝙛𝙚𝙧𝙚𝙣𝙩 𝙙𝙚 .𝙘𝙝𝙚𝙘𝙠𝙚𝙙 𝙖𝙡𝙤𝙧𝙨 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙚𝙩 𝙧𝙚𝙩𝙪𝙧𝙣𝙚 𝙛𝙖𝙡𝙨𝙚​⁡ **/

  if (!checkboxInput === checkboxInput.checked) {
    checkboxInput.parentNode.setAttribute("data-error-visible", true);
    checkboxInput.parentNode.setAttribute("data-error", errorMessages.checkbox);
    return false;
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙎𝙞 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙩𝙚 𝙚𝙨𝙩 𝙞𝙣𝙛𝙚𝙧𝙞𝙚𝙪𝙧 𝙖𝙪 𝟭𝟬 𝙙𝙚𝙧𝙣𝙞𝙚𝙧𝙚 𝙖𝙣𝙣é𝙚 𝙧𝙚𝙩𝙤𝙪𝙧𝙣𝙚 𝙛𝙖𝙡𝙨𝙚 𝙚𝙩 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙'𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/
  console.log(birthdate);
  if (birthdate.getFullYear() >= today.getFullYear() - 10) {
    birthdateInput.parentNode.setAttribute("data-error-visible", true);
    birthdateInput.parentNode.setAttribute("data-error", errorMessages.legalage);
    return false;
  } else if(isNaN(birthdate.getFullYear()) === true || isNaN(birthdate.getMonth()) === true || isNaN(birthdate.getDay()) === true ) {
    birthdateInput.parentNode.setAttribute("data-error-visible", true);
    birthdateInput.parentNode.setAttribute("data-error", errorMessages.birthdate);
  }
  else return true;
}
/**============================================
 *!               Function onSubmit
 *=============================================**/

function validate(event) {
  /** ⁡⁢⁣⁣​‌‍‍𝙉𝙚 𝙧𝙚𝙘𝙝𝙖𝙧𝙜𝙚 𝙥𝙖𝙨 𝙡𝙖 𝙥𝙖𝙜𝙚 𝙖𝙪 𝙨𝙪𝙗𝙢𝙞𝙩​⁡ **/

  event.preventDefault();

  /** ⁡⁢⁣⁣​‌‍‍𝙑𝙖𝙧𝙞𝙖𝙗𝙡𝙚 𝙨𝙚𝙡𝙚𝙘𝙩 𝙡𝙚𝙨 𝙞𝙣𝙥𝙪𝙩 𝙦𝙪𝙞 𝙤𝙣𝙩 𝙙𝙚𝙨 𝙚𝙧𝙧𝙚𝙪𝙧𝙨 𝙫𝙞𝙨𝙨𝙞𝙗𝙡𝙚​⁡ **/

  let invalidFields = document.querySelectorAll(
    '.formData[data-error-visible="true"]'
  );

  /** ⁡⁢⁣⁣​‌‍‍𝙥𝙤𝙪𝙧 𝙘𝙝𝙖𝙦𝙪𝙚 𝙞𝙣𝙥𝙪𝙩 𝙞𝙣𝙫𝙖𝙡𝙞𝙙 𝙦𝙪𝙞 𝙙𝙚𝙫𝙞𝙚𝙣𝙩 𝙫𝙖𝙡𝙞𝙙 𝙧𝙚𝙩𝙞𝙧𝙚 𝙡'𝙚𝙧𝙧𝙚𝙪𝙧​⁡ **/

  for (let field of invalidFields) {
    field.setAttribute("data-error-visible", false);
    field.setAttribute("data-error", "");
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙎𝙞 𝙧𝙚𝙩𝙤𝙪𝙧𝙣𝙚 𝙛𝙖𝙪𝙭 𝙖𝙡𝙤𝙧𝙨 𝙡𝙖𝙣𝙘𝙚𝙧 𝙖𝙣𝙞𝙢𝙖𝙩𝙞𝙤𝙣​⁡ **/

  if (validateInput() === false) {
    modalContent.classList.add("content_animated_invalid");
  }

  /** ⁡⁢⁣⁣​‌‍‍𝙎𝙞 𝙧𝙚𝙩𝙤𝙪𝙧𝙣𝙚 𝙫𝙧𝙖𝙞𝙭 𝙖𝙡𝙤𝙧𝙨 𝙖𝙛𝙛𝙞𝙘𝙝𝙚 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙚𝙩 𝙛𝙤𝙧𝙢 𝙧𝙚𝙨𝙚𝙩​⁡ **/

  if (validateInput() === true) {
    Comfirm.style.transform = "scale(1)";
    form.reset();
  }
}
