import DesarrolladorRouter from "./router/DesarrolladorRouter";
import ProyectoRouter from "./router/ProyectoRouter";
import TareaRouter from "./router/TareaRouter";
import RolesRouter from "./router/RolesRouter";
import path from "path";
import EstadoRouter from "./router/EstadoRouter";

export const ROUTES = [
    {
        path: '/desarrolladores',
        router: DesarrolladorRouter
    },
    {
        path: '/proyectos',
        router: ProyectoRouter
    },
    {
        path: '/tareas',
        router: TareaRouter
    },
    {
        path: '/roles',
        router: RolesRouter
    },
    {
        path: '/estados',
        router: EstadoRouter
    }
    
]
