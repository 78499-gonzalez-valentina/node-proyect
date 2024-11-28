import { Request, Response } from 'express';
import { MetricasService } from '../service/MetricasService';

export const MetricasController = {
  obtenerMetricas: async (req: Request, res: Response) => {
    try {
      const metricas = await MetricasService.calcularMetricas();
      res.status(200).json(metricas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};
