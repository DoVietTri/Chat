const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: { type: String, default: 'avatar.png' }
});

userSchema.statics = {
  findById(id) {
    return this.find({ _id: id }).exec();
  },
  addNew(data) {
    return this.create(data);
  },
  findByEmail(email) {
    return this.findOne({ email: email }).exec();
  }
}

userSchema.methods = {
  comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = mongoose.model('User', userSchema, 'user');
