import React from "react";
import { getMembers } from "../(alumnos)/actions";

export default async function Dashboard() {
  const alumnos = await getMembers();
  return (
    <div>
      {alumnos.map((alumno) => (
        <ul key={alumno.id}>
          <p>{alumno.nombre}</p>
        </ul>
      ))}
    </div>
  );
}
