import { Column, PrimaryGeneratedColumn, Entity, OneToMany} from "typeorm";
import {Rol} from "../model/Rol"
import { DesarrolladorEntity } from "./DesarrolladorEntity";


@Entity({name:"roles"})
export class RolEntity implements Rol{
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  nombre: string;

  @OneToMany(() => DesarrolladorEntity, (desarrollador) => desarrollador.rol)
  desarrollador: DesarrolladorEntity[];
}