import { getRepository } from 'typeorm';
import { ProyectoEntity } from '../entity/ProyectoEntity';
import { TareaEntity } from '../entity/TareaEntity';

export const MetricasService = {
  calcularMetricas: async () => {
    const ProyectoRepository = getRepository(ProyectoEntity);
    const TareaRepository = getRepository(TareaEntity);

    // Total de proyectos
    const totalProyectos = await ProyectoRepository.count();

    // Total de tareas
    const totalTareas = await TareaRepository.count();

    const promedioTareasPorProyecto = totalProyectos > 0 ? totalTareas / totalProyectos : 0;

    // Tareas por estado
    const tareasPendientes = await TareaRepository.count({ where: { estado: { nombre: 'Pendiente' } } });
    const tareasEnCurso = await TareaRepository.count({ where: { estado: { nombre: 'En curso' } } });
    const tareasFinalizadas = await TareaRepository.count({ where: { estado: { nombre: 'Finalizada' } } });

    return {
      totalProyectos,
      promedioTareasPorProyecto,
      tareasPorEstado: {
        pendiente: tareasPendientes,
        enCurso: tareasEnCurso,
        finalizadas: tareasFinalizadas,
      },
    };
  },
};
