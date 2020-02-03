import express from 'express';
import { userController } from '../controllers';

const route = express.Router();

route.get('/', userController.list);
route.get('/:name', userController.find);
route.post('/', userController.create);
route.put('/:name', userController.update);
route.delete('/:name', userController.del);

export default route;
