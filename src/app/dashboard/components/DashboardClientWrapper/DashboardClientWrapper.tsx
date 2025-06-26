"use client";

import CreateNewMemberForm from "@/app/(home)/components/CreateNewMemberForm/CreateNewMemberForm";
import { Alumno } from "@/app/types/alumnos/alumnos";
import DialogForm from "@/components/DialogForm/DialogForm";
import MemberListCard from "../MemberList/MemberListCard";
import AlumnosDetails from "../AlumnosDetails/AlumnosDetails";
import { AlumnoProvider } from "@/app/context/AlumnoContext";

interface Props {
  initialAlumnos: Alumno[];
}

export default function DashboardClientWrapper({
  initialAlumnos,
}: Props) {

  return (
    <AlumnoProvider initialAlumnos={initialAlumnos}>
      <div className="w-full h-full pl-10 pr-10">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Bienvenido a tu Dashboard</h1>
              <h2 className="text-2xl font-semibold text-gray-600">
                Gestión de alumnos, rutinas y planes nutricionales
              </h2>
            </div>
            <DialogForm title="Crear nuevo alumno" label="+ Crear Alumno">
              <CreateNewMemberForm />
            </DialogForm>
          </div>

          <div>
            <MemberListCard alumnos={initialAlumnos} />
            <AlumnosDetails />
          </div>
        </div>
      </div>
    </AlumnoProvider>
  );
}
