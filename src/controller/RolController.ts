import { Request, Response } from "express";
import { RolService } from "../service/RolService";
import { CrearRolDto } from "../dto/CrearRolDto";

const obtenerRoles = async (request: Request, response: Response) => {
    const roles = await RolService.obtenerRoles();
    response.send(roles);
}

const obtenerRolPorId = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const rol = await RolService.obtenerRolPorId(Number(id));
        response.status(200).send(rol);
    } catch (error: any) {
        response.status(404).send(error.message);
    }
}

const insertarNuevoRol = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body; // Obtener el nombre desde el cuerpo de la solicitud
        if (!nombre) {
            return res.status(400).json({ message: "El nombre del rol es obligatorio" });
        }

        const rol = await RolService.insertarNuevoRol(nombre);
        res.status(201).json(rol);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Error al insertar rol", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al insertar rol" });
        }
    }
};

// Modificar un rol
const modificarRol = async (req: Request, res: Response) => {
    try {
        const rolId = parseInt(req.params.id); // Obtener ID desde los parámetros
        const { nombre } = req.body; // Obtener el nuevo nombre desde el cuerpo de la solicitud

        if (!nombre) {
            return res.status(400).json({ message: "El nombre es obligatorio" });
        }

        const rol = await RolService.modificarRol(rolId, nombre);
        if (!rol) {
            return res.status(404).json({ message: "Rol no encontrado" });
        }

        res.status(200).json(rol);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Error al modificar rol", error: error.message });
        } else {
            res.status(500).json({ message: "Error desconocido al modificar rol" });
        }
    }
};

const eliminarRol = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        await RolService.eliminarRol(Number(id));
        response.status(204).send();
    } catch (error: any) {
        response.status(404).send(error.message);
    }
}

export const RolController = {
    obtenerRoles,
    obtenerRolPorId,
    insertarNuevoRol,
    modificarRol,
    eliminarRol
};