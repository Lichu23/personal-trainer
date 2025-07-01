import CreateNewMemberForm from "@/app/(home)/components/CreateNewMemberForm/CreateNewMemberForm";
import { useAlumno } from "@/app/context/AlumnoContext";
import CreateNewRutineForm from "@/app/rutinas/CreateNewRutine/CreateNewRutine";
import DialogForm from "@/components/DialogForm/DialogForm";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { InformationTabs } from "../InformationTabs/InformationTabs";

export default function AlumnosDetails() {
  const {alumnoSeleccionado} = useAlumno()
  
  return (
    <Card className="w-full h-full mt-5 border border-black p-4 rounded-xl">
      <CardHeader className="flex justify-between">
        <div className="flex">
          <Avatar />
          <div className="flex flex-col">
            <CardTitle>{alumnoSeleccionado?.nombre}</CardTitle>
            <p>{alumnoSeleccionado?.objetivo_principal}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <DialogForm title="Crear nueva rutina" label="+ Crear Rutina">
            <CreateNewRutineForm />
          </DialogForm>
           <DialogForm title="Crear nuevo alumno" label="+ Crear Plan Nutricional">
            <CreateNewMemberForm />
          </DialogForm>
           <DialogForm title="Crear nuevo alumno" label="+ Crear Objetivo/s">
            <CreateNewMemberForm />
          </DialogForm>
        </div>
      </CardHeader>

      <Card className="p-2">
       <InformationTabs/>
      </Card>
    </Card>
  );
}
