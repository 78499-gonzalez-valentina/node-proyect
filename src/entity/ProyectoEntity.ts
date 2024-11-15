import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import {DesarrolladorEntity} from './DesarrolladorEntity';
import {EstadoEntity} from './EstadoEntity';
import { TareaEntity } from './TareaEntity';
import { Proyecto } from '../model/Proyecto';
import { DesarrolladorXProyectoEntity } from './DesarrolladorXProyectoEntity';


@Entity({name:'proyectos'})
export class ProyectoEntity implements Proyecto{

@PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  descripcion: string;

  @Column("text")
  nombre: string; 

  @Column()
  fecha_inicio: Date;

  @Column()
  fecha_fin: Date;

   @ManyToOne(() => DesarrolladorEntity, (desarrollador) => desarrollador.proyectos)
@JoinColumn({ name: 'id_responsable' })
responsable: DesarrolladorEntity;

@OneToMany(() => DesarrolladorXProyectoEntity, (desarrolladorXProyecto) => desarrolladorXProyecto.proyecto)
desarrolladores: DesarrolladorXProyectoEntity[];

   @Column()
  fecha_creacion: Date;

  @Column()
  fecha_actualizacion: Date;


  @OneToMany(() => TareaEntity, (tarea) => tarea.proyecto)
  tareas: TareaEntity[];


 
}