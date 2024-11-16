import { TareaRepository } from "../repository/TareaRepository";
import { CrearTareaDto } from "../dto/CrearTareaDto";

const obtenerTodasLasTareas = () => {
  return TareaRepository.obtenerTodasLasTareas();
};

const obtenerTareasPorDesarrollador = (desarrolladorId: number) => {
  return TareaRepository.obtenerTareasPorDesarrollador(desarrolladorId);
};

const obtenerTareasPorProyecto = (proyectoId: number) => {
  return TareaRepository.obtenerTareasPorProyecto(proyectoId);
};

const obtenerTareasPorEstado = (estadoId: number) => {
  return TareaRepository.obtenerTareasPorEstado(estadoId);
};

const crearTarea = (tarea: CrearTareaDto) => {
  return TareaRepository.crearTarea(tarea);
};

const actualizarTarea = (tareaId: number, tarea: Partial<CrearTareaDto>) => {
  return TareaRepository.actualizarTarea(tareaId, tarea);
};

const eliminarTarea = (tareaId: number) => {
  return TareaRepository.eliminarTarea(tareaId);
};



export const TareaService = {
  obtenerTodasLasTareas,
  obtenerTareasPorDesarrollador,
  obtenerTareasPorProyecto,
  obtenerTareasPorEstado,
  actualizarTarea,
  crearTarea,
 
  eliminarTarea
};