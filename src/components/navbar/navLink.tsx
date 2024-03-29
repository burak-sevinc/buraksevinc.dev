import { INavLink } from "@/types";
import Link from "next/link";
import React from "react";

export default function NavLink({ link }: { link: INavLink }) {
  return (
    <div className="group transition duration-300">
      <Link
        scroll={link.scroll!}
        className="font-Poppins text-slate-600 dark:text-white hover:text-slate-900 hover:dark:text-[#4fa9ff]"
        href={link.href}
      >
        {link.name}
      </Link>
      <span className="block h-0.5 max-w-0 bg-slate-600 dark:bg-[#4fa9ff] transition-all duration-500 group-hover:max-w-full"></span>
    </div>
  );
}
