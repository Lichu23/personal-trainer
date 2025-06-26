"use server";
import { auth } from "@clerk/nextjs/server";
import { createServerSupabaseClient } from "@/utils/supabase/serverRouteHandler";
import { ActionResult, Alumno } from "../types/alumnos/alumnos";
import { revalidatePath } from "next/cache";

export async function addMemberAction(
  formData: FormData
): Promise<ActionResult<Alumno>> {
  const fullName = formData.get("full_name") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const weight = formData.get("weight") as string;
  const height = formData.get("height") as string;
  const principalGoals = formData.get("principal_goal") as string;
  const description = formData.get("description") as string;
  const age = formData.get("age") as string;
  const startDate = new Date();
  const status = "activo";

  const { userId } = await auth();
  if (
    !userId ||
    !fullName ||
    !age ||
    !weight ||
    !height ||
    !phone ||
    !email ||
    !address ||
    !principalGoals ||
    !description
  ) {
    return {
      error:
        "Missing data to submit the form correctly or userId doesn't exist",
    };
  }

  const supabase = await createServerSupabaseClient();

  try {
    const { data, error } = await supabase.from("alumnos").insert([
      {
        user_id: userId,
        nombre: fullName,
        edad: age,
        peso: weight,
        altura: height,
        telefono: phone,
        email: email,
        direccion: address,
        objetivo_principal: principalGoals,
        descripcion: description,
        fecha_inicio: startDate,
        estado: status,
      },
    ]);

    if (error) {
      // Supabase devuelve un objeto `error` en caso de fallo de la operación DB.
      console.error("Error inserting new member:", error);
      return { error: error.message };
    }

    if (!data) {
      // Si la inserción fue exitosa pero no se devolvieron datos (ej. si no usas .select())
      // Aunque con .select().single() esto no debería ocurrir en inserciones exitosas.
      return { error: "No data returned after successful insertion." };
    }
    revalidatePath("/dashboard");
    return { success: true };
  } catch (err) {
    console.error("An unexpected error occurred in addMemberAction:", err);
    return {
      error: "An unexpected server error occurred. Please try again.",
    };
  }
}

export async function getMembers(): Promise<Alumno[]> {
  const { userId } = await auth();
  if (!userId) return [];
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("alumnos")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching members:", error);
    return [];
  }
  return data || [];
}
