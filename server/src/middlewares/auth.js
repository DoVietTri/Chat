const JWT = require('../helpers/jwt');
const message = require('../constants');
const userModel = require('../models/userModel');

const isAuth = async (req, res, next) => {
  let tokenFromClient = req.headers['authorization'] ? req.headers['authorization'].split(" ")[1] : '';

  if (tokenFromClient) {
    try {
      //verify token
      let decoded = await JWT.verifyToken(tokenFromClient);

      //Get user from token
      let user = await userModel.findById(decoded.data);

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: message.message.unauthorized });
    }
  } else {
    return res.status(401).json({ message: message.message.no_token });
  }
}

module.exports = {
  isAuth
};
