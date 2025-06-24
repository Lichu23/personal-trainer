import { Alumno } from "@/app/types/alumnos/alumnos";

export const calculateIMC = (alumno: Alumno) => {
  return Math.floor(alumno.peso / Math.pow(alumno.altura / 100, 2));
};

