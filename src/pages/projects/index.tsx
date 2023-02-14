import { IProject } from "@/types";
import { getAllProjects, getSlug } from "@/utils/mdx";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <div>
      {projects.map((project: IProject) => {
        return (
          <Link key={project.slug} href={`/projects/${project.slug}`} passHref>
            <div>
              <h1 className="title">{project.title}</h1>
              <p className="summary">{project.excerpt}</p>
              <p className="date">
                {dayjs(project.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
                {project.readingTime}
              </p>
            </div>
          </Link>
        );
      })}
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
