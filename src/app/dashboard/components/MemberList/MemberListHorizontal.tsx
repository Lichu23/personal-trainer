import { useAlumno } from "@/app/context/AlumnoContext";
import { Alumno } from "@/app/types/alumnos/alumnos";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { calculateIMC } from "@/utils/imc";
import { CalendarDays, TrendingUp } from "lucide-react";
interface Props {
  alumnos: Alumno[];
}

export function MemberListHorizontal({ alumnos }: Props) {
  const { alumnoSeleccionado, setAlumnoSeleccionado } = useAlumno();
  
  return (
    <div className="flex gap-4 overflow-x-auto p-3">
      {alumnos.map((alumno) => (
        <div
          key={alumno.id}
          className={`min-w-[260px] max-w-xs bg-white rounded-lg shadow border p-4 flex-shrink-0 cursor-pointer transition-colors ${
            alumnoSeleccionado?.id === alumno.id
              ? "ring-2 ring-black"
              : "hover:bg-gray-50"
          }`}
          onClick={() => setAlumnoSeleccionado(alumno)}
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                {alumno.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{alumno.nombre}</h3>
              <p className="text-sm text-gray-600">
                {alumno.objetivo_principal}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <Badge>IMC: {calculateIMC(alumno)}</Badge>
                <Badge
                  variant={alumno.estado === "activo" ? "default" : "secondary"}
                >
                  {alumno.estado}
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {/* {alumno.rutinas} rutinas */}
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              {/* {alumno.dias} días */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
