"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesarrolladorService = void 0;
const DesarrolladorRepository_1 = require("../repository/DesarrolladorRepository");
const obtenerDesarrolladores = () => {
    return DesarrolladorRepository_1.DesarrolladorRepository.obtenerDesarrolladores();
};
const obtenerDesarrollador = (nombre) => {
    return DesarrolladorRepository_1.DesarrolladorRepository.obtenerDesarrollador(nombre);
};
const agregarDesarrollador = (desarrollador) => {
    //const existe = DesarrolladorRepository.obtenerDesarrollador(desarrollador?.nombre)
    //if(existe) {
    //  throw new Error("Desarrollador ya existe")
    //}
    //DesarrolladorRepository.agregarDesarrollador(desarrollador)
};
exports.DesarrolladorService = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    agregarDesarrollador
};
