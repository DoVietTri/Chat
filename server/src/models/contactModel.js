const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: Boolean, default: false }
});

contactSchema.statics = {
  addNewContact(data) {
    return this.create(data);
  },
  getAllFriends(id) {
    return this.find({
      $and: [
        {
          $or: [
            { userId: id },
            { contactId: id }
          ]
        },
        { status: true }
      ]
    })
      // .populate('userId', { username: 1, email: 1, avatar: 1 })
      // .populate('contactId', { username: 1, email: 1, avatar: 1 })
      .exec();
  }
}

module.exports = mongoose.model('Contact', contactSchema, 'contact');
