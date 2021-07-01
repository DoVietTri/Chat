const express = require('express');
const { contactController } = require('../controllers');
const { contactValidation } = require('../validation');
const contactRoute = express.Router();

contactRoute.post('/send-invition', contactValidation.sendInvition, contactController.sendInvition);

module.exports = contactRoute;
