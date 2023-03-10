import PageHeader from "@/components/page/pageHeader";
import SkeletonProjectCard from "@/components/projects/skeletonProjectCard";
import { IPageHeader, IProject } from "@/types";
import { getAllProjects } from "@/utils/mdx";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import React from "react";

const header: IPageHeader = {
  title: "Projects",
  description: "You can find some of my latest projects here!",
};

const ProjectCard = dynamic(() => import("@/components/projects/projectCard"), {
  loading: () => <SkeletonProjectCard />,
  ssr: false,
});

export default function Projects({ projects }: { projects: IProject[] }) {
  return (
    <>
      <NextSeo
        title="Burak Sevinc - Projects"
        description="As a frontend developer with a passion for React and Next.js, I enjoy creating responsive and intuitive user interfaces that bring ideas to life."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://buraksevinc-dev.vercel.app/",
          title: "Burak Sevinç - Frontend Web Developer",
          description:
            "As a frontend developer with a passion for React and Next.js, I enjoy creating responsive and intuitive user interfaces that bring ideas to life.",
          images: [
            {
              url: "https://buraksevinc-dev.vercel.app/img/test-img.jpg",
              width: 800,
              height: 600,
              alt: "Photo of Burak Sevinc",
              type: "image/jpeg",
            },
          ],
          siteName: "Burak Sevinç",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
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
              <ProjectCard key={project.slug} project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
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
