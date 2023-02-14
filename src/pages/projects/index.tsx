import TechStack from "@/components/projects/project/techstack/techStack";
import { IProject } from "@/types";
import { getAllProjects, getSlug } from "@/utils/mdx";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-5xl tracking-tight">Projects</h1>
          <p className="text-lg tracking-tight">
            You can find some of my latest projects here!
          </p>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project: IProject) => {
          return (
            <div key={project.slug}>
              <div className="bg-[#eceef1] dark:bg-secondary rounded-lg overflow-hidden">
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
                      <div className="font-bold hover:underline-offset-2 hover:underline">Read more</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  projects
    .map((project) => project.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1;
      if (a.data.publishedAt < b.data.publishedAt) return -1;
      return 0;
    });

  return {
    props: {
      projects,
    },
  };
};
