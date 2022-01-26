// The validators are in a separated file so if I need to use them elsewhere 
// I can just import validators. It also make the code more consice and easier to read. 

const firstNameValidator = (string) => {
  return string.length > 1 ? true : false;
};

const lastNameValidator = (string) => {
  return string.length > 1 ? true : false;
};

const emailValidator = (string) => {
  // Some regular expression to check if the format of the email 
  // is right(example: 'nicolas@email.fr' is valid)
  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return string.match(regex) ? true : false;
};

const birthDateValidator = (string) => {
  return string.length > 0 ? true : false;
};

const isNumericValidator = (string) => {
  return parseInt(string) ? true : false;
};

const radioValidator = (selection) => {
  return selection !== "" ? true : false;
};

const hasAcceptedGCUValidator = (value) => {
  return value ? true : false;
};

const validators = function (el) {
  // I use a switch to validate the currentEl value based on its name.
  switch (el.name) {
    case "firstName":
      return (
        firstNameValidator(el.value) ||
        "Votre prénom doit faire au moins 2 caractères"
      );
    case "lastName":
      return (
        lastNameValidator(el.value) ||
        "Votre nom doit faire au moins 2 caractères"
      );
    case "email":
      return emailValidator(el.value) || "Veuillez rentrer un email valide";
    case "birthdate":
      return (
        birthDateValidator(el.value) ||
        "Veuillez rentrer votre date de naissance"
      );
    case "quantity":
      return (
        isNumericValidator(el.value) ||
        "Veuillez renseigner le nombre de tournois"
      );
    case "location":
      return (
        radioValidator(el.value) || "Veuillez selectionner un lieu de tournois"
      );
    case "hasAcceptedGCU":
      return (
        hasAcceptedGCUValidator(el.value) ||
        "Vous devez aggréer à nos conditions générales d'utilisation"
      );

    // In case there is an input with no specific validation, so
    // if I want to add an optionnal input, it will be validated by default
    default:
      return true;
  }
};

export default validators;
