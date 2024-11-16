import {Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne, JoinColumn, OneToOne} from 'typeorm';
import {Tarea} from '../model/Tarea';
import {DesarrolladorEntity} from './DesarrolladorEntity';
import { EstadoEntity } from './EstadoEntity';
import { ProyectoEntity } from './ProyectoEntity';


@Entity({name:"tareas"})
export class TareaEntity implements Tarea{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProyectoEntity, (proyecto) => proyecto.tareas)
  @JoinColumn({ name: "id_proyecto" })
  proyecto: ProyectoEntity;

   @ManyToOne(() => DesarrolladorEntity, (desarrollador ) => desarrollador.tareas)
    @JoinColumn({ name: "id_asignado" })
    desarrollador: DesarrolladorEntity;

  @Column("text")
  titulo: string;

  @Column("text")
  descripcion: string;

  @ManyToOne(() => EstadoEntity, (estado) => estado.tareas)
  @JoinColumn({ name: "id_estado" })
  estado: EstadoEntity;

  @Column()
  fecha_limite: Date;

  @Column()
  fecha_creacion: Date;

  @Column()
  fecha_actualizacion: Date;

}