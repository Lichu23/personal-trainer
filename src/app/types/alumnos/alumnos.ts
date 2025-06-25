export interface Alumno {
  id: number;
  created_at: string;
  user_id: string;
  nombre: string;
  edad: number;
  peso: number;
  altura: number;
  telefono: string;
  email: string;
  direccion: string;
  objetivo_principal: string;
  descripcion: string;
  fecha_inicio: string; // o Date si lo parseas
  estado: string;
}

export interface ActionResult {
  success?: boolean;
  error?: string;
  data?: Alumno;
}

export interface Rutina {
  id: number;
  created_at: string;
  alumno_id: number; // Foreign key a Alumno.id
  nombre: string;
  tipo: string;
  duracion_min: number;
  fecha_inicio: string; // o Date
  fecha_fin: string; // o Date
}   

export interface EjercicioRutina {
  id: number;
  created_at: string;
  nombre: string; // Nombre del ejercicio
  semana: number;
  repeticiones: string; // "3x10", "4x8-12"
  carga: string; // "80kg", "RM"
  rir: string; // RIR (Reps in Reserve)
  rutina_id: number; // Foreign key a Rutina.id
}

export interface Objetivo {
  id: number;
  alumno_id: number; // Foreign key a Alumno.id
  tipo: string; // "pérdida de peso", "ganancia muscular"
  completado: string; // "si", "no"
  descripcion: string;
  fecha_creacion: string; // o Date
  fecha_complecion: string; // o Date
  created_at: string;
}

export interface PlanNutricional {
  id: number;
  created_at: string;
  alumno_id: number; // Foreign key a Alumno.id
  calorias: number;
  proteinas: number;
  carbohidratos: number;
  grasas: number;
  descripcion: string;
}

export interface VolumenSemanal {
  id: number;
  created_at: string;
  alumno_id: number; // Foreign key a Alumno.id
  rutina_id: number; // Foreign key a Rutina.id
  semana: number;
  volumen: number; // o string, dependiendo del tipo de `numeric`
}