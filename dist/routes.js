"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
const DesarrolladorRouter_1 = __importDefault(require("./router/DesarrolladorRouter"));
const ProyectoRouter_1 = __importDefault(require("./router/ProyectoRouter"));
const TareaRouter_1 = __importDefault(require("./router/TareaRouter"));
exports.ROUTES = [
    {
        path: '/desarrolladores',
        router: DesarrolladorRouter_1.default
    },
    {
        path: '/proyectos',
        router: ProyectoRouter_1.default
    },
    {
        path: '/tareas',
        router: TareaRouter_1.default
    }
];
