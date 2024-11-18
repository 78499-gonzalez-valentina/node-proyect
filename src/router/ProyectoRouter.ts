import { Router } from "express";
import { ProyectoController } from "../controller/ProyectoController";

const ProyectoRouter = Router();

ProyectoRouter.get('', ProyectoController.obtenerProyectos);
ProyectoRouter.get('/:id', ProyectoController.obtenerProyectoPorId);
ProyectoRouter.post('/', ProyectoController.crearProyecto);
ProyectoRouter.put('/:id', ProyectoController.editarProyecto);
ProyectoRouter.delete('/:id', ProyectoController.eliminarProyecto);
ProyectoRouter.put('/:idProyecto/responsable/:idDesarrollador', ProyectoController.asignarResponsable);
ProyectoRouter.get('/:idProyecto/desarrolladores', ProyectoController.listarDesarrolladoresDeProyecto);

export default ProyectoRouter;