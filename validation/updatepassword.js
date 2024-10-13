const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePasswordUpdate(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions

  data.Psw = !isEmpty(data.Psw) ? data.Psw : "";
  data.Psw2 = !isEmpty(data.Psw2) ? data.Psw2 : "";


  // Password checks
  if (Validator.isEmpty(data.Psw)) {
    errors.Psw = "Password field is required";
  }

  if (Validator.isEmpty(data.Psw2)) {
    errors.Psw2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.Psw, { min: 6, max: 30 })) {
    errors.Psw = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.Psw, data.Psw2)) {
    errors.Psw2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
