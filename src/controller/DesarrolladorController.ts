import {Request, Response} from "express";
import {DesarrolladorService} from "../service/DesarrolladorService";
import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto";

const obtenerDesarrolladores = async (request: Request, response: Response) => {
    const desarolladores = await DesarrolladorService.obtenerDesarrolladores()
    response.send(desarolladores)
}

const obtenerDesarrollador = (request: Request, response: Response) => {
   try {
       const { nombre } = request.params
       const desarollador = DesarrolladorService.obtenerDesarrollador(nombre)
       response.status(200).send(desarollador)
   } catch (e: any) {
         response.status(404).send(e.message)
       return;
   }
}

const agregarDesarrollador = async (request: Request, response: Response) => {
    const payload: CrearDesarrolladorDto =request.body
    const { nombre, correo, id_rol, fecha_contratacion} = request.body
    const desarrollador = await DesarrolladorService.agregarDesarrollador(payload)
    response.status(201).json(desarrollador)

}


export const DesarrolladorController = {
    obtenerDesarrolladores,
    obtenerDesarrollador, 
    agregarDesarrollador
}
