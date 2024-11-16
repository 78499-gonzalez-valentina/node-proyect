import {Request, Response} from "express";
import {DesarrolladorService} from "../service/DesarrolladorService";
import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto";

const obtenerDesarrolladores = async (request: Request, response: Response) => {
    const desarolladores = await DesarrolladorService.obtenerDesarrolladores()
    response.send(desarolladores)
}

const obtenerDesarrollador = async (request: Request, response: Response) => {
   try {
    // Cambiamos 'nombre' por 'id' para obtener el parámetro de la URL
       const { id } = request.params;  
       
       // Llamamos al servicio pasándole el ID en lugar del nombre
       const desarrollador = await DesarrolladorService.obtenerDesarrollador(Number(id));
       
       // Si se encuentra al desarrollador, lo devolvemos, si no, enviamos un error 404
       if (desarrollador) {
           response.status(200).json(desarrollador);
       } else {
           response.status(404).send({ message: "Desarrollador no encontrado" });
       }
   } catch (e: any) { 
       // En caso de error, respondemos con un código 500
       response.status(500).send({ message: "Error al obtener el desarrollador", error: e.message }); 
   }
};

const agregarDesarrollador = async (request: Request, response: Response) => {
    const payload: CrearDesarrolladorDto =request.body
    const { nombre, correo, id_rol, fecha_contratacion} = request.body
    const desarrollador = await DesarrolladorService.agregarDesarrollador(payload)
    response.status(201).json(desarrollador)

}

const actualizarDesarrollador = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const payload: CrearDesarrolladorDto = request.body;

    const desarrollador = await DesarrolladorService.actualizarDesarrollador(Number(id), payload);

    if (!desarrollador) {
      return response.status(404).send('Desarrollador no encontrado');
    }

    response.status(200).json(desarrollador);
  } catch (e: any) {
    response.status(500).send(e.message);
  }
};

// Obtener desarrolladores por rol
const obtenerDesarrolladoresPorRol = async (request: Request, response: Response) => {
  try {
    const { rolId } = request.params;
    console.log('rolId recibido:', rolId);  // Imprimir el valor recibido
    const rolIdNumber = Number(rolId);  // Convertir a número

    if (isNaN(rolIdNumber)) {
      return response.status(400).send('El ID del rol no es válido.');
    }

    const desarrolladores = await DesarrolladorService.obtenerDesarrolladoresPorRol(rolIdNumber);

    if (desarrolladores.length === 0) {
      return response.status(404).send('No hay desarrolladores con ese rol');
    }

    response.status(200).json(desarrolladores);
  } catch (e: any) {
    response.status(500).send(e.message);
  }
};

// Eliminar un desarrollador
const eliminarDesarrollador = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    await DesarrolladorService.eliminarDesarrollador(Number(id));
    response.status(204).send(); // 204 No Content
  } catch (e: any) {
    response.status(500).send(e.message);
  }
};



export const DesarrolladorController = {
    obtenerDesarrolladores,
    obtenerDesarrollador, 
    agregarDesarrollador,   
    actualizarDesarrollador,
    eliminarDesarrollador,
    obtenerDesarrolladoresPorRol
}
