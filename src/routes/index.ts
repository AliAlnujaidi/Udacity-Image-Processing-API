import express from 'express';
import imagesRoutes from './api/images';

const routes = express.Router();

routes.get('/', (req: any, res: any) => {
  res.send('Welcome to my udacity image processing project!');
});

routes.use('/images', imagesRoutes);

export default routes;
