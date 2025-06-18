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