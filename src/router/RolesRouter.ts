import { Router, Request, Response } from "express";
import { RolController } from "../controller/RolController";

const RolRouter = Router();

RolRouter.get('', (req: Request, res: Response) => {
    RolController.obtenerRoles(req, res);
});

RolRouter.get('/:id', (req: Request, res: Response) => {
    RolController.obtenerRolPorId(req, res);
});

RolRouter.post('', (req: Request, res: Response) => {
    RolController.insertarNuevoRol(req, res);
});

RolRouter.put('/:id', (req: Request, res: Response) => {
    RolController.modificarRol(req, res);
});

RolRouter.delete('/:id', (req: Request, res: Response) => {
    RolController.eliminarRol(req, res);
});

export default RolRouter;