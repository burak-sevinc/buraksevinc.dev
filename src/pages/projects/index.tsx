import PageHeader from "@/components/page/pageHeader";
import ProjectCard from "@/components/projects/projectCard";
import { IPageHeader, IProject } from "@/types";
import { getAllProjects } from "@/utils/mdx";
import { GetStaticProps } from "next";
import React from "react";

const header: IPageHeader = {
  title: "Projects",
  description: "You can find some of my latest projects here!",
};

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <PageHeader title={header.title} description={header.description} />
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project: IProject) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
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
