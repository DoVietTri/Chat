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
    return this.findOne({ _id: id }).exec();
  },
  addNew(data) {
    return this.create(data);
  },
  findByEmail(email) {
    return this.findOne({ email: email }).exec();
  },
  getNormalUserDataById(id) {
    return this.findOne({ _id: id }, { username: 1, email: 1, avatar: 1 }).exec();
  }
}

userSchema.methods = {
  comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = mongoose.model('User', userSchema, 'user');
