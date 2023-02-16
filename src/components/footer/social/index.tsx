import Link from "next/link";
import React from "react";
import Email from "./svg/email";
import Github from "./svg/github";
import Instagram from "./svg/instagram";
import LinkedIn from "./svg/linkedin";
import Twitter from "./svg/twitter";

const social = [
  {
    component: <Email />,
    href: "mailto:buraksevinc.dev@gmail.com",
  },
  {
    component: <Github />,
    href: "#",
  },
  {
    component: <Instagram />,
    href: "#",
  },
  {
    component: <LinkedIn />,
    href: "#",
  },
  {
    component: <Twitter />,
    href: "#",
  },
];

export default function SocialSection() {
  return (
    <div className="flex flex-row justify-center gap-2">
      {social.map((item) => (
        <Link href={item.href} key={item.href} className="transition hover:scale-125">
          {item.component}
        </Link>
      ))}
    </div>
  );
}
