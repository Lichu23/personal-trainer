"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  label: string;
  title: string;
}

export default function DialogForm({ label, title, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="hover:cursor-pointer text-md p-5" variant="default">
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-bold text-md">{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
