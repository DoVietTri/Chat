const userModel = require('../models/userModel');
const { transError, transSuccess } = require('../constants');
const Response = require('../helpers/response');
const bcrypt = require('bcrypt');
const JWT = require('../helpers/jwt');

const saltRounds = 10;

const register = async (data) => {
  let checkExistsEmail = await userModel.findByEmail(data.email);
  if (checkExistsEmail) {
    return new Response(400, transError.email_exists);
  }

  let salt = bcrypt.genSaltSync(saltRounds);
  let hashPassword = bcrypt.hashSync(data.password, salt);

  let newData = {
    username: data.username,
    email: data.email,
    password: hashPassword
  }
  let res = await userModel.addNew(newData);
  
  return new Response(201, transSuccess.create_user_success, res, null);
}

const login = async (data) => {
  let checkExistsEmail = await userModel.findByEmail(data.email);
  if (!checkExistsEmail) {
    return new Response(400, transError.email_not_exists, null, null);
  }
  
  let user = await userModel.findByEmail(data.email);
  let checkPassword = await user.comparePassword(data.password);
  if (!checkPassword) {
    return new Response(400, transError.password_wrong, null, null);
  }

  let token = await JWT.generateToken(user._id);
  return new Response(200, transSuccess.login_success, token, null);
}

module.exports = {
  register,
  login
}
