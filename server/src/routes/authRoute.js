const express = require('express');
const { authController } = require('../controllers');
const { authValidation } = require('../validation');
const authRoute = express.Router();

authRoute.post('/login', authValidation.login, authController.login);
authRoute.post('/register', authValidation.register, authController.register);

module.exports = authRoute;
