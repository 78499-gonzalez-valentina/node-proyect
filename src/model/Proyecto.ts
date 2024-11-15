import { DesarrolladorEntity } from "../entity/DesarrolladorEntity";
import { TareaEntity } from "../entity/TareaEntity";
// proyecto.interface.ts
export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  responsable: DesarrolladorEntity;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
  tareas: TareaEntity[];
}