import {dataSource} from '../db';
import { ProyectoEntity } from '../entity/ProyectoEntity';

const _proyectoRepository = dataSource.getRepository(ProyectoEntity)

const obtenerProyectos = async (): Promise<ProyectoEntity[]> => {
  return await _proyectoRepository.find()
}


export const ProyectoRepository = {
  obtenerProyectos
}