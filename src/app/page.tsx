import { getMembers } from "./(alumnos)/actions";
import Dashboard from "./dashboard/page";
import CreateNewMemberForm from "./(alumnos)/components/CreateNewMemberForm";

export default async function Home() {
  const alumnos = await getMembers();

  if (alumnos.length === 0) {
    return <CreateNewMemberForm />;
  } else {
    return <Dashboard />;
  }
}
