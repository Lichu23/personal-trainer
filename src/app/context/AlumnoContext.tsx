"use client"; 
import { createContext, useContext, useState, ReactNode } from "react";
import { Alumno } from "../types/alumnos/alumnos";

interface AlumnoContextType {
  alumnoSeleccionado: Alumno | null;
  setAlumnoSeleccionado: (alumno: Alumno | null) => void;
}

const AlumnoContext = createContext<AlumnoContextType | undefined>(undefined);

interface AlumnoProviderProps {
  children: ReactNode;
  initialAlumnos: Alumno[]; // Para inicializar el alumno seleccionado
}

export function AlumnoProvider({ children, initialAlumnos }: AlumnoProviderProps) {
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState<Alumno | null>(
    initialAlumnos.length > 0 ? initialAlumnos[0] : null
  );

  return (
    <AlumnoContext.Provider value={{ alumnoSeleccionado, setAlumnoSeleccionado }}>
      {children}
    </AlumnoContext.Provider>
  );
}

export function useAlumno() {
  const context = useContext(AlumnoContext);
  if (context === undefined) {
    throw new Error("useAlumno must be used within an AlumnoProvider");
  }
  return context;
}