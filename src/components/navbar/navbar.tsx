
import React from "react";
import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";
import NavLink from "./navLink";
import { INavLink } from "@/types";

export default function Navbar() {
  const links: INavLink[] = [
    {
      name: "about",
      href: "/about",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "blog",
      href: "#",
    },
    {
      name: "contact",
      href: "#",
    },
  ];

  return (
    <>
      <div className="sticky top-5 z-10 mx-auto mb-8 hidden md:flex w-full max-w-2xl justify-between rounded-lg border border-slate-300 bg-secondary/80 p-8 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-secondary/80">
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
    </>
  );
}
