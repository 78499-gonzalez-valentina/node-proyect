import {Router, Request, Response} from "express";
import {DesarrolladorController} from "../controller/DesarrolladorController";

const DesarrolladorRouter = Router()

DesarrolladorRouter.get('', (req: Request, res: Response) => {
    DesarrolladorController.obtenerDesarrolladores(req, res)
})

DesarrolladorRouter.get('/:nombre', (req: Request, res: Response) => {
    DesarrolladorController.obtenerDesarrollador(req, res)
})

DesarrolladorRouter.post('', (req: Request, res: Response) => {
     DesarrolladorController.agregarDesarrollador(req, res)
})
   

DesarrolladorRouter.put('/:id', (req: Request, res: Response) => {

})

DesarrolladorRouter.delete(':id', (req: Request, res: Response) => {
    
})

export default DesarrolladorRouter;
