import Email from "./footer/social/svg/email";
import Github from "./footer/social/svg/github";
import Instagram from "./footer/social/svg/instagram";
import LinkedIn from "./footer/social/svg/linkedin";
import Twitter from "./footer/social/svg/twitter";

export const socials = [
  {
    component: <Email />,
    href: "mailto:info@buraksevinc.dev",
    description: "Sent Email Link"
  },
  {
    component: <Github />,
    href: "https://github.com/burak-sevinc",
    description: "Github Profile Link"
  },
  {
    component: <Instagram />,
    href: "#",
    description: "Instagram Profile Link"
  },
  {
    component: <LinkedIn />,
    href: "https://www.linkedin.com/in/buraksevinc-dev/",
    description: "Linkedin Profile Link"
  },
  {
    component: <Twitter />,
    href: "https://twitter.com/buraksevincdev",
    description: "Twitter Profile Link"
  },
];
