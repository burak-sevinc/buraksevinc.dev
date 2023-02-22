import Image from "next/image";

const skills = [
  {
    src: "./techstack/javascript.svg",
    alt: "Javascript",
  },
  {
    src: "./techstack/typescript-icon.svg",
    alt: "Typescript",
  },
  {
    src: "./techstack/react.svg",
    alt: "React",
  },
  {
    src: "./techstack/nextjs-icon.svg",
    alt: "Next.js",
  },
  {
    src: "./techstack/tailwindcss-icon.svg",
    alt: "Tailwind CSS",
  },
  {
    src: "./techstack/prisma.svg",
    alt: "Prisma",
  },
  {
    src: "./techstack/laravel.svg",
    alt: "Laravel",
  },
  {
    src: "./techstack/mysql.svg",
    alt: "MySQL",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-20">
      <div className="prose dark:prose-invert font-Poppins">
        <h2>Skills and Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {skills.map((item) => (
            <div
              key={item.alt}
              className="flex flex-col gap-4 items-center justify-center transition ease-in-out hover:scale-110"
            >
              <div className="w-12 h-12 relative">
                <Image
                  className="object-fit shadow-md dark:shadow-gray-700 bg-secondary dark:bg-gray-100 p-2 rounded-lg"
                  src={item.src}
                  alt={item.alt}
                  fill
                />
              </div>
              <p>{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
