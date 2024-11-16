import { Router, Request, Response } from "express";
import { TareaController } from "../controller/TareaController";

const TareaRouter = Router();

// Obtener todas las tareas
TareaRouter.get('', (req: Request, res: Response) => {
    TareaController.obtenerTodasLasTareas(req, res);
});

// Obtener tareas por desarrollador
TareaRouter.get('/desarrollador/:id', (req: Request, res: Response) => {
    TareaController.obtenerTareasPorDesarrollador(req, res);
});

// Obtener tareas por proyecto
TareaRouter.get('/proyecto/:id', (req: Request, res: Response) => {
    TareaController.obtenerTareasPorProyecto(req, res);
});

// Obtener tareas por estado
TareaRouter.get('/estado/:id', (req: Request, res: Response) => {
    TareaController.obtenerTareasPorEstado(req, res);
});


// Crear tarea
TareaRouter.post('', (req: Request, res: Response) => {
    TareaController.crearTarea(req, res);
});

// Editar tarea
TareaRouter.put('/:id', (req: Request, res: Response) => {
    TareaController.actualizarTarea(req, res);
});


TareaRouter.delete('/:id', (req: Request, res: Response) => {
  TareaController.eliminarTarea(req, res);
});

export default TareaRouter;