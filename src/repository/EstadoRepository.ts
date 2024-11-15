import { EstadoEntity } from "../entity/EstadoEntity";
import { dataSource } from "../db"


const _estadoRepository = dataSource.getRepository(EstadoEntity)

const obtenerEstados = async (): Promise<EstadoEntity[]> => {
    return await _estadoRepository.find()
}

export const EstadoRepository = {
  obtenerEstados
}