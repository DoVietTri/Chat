const { contactService } = require('../services');
const { validationResult } = require('express-validator');
const _ = require('lodash');
const Response = require('../helpers/response');

const sendInvition = async (req, res) => {
  const validationsErrors = validationResult(req);
  if (!validationsErrors.isEmpty()) {
    let errors = Object.values(validationsErrors.mapped());
    let arr = _.map(errors, _.partialRight(_.pick, ['param', 'msg']));

    return res.status(400).json(new Response(400, null, null, arr));
  }
  
  try {
    let email = req.body.email;
    let response = await contactService.sendInvition(req.user, email);
    
    return res.status(response.statusCode).json(response);    
  } catch (error) {
    return res.status(500).json(error);
  }
}

const getAllFriends = async (req, res) => {
  try {
    let response = await contactService.getAllFriends(req.user._id);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  sendInvition,
  getAllFriends
}
