import { Request, Response } from "express";
import { ProyectoService } from "../service/ProyectoService";
import { CrearProyectoDto } from "../dto/CrearProyectoDto";

const obtenerProyectos = async (_req: Request, res: Response) => {
    try {
        const proyectos = await ProyectoService.obtenerProyectos();
        res.status(200).send(proyectos);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Error al obtener proyectos", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al obtener proyectos" });
        }
    }
};

const obtenerProyectoPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const proyecto = await ProyectoService.obtenerProyectoPorId(Number(id));
        res.status(200).send(proyecto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: "Proyecto no encontrado", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al obtener proyecto" });
        }
    }
};

const crearProyecto = async (req: Request, res: Response) => {
    try {
        const proyectoData: CrearProyectoDto = req.body;

        const proyecto = await ProyectoService.crearProyecto(proyectoData);
        res.status(201).json(proyecto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Error al crear proyecto", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al crear proyecto" });
        }
    }
};

const editarProyecto = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const proyectoData: CrearProyectoDto = req.body;

        if (!proyectoData) {
            res.status(400).json({ message: "Datos del proyecto no proporcionados" });
            return;
        }

        // Convertir fechas de string a Date, si están presentes
        const datosProcesados = {
            ...proyectoData,
            fecha_inicio: proyectoData.fecha_inicio ? new Date(proyectoData.fecha_inicio) : undefined,
            fecha_fin: proyectoData.fecha_fin ? new Date(proyectoData.fecha_fin) : undefined,
        };

        const proyecto = await ProyectoService.editarProyecto(Number(id), datosProcesados);

        if (!proyecto) {
            res.status(404).json({ message: "Proyecto no encontrado" });
            return;
        }

        res.status(200).json(proyecto);
    } catch (error: unknown) {
        res.status(500).json({
            message: "Error al editar el proyecto",
            error: error instanceof Error ? error.message : "Error desconocido",
        });
    }
};



const eliminarProyecto = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await ProyectoService.eliminarProyecto(Number(id));
        res.status(204).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: "Proyecto no encontrado", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al eliminar proyecto" });
        }
    }
};

const asignarResponsable = async (req: Request, res: Response) => {
    try {
        const { idProyecto, idDesarrollador } = req.params;

        const proyecto = await ProyectoService.asignarResponsable(
            Number(idProyecto),
            Number(idDesarrollador)
        );

        res.status(200).json(proyecto);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Error al asignar responsable", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al asignar responsable" });
        }
    }
};

const listarDesarrolladoresDeProyecto = async (req: Request, res: Response) => {
    try {
        const { idProyecto } = req.params;
        const desarrolladores = await ProyectoService.listarDesarrolladoresDeProyecto(Number(idProyecto));
        res.status(200).json(desarrolladores);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({ message: "Proyecto no encontrado", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al listar desarrolladores" });
        }
    }
};

export const ProyectoController = {
    obtenerProyectos,
    obtenerProyectoPorId,
    crearProyecto,
    editarProyecto,
    eliminarProyecto,
    asignarResponsable,
    listarDesarrolladoresDeProyecto,
};