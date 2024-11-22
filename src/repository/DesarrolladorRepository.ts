import { dataSource } from "../db"
import { CrearDesarrolladorDto } from "../dto/CrearDesarrolladorDto"
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity"
import { RolEntity } from '../entity/RolEntity';

const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity)

const obtenerDesarrolladores = async (): Promise<DesarrolladorEntity[]> => {
  return await _desarrolladorRepository.find({
    relations: {
      rol: true, // Incluir la relación con la entidad `RolEntity`
    },
  });
};
const actualizarDesarrollador = async (id: number, payload: CrearDesarrolladorDto): Promise<DesarrolladorEntity> => {
  // Buscar al desarrollador por ID
  const desarrollador = await _desarrolladorRepository.findOne({ where: { id }, relations: ['rol'] });

  if (!desarrollador) {
    throw new Error('Desarrollador no encontrado');
  }

  // Si se pasa un id_rol, buscamos el objeto completo del rol
  if (payload.id_rol) {
    const rol = await dataSource.getRepository(RolEntity).findOne({ where: { id: payload.id_rol } });

    if (!rol) {
      throw new Error('Rol no encontrado');
    }

    desarrollador.rol = rol; // Asignar el objeto completo de RolEntity
  }

  // Actualizamos los otros campos
  desarrollador.nombre = payload.nombre || desarrollador.nombre;
  desarrollador.correo = payload.correo || desarrollador.correo;
  desarrollador.fechaContratacion = payload.fecha_contratacion || desarrollador.fechaContratacion;
  desarrollador.fechaActualizacion = new Date(); // Siempre actualizamos la fecha de modificación

  // Guardamos los cambios
  return await _desarrolladorRepository.save(desarrollador);
};

// Obtener un desarrollador por nombre
const obtenerDesarrollador = async (id: number): Promise<DesarrolladorEntity | null> => {
  return await _desarrolladorRepository.findOne({
    where: { id },  // Buscando por id
    relations: ['rol'],  // Incluir la relación 'rol'
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
  return await _desarrolladorRepository.find({
    where: { rol: { id: rolId } }, // Filtramos por rolId
    relations: ['rol'],  // Incluimos la relación de 'rol'
  });
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
    obtenerDesarrolladoresPorRol,
    actualizarDesarrollador

}
