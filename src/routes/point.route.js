import express from 'express';
import * as PointController from '../controller/PointController.js';
import { validate } from '../middleware/validate.js';
import { createPointSchema, updatePointSchema } from '../validations/point.validation.js';

const PointRoute = express.Router();

PointRoute.get('/', PointController.getAllPoint);
PointRoute.get('/:id', PointController.getPointById);
PointRoute.post('/', validate(createPointSchema), PointController.createPoint);
PointRoute.put('/:id', validate(updatePointSchema), PointController.updatePoint);
PointRoute.patch('/:id', validate(updatePointSchema), PointController.updatePoint);
PointRoute.delete('/:id', PointController.deletePoint);

export default PointRoute;
