import express from 'express';
import { commentController } from '../controllers';

const route = express.Router();

route.get('/', commentController.list);
route.get('/:id', commentController.find);
route.post('/', commentController.create);
route.put('/:id', commentController.update);
route.delete('/:id', commentController.del);

export default route;
