import { DataSource } from "typeorm";
import { DesarrolladorEntity } from "./entity/DesarrolladorEntity";
import { RolEntity } from "./entity/RolEntity";
import { DesarrolladorXProyectoEntity } from "./entity/DesarrolladorXProyectoEntity";
import { EstadoEntity } from "./entity/EstadoEntity";
import { ProyectoEntity } from "./entity/ProyectoEntity";
import { TareaEntity } from "./entity/TareaEntity";

require('dotenv').config({ path: './.env' });

export const dataSource = new DataSource({
  type:'postgres',
  host: 'strikingly-cool-mullet.data-1.use1.tembo.io',
  port:5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'postgres',
  entities: [DesarrolladorEntity, RolEntity, DesarrolladorXProyectoEntity, EstadoEntity, ProyectoEntity, TareaEntity],
  logging:true,
  ssl:{
    rejectUnauthorized: false, // To allow SSL connections to the database
  }

  
})

console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_username:', process.env.DB_USERNAME);
