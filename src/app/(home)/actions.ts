"use server";
import { auth } from "@clerk/nextjs/server";
import { createServerSupabaseClient } from "@/utils/supabase/serverRouteHandler";
import { ActionResult, Alumno } from "../types/alumnos/alumnos";

export async function addMemberAction(formData: FormData): Promise<ActionResult> {
  const fullName = formData.get("full_name") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const weight = formData.get("weight") as string;
  const height = formData.get("height") as string;
  const principalGoals = formData.get("principal_goal") as string;
  const description = formData.get("description") as string;
  const age = formData.get("age") as string;
  const startDate = new Date()
  const status = "activo"

  const { userId } = await auth();
  if (!userId || !fullName || !age || !weight || !height || !phone || !email || !address || !principalGoals || !description) {
  return { error: "Missing data to submit the form correctly or userId doesn't exist" };
}

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase
    .from("alumnos")
    .insert([{user_id: userId, nombre:fullName,edad:age, peso:weight, altura:height,telefono:phone,email:email, direccion:address, objetivo_principal:principalGoals,descripcion:description,fecha_inicio:startDate , estado:status}]);
  if (error) return { error: error.message };
  return { success: true };
}



export async function getMembers():Promise<Alumno[]> {
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