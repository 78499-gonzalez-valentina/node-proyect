import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { RolEntity } from "./RolEntity";
import { TareaEntity } from "./TareaEntity";
import { ProyectoEntity } from "./ProyectoEntity";

@Entity({ name: "desarrolladores" })
export class DesarrolladorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  nombre: string;

  @Column("text")
  correo: string;

  @ManyToOne(() => RolEntity, (rol) => rol.desarrollador)
  @JoinColumn({ name: "id_rol" })
  rol: RolEntity;

  @Column({ name: "fecha_contratacion" })
  fechaContratacion: Date;

  @Column({ name: "fecha_creacion", type: "timestamp" })
  fechaCreacion: Date;

  @Column({ name: "fecha_actualizacion", type: "timestamp" })
  fechaActualizacion: Date;

  // Relación Uno a Muchos con las tareas asignadas
  @OneToMany(() => TareaEntity, (tarea) => tarea.desarrollador)
  tareas: TareaEntity[];

  // Relación Uno a Muchos con los proyectos donde es responsable
  @OneToMany(() => ProyectoEntity, (proyecto) => proyecto.responsable)
  proyectosResponsable: ProyectoEntity[];

  // Relación Muchos a Muchos con los proyectos donde participa
  @ManyToMany(() => ProyectoEntity, (proyecto) => proyecto.desarrolladores)
  proyectos: ProyectoEntity[];
}
