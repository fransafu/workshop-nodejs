import express from 'express';
import { userController } from '../controllers';

const route = express.Router();

route.get('/', userController.list);
route.post('/', userController.create);

export default route;
