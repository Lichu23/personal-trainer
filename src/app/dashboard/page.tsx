// import { getMembers } from "../(home)/actions";
import DialogForm from "../../components/DialogForm/DialogForm";
import MemberListCard from "./components/MemberList/MemberListCard";

export default async function DashboardPage() {
  // const alumno = await getMembers();

  return (
    <div className="w-full h-full pl-10 pr-10">

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Bienvenido a tu Dashboard</h1>
            <h2 className="text-2xl font-semibold text-gray-600">
              Gestión de alumnos, rutinas y planes nutricionales
            </h2>
          </div>
          <DialogForm />
        </div>

        <div>
          <MemberListCard/>
        </div>
      </div>
    </div>
  );
}
