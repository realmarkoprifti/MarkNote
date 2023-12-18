import { Button } from "@nextui-org/react";
import React from "react";
import { FaNotesMedical } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const EmptyNotes = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 h-screen">
      <span className="text-9xl">
        <FaNotesMedical />
      </span>
      <br />
      <span className="text-lg">Cmon! Go and create a new note!</span>
      <Button startContent={<FaPlus />} color="primary">
        Create Note
      </Button>
    </div>
  );
};

export default EmptyNotes;
