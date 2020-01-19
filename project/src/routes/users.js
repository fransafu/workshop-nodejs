const express = require('express');
const { userController } = require('../controllers');

const route = express.Router();

route.get('/', userController.list);

module.exports = route;
