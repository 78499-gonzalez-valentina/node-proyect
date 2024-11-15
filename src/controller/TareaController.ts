import { Request, Response } from "express";
import { TareaService } from "../service/TareaService";
import { CrearTareaDto } from "../dto/CrearTareaDto";

const obtenerTodasLasTareas = async (request: Request, response: Response) => {
    const tareas = await TareaService.obtenerTodasLasTareas();
    response.send(tareas);
}

const obtenerTareasPorDesarrollador = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const tareas = await TareaService.obtenerTareasPorDesarrollador(Number(id));
        response.status(200).send(tareas);
    } catch (e: any) {
        response.status(404).send(e.message);
    }
}

const obtenerTareasPorProyecto = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const tareas = await TareaService.obtenerTareasPorProyecto(Number(id));
        response.status(200).send(tareas);
    } catch (e: any) {
        response.status(404).send(e.message);
    }
}

const obtenerTareasPorEstado = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const tareas = await TareaService.obtenerTareasPorEstado(Number(id));
        response.status(200).send(tareas);
    } catch (e: any) {
        response.status(404).send(e.message);
    }
}

const asignarEstadoATarea = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { estadoId } = request.body;
        const tarea = await TareaService.asignarEstadoATarea(Number(id), estadoId);
        response.status(200).json(tarea);
    } catch (e: any) {
        response.status(404).send(e.message);
    }
}

const crearTarea = async (request: Request, response: Response) => {
    try {
        const payload: CrearTareaDto = request.body;
        const tarea = await TareaService.crearTarea(payload);
        response.status(201).json(tarea);
    } catch (e: any) {
        response.status(400).send(e.message);
    }
}

const editarTarea = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const payload = request.body;
        const tarea = await TareaService.editarTarea(Number(id), payload);
        response.status(200).json(tarea);
    } catch (e: any) {
        response.status(400).send(e.message);
    }
}

const actualizarFechaLimite = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { fechaLimite } = request.body;
        const tarea = await TareaService.actualizarFechaLimite(Number(id), fechaLimite);
        response.status(200).json(tarea);
    } catch (e: any) {
        response.status(400).send(e.message);
    }
}

const eliminarTarea = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    await TareaService.eliminarTarea(Number(id));
    response.status(204).send();  // Respuesta 204 No Content, ya que se eliminó exitosamente sin contenido adicional
  } catch (error: any) {
    response.status(404).json({ error: error.message });
  }
};

export const TareaController = {
    obtenerTodasLasTareas,
    obtenerTareasPorDesarrollador,
    obtenerTareasPorProyecto,
    obtenerTareasPorEstado,
    asignarEstadoATarea,
    crearTarea,
    editarTarea,
    actualizarFechaLimite,
    eliminarTarea
};