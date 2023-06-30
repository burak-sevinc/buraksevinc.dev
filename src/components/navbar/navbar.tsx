import React from "react";
import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import NavLink from "./navLink";
import { INavLink } from "@/types";
import DropdownMenu from "./dropdownMenu";

export default function Navbar() {
  const links: INavLink[] = [
    {
      name: "about",
      href: "/#about",
      scroll: false,
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "contact",
      href: "/#contact",
      scroll:false
    },
  ];

  return (
    <>
      <div className="sticky top-5 z-10 mx-auto mb-8 hidden md:flex w-full max-w-5xl justify-between border rounded-lg bg-secondary/80 dark:bg-slate-900/70 p-8 shadow-lg backdrop-blur-sm border-slate-300 dark:border-zinc-700">
        <div>
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-900 dark:text-white hover:dark:text-primary"
          >
            <h1 className="font-RobotoMono">buraksevinc.dev</h1>
          </Link>
        </div>
        <div className="flex space-x-4">
          <div className="flex space-x-4">
            {links.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>
          <DarkModeToggle />
        </div>
      </div>
      <div className="sticky top-5 z-10 mx-auto mb-8 flex md:hidden w-full max-w-sm justify-between rounded-lg border border-slate-300 bg-secondary/80  dark:bg-slate-900/70 p-8 shadow-lg backdrop-blur-sm dark:border-zinc-700">
        <div>
          <Link
            href="/"
            className="text-slate-600 hover:text-slate-900 dark:text-white hover:dark:text-primary"
          >
            <h1 className="font-RobotoMono">buraksevinc.dev</h1>
          </Link>
        </div>
        <div className="flex space-x-4">
          <DarkModeToggle />
          <DropdownMenu links={links} />
        </div>
      </div>
    </>
  );
}
