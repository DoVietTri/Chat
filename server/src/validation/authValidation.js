const { check } = require('express-validator');
const { transValidation } = require('../constants');

let register = [
  check('username', transValidation.username_incorrect)
    .isLength({ min: 6, max: 20 })
    .notEmpty()
    .trim(),
  check('email', transValidation.email_incorrect)
    .isEmail()
    .trim()
    .notEmpty(),
  check('password', transValidation.password_incorrect)
    .isLength({ min: 6, max: 20 })
    .notEmpty(),
  check('password_confirmation', transValidation.password_confirmation_incorrect)
    .isLength({ min: 6, max: 20 })
    .notEmpty()
    .custom((value, { req }) => {
      return value === req.body.password
    })
];

let login = [
  check('email', transValidation.email_incorrect)
    .isEmail()
    .trim()
    .notEmpty(),
  check('password', transValidation.password_incorrect)
    .isLength({ min: 6, max: 20 })
    .notEmpty(),
]

module.exports = {
  register,
  login
}
