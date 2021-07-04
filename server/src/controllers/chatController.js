const { chatService } = require('../services');

const getConversation = async (req, res) => {
  try {
    let receiverId = req.query.userId;
    let senderId = req.user._id;

    let response = await chatService.getConversation(senderId, receiverId);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getConversation
}
