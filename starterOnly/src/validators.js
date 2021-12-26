export const firstNameValidator = (string) => {
  return string && string.length > 0 ? true : false;
};

export const lastNameValidator = (string) => {
  return string && string.length > 0 ? true : false;
};

export const emailValidator = (string) => {
  const regex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return string.match(regex) ? true : false;
};

export const isNumericValidator = (string) => {
  return typeof parseInt(string) === Number ? true : false;
};

export const radioValidator = (options, string) => {
  let result = false;
  options.forEach((option) => {
    if (string === option) return (result = true);
  });
  return result;
};

export const hasAcceptedGCU = (element) => {
  return element.checked === true ? true : false;
};