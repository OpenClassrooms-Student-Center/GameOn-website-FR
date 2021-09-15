const nameRegex = /^[a-zA-Z]{2,}(?:-[a-zA-Z]{2,})?$/;
const emailRegex = /^[a-z0-9]+([+._-][a-z0-9]+)*@[a-z0-9]+(-[a-z]+)*(\.[a-z]{2,})+$/;

const Validator = {
    name(name) {
        return nameRegex.test(name);
    },
    email(email) {
        return emailRegex.test(email);
    },
    birthdate(date) {
        const today = new Date();
        const testDate = new Date(date);
        return testDate < today;
    },
}

export default Validator;
