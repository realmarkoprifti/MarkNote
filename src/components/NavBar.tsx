import React from "react";
import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import MobileNavMenu from "./MobileNavMenu";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand className="text-xl font-normal">MarkNote</NavbarBrand>
      <NavbarContent>
        <NavbarItem className="w-full">
          <Input
            type="text"
            placeholder="Search"
            radius="full"
            fullWidth
            className="pt-1"
            startContent={<IoSearch />}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-10 hidden md:flex">
        <NavbarItem>
          <Link
            href={"/"}
            className="p-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={"/settings"}
            className="p-3 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Settings
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex md:hidden">
        <NavbarItem className="w-full flex justify-end">
          <MobileNavMenu />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
