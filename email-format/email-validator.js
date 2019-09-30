//Did you really think I'd write one?
const validator = require("email-validator");
 
const emailValidator = (email) => {

    return validator.validate(email);
}

module.exports = emailValidator;