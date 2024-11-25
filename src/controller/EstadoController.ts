import { Request, Response } from "express";
import { EstadoService } from "../service/EstadoService";

export const EstadoController = {
  obtenerEstados: async (req: Request, res: Response) => {
    try {
      const estados = await EstadoService.obtenerEstados();
      res.status(200).json(estados);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener estados", error });
    }
  },

  obtenerEstadoPorId: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const estado = await EstadoService.obtenerEstadoPorId(id);
      if (!estado) {
        return res.status(404).json({ message: "Estado no encontrado" });
      }
      res.status(200).json(estado);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el estado", error });
    }
  },

  insertarNuevoEstado: async (req: Request, res: Response) => {
    try {
      const { nombre } = req.body;
      if (!nombre) {
        return res.status(400).json({ message: "El campo 'nombre' es obligatorio" });
      }
      const nuevoEstado = await EstadoService.insertarNuevoEstado(nombre);
      res.status(201).json(nuevoEstado);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el estado", error });
    }
  },

  eliminarEstado: async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const eliminado = await EstadoService.eliminarEstado(id);
      if (!eliminado) {
        return res.status(404).json({ message: "Estado no encontrado" });
      }
      res.status(200).json({ message: "Estado eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el estado", error });
    }
  },
};
