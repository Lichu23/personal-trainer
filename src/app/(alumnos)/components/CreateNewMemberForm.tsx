"use client";
import { useState } from "react";
import { addMemberAction } from "../actions";
import { useRouter } from "next/navigation";

export default function CreateNewMemberForm() {
  const [msg, setMsg] = useState("");
  const [principalGoal, setPrincipalGoal] = useState("weight_loss")
  const router = useRouter()
  async function handleAction(formData: FormData) {
    setMsg("Enviando...");
    const result = await addMemberAction(formData);
    if (result?.error) setMsg("Error: " + result.error);
    else {
      setMsg("¡Usuario creado en Supabase!");
      setTimeout(() => {
        router.refresh()
      }, 1000);
    }
  }

  return (
    <form action={handleAction} className="flex flex-col gap-2 max-w-xs">
      <input
        name="full_name"
        placeholder="Nombre Completo"
        className="border p-2 rounded"
        required
      />
      <input
        name="address"
        placeholder="Direccion ej:calle 13"
        className="border p-2 rounded"
        required
      />
      <input
        name="email"
        placeholder="email"
        className="border p-2 rounded"
        required
      />
      <input
        name="phone"
        placeholder="Telefono"
        className="border p-2 rounded"
        required
      />
      <input
        name="age"
        placeholder="Edad"
        className="border p-2 rounded"
        required
      />
      <input
        name="weight"
        placeholder="Peso ej:70kg"
        className="border p-2 rounded"
        required
      />
      <input
        name="height"
        placeholder="Altura ej:170cm"
        className="border p-2 rounded"
        required
      />
      <select required value={principalGoal} name="principal_goal" onChange={(e) => setPrincipalGoal(e.target.value)}>
        <option value="weight_loss">Perdida De Peso</option>
        <option value="muscle_gains">Ganancia Muscular</option>
        <option value="maintenance">Mantenimiento</option>
        <option value="toning">Tonificacion</option>
        <option value="resistance"></option>
        <option value="strenght">Fuerza</option>
        <option value="rehabilitation">Rehabilitacion</option>
      </select>

      <input
        type="text"
        name="description"
        required
        placeholder="Describe la situacion actual del alumno, experiencia previa, diponivilidad, preferencias,etc"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Crear usuario
      </button>
      <div>{msg}</div>
    </form>
  );
}
