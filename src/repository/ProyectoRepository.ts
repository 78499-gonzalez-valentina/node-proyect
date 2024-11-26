import { Repository } from 'typeorm';
import { dataSource } from '../db';
import { ProyectoEntity } from '../entity/ProyectoEntity';
import { DesarrolladorEntity } from '../entity/DesarrolladorEntity';
import { CrearProyectoDto } from '../dto/CrearProyectoDto';

const _proyectoRepository: Repository<ProyectoEntity> = dataSource.getRepository(ProyectoEntity);
const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity)

// Función para obtener todos los proyectos con sus detalles y responsables
const obtenerProyectos = async (): Promise<ProyectoEntity[]> => {
  return await _proyectoRepository.find({
    relations: ['responsable', 'desarrolladores.desarrollador', 'tareas'],
  });
};

// Función para crear un proyecto
const crearProyecto = async (proyectoData: CrearProyectoDto): Promise<ProyectoEntity> => {
  // Obtener el responsable
  const responsable = await _desarrolladorRepository.findOne({ where: { id: proyectoData.id_responsable } });

  if (!responsable) {
    throw new Error('Responsable no encontrado');
  }

  // Crear el nuevo proyecto con los datos
  const nuevoProyecto = _proyectoRepository.create({
    ...proyectoData,
    responsable,  // Asignamos el objeto completo del responsable
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
  });

  return await _proyectoRepository.save(nuevoProyecto);
};

export { crearProyecto };

// Función para actualizar un proyecto
const editarProyecto = async (
  id: number,
  proyectoData: Partial<CrearProyectoDto>
): Promise<ProyectoEntity | null> => {
  const proyectoExistente = await _proyectoRepository.findOneBy({ id });

  if (!proyectoExistente) {
    return null; // Proyecto no encontrado
  }

  const proyectoActualizado = _proyectoRepository.merge(proyectoExistente, {
    ...proyectoData,
    fecha_actualizacion: new Date(),
  });

  return await _proyectoRepository.save(proyectoActualizado);
};

// Función para eliminar un proyecto
const eliminarProyecto = async (id: number): Promise<boolean> => {
  const resultado = await _proyectoRepository.delete(id);
  return resultado.affected !== 0; // Retorna true si se eliminó algo
};

// Función para asignar un desarrollador como responsable del proyecto
const asignarResponsable = async (
  idProyecto: number,
  idDesarrollador: number
): Promise<ProyectoEntity | null> => {
  const proyecto = await _proyectoRepository.findOne({
    where: { id: idProyecto },
    relations: ['responsable'],
  });

  if (!proyecto) {
    return null; // Proyecto no encontrado
  }

  const desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity);
  const desarrollador = await desarrolladorRepository.findOneBy({ id: idDesarrollador });

  if (!desarrollador) {
    return null; // Desarrollador no encontrado
  }

  proyecto.responsable = desarrollador;
  proyecto.fecha_actualizacion = new Date();

  return await _proyectoRepository.save(proyecto);
};

// Obtener un proyecto por ID con todos sus detalles
const obtenerProyectoPorId = async (id: number): Promise<ProyectoEntity | null> => {
  return await _proyectoRepository.findOne({
    where: { id },
    relations: ['responsable', 'desarrolladores.desarrollador', 'tareas'],
  });
};

// Obtener todos los desarrolladores de un proyecto
const obtenerDesarrolladoresDeProyecto = async (idProyecto: number): Promise<DesarrolladorEntity[]> => {
  // Consultar el proyecto y cargar los desarrolladores relacionados
  const proyecto = await _proyectoRepository.findOne({
    where: { id: idProyecto },
    relations: ['desarrolladores'], // Cargar la relación definida como 'desarrolladores'
  });

  if (!proyecto) {
    return []; // Si el proyecto no existe, retornar un array vacío
  }

  // Retornar directamente los desarrolladores del proyecto
  return proyecto.desarrolladores;
};

// Exportar las funciones del repositorio
export const ProyectoRepository = {
  obtenerProyectos,
  crearProyecto,
  editarProyecto,
  eliminarProyecto,
  asignarResponsable,
   obtenerProyectoPorId,
  obtenerDesarrolladoresDeProyecto
};