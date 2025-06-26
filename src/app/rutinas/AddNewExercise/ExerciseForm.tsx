import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ExerciseForm({ index }: { index: number }) {
  return (
    <div className="border p-4 rounded-md shadow-sm mb-4">
      <h3 className="text-lg font-semibold mb-3">Ejercicio {index + 1}</h3>
      <div className="flex flex-col gap-2 mb-4">
        <Label htmlFor={`exercise_name_${index}`}>Nombre del ejercicio</Label>
        <Input
          id={`exercise_name_${index}`}
          name={`exercise_name_${index}`}
          placeholder="Nombre del ejercicio"
          className="border p-2 rounded"
          required
        />
      </div>

      <Label>RIR (Reps in Reserve)</Label>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-center">
        <div className="flex flex-col gap-2">
          <Input
            name={`rir_sem1_${index}`}
            placeholder="ej: 2-3"
            className="border p-2 rounded"
          />
          <Label className="text-sm text-gray-500">Semana 1</Label>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name={`rir_sem2_${index}`}
            placeholder="ej: 2-3"
            className="border p-2 rounded"
          />
          <Label className="text-sm text-gray-500">Semana 2</Label>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name={`rir_sem3_${index}`}
            placeholder="ej: 2-3"
            className="border p-2 rounded"
          />
          <Label className="text-sm text-gray-500">Semana 3</Label>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name={`rir_sem4_${index}`}
            placeholder="ej: 2-3"
            className="border p-2 rounded"
          />
          <Label className="text-sm text-gray-500">Semana 4</Label>
        </div>
      </div>

      <Label>Peso (kg)</Label>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <Input
            name={`weight_sem1_${index}`}
            placeholder="kg"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 1</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`weight_sem2_${index}`}
            placeholder="kg"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 2</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`weight_sem3_${index}`}
            placeholder="kg"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 3</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`weight_sem4_${index}`}
            placeholder="kg"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 4</Label>
        </div>
      </div>

      <Label>Series</Label>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <Input
            name={`series_sem1_${index}`}
            placeholder="series"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 1</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`series_sem2_${index}`}
            placeholder="series"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 2</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`series_sem3_${index}`}
            placeholder="series"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 3</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`series_sem4_${index}`}
            placeholder="series"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 4</Label>
        </div>
      </div>

      <Label>Repeticiones</Label>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <Input
            name={`reps_sem1_${index}`}
            placeholder="reps"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 1</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`reps_sem2_${index}`}
            placeholder="reps"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 2</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`reps_sem3_${index}`}
            placeholder="reps"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 3</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            name={`reps_sem4_${index}`}
            placeholder="reps"
            className="border p-2 rounded"
            type="number"
          />
          <Label className="text-sm text-gray-500">Semana 4</Label>
        </div>
      </div>
    </div>
  );
}
