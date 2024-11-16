import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto";
import {DesarrolladorRepository} from "../repository/DesarrolladorRepository";
import {RolRepository} from '../repository/RolesRepository';

const obtenerDesarrolladores = () => {
    return DesarrolladorRepository.obtenerDesarrolladores()
}

const obtenerDesarrollador = (id:number) => {
    return DesarrolladorRepository.obtenerDesarrollador(id);
}


const agregarDesarrollador = (desarrollador: CrearDesarrolladorDto) => {
   return DesarrolladorRepository.agregarDesarrollador(desarrollador)
}

const actualizarDesarrollador = async (id: number, payload: CrearDesarrolladorDto) => {
  return DesarrolladorRepository.actualizarDesarrollador(id, payload);
};

// Nuevo método para obtener desarrolladores por rol
const obtenerDesarrolladoresPorRol = (rolId: number) => {
  return DesarrolladorRepository.obtenerDesarrolladoresPorRol(rolId);
};

// Nuevo método para eliminar un desarrollador
const eliminarDesarrollador = async (id: number) => {
  return DesarrolladorRepository.eliminarDesarrollador(id);
};


export const DesarrolladorService = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    agregarDesarrollador,
    actualizarDesarrollador,
    obtenerDesarrolladoresPorRol,
    eliminarDesarrollador
}
