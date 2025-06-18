import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CalendarDays } from "lucide-react";

export function MemberListHorizontal() {
  // Ejemplo de alumnos
  const alumnos = [
    {
      id: 1,
      nombre: "Lisandro Arenas",
      objetivo: "Ganar músculo",
      imc: 23.5,
      imcCategoria: "text-green-600 border-green-600",
      estado: "activo",
      rutinas: 3,
      dias: 120,
    },
    // ...más alumnos
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {alumnos.map((alumno) => (
        <div
          key={alumno.id}
          className="min-w-[260px] max-w-xs bg-white rounded-lg shadow border p-4 flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>
                {alumno.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{alumno.nombre}</h3>
              <p className="text-sm text-gray-600">{alumno.objetivo}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className={alumno.imcCategoria}>
                  IMC: {alumno.imc}
                </Badge>
                <Badge variant={alumno.estado === "activo" ? "default" : "secondary"}>
                  {alumno.estado}
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {alumno.rutinas} rutinas
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {alumno.dias} días
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}