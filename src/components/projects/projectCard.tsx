import { IProject } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TechStack from "./project/techstack/techStack";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <div>
      <div className="bg-[#eceef1] dark:bg-secondary rounded-lg overflow-hidden">
        {project.coverImg ? (
          <div className="relative w-full h-80">
            <Link href={`/projects/${project.slug}`} passHref>
              <Image
                className="object-cover transition hover:scale-[1.02]"
                src={project.coverImg!}
                alt={project.title!}
                fill
              />
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="p-4 text-primay flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between">
            <Link href={`/projects/${project.slug}`} passHref>
              <h1 className="text-xl font-extrabold hover:text-primary hover:underline-offset-2 hover:underline">
                {project.title}
              </h1>
            </Link>
            <div className="flex items-start min-w-12 pt-2 md:pt-0">
              <p className="text-xs flex md:justify-end w-24">
                {dayjs(project.publishedAt).format("MMMM D, YYYY")}
              </p>
            </div>
          </div>
          <p className="summary">{project.excerpt}</p>
          <TechStack techStack={project.techStack} />
          <div className="w-fit">
            <Link href={`/projects/${project.slug}`} passHref>
              <div className="font-bold hover:underline-offset-2 hover:underline hover:text-primary">
                Read more
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
