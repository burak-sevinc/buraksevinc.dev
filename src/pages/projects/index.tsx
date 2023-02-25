import PageHeader from "@/components/page/pageHeader";
import SkeletonProjectCard from "@/components/projects/skeletonProjectCard";
import { IPageHeader, IProject } from "@/types";
import { getAllProjects } from "@/utils/mdx";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const header: IPageHeader = {
  title: "Projects",
  description: "You can find some of my latest projects here!",
};

const ProjectCard = dynamic(() => import("@/components/projects/projectCard"), {
  ssr: false,
});

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <PageHeader title={header.title} description={header.description} />
        {projects.length < 1 ? (
          <div className="flex justify-center py-8">
            <p className="text-xs">No projects yet</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project: IProject) => (
          <div key={project.slug}>
            <Suspense fallback={<SkeletonProjectCard />}>
              <ProjectCard key={project.slug} project={project} />
            </Suspense>
          </div>
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
