import React from "react";
import Link from "next/link";
import { socials } from "@/components/socials";

export default function SocialSection() {
  return (
    <div className="flex flex-row justify-center gap-2">
      {socials.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className="transition hover:scale-125"
        >
          {item.component}
        </Link>
      ))}
    </div>
  );
}
