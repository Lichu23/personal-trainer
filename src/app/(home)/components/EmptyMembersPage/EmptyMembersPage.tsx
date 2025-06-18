"use client"
import { useUser } from "@clerk/nextjs";
import DialogForm from "../../../../components/DialogForm/DialogForm";

export default function EmptyMembersPage() {
  const { user} = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-4xl font-bold">Bienvenido {user?.fullName} 👋</h1>
      <h2 className="text-2xl font-semibold text-center">
        Aún no tienes ningún alumno creado 
      </h2>
      <DialogForm />
    </div>
  );
}
