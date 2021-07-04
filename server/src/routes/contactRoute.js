const express = require('express');
const { contactController } = require('../controllers');
const { contactValidation } = require('../validation');
const contactRoute = express.Router();

contactRoute.post('/send-invition', contactValidation.sendInvition, contactController.sendInvition);
contactRoute.get('/get-all-friends', contactController.getAllFriends);

module.exports = contactRoute;
