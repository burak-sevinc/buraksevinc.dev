import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import NavLink from "./navLink";
import { INavLink } from "@/types";
import Link from "next/link";

export default function DropdownMenu({ links }: { links: INavLink[] }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Menu as="div" className="outline-none focus:outline-none">
        <Menu.Button onClick={() => setOpen(!open)}>
          <div className="sr-only">Menu button</div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 transition ${
                open ? "opacity-0 hidden" : "opacity-100"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 transition ${
                !open ? "opacity-0 hidden" : "opacity-100"
              }`}
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          show={open}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="z-10 border-slate-300 rounded-lg border bg-secondary dark:bg-slate-900/90 p-4 dark:border-zinc-500 w-fit absolute right-0 mt-12 ">
            <Menu.Items>
              <div className="flex flex-col gap-4 text-center focus:outline-none outline-none ring-0 focus:ring-0">
                {links.map((link) => (
                  <Menu.Item key={link.name}>
                    <Link
                      scroll={link.scroll!}
                      className="font-Poppins p-4 text-slate-600 dark:text-white hover:text-slate-900 hover:dark:text-primary"
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </>
  );
}
