"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addMemberAction } from "@/app/(home)/actions";

export default function CreateNewMemberForm() {
  const [msg, setMsg] = useState("");
  const [principalGoal, setPrincipalGoal] = useState("weight-loss");
  const router = useRouter();

  async function handleAction(formData: FormData) {
    setMsg("Enviando...");
    const result = await addMemberAction(formData);
    if (result?.error) setMsg("Error: " + result.error);
    else {
      setMsg("¡Usuario creado correctamente!");
      router.refresh();
    }
  }

  return (
    <form action={handleAction} className="flex flex-col gap-4 w-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="full_name">Nombre Completo</Label>
          <Input
            id="full_name"
            name="full_name"
            placeholder="Nombre Completo"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="address">Dirección</Label>
          <Input
            id="address"
            name="address"
            placeholder="Dirección ej: calle 13"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Teléfono"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="age">Edad</Label>
          <Input
            id="age"
            name="age"
            placeholder="Edad"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="weight">Peso</Label>
          <Input
            id="weight"
            name="weight"
            placeholder="Peso ej: 70kg"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="height">Altura</Label>
          <Input
            id="height"
            name="height"
            placeholder="Altura ej: 170cm"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="principal_goal">Objetivo Principal</Label>
          <Select
            name="principal_goal"
            value={principalGoal}
            onValueChange={setPrincipalGoal}
            required
          >
            <SelectTrigger id="principal_goal">   
              <SelectValue placeholder="Selecciona un objetivo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weight-loss">Pérdida De Peso</SelectItem>
              <SelectItem value="muscle-gains">Ganancia Muscular</SelectItem>
              <SelectItem value="maintenance">Mantenimiento</SelectItem>
              <SelectItem value="toning">Tonificación</SelectItem>
              <SelectItem value="resistance">Resistencia</SelectItem>
              <SelectItem value="strenght">Fuerza</SelectItem>
              <SelectItem value="rehabilitation">Rehabilitación</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2 col-span-2">
        <Label htmlFor="description">Descripción</Label>
        <Textarea
          id="description"
          name="description"
          required
          placeholder="Describe la situación actual del alumno, experiencia previa, disponibilidad, preferencias, etc."
          className="border p-2 rounded"
        />
        <Button
          type="submit"
          className="bg-black text-white hover:cursor-pointer px-4 py-2 p-5 text-md rounded"
        >
          Crear usuario
        </Button>
        <div className="text-green-400 semi-bold text-center text-xl">{msg}</div>
      </div>
    </form>
  );
}
