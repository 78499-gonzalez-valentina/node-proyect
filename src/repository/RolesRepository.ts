import { dataSource } from "../db";
import { RolEntity } from "../entity/RolEntity";


const _rolesRepository = dataSource.getRepository(RolEntity);

const obtenerRoles = async (): Promise<RolEntity[]> => {
    return await _rolesRepository.find();
};

const obtenerRolPorId = async (rolId: number): Promise<RolEntity | null> => {
  return await _rolesRepository.findOne({ where: { id: rolId } });
};

const insertarNuevoRol = async (nombre: string): Promise<RolEntity> => {
    const rol = _rolesRepository.create({ nombre });
    return await _rolesRepository.save(rol);
};

const modificarRol = async (rolId: number, nuevoNombre: string): Promise<RolEntity | null> => {
  const rolAModificar = await _rolesRepository.findOneBy({ id: rolId });

  if (!rolAModificar) {
    return null;
  }
  rolAModificar.nombre = nuevoNombre;
  return await _rolesRepository.save(rolAModificar);
};

const eliminarRol = async (rolId: number): Promise<boolean> => {
  // Buscar el rol por ID
  const rolAEliminar = await _rolesRepository.findOneBy({ id: rolId });

  if (!rolAEliminar) {
    return false;
  }
  
  await _rolesRepository.remove(rolAEliminar);
  return true; 
};


export const RolRepository = {
  obtenerRoles,
  obtenerRolPorId,
  insertarNuevoRol,
  modificarRol,
  eliminarRol
}