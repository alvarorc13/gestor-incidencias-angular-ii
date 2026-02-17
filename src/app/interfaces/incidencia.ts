export interface NewIncidence {
  title: string;
  description: string;
  priority: 'Baja' | 'Media' | 'Alta';
}

export interface Incidence {
  title: string;
  description: string;
  priority: 'Baja' | 'Media' | 'Alta';
  status: 'Pendiente' | 'En Proceso' | 'Resuelta';
  userId: string | null;
  userName: string;
  date: Date;
}
