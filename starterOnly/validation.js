const Validation = {
    isRequired: (text) => text !== '',
    minLength: (text, length) => text.trim().length >= length,
    checkEmail: (email) => {
        const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return mailRegex.test(email);
    },
    checkBirthDate: (date) => {
        const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

        return dateRegex.test(date);
    },

    checkNumber: (value) => 99 >= value && value >= 0,
    isAnyChecked: (values) => values.some((value) => value),
};
