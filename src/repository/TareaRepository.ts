import { TareaEntity } from "../entity/TareaEntity";
import { dataSource } from "../db";
import { EstadoEntity } from "../entity/EstadoEntity";
import { ProyectoEntity } from "../entity/ProyectoEntity";
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity";
import { CrearTareaDto } from "../dto/CrearTareaDto";



const _tareaRepository = dataSource.getRepository(TareaEntity)
const _estadoRepository = dataSource.getRepository(EstadoEntity); 
const _proyectoRepository = dataSource.getRepository(ProyectoEntity);
const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity);

const obtenerTodasLasTareas = async (): Promise<TareaEntity[]> => {
  return await _tareaRepository.find({
    relations: ["proyecto", "desarrollador", "estado"] // Carga las relaciones asociadas
  });
};

const obtenerTareasPorDesarrollador = async (desarrolladorId: number): Promise<TareaEntity[]> => {
  return await _tareaRepository.find({
    where: { desarrollador: { id: desarrolladorId } }, // Filtra por el ID del desarrollador
    relations: ["proyecto", "desarrollador", "estado"] // Carga las relaciones asociadas
  });
};

const obtenerTareasPorProyecto = async (proyectoId: number): Promise<TareaEntity[]> => {
  return await _tareaRepository.find({
    where: { proyecto: { id: proyectoId } }, // Filtra por el ID del proyecto
    relations: ["proyecto", "desarrollador", "estado"] // Carga las relaciones asociadas
  });
};

const obtenerTareasPorEstado = async (estadoId: number): Promise<TareaEntity[]> => {
  return await _tareaRepository.find({
    where: { estado: { id: estadoId } }, // Filtra por el ID del estado
    relations: ["proyecto", "desarrollador", "estado"] // Carga las relaciones asociadas
  });
};

const asignarEstadoATarea = async (tareaId: number, estadoId: number): Promise<TareaEntity> => {
  // Obtener la tarea por su ID
  const tarea = await _tareaRepository.findOne({
    where: { id: tareaId },
    relations: ['estado'], 
  });

  if (!tarea) {
    throw new Error('Tarea no encontrada');
  }

  const estado = await _estadoRepository.findOne({
    where: { id: estadoId },
  });

  if (!estado) {
    throw new Error('Estado no encontrado');
  }

  tarea.estado = estado;
  tarea.fecha_actualizacion = new Date();
  return await _tareaRepository.save(tarea);
};

const crearTarea = async (payload: CrearTareaDto): Promise<TareaEntity> => {
  // Desestructuramos el payload para extraer los valores del DTO.
  const { titulo, descripcion, id_proyecto, id_desarrollador, fecha_limite, id_estado } = payload;

  // Buscamos las entidades correspondientes a los IDs proporcionados.
  const proyecto = await _proyectoRepository.findOneBy({ id: id_proyecto });
  const estado = await _estadoRepository.findOneBy({ id: id_estado });
  const desarrollador = await _desarrolladorRepository.findOneBy({ id: id_desarrollador });

  // Verificamos si las entidades existen, en caso contrario lanzamos un error.
  if (!proyecto || !estado || !desarrollador) {
    throw new Error('Proyecto, Estado o Desarrollador no encontrado');
  }

  // Creamos una nueva entidad Tarea y asignamos los valores correspondientes.
  const tarea = new TareaEntity();
  tarea.titulo = titulo;            
  tarea.descripcion = descripcion;   
  tarea.fecha_limite = fecha_limite; 
  tarea.proyecto = proyecto;        
  tarea.estado = estado;             
  tarea.desarrollador = desarrollador; 
  tarea.fecha_creacion = new Date(); 
  tarea.fecha_actualizacion = new Date(); 

  return await _tareaRepository.save(tarea);
};

const editarTarea = async (id: number, payload: any): Promise<TareaEntity> => {
  const tarea = await _tareaRepository.findOne({
    where: { id },
    relations: ['proyecto', 'estado', 'desarrollador'],
  });

  if (!tarea) {
    throw new Error('Tarea no encontrada');
  }

  // Actualizar los campos de la tarea
  tarea.titulo = payload.nombre || tarea.titulo;
  tarea.descripcion = payload.descripcion || tarea.descripcion;
  tarea.fecha_limite = payload.fechaLimite || tarea.fecha_limite;
  // Cambiar estado, desarrollador y proyecto si es necesario
  if (payload.estadoId) {
    const estado = await _estadoRepository.findOneBy({ id: payload.estadoId });
    if (estado) tarea.estado = estado;
  }
  if (payload.desarrolladorId) {
    const desarrollador = await _desarrolladorRepository.findOneBy({ id: payload.desarrolladorId });
    if (desarrollador) tarea.desarrollador = desarrollador;
  }
  if (payload.proyectoId) {
    const proyecto = await _proyectoRepository.findOneBy({ id: payload.proyectoId });
    if (proyecto) tarea.proyecto = proyecto;
  }
  tarea.fecha_actualizacion = new Date();
  return await _tareaRepository.save(tarea);
};

const eliminarTarea = async (id: number): Promise<void> => {
  const tarea = await _tareaRepository.findOneBy({ id });
  if (!tarea) {
    throw new Error('Tarea no encontrada');
  }
  // Eliminar la tarea
  await _tareaRepository.remove(tarea);
};

const actualizarFechaLimite = async (tareaId: number, nuevaFechaLimite: Date): Promise<TareaEntity> => {
  const tarea = await _tareaRepository.findOne({
    where: { id: tareaId },
  });

  if (!tarea) {
    throw new Error('Tarea no encontrada');
  }

  // Actualizar la fecha límite
  tarea.fecha_limite = nuevaFechaLimite;
  tarea.fecha_actualizacion = new Date();

  return await _tareaRepository.save(tarea);
};

export const TareaRepository = {
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
