import express from 'express';
import users from './users';
import posts from './post';
import comments from './comment';

// Public views
import view from './view';

const routes = express.Router();

routes.use('/', view);
routes.use('/users', users);
routes.use('/posts', posts);
routes.use('/comments', comments);

export default routes;
