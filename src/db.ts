import { DataSource } from "typeorm";
import { DesarrolladorEntity } from "./entity/DesarrolladorEntity";
import { RolEntity } from "./entity/RolEntity";
import { DesarrolladorXProyectoEntity } from "./entity/DesarrolladorXProyectoEntity";
import { EstadoEntity } from "./entity/EstadoEntity";
import { ProyectoEntity } from "./entity/ProyectoEntity";
import { TareaEntity } from "./entity/TareaEntity";

export const dataSource = new DataSource({
  type:'postgres',
  host:'strikingly-cool-mullet.data-1.use1.tembo.io',
  port:5432,
  username: 'postgres',
  password: 'tnxstXwXzubch6tZ',
  database: 'postgres',
  entities: [DesarrolladorEntity, RolEntity, DesarrolladorXProyectoEntity, EstadoEntity, ProyectoEntity, TareaEntity],
  logging:true,
  ssl:{
    rejectUnauthorized: false, // To allow SSL connections to the database
  }
})
