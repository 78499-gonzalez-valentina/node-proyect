import { Estado } from "../model/Estado"
import { Column, Entity, PrimaryColumn,OneToMany } from "typeorm"
import { TareaEntity } from "./TareaEntity";

@Entity({ name: 'estados' })
export class EstadoEntity implements Estado {

  @PrimaryColumn()
  id: number;

  @Column("text")
  nombre: string;

  @OneToMany(() => TareaEntity, (tarea) => tarea.estado)
  tareas: TareaEntity[];

}
