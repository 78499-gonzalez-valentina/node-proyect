"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DesarrolladorController_1 = require("../controller/DesarrolladorController");
const DesarrolladorRouter = (0, express_1.Router)();
DesarrolladorRouter.get('', (req, res) => {
    DesarrolladorController_1.DesarrolladorController.obtenerDesarrolladores(req, res);
});
DesarrolladorRouter.get('/:nombre', (req, res) => {
    DesarrolladorController_1.DesarrolladorController.obtenerDesarrollador(req, res);
});
DesarrolladorRouter.post('', (req, res) => {
    DesarrolladorController_1.DesarrolladorController.agregarDesarrollador(req, res);
});
DesarrolladorRouter.put('/:id', (req, res) => { });
DesarrolladorRouter.delete(':id', (req, res) => { });
exports.default = DesarrolladorRouter;
