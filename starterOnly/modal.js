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
const successMessage = document.querySelector(".content .success_text");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// ##################################################################################################
// ##################################################################################################
// ISSUE #1: fermer la modale (ajouter la fonctionnalité au bouton x)
// ##################################################################################################

function hideModal() {
  modalbg.style.display = "none";

  // reset form with default values with reset()
  let resetForm = document.getElementById("formModal");
  resetForm.reset();

  // let allInputs = document.querySelectorAll("input:not(input[type=submit])");
  // allInputs.forEach((singleInput) => (singleInput.value = ""));

  // delete all error messages
  let allErrors = document.querySelectorAll(".form-message");
  allErrors.forEach((singleError) => (singleError.innerText = ""));

  // remove all `invalid` class after close form
  let allClassesInvalid = document.querySelectorAll(".invalid");
  allClassesInvalid.forEach((singleClassInvalid) =>
    singleClassInvalid.classList.remove("invalid")
  );

  // /TODO : DElete all reference to `.invalid` class + remove all error messages
}

let spanClose = document.querySelector(".close");
spanClose.addEventListener("click", (e) => {
  let target = e.target;
  if (target === spanClose) {
    hideModal();
  }
});

// ##################################################################################################
// ##################################################################################################
// ISSUE #2: Implémenter entrées du formulaire ()
// ##################################################################################################

// (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
// (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"

// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

function Validator(formSelector) {
  let _this = this;

  /**
   * (part !!: listen events): from current element => have to get out its parent element (form) => to access to form-message! === search with loop...
   * cuz theres many parents... => break === match
   *  */

  /************************************************************************ */
  function getParent(element, selector) {
    while (element.parentElement) {
      /** 
       * cannot use === selector cuz always true! => undefined 
       * if (element.parentElement === selector) {
        return element.parentElement;
      }
      element = element.parentElement; */

      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  /**
   * (2.1) => our target!
   */
  /************************************************************************ */
  let formRules = {};
  /**
     *  expectations: get rules in this format of formRules: 
     * first: 'firstRequired|min:2',
     * email: 'emailRequired|email',
     * ...
     * => need to: get out formRules with the above format & its rules 
    according to input name then: create functions to validate each rule (function's job)
    */

  // ##################################################################################################
  // ##################################################################################################
  // ISSUE #3: Ajouter validation ou messages d'erreur
  // ##################################################################################################

  /**
   * (2.2) => functions to validate each RULE expected as in HTML since beginning
   */
  /************************************************************************ */

  /**
   * hello! here is our CONVENTION to create rules:
   * - err -> return `error message`,
   * - no err -> return `undefined`,
   */

  let validatorRules = {
    firstRequired: function (value) {
      return value ? undefined : `Veuillez entrer un prénom`;
    },
    lastRequired: function (value) {
      return value ? undefined : `Veuillez entrer un nom`;
    },
    emailRequired: function (value) {
      return value ? undefined : `Veuillez entrer une adresse email`;
    },
    email: function (value) {
      let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value)
        ? undefined
        : `Veuillez entrer une adresse email!`;
    },
    // eg: min: 2 => need to push 2 into the value? => nested function
    min: function (min) {
      return function (value) {
        return value.length >= min
          ? undefined
          : `Veuillez entrer au moins ${min} caractères`;
      };
    },
    /** max: function (max) {
      //eg: min: 2 => need to push 2 into the value? => nested function 
      return function (value) {
        return value.length <= max ? undefined : "Veuillez entrer au maximum ${max} caractères";
      }
    }, */
    numberRequired: function (value) {
      return value ? undefined : `Veuillez indiquer une valeur`;
    },
    integerNumber: function (value) {
      let regex = /^(\d?[1-9]|[1-9]0)$/;
      return regex.test(value)
        ? undefined
        : `Veuillez indiquer un nombre entier entre 0 et 99`;
    },

    birthdayRequired: function (value) {
      return value ? undefined : `Veuillez indiquer une date de naissance`;
    },

    birthday: function (value) {
      value = new Date(value);
      let currentDate = new Date();
      return value < currentDate
        ? undefined
        : `Veuillez indiquer une date de naissance valide`;
    },

    checked: function (value) {
      let checkedBox = document.querySelector("input:checked");
      let test = value == checkedBox.value;
      return test
        ? `ok`
        : `Vous devez verifier que vous acceptez les termes et conditions`;
    },

    radio: function (value) {
      let checkedRadio = document.querySelector(
        'input[name="location"]:checked'
      ).value;
      // console.log(checkedRadio);
      // debugger;
      let content = value == checkedRadio;
      // console.log(content);
      // debugger;
      return content ? `ok` : `Veuillez selectionner une ville`;

      // console.log(content);
      // debugger;
    },
  };

  /**
   * (2.3) => steps to get to (1.2) then (1.1)
   */
  /************************************************************************ */

  // (2.3.1) get form element in DOM with `formSelector`
  let formElement = document.querySelector(formSelector);

  // (2.3.2) get inputs => get formRules => get rules with functions to validate at last
  // only execute IF form element exists in DOM
  if (formElement) {
    // (part !):
    // access to formRules from inputs => with expected format as above
    let inputs = formElement.querySelectorAll("[name][data-rules]");
    // (for part !!) inputs => to listen events:
    for (let input of inputs) {
      // expectation: get "values": eg: 'required|email' => split the rules with `|` => array with for of (values)
      let rules = input.getAttribute("data-rules").split("|");
      // `!!!!!!! separate rules to retreive each rule from each input:` => to use each defined rule function above (...retrieved from a rule array)
      for (let rule of rules) {
        let ruleArray; // '!!!'
        let isRuleHasValue = rule.includes(":");

        // check min: 2 with `includes`or `indexOf`:
        if (isRuleHasValue) {
          ruleArray = rule.split(":");
          rule = ruleArray[0]; // to get only min

          /* if (rule.includes(":")) {
          let ruleArray = rule.split(":");
          rule = ruleArray[0]; // to get only min */

          // console.log(validatorRules[rule](ruleArray[1]));
          // console.log(validatorRules[rule]);
        }
        // get into the last function of the nested function? => eg: min: 2
        let ruleFunc = validatorRules[rule];
        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleArray[1]);
        }

        //console.log(rule);
        // try to get rule functions
        if (Array.isArray(formRules[input.name])) {
          // since 2nd run of for => push rules into the array
          formRules[input.name].push(ruleFunc);
        } else {
          // first run of for => else => create an array of validator rules (empty)
          // console.log(validatorRules[rule]);
          formRules[input.name] = [ruleFunc];
        }
      }
      // rules is not an official attribute => .getAttribute
      // formRules[input.name] = input.getAttribute("rules");

      /**
       * (part !)): create an object to validate each input => DONE!
       * (part !!)): eventListeners (blur, change, click, focus, input, keydown, keypress, keyup, submit, ...)
       *  */

      // (!!) => do now: listen events to validate thanks to inputs retrieved above:

      // events:
      input.onblur = handleValidate;
      input.onchange = handleValidate;
      input.oninput = handleClearErrors;
    }

    //(1)
    // function to execute validation:
    // (!!.1)  => get rules (key & functions) out based on events
    function handleValidate(event) {
      console.log("event du handleValidate :>> ", event);
      //expectation => check if err => return err messages:
      //console.log(event.target); // => get element targeted by event => then get rules
      //console.log(event.target.value);
      //console.log(event.target.name);
      //console.log(formRules[event.target.name]);

      // : each rule above reveives value!
      let rules = formRules[event.target.name];
      let errorMessage;

      for (let rule of rules) {
        if (event.target.type === "checkbox") {
          errorMessage = rule(event.target.checked);
        } else {
          errorMessage = rule(event.target.value);
        }
        if (errorMessage) break;
      }
      // find => find values in an array => not good to use here!
      // rules.find(function (rule) {
      //   errorMessage = rule(event.target.value);
      //   return errorMessage;
      // });
      //console.log(errorMessage);

      // if err => return err messages => UI
      if (errorMessage) {
        // input => formData => to get form-message out:
        // console.log(event.target);

        let formData = getParent(event.target, ".formData");
        if (formData) {
          // (!!.3) add class `invalid` => UI errors => CSS ;)
          formData.classList.add("invalid");
          let formMessage = formData.querySelector(".form-message");
          if (formMessage) {
            formMessage.innerText = errorMessage;
          }
        }
        //console.log(formData);
      }
      return !errorMessage; // return true if validate successfully
    }

    //(2)
    // function clear error messages:
    function handleClearErrors(event) {
      // get formData firstly => to check if formData has class `invalid` => clear if true
      let formData = getParent(event.target, ".formData");
      if (formData.classList.contains("invalid")) {
        formData.classList.remove("invalid");

        // then reset form-message => set === '
        let formMessage = formData.querySelector(".form-message");
        if (formMessage) {
          formMessage.innerText = "";
        }
      }
    }
  }
  //console.log(this); //=== instance Validator
  // console.log(formRules); (part !) => done!

  // ##################################################################################################
  // ##################################################################################################
  // ISSUE #4: Ajouter confirmation quand envoi réussi
  // ##################################################################################################

  //(3): handle submit event:
  formElement.onsubmit = function (event) {
    event.preventDefault();

    //console.log(_this);
    //this.onSubmit();
    //console.log(this.onSubmit);

    //return;
    let inputs = formElement.querySelectorAll("[name][data-rules]");
    let isValid = true;

    //I would like to get the value of the radio button selected

    // /solution 2: Delete all the radio inputs found in inputs and replace them with the selected radio button

    for (let input of inputs) {
      //? perform the check ONLY on the selected radio button, and ignore the others

      //? 1. Identify the selected radio button
      // const radioButtonSelectedLocation = document.querySelector('input[name="location"]:checked');
      const radioButtonSelectedLocation =
        input.type === "radio" && input.checked;

      //? 2. if The radio button is not the selected one, we didn't make the verification
      if (radioButtonSelectedLocation) {
        if (handleValidate({ target: input })) {
          isValid = true;
        }
      }

      // check only on the selected radio button

      //? Realise the verification only on the selected radio button and ignore the others ones
      // if (!radioButtonSelectedLocation && !handleValidate({ target: input }) ) {
      //   isValid = false;
      // }

      // handleValidate({
      // if (!handleValidate({ target: input })) {
      // }
      //   target: input});
      // this function above needs event.target === element
      //
    }
    // console.log(isValid);
    // submit => when form is valid === true
    // console.log('isValid :>> ', isValid);
    if (isValid) {
      // console.log('isValid, je rentre ici :>> ', isValid);
      if (typeof _this.onSubmit === "function") {
        let enableInputs = formElement.querySelectorAll("[name]");
        let formValues = Array.from(enableInputs).reduce(function (
          values,
          input
        ) {
          // console.log("input reçus", input)

          if (input.type === "radio")
            console.log("input reçus est de type radio", input);
          switch (input.type) {
            case "radio":
              // console.log("J'entre dans le switch radio")
              // console.log("input");
              // values[input.name] = formElement.querySelector(
              //   'input[name="' + input.name
              // );

              const inputValue = (values[input.name] = document.querySelector(
                `input[name="location"]:checked`
              ).value);

              console.log("inputValue", inputValue);

              break;
            case "checkbox":
              if (!input.matches(":selected")) {
                console.log("values 434 :>> ", values);
                values[input.name] = "";
                return validatorRules;
              }
              if (!Array.isArray([input.name])) {
                console.log("values 439 :>> ", values);
                values[input.name] = [];
              }
              console.log("values 442 :>> ", values);
              console.log("input.name :>> ", input.name);
              console.log("values undefined :>> ", values[input.name]);
              values[input.name].push(input.value);

              break;
            default:
              // console.log("input");

              values[input.name] = input.value;
          }
          return values;
        },
        {});

        // callback onSubmit() & return values of inputs of form...
        _this.onSubmit(formValues);
        setTimeout(successMessage.classList.add("show"), 1000);
      } else {
        formElement.submit();
        setTimeout(successMessage.classList.add("show"), 1000);
      }
    }
  };

  // ##################################################################################################
}
