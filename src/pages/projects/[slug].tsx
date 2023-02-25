import ProjectFooter from "@/components/projects/project/footer/projectFooter";
import { IProject } from "@/types";
import { getProjectFromSlug, getSlug } from "@/utils/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeSlug from "rehype-slug";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ResponsiveImage from "@/components/mdx/responsiveImage";
import Link from "next/link";
import React, { Suspense } from "react";
import SkeletonProjectHeader from "@/components/projects/project/skeleton/skeletonProjectHeader";
import SkeletonTechStack from "@/components/projects/project/skeleton/skeletonTechStack";
import SkeletonProjectImage from "@/components/projects/project/skeleton/skeletonProjectImage";
import dynamic from "next/dynamic";

interface ProjectProps {
  project: {
    source: MDXRemoteSerializeResult;
    frontmatter: IProject;
  };
}

const components = {
  ResponsiveImage,
  Link,
};

const ProjectHeader = dynamic(
  () => import("@/components/projects/project/header/projectHeader"),
  { ssr: false }
);
const TechStack = dynamic(
  () => import("@/components/projects/project/techstack/techStack"),
  { ssr: false }
);

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function Project({
  project: { source, frontmatter },
}: ProjectProps) {
  return (
    <>
      <Head>
        <title>{frontmatter.seoTitle}</title>
      </Head>
      <div className="space-y-4">
        <Suspense fallback={<SkeletonProjectHeader />}>
          <ProjectHeader project={frontmatter} />
        </Suspense>
        <hr />
        <Suspense fallback={<SkeletonTechStack />}>
          <TechStack techStack={frontmatter.techStack} />
        </Suspense>
        <hr />
        {frontmatter.coverImg ? (
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow">
            <Suspense fallback={<SkeletonProjectImage />}>
              <Image
                className="object-cover"
                src={frontmatter.coverImg}
                alt={
                  frontmatter.title
                    ? frontmatter.title
                    : "Burak Sevinç project photo"
                }
                fill
              />
            </Suspense>
          </div>
        ) : (
          ""
        )}
        <div className="prose prose-lg dark:prose-invert">
          <Suspense fallback={<div>Loading...</div>}>
            <MDXRemote {...source} components={components} />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectFooter githubRepoUrl={frontmatter.githubRepoUrl} />
        </Suspense>
      </div>
    </>
  );
}

// dynamically generate the slugs for each project(s)
export async function getStaticPaths() {
  // getting all paths of each project as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  //fetch the particular file based on the slug
  const { slug } = context.params as IParams;
  const { content, frontmatter } = await getProjectFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      project: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
};
