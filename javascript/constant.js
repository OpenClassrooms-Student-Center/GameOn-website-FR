// OBJET CONTENANT DES VARIABLE QUI RECUPERE LES ELEMENTS DU DOM

 const dom_element = {
    actionModal: document.getElementById("myTopnav"),
    btnNav: document.querySelector(".icon"),
    modalbg: document.querySelector(".bground"),
    displayModal: document.querySelector(".content"),
    modalBtn: document.querySelectorAll(".modal-btn"),
    formData: document.querySelectorAll(".formData"),
    btnCloseModal: document.querySelector("span.close"),
    inputTxt : [...document.querySelectorAll(".text-control")],       // TABLEAU CONTENANT LES INPUTS AYANT LA CLASSE TEXT CONTROL AVEC REST 
    containerData : [...document.querySelectorAll(".formData")],      // TOUTES LES DIV FORMDATA LA METHODE REST POUR CONVERTIR LA NODELIST EN TABLEAU
    inputRadio : [...document.querySelectorAll("input[type=radio]")], // SELECTIONNE TOUTE LES INPUT CONTENANT UN TYPE RADIO
    checkbox : document.querySelector("input[type=checkbox]"),        // SELECTIONNE LA PREMIERE INPUT AVEC LA CLASSE CHECKBOX
    formulaire : document.querySelector("form"),
    birtday :document.getElementById("birthdate")
  };

  // OBJET CONTENANT DES REGEX
 const all_regex = {
    0: { regex: /^[a-z]+[\s\-]?[a-z]+$/i},
    1: { regex: /^[a-z]+[\s\-]?[a-z]+$/i },
    2: { regex: /^[\w\_\-\.]+[a-z0-9]+@[a-z0-9\-]+\.[a-z]+$/},
    3: { regex: /^\d{1,2}$/},
  };
  
  // OBJET CONTENANT DES MESSAGES POUR INFORMER L UTILISATEUR
  const display_message = {
    0: { msg: "Veuillez renseigner un prénom valide" },
    1: { msg: "Veuillre renseigner un nom valide" },
    2: { msg: "Veuillez renseigner un email valide" },
    3: { msg: "Veuillez indiquer si vous avez fait une compétition" },
    4: { msg: "Veuillez indiquer une date de naissance valide"},
    5: { msg: "Veuillez selectionné une ville" },
    6: { msg: "Veuilez accepter les conditions de vente générales" },
    7: { msg: "Merci ! Votre réservation a été reçue." },
  };


  export { dom_element, all_regex, display_message };