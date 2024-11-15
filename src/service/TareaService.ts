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

const asignarEstadoATarea = (tareaId: number, estadoId: number) => {
  return TareaRepository.asignarEstadoATarea(tareaId, estadoId);
};

const crearTarea = (tarea: CrearTareaDto) => {
  return TareaRepository.crearTarea(tarea);
};

const editarTarea = (tareaId: number, tarea: Partial<CrearTareaDto>) => {
  return TareaRepository.editarTarea(tareaId, tarea);
};

const actualizarFechaLimite = (tareaId: number, fechaLimite: Date) => {
  return TareaRepository.actualizarFechaLimite(tareaId, fechaLimite);
};

const eliminarTarea = (tareaId: number) => {
  return TareaRepository.eliminarTarea(tareaId);
};



export const TareaService = {
  obtenerTodasLasTareas,
  obtenerTareasPorDesarrollador,
  obtenerTareasPorProyecto,
  obtenerTareasPorEstado,
  asignarEstadoATarea,
  crearTarea,
  editarTarea,
  actualizarFechaLimite,
  eliminarTarea
};