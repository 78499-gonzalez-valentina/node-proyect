import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { DesarrolladorEntity } from "./DesarrolladorEntity";
import { TareaEntity } from "./TareaEntity";

@Entity({ name: "proyectos" })
export class ProyectoEntity {
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

  @Column({ type: "timestamp" })
  fecha_creacion: Date;

  @Column({ type: "timestamp" })
  fecha_actualizacion: Date;

  // Relación con el responsable del proyecto (Muchos a Uno)
  @ManyToOne(() => DesarrolladorEntity, (desarrollador) => desarrollador.proyectosResponsable)
  @JoinColumn({ name: "id_responsable" }) // Columna en la tabla de "proyectos"
  responsable: DesarrolladorEntity;

  // Relación con las tareas del proyecto (Uno a Muchos)
  @OneToMany(() => TareaEntity, (tarea) => tarea.proyecto)
  tareas: TareaEntity[];

  // Relación Muchos a Muchos con los desarrolladores
  @ManyToMany(() => DesarrolladorEntity, (desarrollador) => desarrollador.proyectos)
  @JoinTable({
    name: "desarrollador_x_proyecto", // Nombre de la tabla intermedia
    joinColumn: {
      name: "id_proyecto", // Columna en la tabla intermedia que hace referencia a `ProyectoEntity`
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "id_desarrollador", // Columna en la tabla intermedia que hace referencia a `DesarrolladorEntity`
      referencedColumnName: "id",
    },
  })
  desarrolladores: DesarrolladorEntity[];
}
