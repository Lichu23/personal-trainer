"use client"
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateNewMemberForm from "./components/CreateNewMemberForm/CreateNewMemberForm";

export default function DialogForm() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="hover:cursor-pointer text-xl p-5" variant="default" >
          + Crear Alumno
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-xl">Crear nuevo alumno</DialogTitle>
        </DialogHeader>
        <CreateNewMemberForm />  
      </DialogContent>
    </Dialog>
  );
}
