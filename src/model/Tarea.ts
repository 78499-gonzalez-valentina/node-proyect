import { ProyectoEntity } from "../entity/ProyectoEntity";
import { DesarrolladorEntity } from "../entity/DesarrolladorEntity";
import { EstadoEntity } from "../entity/EstadoEntity";

export interface Tarea {
  id: number;
  proyecto: ProyectoEntity;
  desarrollador: DesarrolladorEntity;
  titulo: string;
  descripcion: string;
  estado: EstadoEntity;
  fecha_limite: Date;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
}