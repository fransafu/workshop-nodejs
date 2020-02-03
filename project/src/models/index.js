const mongoose = require('mongoose');
const User = require('./user');

mongoose.set('debug', true);

module.exports = {
  User,
}
