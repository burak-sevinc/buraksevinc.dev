import { IProject } from "@/types";
import { getProjectFromSlug, getSlug } from "@/utils/mdx";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeSlug from "rehype-slug";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ResponsiveImage from "@/components/mdx/responsiveImage";
import Link from "next/link";
import React from "react";
import SkeletonProjectHeader from "@/components/projects/project/skeleton/skeletonProjectHeader";
import SkeletonTechStack from "@/components/projects/project/skeleton/skeletonTechStack";
import SkeletonProjectImage from "@/components/projects/project/skeleton/skeletonProjectImage";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import SkeletonMDX from "@/components/projects/project/skeleton/skeletonMDX";
import SkeletonProjectFooter from "@/components/projects/project/skeleton/skeletonProjectFooter";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    loading: () => <SkeletonMDX />,
    ssr: false,
  }
);

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
  {
    loading: () => <SkeletonProjectHeader />,
    ssr: false,
  }
);
const TechStack = dynamic(
  () => import("@/components/projects/project/techstack/techStack"),
  { loading: () => <SkeletonTechStack />, ssr: false }
);

const Image = dynamic(() => import("next/image"), {
  loading: () => <SkeletonProjectImage />,
  ssr: false,
});

const ProjectFooter = dynamic(
  () => import("@/components/projects/project/footer/projectFooter"),
  {
    loading: () => <SkeletonProjectFooter />,
    ssr: false,
  }
);
export default function Project({
  project: { source, frontmatter },
}: ProjectProps) {
  return (
    <>
      <NextSeo
        title={`${frontmatter.seoTitle} - Burak Sevinc`}
        description={
          frontmatter.excerpt
            ? frontmatter.excerpt
            : `As a frontend developer with a passion for React and Next.js, I enjoy creating responsive and intuitive user interfaces that bring ideas to life.`
        }
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: `https://buraksevinc-dev.vercel.app/${frontmatter.slug}`,
          title: "Burak Sevinç - Frontend Web Developer",
          description: frontmatter.excerpt
            ? frontmatter.excerpt
            : `As a frontend developer with a passion for React and Next.js, I enjoy creating responsive and intuitive user interfaces that bring ideas to life.`,
          images: [
            {
              url: frontmatter.coverImg
                ? frontmatter.coverImg
                : "https://buraksevinc-dev.vercel.app/img/test-img.jpg",
              width: 800,
              height: 600,
              alt: frontmatter.seoTitle,
              type: "image/jpeg",
            },
          ],
          siteName: "Burak Sevinç - Frontend Developer",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="space-y-4">
        <ProjectHeader project={frontmatter} />
        <hr />
        <TechStack techStack={frontmatter.techStack} />
        <hr />
        {frontmatter.coverImg ? (
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow">
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
          </div>
        ) : (
          ""
        )}
        <div className="prose prose-lg dark:prose-invert pt-8">
          <MDXRemote {...source} components={components} />
        </div>
        <ProjectFooter githubRepoUrl={frontmatter.githubRepoUrl} />
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
