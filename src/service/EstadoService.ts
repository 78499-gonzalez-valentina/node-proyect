import { EstadoRepository } from "../repository/EstadoRepository";
import { EstadoEntity } from "../entity/EstadoEntity";

const obtenerEstados = () => {
  return EstadoRepository.obtenerEstados();
};

const obtenerEstadoPorId = (id: number) => {
  return EstadoRepository.obtenerEstadoPorId(id);
};

const insertarNuevoEstado = async (nombre: string): Promise<EstadoEntity> => {
  return await EstadoRepository.insertarNuevoEstado(nombre);
};

const eliminarEstado = async (id: number): Promise<boolean> => {
  return await EstadoRepository.eliminarEstado(id);
};

export const EstadoService = {
  obtenerEstados,
  obtenerEstadoPorId,
  insertarNuevoEstado,
  eliminarEstado,
};