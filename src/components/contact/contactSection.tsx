import Link from "next/link";
import { socials } from "../socials";

export default function ContactSection() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {socials.map((item, i) => (
          <Link href={item.href} key={i}>
            <div className="sr-only">{item.description}</div>
            <div className="bg-zinc-200 hover:bg-zinc-400 hover:text-white dark:bg-slate-600 dark:hover:bg-slate-700 shadow hover:scale-110 transition ease-in-out flex items-center justify-center p-8 rounded-lg">
              <div className="scale-150">{item.component}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
