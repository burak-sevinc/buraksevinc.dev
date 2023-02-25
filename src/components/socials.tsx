import Email from "./footer/social/svg/email";
import Github from "./footer/social/svg/github";
import Instagram from "./footer/social/svg/instagram";
import LinkedIn from "./footer/social/svg/linkedin";
import Twitter from "./footer/social/svg/twitter";

export const socials = [
  {
    component: <Email />,
    href: "mailto:buraksevinc.dev@gmail.com",
    description: "Sent Email Link"
  },
  {
    component: <Github />,
    href: "https://github.com/iamBuraks",
    description: "Github Profile Link"
  },
  {
    component: <Instagram />,
    href: "#",
    description: "Instagram Profile Link"
  },
  {
    component: <LinkedIn />,
    href: "https://www.linkedin.com/in/ahmet-burak-sevin%C3%A7-4ba338136/",
    description: "Linkedin Profile Link"
  },
  {
    component: <Twitter />,
    href: "#",
    description: "Twitter Profile Link"
  },
];
