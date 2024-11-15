import { dataSource } from "../db"
import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto"
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity"
import { RolEntity } from '../entity/RolEntity';

const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity)

const obtenerDesarrolladores = async (): Promise<DesarrolladorEntity[]> => {
    return await _desarrolladorRepository.find()
    relations:{
        rol:true
    }
    }
    
// me falta actualizar desarrollador!!!!!!!!

// Obtener un desarrollador por nombre
const obtenerDesarrollador = async (nombre: string): Promise<DesarrolladorEntity | null> => {
  return await _desarrolladorRepository.findOne({
    where: { nombre },
    relations: ['rol'], // Incluir la relación 'rol'
  });
};

const agregarDesarrollador = async (payload: CrearDesarrolladorDto): Promise<DesarrolladorEntity> => {
  const nuevoDesarrollador = _desarrolladorRepository.create({
    nombre: payload.nombre,
    correo: payload.correo,
    rol: { id: payload.id_rol }, // Asignamos el rol usando el ID
    fechaContratacion: payload.fecha_contratacion,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
  });

  // Guardar en la base de datos
  return await _desarrolladorRepository.save(nuevoDesarrollador);
};


const obtenerDesarrolladoresPorRol = async (rolId: number): Promise<DesarrolladorEntity[]> => {
  const desarrolladores = await _desarrolladorRepository.find({
    where: { rol: { id: rolId } }, // Filtramos por rolId
    relations: ['rol'],  // Incluimos la relación de 'rol' si se requiere
  });

  return desarrolladores;
};

const eliminarDesarrollador = async (id: number): Promise<void> => {
  // Buscar al desarrollador por ID
  const desarrollador = await _desarrolladorRepository.findOne({ where: { id } });

  if (!desarrollador) {
    throw new Error('Desarrollador no encontrado');
  }

  // Eliminar el desarrollador
  await _desarrolladorRepository.remove(desarrollador);
};

export const DesarrolladorRepository = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    agregarDesarrollador,
    eliminarDesarrollador,
    obtenerDesarrolladoresPorRol

}
