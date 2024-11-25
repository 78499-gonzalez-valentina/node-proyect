import { Router, Request, Response } from "express";
import { EstadoController } from "../controller/EstadoController";

const EstadoRouter = Router();

EstadoRouter.get('', (req: Request, res: Response) => {
    EstadoController.obtenerEstados(req, res);
});

EstadoRouter.get('/:id', (req: Request, res: Response) => {
    EstadoController.obtenerEstadoPorId(req, res);
});

EstadoRouter.post('', (req: Request, res: Response) => {
  EstadoController.insertarNuevoEstado(req, res);
});

EstadoRouter.delete('/:id', (req: Request, res: Response) => {
    EstadoController.eliminarEstado(req, res);
});

export default EstadoRouter;