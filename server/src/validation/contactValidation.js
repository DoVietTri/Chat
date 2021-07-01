const { check } = require('express-validator');
const { transValidation } = require('../constants');

let sendInvition = [
  check('email', transValidation.email_incorrect)
  .isEmail()
  .trim()
  .notEmpty()
]

module.exports = {
  sendInvition
}
