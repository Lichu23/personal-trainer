import { useAlumno } from "@/app/context/AlumnoContext";
import { Card, CardContent } from "@/components/ui/card";

export const MemberInfoSections = () => {
    const {alumnoSeleccionado} = useAlumno()
  return (
    <CardContent>
      <div className="flex gap-2 w-full">
        <Card className="p-4 items-center">
          <h2>Edad</h2>
          <p>{alumnoSeleccionado?.edad}</p>
        </Card>

        <Card className="p-4 items-center">
          <h2>Peso (kg)</h2>
          <p>{alumnoSeleccionado?.peso}</p>
        </Card>

        <Card className="p-4 items-center">
          <h2>Altura (cm)</h2>
          <p>{alumnoSeleccionado?.altura}</p>
        </Card>
      </div>
    </CardContent>
  );
};
