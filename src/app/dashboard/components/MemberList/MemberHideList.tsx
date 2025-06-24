import { Alumno } from "@/app/types/alumnos/alumnos";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";

interface Props {
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno;
  onSelectAlumno: (alumno: Alumno) => void;
  onShowList: () => void;
}

export default function MemberHideList({
  alumnos,
  alumnoSeleccionado,
  onSelectAlumno,
}: Props) {
  return (
    <CardContent className="h-full flex flex-col shad">
      <div className="flex flex-row items-center gap-4 overflow-x-auto p-2 w-full">
        {alumnos.map((alumno) => (
          <Avatar
            key={alumno.id}
            className={`
              flex-shrink-0 
              w-12 h-12
              cursor-pointer
              ${
                alumnoSeleccionado.id === alumno.id
                  ? "ring-2 ring-black"
                  : "hover:bg-gray-50"
              }
            `}
            onClick={() => onSelectAlumno(alumno)}
          > 
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
  );
}
