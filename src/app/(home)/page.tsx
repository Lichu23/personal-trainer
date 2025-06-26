import { getMembers } from "./actions";
import EmptyMembersPage from "./components/EmptyMembersPage/EmptyMembersPage";
import { redirect } from "next/navigation";

export default async function Home() {
  const alumnos = await getMembers();

  if (alumnos.length === 0) {
    return <EmptyMembersPage />;
  } else {
    return redirect('/dashboard')
  }
}
