import { ProyectoRepository } from '../repository/ProyectoRepository';
import { CrearProyectoDto } from '../dto/CrearProyectoDto';

const crearProyecto = async (proyecto: CrearProyectoDto) => {
  return await ProyectoRepository.crearProyecto(proyecto);
};

const editarProyecto = async (id: number, datos: Partial<CrearProyectoDto>) => {
  const proyecto = await ProyectoRepository.editarProyecto(id, datos);
  if (!proyecto) throw new Error('El proyecto no existe.');
  return proyecto;
};

const eliminarProyecto = async (id: number) => {
  const eliminado = await ProyectoRepository.eliminarProyecto(id);
  if (!eliminado) throw new Error('El proyecto no existe o no se pudo eliminar.');
  return true;
};

const asignarResponsable = async (idProyecto: number, idDesarrollador: number) => {
  const proyecto = await ProyectoRepository.asignarResponsable(idProyecto, idDesarrollador);
  if (!proyecto) throw new Error('El proyecto o desarrollador no existe.');
  return proyecto;
};

const obtenerProyectos = async () => {
  return await ProyectoRepository.obtenerProyectos();
};

const obtenerProyectoPorId = async (id: number) => {
  const proyecto = await ProyectoRepository.obtenerProyectoPorId(id);
  if (!proyecto) throw new Error('El proyecto no existe.');
  return proyecto;
};

const listarDesarrolladoresDeProyecto = async (idProyecto: number) => {
  const desarrolladores = await ProyectoRepository.obtenerDesarrolladoresDeProyecto(idProyecto);
  if (desarrolladores.length === 0) throw new Error('El proyecto no tiene desarrolladores asignados o no existe.');
  return desarrolladores;
};

export const ProyectoService = {
  crearProyecto,
  editarProyecto,
  eliminarProyecto,
  asignarResponsable,
  obtenerProyectos,
  obtenerProyectoPorId,
  listarDesarrolladoresDeProyecto,
};