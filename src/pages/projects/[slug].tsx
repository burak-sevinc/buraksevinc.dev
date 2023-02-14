import ProjectFooter from "@/components/projects/project/footer/projectFooter";
import ProjectHeader from "@/components/projects/project/header/projectHeader";
import TechStack from "@/components/projects/project/techstack/techStack";
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
import Image from "next/image";

interface ProjectProps {
  project: {
    source: MDXRemoteSerializeResult;
    frontmatter: IProject;
  };
}

export default function Project({
  project: { source, frontmatter },
}: ProjectProps) {
  return (
    <>
      <Head>
        <title>{frontmatter.seoTitle}</title>
      </Head>
      <div className="space-y-4">
        <ProjectHeader project={frontmatter} />
        <hr />
        <TechStack techStack={frontmatter.techStack} />
        <hr />
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow">
          <Image
            className="object-cover"
            src={frontmatter.coverImg!}
            alt={frontmatter.seoTitle!}
            fill
          />
        </div>
        <div className="prose prose-lg dark:prose-invert">
          <MDXRemote {...source} />
        </div>
        <ProjectFooter githubRepoUrl={frontmatter.githubRepoUrl} />
      </div>
    </>
  );
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  //fetch the particular file based on the slug
  const { slug } = params;
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
}
