const express = require('express');
const { userController } = require('../controllers');

const route = express.Router();

route.get('/', userController.list);
route.post('/', userController.create);

module.exports = route;
