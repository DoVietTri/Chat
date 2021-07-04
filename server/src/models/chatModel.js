const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: [
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      content: String,
      time: Date
    }
  ],
  createdAt: { type: Date, default: Date.now() }
});

chatSchema.statics = {
  getConversation(senderId, receiverId) {
    return this.findOne({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId }
      ]
    }).exec();
  }
}

module.exports = mongoose.model('Chat', chatSchema, 'chat');
