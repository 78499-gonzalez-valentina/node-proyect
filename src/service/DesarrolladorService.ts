import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto";
import {DesarrolladorRepository} from "../repository/DesarrolladorRepository";

const obtenerDesarrolladores = () => {
    return DesarrolladorRepository.obtenerDesarrolladores()
}

const obtenerDesarrollador = (nombre: string) => {
    return DesarrolladorRepository.obtenerDesarrollador(nombre)
}

const agregarDesarrollador = (desarrollador: CrearDesarrolladorDto) => {
   return DesarrolladorRepository.agregarDesarrollador(desarrollador)
}


export const DesarrolladorService = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    agregarDesarrollador
}
