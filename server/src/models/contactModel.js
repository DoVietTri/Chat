const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  contactId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: Boolean, default: false }
});

module.exports = mongoose.model('Contact', contactSchema, 'contact'); 
