import { RolRepository } from "../repository/RolesRepository";
import { CrearRolDto } from "../dto/CrearRolDto";
import { RolEntity } from "../entity/RolEntity";

const obtenerRoles = () => {
    return RolRepository.obtenerRoles();
};

const obtenerRolPorId = (id: number) => {
    return RolRepository.obtenerRolPorId(id);
};

const insertarNuevoRol = async (nombre: string): Promise<RolEntity> => {
    return await RolRepository.insertarNuevoRol(nombre);
};

// Modificar un rol existente
const modificarRol = async (rolId: number, nuevoNombre: string): Promise<RolEntity | null> => {
    return await RolRepository.modificarRol(rolId, nuevoNombre);
};

const eliminarRol = (rolId: number) => {
    return RolRepository.eliminarRol(rolId);
};

export const RolService = {
    obtenerRoles,
    obtenerRolPorId,
    insertarNuevoRol,
    modificarRol,
    eliminarRol
};