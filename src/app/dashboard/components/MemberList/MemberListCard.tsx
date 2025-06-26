"use client";
import { Alumno } from "@/app/types/alumnos/alumnos";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import MemberHideList from "./MemberHideList";
import { MemberListHorizontal } from "./MemberListHorizontal";
import { useRouter } from "next/navigation";

interface Props {
  alumnos: Alumno[];
}
export default function MemberListCard({ alumnos }: Props) {
  const [showAlumnosList, setShowAlumnosList] = useState(true);
  const handleShowList = () => setShowAlumnosList(true);
  const handleHideList = () => setShowAlumnosList(false);
  const router = useRouter();
  return (
    <div className="w-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />

              <p>Lista de Alumnos</p>
            </div>
            <Button onClick={() => router.refresh()}>Refresh Table</Button>

            {showAlumnosList ? (
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleHideList}
              >
                <ChevronLeft className="h-4 w-4" />
                Ocultar
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleShowList}
              >
                <ChevronRight className="h-4 w-4" />
                Mostrar
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        {showAlumnosList ? (
          <MemberListHorizontal alumnos={alumnos} />
        ) : (
          <MemberHideList alumnos={alumnos} />
        )}
      </Card>
    </div>
  );
}
