import express from 'express';
import { userController } from '../controllers';

const route = express.Router();

route.get('/', userController.list);
route.get('/:id', userController.find);
route.post('/', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.del);

export default route;
