"use client";

import React from "react";
import {
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const MobileNavMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="text-lg">
          <FaAngleDown />
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          <Link href={"/"}>Home</Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={"/settings"}>Settings</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MobileNavMenu;
