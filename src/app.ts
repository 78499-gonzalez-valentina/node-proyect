import express, {Express, json} from 'express'
import {ROUTES} from "./routes";

const app: Express = express()

// utililzar un middleware
app.use(json())

ROUTES.forEach(({ path, router }) => {
    // middleware Router, esto nos permite crear rutas
    app.use(path, router)
})

export default app;
