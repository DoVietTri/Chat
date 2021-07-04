const express = require('express');
const { chatController } = require('../controllers'); 

const chatRoute = express.Router();

// chatRoute.post('/send-message', )
chatRoute.get('/', chatController.getConversation);

module.exports = chatRoute;
