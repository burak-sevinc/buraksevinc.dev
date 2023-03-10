import React from "react";
import Link from "next/link";
import { socials } from "@/components/socials";

export default function SocialSection() {
  return (
    <div className="flex flex-row justify-center gap-4">
      {socials.map((item, i) => (
        <Link
          href={item.href}
          key={i}
          className="transition hover:scale-150 scale-125"
        >
          <div className="sr-only">{item.description}</div>
          {item.component}
        </Link>
      ))}
    </div>
  );
}
