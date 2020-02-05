import express from 'express';
import { postController } from '../controllers';

const route = express.Router();

route.get('/', postController.list);
route.get('/:id', postController.find);
route.post('/', postController.create);
route.put('/:id', postController.update);
route.delete('/:id', postController.del);

export default route;
