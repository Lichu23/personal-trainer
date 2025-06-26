import { getMembers } from "../(home)/actions";
import DashboardClientWrapper from "./components/DashboardClientWrapper/DashboardClientWrapper";

export default async function DashboardPage() {
  const alumnos = await getMembers();
  
  return <DashboardClientWrapper initialAlumnos={alumnos} />;
}
