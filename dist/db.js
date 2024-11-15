"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const DesarrolladorEntity_1 = require("./entity/DesarrolladorEntity");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'strikingly-cool-mullet.data-1.use1.tembo.io',
    port: 5432,
    username: 'postgres',
    password: 'tnxstXwXzubch6tZ',
    database: 'postgres',
    entities: [DesarrolladorEntity_1.DesarrolladorEntity],
    synchronize: true, // Automatically synchronize the database schema with entities
    ssl: {
        rejectUnauthorized: false, // To allow SSL connections to the database
    }
});
