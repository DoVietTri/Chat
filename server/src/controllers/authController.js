const { validationResult } = require('express-validator');
const _ = require('lodash');
const { authService } = require('../services');
const Response = require('../helpers/response');

const login = async (req, res) => {
  let validationsErrors = validationResult(req);

  if (!validationsErrors.isEmpty()) {
    let errors = Object.values(validationsErrors.mapped());

    let arr = _.map(errors, _.partialRight(_.pick, ['param', 'msg']));

    return res.status(400).json(new Response(400, null, null, arr));
  }
  try {
    let data = req.body;
    let response = await authService.login(data);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    return res.status(500).json(new Response(500, null, null, error));
  }
}

const register = async (req, res) => {
  let validationsErrors = validationResult(req);

  if (!validationsErrors.isEmpty()) {
    let errors = Object.values(validationsErrors.mapped());

    let arr = _.map(errors, _.partialRight(_.pick, ['param', 'msg']));

    return res.status(400).json(new Response(400, null, null, arr));
  }
  try {
    let data = req.body;
    let response = await authService.register(data);

    return res.status(response.statusCode).json(response);
  } catch (error) {
    return res.status(500).json(new Response(500, null, null, error));
  }
}

const getProfile = (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  login,
  register,
  getProfile
}
