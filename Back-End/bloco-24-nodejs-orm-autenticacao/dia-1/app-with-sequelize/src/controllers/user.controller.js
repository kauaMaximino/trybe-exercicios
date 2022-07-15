const userService = require('../services/user.service');

const getAllusers = async (request, response) => {
  const result = await userService.getAllUsers()
  return response.status(200).json(result);
}

module.exports = {
  getAllusers
}