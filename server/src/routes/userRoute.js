const express = require('express');
const { userController } = require('../controllers');

const userRoute = express.Router();

userRoute.get('/profile', userController.getProfile);

module.exports = userRoute;
