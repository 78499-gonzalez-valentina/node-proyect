import app from "./app";
import {dataSource} from "./db";
import { DesarrolladorEntity } from "./entity/DesarrolladorEntity";
import { EstadoEntity } from "./entity/EstadoEntity";
import { ProyectoEntity } from "./entity/ProyectoEntity";
import { RolEntity } from "./entity/RolEntity";
import { TareaEntity } from "./entity/TareaEntity";

async function main() {
    try {
         await dataSource.initialize()
         const desarrolladores = await dataSource.getRepository(RolEntity).find()
         console.log(desarrolladores)
        app.listen(9000, () => {
            console.log('Server running on port 9000')
        })
    } catch (e) {
        console.log(e)
    }
}

main()
