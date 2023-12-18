"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NoteProps {
  children: React.ReactNode;
  href: string;
  title: string;
}

const Note = (props: NoteProps) => {
  const router = useRouter();
  return (
    <Card
      classNames={{
        base: "w-[250px] h-[350px] bg-yellow-300 pb-10 data-[hover=true]:bg-yellow-400",
      }}
      className="shadow-xl hover:scale-105 transition-transform"
      isHoverable
      isPressable
      onPress={() => router.push(props.href)}
    >
      <CardHeader className="justify-between">
        <span className="text-xl font-semibold">{props.title}</span>
      </CardHeader>
      <CardBody className="break-words overflow-y-hidden data-[hover=true]:text-green-500">
        {props.children}
      </CardBody>
    </Card>
  );
};

export default Note;
