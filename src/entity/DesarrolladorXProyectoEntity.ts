// DesarrolladorXProyectoEntity (tabla intermedia)
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { DesarrolladorEntity } from './DesarrolladorEntity';
import { ProyectoEntity } from './ProyectoEntity';

@Entity({ name: 'desarrollador_x_proyecto' })
export class DesarrolladorXProyectoEntity {

  @PrimaryColumn({name: 'id_desarrollador'})
  desarrolladorId: number;

  @PrimaryColumn({name: 'id_proyecto'})
  proyectoId: number;

  @ManyToOne(() => DesarrolladorEntity, (desarrollador) => desarrollador.proyectos)
  @JoinColumn({ name: 'id_desarrollador' })
  desarrollador: DesarrolladorEntity;

  @ManyToOne(() => ProyectoEntity, (proyecto) => proyecto.desarrolladores)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: ProyectoEntity;

}