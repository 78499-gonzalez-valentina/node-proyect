import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Desarrollador} from "../model/Desarrollador";
import {  RolEntity } from "./RolEntity";
import { TareaEntity } from "./TareaEntity";
import { ProyectoEntity } from "./ProyectoEntity";
import { DesarrolladorXProyectoEntity } from './DesarrolladorXProyectoEntity';

@Entity({name: "desarrolladores"})
export class DesarrolladorEntity implements Desarrollador{
  //@PrimaryColumn este no te genera el numero incremental 
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  nombre: string; 

  @Column("text")
  correo:string;

  @ManyToOne(() => RolEntity, (rol) => rol.desarrollador)
  @JoinColumn({name:"id_rol"})
  rol: RolEntity;

  @Column({name: "fecha_contratacion"})
  fechaContratacion: Date;

  @Column({name: "fecha_creacion"})
  fechaCreacion: Date;

  @Column({name: "fecha_actualizacion"})
  fechaActualizacion: Date;

  @OneToMany(() => TareaEntity, (tarea) => tarea.desarrollador)
  tareas: TareaEntity[];

  @OneToMany(() => DesarrolladorXProyectoEntity, (desarrolladorXProyecto) => desarrolladorXProyecto.desarrollador)
  proyectos: DesarrolladorXProyectoEntity[];

}