const { User } = require('../database/models');

const getAllUsers = () => {
  return User.findAll();
}

module.exports = {
  getAllUsers
}