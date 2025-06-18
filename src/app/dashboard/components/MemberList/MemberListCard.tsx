"use client";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { MemberListHorizontal } from "./MemberListHorizontal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Simulación de alumnos
const alumnos = [
  { id: 1, nombre: "Lisandro Arenas" },
  { id: 2, nombre: "Juan Perez" },
  { id: 3, nombre: "Maria Gomez" },
];

export default function MemberListCard() {
  const [showAlumnosList, setShowAlumnosList] = useState(true);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(alumnos[0]);

  return (
    <div className={showAlumnosList ? "lg:col-span-1" : "w-16"}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle
            className={`flex items-center ${
              showAlumnosList ? "justify-between" : "justify-center"
            }`}
          >
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {showAlumnosList && "Lista de Alumnos"}
            </div>
            {showAlumnosList && (
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setShowAlumnosList(false)}
              >
                <ChevronLeft className="h-4 w-4" />
                Ocultar
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        {showAlumnosList ? (
          <CardContent className="p-0">
            <MemberListHorizontal />
          </CardContent>
        ) : (
          <CardContent className="p-2 h-full">
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-full p-2 mt-2"
                onClick={() => setShowAlumnosList(true)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              {alumnos.map((alumno) => (
                <Avatar
                  key={alumno.id}
                  className={`w-10 h-10 cursor-pointer ${
                    alumnoSeleccionado.id === alumno.id
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => setAlumnoSeleccionado(alumno)}
                >
                  <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                  <AvatarFallback className="text-xs">
                    {alumno.nombre
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
