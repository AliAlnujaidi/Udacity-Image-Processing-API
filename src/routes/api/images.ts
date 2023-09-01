import express from 'express';
import { checkImageQuery } from '../../middlewares';
import { processImage } from '../../controllers/imagesConroller';

const imagesRoutes = express.Router();

imagesRoutes.get('', checkImageQuery, processImage );
export default imagesRoutes;
