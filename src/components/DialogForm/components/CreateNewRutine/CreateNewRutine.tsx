"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { ExerciseForm } from "../AddNewExercise/ExerciseForm";

export default function CreateNewRutineForm() {
  const [msg, setMsg] = useState("");

  const [exercises, setExercises] = useState<number[]>([]); // Estado para controlar los formularios de ejercicio

  const addExerciseForm = () => {
    setExercises((prevExercises) => [...prevExercises, prevExercises.length]);
  };

  async function handleAction(formData: FormData) {}

  return (
    <form action={handleAction} className="flex flex-col gap-5">
      <div className="flex  gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="rutine_name">Nombre De La Rutina</Label>
          <Input
            id="rutine_name"
            name="rutine_name"
            placeholder="Dia de pecho/Chest Day"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="type_of_rutine">Objetivo Principal</Label>
          <Select name="type_of_rutine" required>
            <SelectTrigger id="type_of_rutine">
              <SelectValue placeholder="Tipo de rutina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strength">Fuerza</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="hypertrophy">Hipertrofia</SelectItem>
              <SelectItem value="functional">Funcional</SelectItem>
              <SelectItem value="mix">Mixta</SelectItem>
              <SelectItem value="rehabilitation">Rehabilitación</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="Duration">Duracion</Label>
          <Input
            id="Duration"
            name="Duration"
            placeholder="Duracion ej: 60 min (solo el numero)"
            className="border p-2 rounded"
            required
          />
        </div>
      </div>

      <div className="flex flex-col  overflow-y-auto max-h-[400px] ">
        <div className="flex items-center justify-between p-2">
          <h2>Ejercicios</h2>
          <Button
            onClick={addExerciseForm}
            className="bg-black text-white hover:cursor-pointer px-4 py-2 p-5 text-md rounded"
          >
            + Agregar Ejercicio
          </Button>
        </div>
        {exercises.map((_, index) => (
          <ExerciseForm key={index} index={index} />
        ))}
      </div>

      <Button
        type="submit"
        className="bg-black text-white hover:cursor-pointer px-4 py-2 p-5 text-md rounded"
      >
        Crear Rutina
      </Button>
    </form>
  );
}
