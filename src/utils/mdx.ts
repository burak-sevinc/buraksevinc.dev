import path from "path";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { IProject } from "@/types";

const projectsPath = path.join(process.cwd(), "src/data/projects");

export async function getSlug() {
  const paths = sync(`${projectsPath}/*.mdx`);
  return paths.map((path) => {
    // holds the paths to the directory of the project
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getProjectFromSlug(slug: string) {
  const projectDir = path.join(projectsPath, `${slug}.mdx`);
  const source = fs.readFileSync(projectDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      seoTitle: data.seoTitle,
      coverImg: data.coverImg || null,
      techStack: data.techStack || null,
      githubRepoUrl: data.githubRepoUrl || null,
      publishedAt: data.publishedAt,
      readingTime: readingTime(content).text,
      ...data,
    },
  };
}

export async function getAllProjects(): Promise<Array<IProject>> {
  const projects = fs.readdirSync(
    path.join(process.cwd(), "src/data/projects")
  );

  return projects.reduce((allProjects: IProject[], projectSlug: string) => {
    // get parsed data from mdx files in the "projects" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "src/data/projects", projectSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: projectSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allProjects,
    ];
  }, []);
}
