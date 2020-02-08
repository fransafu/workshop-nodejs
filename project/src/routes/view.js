import express from 'express';

// Esto no deberia estar aqui (se debe usar un controlador)
import { postService } from '../services';

const route = express.Router();

route.get('/', async (req, res) => {
  const posts = await postService.list();
  res.render('index', { posts });
});

route.get('/post', (req, res) => {
  res.render('createPost');
});

export default route;
