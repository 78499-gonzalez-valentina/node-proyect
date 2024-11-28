import { Router } from 'express';
import { MetricasController } from '../controller/MetricasController';

const MetricasRouter = Router();

MetricasRouter.get('', MetricasController.obtenerMetricas);

export default MetricasRouter;
