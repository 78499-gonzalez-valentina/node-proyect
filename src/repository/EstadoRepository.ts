import { dataSource } from "../db"
import { EstadoEntity } from "../entity/EstadoEntity";

export const EstadoRepository = {
  obtenerEstados: async (): Promise<EstadoEntity[]> => {
    return await dataSource.getRepository(EstadoEntity).find();
  },

  obtenerEstadoPorId: async (id: number): Promise<EstadoEntity | null> => {
    return await dataSource.getRepository(EstadoEntity).findOneBy({ id });
  },

  insertarNuevoEstado: async (nombre: string): Promise<EstadoEntity> => {
    const estadoRepository = dataSource.getRepository(EstadoEntity);
    const nuevoEstado = estadoRepository.create({ nombre });
    return await estadoRepository.save(nuevoEstado);
  },

  eliminarEstado: async (id: number): Promise<boolean> => {
    const resultado = await dataSource.getRepository(EstadoEntity).delete(id);
    return resultado.affected !== 0;
  },
};
