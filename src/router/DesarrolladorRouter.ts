import {Router, Request, Response} from "express";
import {DesarrolladorController} from "../controller/DesarrolladorController";

const DesarrolladorRouter = Router()

DesarrolladorRouter.get('', (req: Request, res: Response) => {
    DesarrolladorController.obtenerDesarrolladores(req, res)
})

DesarrolladorRouter.get("/:id", (req: Request, res: Response) => {
    DesarrolladorController.obtenerDesarrollador(req, res);
});

DesarrolladorRouter.get("/rol/:rolId", (req: Request, res: Response) => {
    DesarrolladorController.obtenerDesarrolladoresPorRol(req, res);
});

DesarrolladorRouter.post('', (req: Request, res: Response) => {
     DesarrolladorController.agregarDesarrollador(req, res)
})
   
DesarrolladorRouter.put("/:id", (req: Request, res: Response) => {
    DesarrolladorController.actualizarDesarrollador(req, res);
});

// Eliminar un desarrollador por ID
DesarrolladorRouter.delete("/:id", (req: Request, res: Response) => {
    DesarrolladorController.eliminarDesarrollador(req, res);
});
export default DesarrolladorRouter;
