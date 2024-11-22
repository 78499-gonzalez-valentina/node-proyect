import express, { Express, json } from 'express';
import { ROUTES } from "./routes";
import cors from 'cors';  // Importar CORS de manera limpia

const app: Express = express();

// Configurar CORS para permitir solicitudes de cualquier origen
app.use(cors()); // Esto asegura que el middleware CORS se aplique a todas las rutas

// Utilizar un middleware para el parseo del cuerpo de las solicitudes
app.use(json());

// Registrar las rutas
ROUTES.forEach(({ path, router }) => {
    app.use(path, router);
});

export default app;