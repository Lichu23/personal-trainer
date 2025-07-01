import { useAlumno } from "@/app/context/AlumnoContext";
import {Card,CardDescription,CardHeader,CardTitle} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {MemberInfoSections} from "../MemberInfoSections";

export const InformationTabs = () => {
  const { alumnoSeleccionado } = useAlumno();

  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="info">Informacion</TabsTrigger>
        <TabsTrigger value="rutines">Rutinas</TabsTrigger>
        <TabsTrigger value="nutritional-plan">Plan Nutricional</TabsTrigger>
        <TabsTrigger value="weekly-volume">Volumen Semanal</TabsTrigger>
      </TabsList>

      <TabsContent value="info">
        <Card>
          <CardHeader>
            <CardTitle>Informacion Personal</CardTitle>
            <CardDescription>
              Informacion personal sobre {alumnoSeleccionado?.nombre}
            </CardDescription>
          </CardHeader>

          <MemberInfoSections />
        </Card>
      </TabsContent>

      <TabsContent value="rutines">
        <Card>
          <CardHeader>
            <CardTitle>Rutinas</CardTitle>
            <CardDescription>
              Rutinas de {alumnoSeleccionado?.nombre}
            </CardDescription>
          </CardHeader>

          <MemberInfoSections />
        </Card>
      </TabsContent>

      <TabsContent value="nutritional-plan">
        <Card>
          <CardHeader>
            <CardTitle>Plan Nutricional</CardTitle>
            <CardDescription>
              Plan nutricional de {alumnoSeleccionado?.nombre}
            </CardDescription>
          </CardHeader>

          <MemberInfoSections />
        </Card>
      </TabsContent>

      <TabsContent value="goals">
        <Card>
          <CardHeader>
            <CardTitle>Plan Nutricional</CardTitle>
            <CardDescription>
              Plan nutricional de {alumnoSeleccionado?.nombre}
            </CardDescription>
          </CardHeader>

          <MemberInfoSections />
        </Card>
      </TabsContent>


      <TabsContent value="weekly-volume">
        <Card>
          <CardHeader>
            <CardTitle>Volumen Semanal</CardTitle>
            <CardDescription>
              Volumen semanal total de {alumnoSeleccionado?.nombre}
            </CardDescription>
          </CardHeader>

          <MemberInfoSections />
        </Card>
      </TabsContent>
    </Tabs>
  );
};
