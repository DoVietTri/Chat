const chatModel = require('../models/chatModel');
const Response = require('../helpers/response');

const getConversation = async (senderId, receiverId) => {
  let res = await chatModel.getConversation(senderId, receiverId);

  return new Response(200, null, res, null);
}

module.exports = {
  getConversation
}
