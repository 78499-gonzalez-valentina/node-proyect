"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesarrolladorController = void 0;
const DesarrolladorService_1 = require("../service/DesarrolladorService");
const obtenerDesarrolladores = (request, response) => {
    const desarolladores = DesarrolladorService_1.DesarrolladorService.obtenerDesarrolladores();
    response.send(desarolladores);
};
const obtenerDesarrollador = (request, response) => {
    try {
        const { nombre } = request.params;
        const desarollador = DesarrolladorService_1.DesarrolladorService.obtenerDesarrollador(nombre);
        response.status(200).send(desarollador);
    }
    catch (e) {
        response.status(404).send(e.message);
        return;
    }
};
const agregarDesarrollador = (request, response) => {
    const { nombre, correo, id_rol, fecha_contratacion, fecha_creacion, fecha_actualizacion, edad, tecnologias } = request.body;
    const desarrollador = { nombre, correo, id_rol, fecha_contratacion, fecha_creacion, fecha_actualizacion, edad, tecnologias };
    DesarrolladorService_1.DesarrolladorService.agregarDesarrollador(desarrollador);
    response.status(201).json(desarrollador);
};
exports.DesarrolladorController = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    agregarDesarrollador
};
