export interface Incidencia {
  id: number;
  titulo: string; // "Se ha roto la cafetera"
  descripcion: string;
  prioridad: 'Baja' | 'Alta';
  usuarioId: string; // Quién la creó
}
